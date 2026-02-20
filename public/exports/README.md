# Zemnas Website → WordPress Elementor Migration Guide

## 📁 File Structure

```
public/exports/
├── 📄 CORE FILES (Use These)
│   ├── elementor-global-components.json    → Header, Footer, Design System
│   ├── elementor-homepage.json             → Complete Homepage
│   ├── elementor-page-about.json           → About Page
│   ├── elementor-page-contact.json         → Contact Page
│   ├── elementor-page-work.json            → Portfolio/Work Page
│   ├── elementor-page-insights.json        → Blog/Insights Page
│   ├── elementor-service-creative.json     → Creative Studio Service
│   ├── elementor-service-marketing.json    → Marketing Engine Service
│   ├── elementor-service-software.json     → Software & AI Service
│   ├── elementor-service-managed.json      → Managed Services
│   └── elementor-animations-library.html   → All Animations (HTML/CSS/JS)
│
└── 📄 LEGACY FILES (Older versions - ignore)
    ├── elementor-complete-export.json
    ├── elementor-content.json
    ├── elementor-animations.html
    └── elementor-services-*.json
```

## 📥 Download Files

**Option 1: Direct Download**
Visit these URLs to download each file:
- https://zemnas.com/exports/elementor-global-components.json
- https://zemnas.com/exports/elementor-homepage.json
- https://zemnas.com/exports/elementor-animations-library.html
- (Add other files as needed)

**Option 2: From Repository**
Clone the repo and find files in `/public/exports/`

---

## 🚀 Step-by-Step WordPress Setup

### STEP 1: Prepare WordPress

1. **Install Required Plugins:**
   - Elementor (Free version works, Pro recommended)
   - Elementor Pro (for Theme Builder - header/footer)
   - Custom Fonts (if using Google Fonts separately)

2. **Install Required Fonts:**
   - Go to **Google Fonts** and download:
     - **Playfair Display** (for headings)
     - **Plus Jakarta Sans** (for body text)
   - Upload via **Elementor → Custom Fonts** or use a plugin like "Custom Fonts"

---

### STEP 2: Set Up Design System (Colors & Typography)

1. Go to **Elementor → Site Settings → Global Colors**

2. Add these colors:
   | Name | Light Mode | Dark Mode |
   |------|------------|-----------|
   | Primary | #1a6dcc | #4d93e0 |
   | Background | #fafbfc | #0a0d11 |
   | Foreground | #0f1419 | #f1f4f9 |
   | Card | #ffffff | #11151b |
   | Secondary | #f1f4f9 | #1a1f28 |
   | Muted | #e8ecf1 | #222832 |
   | Muted Text | #687076 | #8490a0 |
   | Border | #dde2e8 | #252c38 |

3. Go to **Elementor → Site Settings → Global Fonts**:
   - **Primary (Headings):** Playfair Display, 600 weight
   - **Secondary (Body):** Plus Jakarta Sans, 400 weight
   - **Accent:** Plus Jakarta Sans, 500 weight

---

### STEP 3: Create Header (Theme Builder)

1. Go to **Templates → Theme Builder → Header → Add New**

2. Build the header using these elements from `elementor-global-components.json`:
   ```
   [Container - Flexbox]
   ├── [Site Logo] - Image + Text "Zemnas"
   ├── [Nav Menu] 
   │   ├── Home → /
   │   ├── Services (Mega Menu)
   │   │   ├── Creative & Marketing Studio → /services/creative
   │   │   ├── Digital Marketing & Growth → /services/marketing
   │   │   ├── Software & AI Solutions → /services/software
   │   │   └── Managed Services → /services/managed
   │   ├── About → /about
   │   ├── Work → /work
   │   ├── Insights → /insights
   │   └── Contact → /contact
   └── [Button] "Start a Conversation" → /contact
   ```

3. **Header Settings:**
   - Position: Fixed
   - Background: rgba(250, 251, 252, 0.8)
   - Backdrop Filter: blur(12px)
   - Border Bottom: 1px solid #dde2e8
   - Height: 80px
   - Z-index: 50

---

### STEP 4: Create Footer (Theme Builder)

1. Go to **Templates → Theme Builder → Footer → Add New**

2. Build 4-column layout:
   ```
   [Section - 4 Columns]
   ├── Column 1: Logo + Description + Social Links
   ├── Column 2: Services Links
   ├── Column 3: Company Links
   └── Column 4: Newsletter Form
   
   [Section - Bottom Bar]
   └── Copyright + Privacy/Terms Links
   ```

---

### STEP 5: Build Homepage

1. **Create New Page** → "Home" → Edit with Elementor

2. **Section 1: Hero**
   - Add HTML Widget for canvas animation (copy from `elementor-animations-library.html` Section 2)
   - Add Heading: "We build the systems behind ambitious growth."
   - Add Text: Value proposition
   - Add Button Group: "View Our Work" + "Start a Project"

