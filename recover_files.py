import re
import os

log_file = "/Users/WFH_Wing/.gemini/antigravity/brain/b58f4caa-4d04-4e3c-a7fc-6bf273e37b2b/.system_generated/logs/overview.txt"
current_log = "/Users/WFH_Wing/.gemini/antigravity/brain/03bc2637-0a8f-4bad-9c6e-c62429034148/.system_generated/logs/overview.txt"

# Search for write_to_file tool calls in the logs and reconstruct files
import json

def recover_from_log(log_path):
    if not os.path.exists(log_path): return
    with open(log_path, 'r') as f:
        for line in f:
            try:
                data = json.loads(line)
                if 'tool_calls' in data:
                    for call in data['tool_calls']:
                        if call['name'] == 'write_to_file':
                            args = call['args']
                            if 'TargetFile' in args and 'CodeContent' in args:
                                target = args['TargetFile'].strip('"')
                                content = args['CodeContent'].strip('"').encode('utf-8').decode('unicode_escape')
                                if "/src/components/" in target or "/src/App." in target or "/src/index.css" in target:
                                    os.makedirs(os.path.dirname(target), exist_ok=True)
                                    with open(target, 'w') as out:
                                        out.write(content)
                                    print(f"Recovered {target}")
            except Exception as e:
                pass

recover_from_log(log_file)
recover_from_log(current_log)

