"""
Professional 3D STL Product Renderer for Etsy/Amazon Listings
Renders 10 woodcraft products with professional lighting and styling
Optimized for exact 2000x2000 pixel output
"""

import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import art3d
from stl import mesh
import os
from PIL import Image
import tempfile
import shutil

# Product configuration
PRODUCTS = {
    'desk-organizer': '#F5F5F0',  # Matte White
    'spice-rack-clip': '#B2BFA8',  # Sage Green
    'cable-clip-3slot': '#2D2D2D',  # Matte Black
    'drawer-divider': '#B0A89A',  # Warm Gray
    'remote-caddy': '#5B8FA8',  # Ocean Blue
    'headphone-stand': '#2D2D2D',  # Matte Black
    'entryway-tray': '#F5F5F0',  # Matte White
    'bathroom-organizer': '#B2BFA8',  # Sage Green
    'utensil-rest': '#B0A89A',  # Warm Gray
    'monitor-riser': '#2D2D2D',  # Matte Black
}

STL_DIR = '/sessions/blissful-gallant-clarke/mnt/claude-os/products/stl/'
OUTPUT_DIR = '/sessions/blissful-gallant-clarke/mnt/claude-os/products/images/'

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple (0-1 range)"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) / 255.0 for i in (0, 2, 4))

def calculate_lighting(normals, light_direction):
    """Calculate intensity based on normal direction relative to light"""
    norm_length = np.linalg.norm(normals, axis=1, keepdims=True)
    norm_length[norm_length == 0] = 1
    normalized_normals = normals / norm_length
    
    light_dir = light_direction / np.linalg.norm(light_direction)
    intensities = np.dot(normalized_normals, light_dir)
    
    ambient = 0.3
    intensities = np.clip(intensities, 0, 1) * 0.7 + ambient
    return intensities

def render_product(filename, color_hex, output_path):
    """Render a single STL file as a professional product image"""
    stl_path = os.path.join(STL_DIR, filename)
    print(f"Loading {filename}...", end=" ", flush=True)
    
    try:
        mesh_obj = mesh.Mesh.from_file(stl_path)
    except Exception as e:
        print(f"ERROR: {e}")
        return False
    
    with tempfile.TemporaryDirectory() as tmpdir:
        # Create temporary figure
        fig = plt.figure(figsize=(13.333, 13.333), dpi=150)
        ax = fig.add_subplot(111, projection='3d')
        
        fig.patch.set_facecolor('#FAFAF8')
        ax.set_facecolor('#FAFAF8')
        
        # Create mesh collection
        mesh_collection = art3d.Poly3DCollection(mesh_obj.vectors)
        
        # Calculate lighting
        light_direction = np.array([1.0, 1.0, 2.0])
        intensities = calculate_lighting(mesh_obj.normals, light_direction)
        
        # Convert base color to RGB
        base_rgb = hex_to_rgb(color_hex)
        
        # Create face colors with lighting variation
        face_colors = []
        for intensity in intensities:
            adjusted_color = tuple(
                min(1.0, c * intensity + (1 - c) * (1 - intensity * 0.5))
                for c in base_rgb
            )
            face_colors.append(adjusted_color)
        
        mesh_collection.set_facecolor(face_colors)
        mesh_collection.set_edgecolor('none')
        ax.add_collection3d(mesh_collection)
        
        # Set viewing angle
        ax.view_init(elev=25, azim=45)
        
        # Auto-scale
        max_range = np.array([
            mesh_obj.x.max() - mesh_obj.x.min(),
            mesh_obj.y.max() - mesh_obj.y.min(),
            mesh_obj.z.max() - mesh_obj.z.min()
        ]).max() / 2.0
        
        mid_x = (mesh_obj.x.max() + mesh_obj.x.min()) * 0.5
        mid_y = (mesh_obj.y.max() + mesh_obj.y.min()) * 0.5
        mid_z = (mesh_obj.z.max() + mesh_obj.z.min()) * 0.5
        
        ax.set_xlim(mid_x - max_range, mid_x + max_range)
        ax.set_ylim(mid_y - max_range, mid_y + max_range)
        ax.set_zlim(mid_z - max_range, mid_z + max_range)
        
        # Remove axes
        ax.set_xticks([])
        ax.set_yticks([])
        ax.set_zticks([])
        ax.grid(False)
        ax.xaxis.pane.fill = False
        ax.yaxis.pane.fill = False
        ax.zaxis.pane.fill = False
        ax.xaxis.pane.set_edgecolor('none')
        ax.yaxis.pane.set_edgecolor('none')
        ax.zaxis.pane.set_edgecolor('none')
        
        # Save temp figure
        temp_path = os.path.join(tmpdir, 'temp.png')
        try:
            plt.savefig(temp_path, dpi=150, bbox_inches='tight', 
                       facecolor='#FAFAF8', edgecolor='none', pad_inches=0.05)
            plt.close(fig)
            
            # Post-process: pad to 2000x2000
            img = Image.open(temp_path)
            canvas = Image.new('RGB', (2000, 2000), color='#FAFAF8')
            
            x_offset = (2000 - img.width) // 2
            y_offset = (2000 - img.height) // 2
            canvas.paste(img, (x_offset, y_offset))
            
            # Save final image
            canvas.save(output_path, quality=95, optimize=False)
            
            file_size = os.path.getsize(output_path) / 1024
            print(f"✓ Saved ({file_size:.1f} KB)")
            return True
        except Exception as e:
            print(f"ERROR: {e}")
            plt.close(fig)
            return False

