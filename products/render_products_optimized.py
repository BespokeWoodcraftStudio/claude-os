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
from pathlib import Path
from PIL import Image

# Product configuration
PRODUCTS = {
    'desk-organizer': {
        'color': '#F5F5F0',  # Matte White
        'name': 'Desk Organizer'
    },
    'spice-rack-clip': {
        'color': '#B2BFA8',  # Sage Green
        'name': 'Spice Rack Clip'
    },
    'cable-clip-3slot': {
        'color': '#2D2D2D',  # Matte Black
        'name': 'Cable Clip 3-Slot'
    },
    'drawer-divider': {
        'color': '#B0A89A',  # Warm Gray
        'name': 'Drawer Divider'
    },
    'remote-caddy': {
        'color': '#5B8FA8',  # Ocean Blue
        'name': 'Remote Caddy'
    },
    'headphone-stand': {
        'color': '#2D2D2D',  # Matte Black
        'name': 'Headphone Stand'
    },
    'entryway-tray': {
        'color': '#F5F5F0',  # Matte White
        'name': 'Entryway Tray'
    },
    'bathroom-organizer': {
        'color': '#B2BFA8',  # Sage Green
        'name': 'Bathroom Organizer'
    },
    'utensil-rest': {
        'color': '#B0A89A',  # Warm Gray
        'name': 'Utensil Rest'
    },
    'monitor-riser': {
        'color': '#2D2D2D',  # Matte Black
        'name': 'Monitor Riser'
    }
}

STL_DIR = '/sessions/blissful-gallant-clarke/mnt/claude-os/products/stl/'
OUTPUT_DIR = '/sessions/blissful-gallant-clarke/mnt/claude-os/products/images-2000/'

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple (0-1 range)"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) / 255.0 for i in (0, 2, 4))

def calculate_lighting(normals, light_direction):
    """Calculate intensity based on normal direction relative to light"""
    # Normalize normals and light direction
    norm_length = np.linalg.norm(normals, axis=1, keepdims=True)
    norm_length[norm_length == 0] = 1  # Avoid division by zero
    normalized_normals = normals / norm_length
    
    light_dir = light_direction / np.linalg.norm(light_direction)
    
    # Calculate dot product (intensity)
    intensities = np.dot(normalized_normals, light_dir)
    
    # Clamp to 0-1 and add ambient lighting
    ambient = 0.3
    intensities = np.clip(intensities, 0, 1) * 0.7 + ambient
    
    return intensities

def render_product(filename, color_hex, output_path):
    """Render a single STL file as a professional product image"""
    
    # Load STL mesh
    stl_path = os.path.join(STL_DIR, filename)
    print(f"Loading {filename}...", end=" ", flush=True)
    
    try:
        mesh_obj = mesh.Mesh.from_file(stl_path)
    except Exception as e:
        print(f"ERROR: Failed to load {filename}: {e}")
        return False
    
    # Create temporary high-res figure
    # 2000px / 150 DPI = 13.333 inches
    fig = plt.figure(figsize=(13.333, 13.333), dpi=150)
    ax = fig.add_subplot(111, projection='3d')
    
    # Set background to light gray
    fig.patch.set_facecolor('#FAFAF8')
    ax.set_facecolor('#FAFAF8')
    
    # Create mesh collection
    mesh_collection = art3d.Poly3DCollection(mesh_obj.vectors)
    
    # Calculate lighting
    light_direction = np.array([1.0, 1.0, 2.0])  # Upper right, slightly back
    intensities = calculate_lighting(mesh_obj.normals, light_direction)
    
    # Convert base color to RGB
    base_rgb = hex_to_rgb(color_hex)
    
    # Create face colors with lighting variation
    face_colors = []
    for intensity in intensities:
        # Apply intensity to create shading
        adjusted_color = tuple(
            min(1.0, c * intensity + (1 - c) * (1 - intensity * 0.5))
            for c in base_rgb
        )
        face_colors.append(adjusted_color)
    
    mesh_collection.set_facecolor(face_colors)
    mesh_collection.set_edgecolor('none')
    
    # Add mesh to axes
    ax.add_collection3d(mesh_collection)
    
    # Set viewing angle (3/4 view: elevated, rotated)
    ax.view_init(elev=25, azim=45)
    
    # Auto-scale to fit data
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
    
    # Remove axes, grid, and labels for clean product shot
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
    
    # Save temporary figure with tight layout
    temp_path = output_path.replace('.png', '_temp.png')
    try:
        plt.savefig(temp_path, dpi=150, bbox_inches='tight', 
                   facecolor='#FAFAF8', edgecolor='none', pad_inches=0.05)
        plt.close(fig)
        
        # Post-process: pad to 2000x2000
        img = Image.open(temp_path)
        
        # Create 2000x2000 canvas with light gray background
        canvas = Image.new('RGB', (2000, 2000), color='#FAFAF8')
        
        # Center the image
        x_offset = (2000 - img.width) // 2
        y_offset = (2000 - img.height) // 2
        canvas.paste(img, (x_offset, y_offset))
        
        # Save final image
        canvas.save(output_path, quality=95, optimize=False)
        os.remove(temp_path)
        
        # Check file size
        file_size = os.path.getsize(output_path) / 1024  # KB
        print(f"✓ Saved ({file_size:.1f} KB)")
        return True
    except Exception as e:
        print(f"ERROR: Failed to save {output_path}: {e}")
        if os.path.exists(temp_path):
            os.remove(temp_path)
        return False

