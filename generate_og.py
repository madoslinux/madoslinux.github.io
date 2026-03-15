#!/usr/bin/env python3
"""
Generate OG Image for madOS with updated branding
Size: 1200x630 pixels (Open Graph standard)
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image():
    # Image dimensions
    width, height = 1200, 630
    
    # Colors
    bg_dark = (13, 17, 23)  # #0d1117
    bg_mid = (26, 29, 35)   # #1a1d23
    neon_cyan = (93, 216, 238)  # #5dd8ee
    neon_purple = (224, 124, 216)  # #e07cd8
    text_muted = (160, 168, 184)  # #a0a8b8
    text_white = (255, 255, 255)
    
    # Create gradient background
    img = Image.new('RGB', (width, height), bg_dark)
    draw = ImageDraw.Draw(img)
    
    # Create gradient effect
    for y in range(height):
        ratio = y / height
        r = int(bg_dark[0] + (bg_mid[0] - bg_dark[0]) * ratio)
        g = int(bg_dark[1] + (bg_mid[1] - bg_dark[1]) * ratio)
        b = int(bg_dark[2] + (bg_mid[2] - bg_dark[2]) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # Add subtle grid pattern
    for x in range(0, width, 50):
        draw.line([(x, 0), (x, height)], fill=(93, 216, 238, 10), width=1)
    for y in range(0, height, 50):
        draw.line([(0, y), (width, y)], fill=(93, 216, 238, 10), width=1)
    
    # Add radial glow effects
    # Top-right glow (cyan)
    for r in range(300, 0, -5):
        alpha = int(15 * (r / 300))
        draw.ellipse([width-400-r, -100-r, width-400+r, -100+r], 
                    outline=(neon_cyan[0], neon_cyan[1], neon_cyan[2], alpha), width=2)
    
    # Bottom-left glow (purple)
    for r in range(250, 0, -5):
        alpha = int(15 * (r / 250))
        draw.ellipse([-100-r, height-300-r, -100+r, height-300+r], 
                    outline=(neon_purple[0], neon_purple[1], neon_purple[2], alpha), width=2)
    
    # Try to load fonts
    try:
        # Try system fonts
        font_michroma = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)
        font_michroma_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
        font_inter = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
        font_inter_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
        font_mono = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 16)
        font_stats = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 42)
        font_stats_label = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 14)
    except:
        # Fallback to default font
        font_michroma = ImageFont.load_default()
        font_michroma_small = ImageFont.load_default()
        font_inter = ImageFont.load_default()
        font_inter_small = ImageFont.load_default()
        font_mono = ImageFont.load_default()
        font_stats = ImageFont.load_default()
        font_stats_label = ImageFont.load_default()
    
    # Draw border
    border_width = 3
    draw.rectangle([border_width, border_width, width-border_width, height-border_width], 
                   outline=neon_cyan, width=border_width)
    
    # Corner accents
    corner_size = 40
    corner_offset = 20
    # Top-left
    draw.line([(corner_offset, corner_offset), (corner_offset + corner_size, corner_offset)], 
              fill=neon_cyan, width=3)
    draw.line([(corner_offset, corner_offset), (corner_offset, corner_offset + corner_size)], 
              fill=neon_cyan, width=3)
    # Top-right
    draw.line([(width - corner_offset - corner_size, corner_offset), (width - corner_offset, corner_offset)], 
              fill=neon_cyan, width=3)
    draw.line([(width - corner_offset, corner_offset), (width - corner_offset, corner_offset + corner_size)], 
              fill=neon_cyan, width=3)
    # Bottom-left
    draw.line([(corner_offset, height - corner_offset), (corner_offset + corner_size, height - corner_offset)], 
              fill=neon_cyan, width=3)
    draw.line([(corner_offset, height - corner_offset - corner_size), (corner_offset, height - corner_offset)], 
              fill=neon_cyan, width=3)
    # Bottom-right
    draw.line([(width - corner_offset - corner_size, height - corner_offset), (width - corner_offset, height - corner_offset)], 
              fill=neon_cyan, width=3)
    draw.line([(width - corner_offset, height - corner_offset - corner_size), (width - corner_offset, height - corner_offset)], 
              fill=neon_cyan, width=3)
    
    # Left section content
    left_margin = 80
    top_margin = 80
    
    # Badge
    badge_text = "Powered by Ollama and OpenCode"
    badge_padding = 20
    bbox = draw.textbbox((0, 0), badge_text, font=font_michroma_small)
    badge_width = bbox[2] - bbox[0] + badge_padding * 2
    badge_height = bbox[3] - bbox[1] + 15
    
    # Draw badge background
    draw.rounded_rectangle([left_margin, top_margin, left_margin + badge_width, top_margin + badge_height], 
                          radius=100, fill=(93, 216, 238, 25), outline=neon_cyan, width=1)
    draw.text((left_margin + badge_padding, top_margin + 7), badge_text, font=font_michroma_small, fill=neon_cyan)
    
    # Load and draw logo
    try:
        logo = Image.open('mados-logo.png')
        # Resize logo to fit nicely
        logo_width = 350
        aspect_ratio = logo.height / logo.width
        logo_height = int(logo_width * aspect_ratio)
        logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
        
        # Paste logo
        logo_y = int(top_margin + badge_height + 30)
        img.paste(logo, (left_margin, logo_y), logo if logo.mode == 'RGBA' else None)
        
        current_y = logo_y + logo_height + 30
    except Exception as e:
        print(f"Could not load logo: {e}")
        current_y = top_margin + badge_height + 50
    
    # Tagline
    tagline = "AI-Orchestrated Arch Linux"
    draw.text((left_margin, current_y), tagline, font=font_michroma, fill=neon_purple)
    current_y += 70
    
    # Description
    description = "Nordic cyberpunk distribution optimized for"
    draw.text((left_margin, current_y), description, font=font_inter, fill=text_muted)
    current_y += 40
    description2 = "low-RAM systems with local AI integration"
    draw.text((left_margin, current_y), description2, font=font_inter, fill=text_muted)
    
    # Right section - Terminal window
    terminal_x = 680
    terminal_y = 120
    terminal_width = 440
    terminal_height = 200
    
    # Terminal background
    draw.rounded_rectangle([terminal_x, terminal_y, terminal_x + terminal_width, terminal_y + terminal_height], 
                          radius=12, fill=(13, 17, 23, 230), outline=neon_cyan, width=1)
    
    # Terminal header dots
    dot_radius = 6
    dot_y = terminal_y + 20
    dot_colors = [(255, 95, 86), (255, 189, 46), (39, 201, 63)]
    for i, color in enumerate(dot_colors):
        dot_x = terminal_x + 25 + i * 20
        draw.ellipse([dot_x - dot_radius, dot_y - dot_radius, 
                     dot_x + dot_radius, dot_y + dot_radius], fill=color)
    
    # Terminal content
    content_y = terminal_y + 55
    content_x = terminal_x + 25
    
    # $ prompt
    draw.text((content_x, content_y), "$", font=font_mono, fill=neon_cyan)
    draw.text((content_x + 20, content_y), "sudo install-mados", font=font_mono, fill=neon_purple)
    content_y += 30
    
    draw.text((content_x + 20, content_y), "Detecting environment...", font=font_mono, fill=text_muted)
    content_y += 30
    
    draw.text((content_x + 20, content_y), "AI optimization enabled", font=font_mono, fill=text_muted)
    content_y += 30
    
    draw.text((content_x + 20, content_y), "Ready to install!", font=font_mono, fill=(63, 185, 80))
    
    # Stats section
    stats_y = terminal_y + terminal_height + 60
    stats = [
        ("300MB", "RAM Usage"),
        ("1.9GB", "Min RAM"),
        ("100%", "Open Source")
    ]
    
    stat_spacing = 140
    start_x = terminal_x + 20
    
    for i, (value, label) in enumerate(stats):
        x = start_x + i * stat_spacing
        
        # Draw separator line (except for first)
        if i > 0:
            draw.line([(x - 20, stats_y - 10), (x - 20, stats_y + 50)], 
                     fill=(93, 216, 238, 50), width=1)
        
        # Stat value
        draw.text((x, stats_y), value, font=font_stats, fill=neon_cyan)
        
        # Stat label
        label_y = stats_y + 50
        draw.text((x, label_y), label, font=font_stats_label, fill=text_muted)
    
    # Save image
    img.save('og-image.png', 'PNG', quality=95)
    print("✓ OG Image generated: og-image.png (1200x630)")

if __name__ == "__main__":
    create_og_image()