3. **Section 2: Service Pillars**
   - 2-column grid with 4 cards
   - Each card: Icon + Title + Subtitle + Description + Tags
   - Use content from `elementor-homepage.json` → service_pillars

4. **Section 3: How We Think**
   - Vertical timeline with numbered steps
   - Copy timeline HTML from animations library

5. **Section 4: Capability Marquee**
   - Add HTML Widget
   - Copy Marquee code from animations library (Section 4)

6. **Section 5: Trust Section**
   - Client logos row
   - Testimonial carousel (copy from animations library Section 6)

7. **Section 6: Final CTA**
   - Centered text + buttons
   - Background blur orbs (copy from animations library)

---

### STEP 6: Build Other Pages

#### About Page (`elementor-page-about.json`)
1. Hero with canvas animation
2. Story section (text block)
3. Values grid (4 icon cards)
4. Team grid (4 member cards)

#### Contact Page (`elementor-page-contact.json`)
1. Hero with canvas animation
2. Two-column: Contact Form + Contact Info
3. Use Elementor Forms widget or Contact Form 7

#### Work/Portfolio Page (`elementor-page-work.json`)
1. Dark cinematic hero (set section background to #0f1419)
2. Portfolio filter + grid (copy from animations library Section 7)
3. Process steps
4. Stats counter (copy from animations library Section 8)

#### Insights/Blog Page (`elementor-page-insights.json`)
1. Hero with canvas animation
2. Featured post (large card)
3. Category filter pills
4. Blog grid (use Elementor Posts widget or Loop Builder)

---

### STEP 7: Build Service Pages

Each service page follows the same pattern:

1. **Editorial Hero** - Canvas animation background + badge + heading + subtitle
2. **Philosophy Section** - Left-aligned staggered text
3. **Capabilities Modules** - Alternating image/text blocks (numbered)
4. **Process Timeline** - Vertical timeline with steps
5. **Bridge Section** - CTA to related service
6. **Closing CTA** - Contact buttons

Use content from:
- `elementor-service-creative.json`
- `elementor-service-marketing.json`
- `elementor-service-software.json`
- `elementor-service-managed.json`

---

### STEP 8: Add Global Animations

1. Go to **Appearance → Customize → Additional CSS**

2. Paste this CSS:
```css
/* Zemnas Design Tokens */
:root {
  --z-primary: #1a6dcc;
  --z-primary-glow: #4d93e0;
  --z-background: #fafbfc;
  --z-foreground: #0f1419;
  --z-muted: #687076;
  --z-border: #dde2e8;
  --z-shadow-lg: 0 10px 25px rgba(15, 20, 25, 0.06);
}

/* Scroll Animations */
.z-animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.z-animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover Effects */
.z-hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.z-hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: var(--z-shadow-lg);
}

/* Link Underline Animation */
.z-link-underline {
  position: relative;
}
.z-link-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--z-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}
.z-link-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

3. **Add Global JavaScript** (via Code Snippets plugin or theme):
```javascript
// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.z-animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
```

---

## 📋 Quick Reference: Elementor Widget Mapping

| Zemnas Component | Elementor Widget |
|------------------|------------------|
| Hero Section | Section + Inner Section |
| Canvas Animation | HTML Widget |
| Heading | Heading Widget |
| Paragraph | Text Editor Widget |
| Button | Button Widget |
| Button Group | Button + Button (inline) |
| Card Grid | Container (Grid) |
| Icon Card | Icon Box Widget |
| Image + Text | Image Box or Inner Section |
| Testimonial | Testimonial Carousel Widget |
| Timeline | Icon List or HTML Widget |
| Marquee | HTML Widget |
| Contact Form | Form Widget (Pro) or WPForms |
| Blog Grid | Posts Widget or Loop Grid |
| Portfolio Filter | Portfolio Widget (Pro) or HTML |

---

## ⚠️ Important Notes

1. **Images:** Replace placeholder image paths with your actual uploaded images in WordPress Media Library

2. **Links:** Update all internal links to match your WordPress permalink structure

3. **Forms:** Contact forms need backend integration (use WPForms, Contact Form 7, or Elementor Forms)

4. **Blog:** The Insights page needs your actual WordPress posts - use Elementor's Posts widget

5. **Dark Mode:** Implement using a dark mode toggle plugin if needed

6. **Mobile:** Test and adjust responsive settings for each section

---

## 🎨 Pro Tips

1. **Save as Templates:** After building each section, save it as a template for reuse

2. **Use Global Widgets:** Create global widgets for repeated elements (CTAs, cards)

3. **Optimize Images:** Compress all images before upload using TinyPNG or ShortPixel

4. **Caching:** Install a caching plugin (WP Rocket, LiteSpeed Cache) for performance

5. **SEO:** Add meta descriptions from the JSON files to Yoast/RankMath

---

## Need Help?

The JSON files contain all the text content, structure, and styling tokens. The HTML file contains ready-to-paste animation code. Work through each page section by section, referencing these files for content and styling values.
