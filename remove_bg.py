import sys
from rembg import remove
from PIL import Image

def main():
    input_path = "public/wali.jpg"
    output_path = "public/wali-nobg.png"
    
    print("Removing background...")
    try:
        with open(input_path, 'rb') as i:
            with open(output_path, 'wb') as o:
                input_data = i.read()
                output_data = remove(input_data)
                o.write(output_data)
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
