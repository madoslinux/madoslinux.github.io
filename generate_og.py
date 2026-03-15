#!/usr/bin/env python3
"""
Generate OG Image for madOS using Google Fonts
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
        font_badge = ImageFont.truetype(font_path, 22)
        font_title = ImageFont.truetype(font_path, 50)
        font_stats = ImageFont.truetype(font_path, 52)
    else:
        font_badge = ImageFont.load_default()
        font_title = ImageFont.load_default()
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
    
    # === CENTERED LAYOUT ===
    
    # Logo - center
    try:
        logo = Image.open('mados-logo.png')
        logo = logo.resize((320, int(320 * logo.height / logo.width)), Image.Resampling.LANCZOS)
        logo_x = (width - logo.width) // 2
        logo_y = 60
        img.paste(logo, (logo_x, logo_y), logo if logo.mode == 'RGBA' else None)
    except:
        pass
    
    # Badge - centered
    badge_text = "POWERED BY OLLAMA AND OPENCODE"
    bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
    badge_w = bbox[2] - bbox[0]
    badge_x = (width - badge_w) // 2
    draw.text((badge_x, 250), badge_text, font=font_badge, fill=cyan)
    
    # Tagline - centered
    tagline_text = "AI-Orchestrated Arch Linux"
    bbox = draw.textbbox((0, 0), tagline_text, font=font_title)
    tagline_w = bbox[2] - bbox[0]
    tagline_x = (width - tagline_w) // 2
    draw.text((tagline_x, 300), tagline_text, font=font_title, fill=purple)
    
    # Stats - centered at bottom
    stats_y = 400
    stats = [("300MB", "RAM Usage"), ("1.9GB", "Min RAM"), ("100%", "Open Source")]
    
    stat_spacing = 220
    start_x = (width - (len(stats) * stat_spacing - 60)) // 2
    
    for i, (val, lbl) in enumerate(stats):
        x = start_x + i * stat_spacing
        
        # Value
        draw.text((x, stats_y), val, font=font_stats, fill=cyan)
        
        # Label
        draw.text((x, stats_y + 60), lbl, font=font_label, fill=gray)
    
    # Border
    draw.rectangle([10, 10, width-10, height-10], outline=cyan, width=3)
    
    img.save('og-image.png', 'PNG', quality=95)
    print("✓ OG Image generated!")

if __name__ == "__main__":
    create_og_image()