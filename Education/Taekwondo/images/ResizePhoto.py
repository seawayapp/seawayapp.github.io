from PIL import Image
import os

def resize_images_to_width(input_directory, output_directory, new_width=100):
    """
    Resize all images in the input directory to a fixed width, maintaining aspect ratio,
    and save them to the output directory with '_small' added to the filename.

    :param input_directory: Path to the directory containing original images
    :param output_directory: Path to the directory to save resized images
    :param new_width: Desired width of the resized images
    """
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for filename in os.listdir(input_directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            input_path = os.path.join(input_directory, filename)
            output_filename = f"{os.path.splitext(filename)[0]}_small{os.path.splitext(filename)[1]}"
            output_path = os.path.join(output_directory, output_filename)

            try:
                with Image.open(input_path) as img:
                    # Calculate new height to maintain aspect ratio
                    aspect_ratio = img.height / img.width
                    new_height = int(new_width * aspect_ratio)
                    resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                    resized_img.save(output_path)
                    print(f"Resized and saved: {output_path}")
            except Exception as e:
                print(f"Failed to process {filename}: {e}")

# Example usage
resize_images_to_width('Taegeuk_5', 'Taegeuk_5', new_width=100)
