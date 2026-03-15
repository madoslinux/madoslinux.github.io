#!/usr/bin/env python3
"""
Generate OG Image for madOS - Two column layout
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
    
    # Load fonts - smaller sizes
    if font_path and os.path.exists(font_path):
        font_badge = ImageFont.truetype(font_path, 16)
        font_tagline = ImageFont.truetype(font_path, 32)
        font_stats = ImageFont.truetype(font_path, 36)
    else:
        font_badge = ImageFont.load_default()
        font_tagline = ImageFont.load_default()
        font_stats = ImageFont.load_default()
    
    font_label = ImageFont.load_default()
    
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
        logo = logo.resize((280, int(280 * logo.height / logo.width)), Image.Resampling.LANCZOS)
        logo_x = 120
        logo_y = (height - logo.height) // 2
        img.paste(logo, (logo_x, logo_y), logo if logo.mode == 'RGBA' else None)
    except:
        pass
    
    # Right column - Content
    content_x = 520
    content_y = 180
    
    # Badge
    badge_text = "POWERED BY OLLAMA AND OPENCODE"
    draw.text((content_x, content_y), badge_text, font=font_badge, fill=cyan)
    content_y += 50
    
    # Tagline
    tagline_text = "AI-Orchestrated Arch Linux"
    draw.text((content_x, content_y), tagline_text, font=font_tagline, fill=purple)
    content_y += 100
    
    # Stats - horizontal
    stats = [("300MB", "RAM Usage"), ("1.9GB", "Min RAM"), ("100%", "Open Source")]
    stat_spacing = 160
    
    for i, (val, lbl) in enumerate(stats):
        x = content_x + i * stat_spacing
        
        # Value
        draw.text((x, content_y), val, font=font_stats, fill=cyan)
        
        # Label
        draw.text((x, content_y + 45), lbl, font=font_label, fill=gray)
    
    # Border
    draw.rectangle([10, 10, width-10, height-10], outline=cyan, width=3)
    
    img.save('og-image.png', 'PNG', quality=95)
    print("✓ OG Image generated!")

if __name__ == "__main__":
    create_og_image()