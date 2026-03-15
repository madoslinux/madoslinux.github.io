#!/usr/bin/env python3
"""
Generate OG Image for madOS with updated branding
Size: 1200x630 pixels (Open Graph standard)
Uses same colors and fonts as the website
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image():
    # Image dimensions
    width, height = 1200, 630
    
    # Colors from website CSS
    bg_base = (36, 41, 51)  # --nord0: #242933
    bg_surface = (46, 52, 64)  # --nord1: #2e3440
    neon_cyan = (93, 216, 238)  # --neon-cyan: #5dd8ee
    neon_purple = (224, 124, 216)  # --neon-purple: #e07cd8
    text_primary = (236, 239, 244)  # --nord6: #eceff4
    text_muted = (216, 222, 233)  # --nord4: #d8dee9 with opacity
    
    # Create base image
    img = Image.new('RGB', (width, height), bg_base)
    draw = ImageDraw.Draw(img)
    
    # Try to load fonts - using system fonts similar to Inter and Michroma
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
        "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf",
    ]
    
    font_regular_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSans.ttf",
        "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf",
    ]
    
    font_mono_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf",
    ]
    
    def load_font(paths, size):
        for path in paths:
            if os.path.exists(path):
                try:
                    return ImageFont.truetype(path, size)
                except:
                    continue
        return ImageFont.load_default()
    
    # Load fonts
    font_title = load_font(font_paths, 72)  # Large title
    font_tagline = load_font(font_paths, 36)  # Tagline
    font_badge = load_font(font_paths, 20)  # Badge text
    font_body = load_font(font_regular_paths, 24)  # Description
    font_stats = load_font(font_paths, 48)  # Stats numbers
    font_stats_label = load_font(font_regular_paths, 16)  # Stats labels
    font_terminal = load_font(font_mono_paths, 18)  # Terminal text
    
    # Layout
    left_margin = 80
    right_margin = 80
    top_margin = 60
    
    # === LEFT SECTION ===
    
    # Badge: "Powered by Ollama and OpenCode"
    badge_text = "Powered by Ollama and OpenCode"
    badge_bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
    badge_width = badge_bbox[2] - badge_bbox[0] + 40
    badge_height = badge_bbox[3] - badge_bbox[1] + 20
    
    # Draw badge background (rounded rectangle)
    badge_y = top_margin
    draw.rounded_rectangle(
        [left_margin, badge_y, left_margin + badge_width, badge_y + badge_height],
        radius=100,
        fill=(93, 216, 238, 25),
        outline=neon_cyan,
        width=2
    )
    draw.text(
        (left_margin + 20, badge_y + 10),
        badge_text,
        font=font_badge,
        fill=neon_cyan
    )
    
    # Load and draw logo
    current_y = badge_y + badge_height + 30
    try:
        logo = Image.open('mados-logo.png')
        # Resize logo
        logo_width = 400
        aspect_ratio = logo.height / logo.width
        logo_height = int(logo_width * aspect_ratio)
        logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
        
        # Paste logo
        img.paste(logo, (left_margin, int(current_y)), logo if logo.mode == 'RGBA' else None)
        current_y += logo_height + 40
    except Exception as e:
        print(f"Could not load logo: {e}")
        current_y += 100
    
    # Tagline: "AI-Orchestrated Arch Linux"
    tagline = "AI-Orchestrated Arch Linux"
    draw.text((left_margin, current_y), tagline, font=font_tagline, fill=neon_purple)
    current_y += 60
    
    # Description
    description_line1 = "Nordic cyberpunk distribution optimized for"
    description_line2 = "low-RAM systems with local AI integration"
    draw.text((left_margin, current_y), description_line1, font=font_body, fill=text_muted)
    current_y += 35
    draw.text((left_margin, current_y), description_line2, font=font_body, fill=text_muted)
    
    # === RIGHT SECTION - Terminal ===
    terminal_x = 680
    terminal_y = 120
    terminal_width = 440
    terminal_height = 180
    
    # Terminal background
    draw.rounded_rectangle(
        [terminal_x, terminal_y, terminal_x + terminal_width, terminal_y + terminal_height],
        radius=12,
        fill=bg_surface,
        outline=neon_cyan,
        width=2
    )
    
    # Terminal header dots
    dot_y = terminal_y + 20
    dot_colors = [(255, 95, 86), (255, 189, 46), (39, 201, 63)]
    for i, color in enumerate(dot_colors):
        dot_x = terminal_x + 25 + i * 25
        draw.ellipse([dot_x - 6, dot_y - 6, dot_x + 6, dot_y + 6], fill=color)
    
    # Terminal content
    content_y = terminal_y + 55
    content_x = terminal_x + 25
    
    draw.text((content_x, content_y), "$", font=font_terminal, fill=neon_cyan)
    draw.text((content_x + 20, content_y), "sudo install-mados", font=font_terminal, fill=neon_purple)
    content_y += 32
    
    draw.text((content_x + 20, content_y), "Detecting environment...", font=font_terminal, fill=text_muted)
    content_y += 32
    
    draw.text((content_x + 20, content_y), "AI optimization enabled", font=font_terminal, fill=text_muted)
    content_y += 32
    
    draw.text((content_x + 20, content_y), "Ready to install!", font=font_terminal, fill=(63, 185, 80))
    
    # === STATS SECTION ===
    stats_y = terminal_y + terminal_height + 50
    stats = [
        ("300MB", "RAM Usage"),
        ("1.9GB", "Min RAM"),
        ("100%", "Open Source")
    ]
    
    stat_spacing = 140
    start_x = terminal_x + 20
    
    for i, (value, label) in enumerate(stats):
        x = start_x + i * stat_spacing
        
        # Separator line
        if i > 0:
            draw.line([(x - 20, stats_y), (x - 20, stats_y + 60)], fill=(93, 216, 238, 50), width=1)
        
        # Stat value
        draw.text((x, stats_y), value, font=font_stats, fill=neon_cyan)
        
        # Stat label
        label_y = stats_y + 55
        draw.text((x, label_y), label, font=font_stats_label, fill=text_muted)
    
    # === BORDER ===
    border_width = 4
    draw.rectangle(
        [border_width, border_width, width - border_width, height - border_width],
        outline=neon_cyan,
        width=border_width
    )
    
    # Save image
    img.save('og-image.png', 'PNG', quality=95)
    print("✓ OG Image generated: og-image.png (1200x630)")
    print("  - Clean background (#242933)")
    print("  - Using system fonts similar to website")
    print("  - Same color palette as the site")

if __name__ == "__main__":
    create_og_image()