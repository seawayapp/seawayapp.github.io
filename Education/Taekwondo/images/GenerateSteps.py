import os
import re

# Specify the folder path
folder_path = './Taegeuk_8'

# List all file names in the folder
file_names = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

sorted_file_names = sorted(file_names, key=lambda x: int(re.search(r'Step_(\d+)', x).group(1)))

#print(sorted_file_names)
# print(file_names)

# Generate the steps array
steps = [
    {
        "step": re.search(r'Step_(.*)\.png', file_name).group(1),
        "description_en": "",
        "description_cn": "",
        "image": file_name
    }
    for file_name in sorted_file_names
]

print(steps)