def create_catalog_grid():
    """Create a 5x2 grid composite image of all products"""
    print("\nCreating catalog grid...")
    
    images = []
    for filename in PRODUCTS.keys():
        img_path = os.path.join(OUTPUT_DIR, f"{filename}.png")
        if os.path.exists(img_path):
            try:
                img = Image.open(img_path).convert('RGB')
                img.thumbnail((400, 400), Image.Resampling.LANCZOS)
                images.append(img)
            except Exception as e:
                print(f"Warning: {img_path}: {e}")
    
    # Create 5x2 grid
    canvas = Image.new('RGB', (2000, 800), color='#FAFAF8')
    
    for idx, img in enumerate(images):
        col = idx % 5
        row = idx // 5
        x = col * 400 + (400 - img.width) // 2
        y = row * 400 + (400 - img.height) // 2
        canvas.paste(img, (x, y))
    
    grid_path = os.path.join(OUTPUT_DIR, 'catalog-grid.png')
    canvas.save(grid_path, quality=95, optimize=False)
    grid_size = os.path.getsize(grid_path) / 1024
    print(f"✓ Catalog grid saved ({grid_size:.1f} KB)")

def main():
    print("=" * 70)
    print("Professional 3D Product Renderer - Bespoke Woodcraft Studio")
    print("=" * 70)
    
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    successful = 0
    failed = 0
    
    print(f"\nRendering {len(PRODUCTS)} products...\n")
    
    for filename, color_hex in PRODUCTS.items():
        output_path = os.path.join(OUTPUT_DIR, f"{filename}.png")
        if render_product(f"{filename}.stl", color_hex, output_path):
            successful += 1
        else:
            failed += 1
    
    print("\n" + "=" * 70)
    print(f"Render Summary: {successful} successful, {failed} failed")
    print("=" * 70)
    
    # List all generated images
    print("\nGenerated Images:")
    for filename in sorted(os.listdir(OUTPUT_DIR)):
        if filename.endswith('.png'):
            filepath = os.path.join(OUTPUT_DIR, filename)
            try:
                img = Image.open(filepath)
                size_kb = os.path.getsize(filepath) / 1024
                if filename != 'catalog-grid.png':
                    print(f"  {filename:<35} {img.width}x{img.height} ({size_kb:>6.1f} KB)")
            except:
                pass
    
    if successful >= 8:
        create_catalog_grid()
    
    print("\n✓ Rendering complete!")
    print(f"Images saved to: {OUTPUT_DIR}")

if __name__ == '__main__':
    main()
