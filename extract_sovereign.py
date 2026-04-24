import fitz # PyMuPDF
import sys

def extract_text(pdf_path):
    doc = fitz.open(pdf_path)
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text()
        print(f"--- Slide {page_num + 1} ---")
        print(text)

extract_text("/Users/WFH_Wing/Downloads/Sovereign_AI_Blueprint (1).pdf")
