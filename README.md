# Chitralok Studios — React Production Website

High-end, production-ready cinematic website built with **React 19**, **Vite**, and **React Router**.

---

## 🌟 Key Features

- **Luxury Dark Theme UI**: Deep blacks (`#0A0A09`), custom gold accents (`#D4A62A`), editorial typography (`Bodoni Moda` + `Inter Tight`).
- **Brand Identity**: Real Chitralok Studios logo (`/assets/images/logo.png`) integrated in sticky header and footer.
- **5 Full Pages**:
  - `Home` (`/`) — Hero showreel banner, studio story, director rows, featured content, clients list, golden CTA.
  - `About Us` (`/about`) — Craft philosophy, studio story, 3-step pipeline (`Develop`, `Produce`, `Finish`), key stats (`120+`, `12 yrs`, `34 awards`), leadership crew.
  - `Work` (`/work`) — Interactive category filtering (`All`, `Film`, `Ad Film`, `Series`, `Music`), video project cards.
  - `Director` (`/director`) — Rudra Sen Varma spotlight, bio, quote, interactive showreel player, filmography timeline, awards.
  - `Contact Us` (`/contact`) — Interactive project inquiry form with validation, feedback toast, direct channels.
- **Interactive Video Modal Lightbox**: Click any project card or showreel trigger to watch videos in full screen.
- **Centralized Content**: All content, images, and video links are located in `src/data/content.js` for instant updates.

---

## 🚀 Quick Start Commands

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, minified bundle in the `dist/` directory ready for deployment (Vercel, Netlify, Cloudflare Pages, AWS S3, etc.).

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```text
├── public/
│   └── assets/
│       └── images/              # Real logo.png, HeroImage1.png, stills
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Footer.jsx           # Brand statement, links, socials
│   │   ├── VideoModal.jsx       # Fullscreen video lightbox
│   │   ├── GoldenCTA.jsx        # Reusable luxury CTA section
│   │   └── ScrollToTop.jsx      # Auto scroll-to-top on route change
│   ├── data/
│   │   └── content.js           # Central content and media data
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── About.jsx            # About Us page
│   │   ├── Work.jsx             # Filterable portfolio
│   │   ├── Director.jsx         # Director profile & timeline
│   │   └── Contact.jsx          # Inquiry form & contact channels
│   ├── App.jsx                  # React Router setup
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global stylesheet & design tokens
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
└── package.json
```

