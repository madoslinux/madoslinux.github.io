#!/usr/bin/env python3
"""
Generate OG Image for madOS - Two column layout with description
Logo on left, content on right
"""

from PIL import Image, ImageDraw, ImageFont
import urllib.request
import os

def create_og_image():
    width, height = 1200, 630
    
    # Download Michroma font
    font_url = 'https://github.com/google/fonts/raw/main/ofl/michroma/Michroma-Regular.ttf'
    font_path = '/tmp/Michroma-Regular.ttf'
    
    if not os.path.exists(font_path):
        try:
            urllib.request.urlretrieve(font_url, font_path)
        except:
            font_path = None
    
    # Load fonts
    if font_path and os.path.exists(font_path):
        font_badge = ImageFont.truetype(font_path, 16)
        font_tagline = ImageFont.truetype(font_path, 32)
        font_desc = ImageFont.truetype(font_path, 18)
    else:
        font_badge = ImageFont.load_default()
        font_tagline = ImageFont.load_default()
        font_desc = ImageFont.load_default()
    
    # Colors
    bg = (15, 17, 23)
    cyan = (93, 216, 238)
    purple = (224, 124, 216)
    gray = (160, 168, 184)
    
    # Create image
    img = Image.new('RGB', (width, height), bg)
    draw = ImageDraw.Draw(img)
    
    # === TWO COLUMN LAYOUT ===
    
    # Left column - Logo
    try:
        logo = Image.open('mados-logo.png')
        logo = logo.resize((300, int(300 * logo.height / logo.width)), Image.Resampling.LANCZOS)
        logo_x = 100
        logo_y = (height - logo.height) // 2
        img.paste(logo, (logo_x, logo_y), logo if logo.mode == 'RGBA' else None)
    except:
        pass
    
    # Right column - Content
    content_x = 480
    content_y = 160
    
    # Badge
    badge_text = "POWERED BY OLLAMA AND OPENCODE"
    draw.text((content_x, content_y), badge_text, font=font_badge, fill=cyan)
    content_y += 50
    
    # Tagline
    tagline_text = "AI-Orchestrated Arch Linux"
    draw.text((content_x, content_y), tagline_text, font=font_tagline, fill=purple)
    content_y += 70
    
    # Description - multi-line
    desc_lines = [
        "Nordic cyberpunk distribution with",
        "integrated local AI. Optimized for",
        "low-RAM systems with Sway/Hyprland",
        "and 300MB memory footprint."
    ]
    
    for line in desc_lines:
        draw.text((content_x, content_y), line, font=font_desc, fill=gray)
        content_y += 32
    
    # Border
    draw.rectangle([10, 10, width-10, height-10], outline=cyan, width=3)
    
    img.save('og-image.png', 'PNG', quality=95)
    print("✓ OG Image generated!")

if __name__ == "__main__":
    create_og_image()