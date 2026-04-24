import fitz # PyMuPDF
import os

pdf_files = [
    "/Users/WFH_Wing/Downloads/Sovereign_Infrastructure_Blueprint.pdf",
    "/Users/WFH_Wing/Downloads/KBGH_Investor_Prospectus.pdf",
    "/Users/WFH_Wing/Downloads/GSC Deck 2026.pdf"
]

out_dir = "/Users/WFH_Wing/Downloads/Sovereign_AI_Website/public/deck_images"
os.makedirs(out_dir, exist_ok=True)

for pdf_path in pdf_files:
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
    
    print(f"Extracting from {os.path.basename(pdf_path)}...")
    doc = fitz.open(pdf_path)
    for i in range(len(doc)):
        page = doc[i]
        image_list = page.get_images()
        for image_index, img in enumerate(page.get_images(), start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_name = f"{os.path.basename(pdf_path).split('.')[0]}_p{i+1}_img{image_index}.{image_ext}"
            with open(os.path.join(out_dir, image_name), "wb") as f:
                f.write(image_bytes)
            print(f"Saved {image_name}")

