import json
import os

log_files = [
    "/Users/WFH_Wing/.gemini/antigravity/brain/b58f4caa-4d04-4e3c-a7fc-6bf273e37b2b/.system_generated/logs/overview.txt",
    "/Users/WFH_Wing/.gemini/antigravity/brain/03bc2637-0a8f-4bad-9c6e-c62429034148/.system_generated/logs/overview.txt"
]

cutoff_time = "2026-04-23T22:50:00Z"

for log_path in log_files:
    if not os.path.exists(log_path): continue
    with open(log_path, 'r') as f:
        for line in f:
            try:
                data = json.loads(line)
                created_at = data.get('created_at', '')
                if created_at > cutoff_time and 'b58f4caa' not in log_path:
                    # Ignore tool calls after the cutoff in the current conversation
                    continue
                    
                if 'tool_calls' in data:
                    for call in data['tool_calls']:
                        if call['name'] == 'write_to_file':
                            args = call['args']
                            if 'TargetFile' in args and 'CodeContent' in args:
                                target = args['TargetFile'].strip('"')
                                content = args['CodeContent'].strip('"').encode('utf-8').decode('unicode_escape')
                                if "/src/" in target:
                                    os.makedirs(os.path.dirname(target), exist_ok=True)
                                    with open(target, 'w') as out:
                                        out.write(content)
                                    print(f"Recovered {target} at {created_at}")
                        elif call['name'] == 'multi_replace_file_content':
                             args = call['args']
                             if 'TargetFile' in args and 'ReplacementChunks' in args:
                                 target = args['TargetFile'].strip('"')
                                 if not os.path.exists(target): continue
                                 with open(target, 'r') as tf:
                                     file_content = tf.read().splitlines()
                                 # Very basic patch application:
                                 import ast
                                 chunks = ast.literal_eval(args['ReplacementChunks']) if isinstance(args['ReplacementChunks'], str) else args['ReplacementChunks']
                                 # We need to apply chunks from bottom to top to avoid line number shifting
                                 chunks.sort(key=lambda x: x['StartLine'], reverse=True)
                                 for chunk in chunks:
                                     start = int(chunk['StartLine']) - 1
                                     end = int(chunk['EndLine'])
                                     repl = chunk['ReplacementContent'].splitlines()
                                     file_content[start:end] = repl
                                 with open(target, 'w') as tf:
                                     tf.write('\n'.join(file_content))
                                 print(f"Applied replacement to {target} at {created_at}")

            except Exception as e:
                pass

