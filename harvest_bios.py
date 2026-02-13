import os
import json
import unicodedata
import re

def normalize_name(name):
    # This should match the JS normalizeName exactly
    nfkd_form = unicodedata.normalize('NFKD', name)
    only_ascii = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    clean = re.sub(r'[^a-zA-Z0-9 ]', '', only_ascii)
    return clean.replace(' ', '_')

info_dir = 'info'
bios = {}

if os.path.exists(info_dir):
    for filename in os.listdir(info_dir):
        if filename.endswith('.txt'):
            key = filename[:-4] # Remove .txt
            path = os.path.join(info_dir, filename)
            try:
                # Read with utf-8-sig to handle potential BOM from Windows editors
                with open(path, 'r', encoding='utf-8-sig') as f:
                    content = f.read().strip()
                    bios[key] = content
            except Exception as e:
                print(f"Error reading {filename}: {e}")

js_content = f"const BIO_DATA = {json.dumps(bios, indent=4, ensure_ascii=False)};"

with open('bios.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated bios.js with {len(bios)} entries.")