def create_catalog_grid():
    """Create a 2x5 grid composite image of all products"""
    print("\nCreating catalog grid...")
    
    images = []
    filenames = list(PRODUCTS.keys())
    
    # Load all rendered images
    for filename in filenames:
        img_path = os.path.join(OUTPUT_DIR, f"{filename}.png")
        if os.path.exists(img_path):
            try:
                img = Image.open(img_path).convert('RGB')
                # Resize to consistent size for grid (400x400 per cell)
                img.thumbnail((400, 400), Image.Resampling.LANCZOS)
                images.append(img)
            except Exception as e:
                print(f"Warning: Could not load {img_path}: {e}")
    
    if len(images) < 10:
        print(f"Warning: Only {len(images)} images found, expected 10")
    
    # Create 5x2 grid (5 wide, 2 tall)
    grid_width = 5
    grid_height = 2
    cell_size = 400
    
    # Create blank canvas
    canvas = Image.new('RGB', 
                      (grid_width * cell_size, grid_height * cell_size),
                      color='#FAFAF8')
    
    # Paste images in order
    for idx, img in enumerate(images):
        row = idx // grid_width
        col = idx % grid_width
        x = col * cell_size + (cell_size - img.width) // 2
        y = row * cell_size + (cell_size - img.height) // 2
        canvas.paste(img, (x, y))
    
    grid_path = os.path.join(OUTPUT_DIR, 'catalog-grid.png')
    canvas.save(grid_path, quality=95, optimize=False)
    grid_size = os.path.getsize(grid_path) / 1024
    print(f"✓ Catalog grid created ({grid_size:.1f} KB): {grid_path}")

def main():
    """Main rendering pipeline"""
    print("=" * 70)
    print("Professional 3D Product Renderer - Bespoke Woodcraft Studio")
    print("=" * 70)
    
    # Verify output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Render each product
    successful = 0
    failed = 0
    
    print(f"\nRendering {len(PRODUCTS)} products to 2000x2000 PNG...\n")
    
    for filename, config in PRODUCTS.items():
        output_path = os.path.join(OUTPUT_DIR, f"{filename}.png")
        if render_product(f"{filename}.stl", config['color'], output_path):
            successful += 1
        else:
            failed += 1
    
    # Summary
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
                print(f"  {filename:<35} {img.width}x{img.height} ({size_kb:>6.1f} KB)")
            except:
                pass
    
    # Create catalog grid
    if successful >= 8:  # Only if most rendered successfully
        create_catalog_grid()
    
    print("\n✓ Rendering complete!")
    print(f"Images saved to: {OUTPUT_DIR}")

if __name__ == '__main__':
    main()
