# Abiyyu Abdiffatir Al Majid — Personal Portfolio
An ultra-premium, high-performance personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **AOS**. Features state-of-the-art interactive modules, multi-profile resume handling, seamless credential showcasing, and responsive fluid aesthetics tailored for modern web viewports.

---

## 🚀 Overview

This repository houses the modern frontend application for my personal portfolio. It is custom-tailored to highlight my multi-disciplinary expertise as a **Software Engineer**, specializing in **Fullstack Development**, **Network Engineering**, and **Cloud Infrastructure**.

The design relies on rich glassmorphism layouts, clean technical accents, a unified modern dark/light theme, and dynamic responsive layouts for all viewports.

---

## ✨ Key Features

### 🖥️ 1. Dynamic Hero Section & Bento Stats
* **Typing Animation Carousel**: Dynamically rotates through key professional titles (Fullstack Developer, DevOps, Network Engineer, AWS Master, Golang Programmer) with smooth speed offsets.
* **Modern Bento Stat Cards**: Clean dashboard layout featuring Experience, Projects, Main Language (Golang-accented), and Current Role. Incorporates tech-themed micro-dot background grids, adaptive line-wrapping, and hover glow elevations.
* **Floating Tech Stack**: Features dynamic floating orbital tech badges (React, Laravel, Node.js, Go, etc.) using smooth interactive tooltips.

### 📄 2. Dual-Profile Direct CV Downloads
* **Split Direct Download Links**: Dedicated layout in the About section allows recruiters to download targeted profiles directly (**Fullstack Developer CV** or **Network Engineer CV**) in a single tap.
* **Viewport-Crease Safe Modal**: Home landing page houses an ultra-compact CV selector modal optimized for small screens to prevent vertical overflow and ensure zero-scrolling usability.

### 🏆 3. Professional Credential Showcase
* **Live Lightbox Viewer**: Interactive, responsive certification drawer displaying professional achievements from **Cisco Networking Academy**, **IBM**, and **Microsoft**.
* **Viewport-Adaptive Frame**: Fully adjusts between stacked vertical modes on mobile (supporting unified touch scroll) and rigid split panels on desktop (image preview left, details panel right).

### 💬 4. Dual-Row Opposite Testimonial Marquees
* **Endless Marquee Loop**: Implements two rows of text testimonials sliding indefinitely in opposite directions (Row 1 left, Row 2 right).
* **Hover-to-Pause Feature**: Testimonial slides pause dynamically when hovered, allowing visitors to read feedback comfortably before sliding resumes.
* **Glassmorphic Cards**: Features clean, avatar-less text layouts that focus directly on the client's comments, ratings, and professional context.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular component-based declarative interface library |
| **Vite** | Lightning-fast frontend build tool and dev server |
| **Tailwind CSS** | Premium utility-first styling engine with glassmorphic assets |
| **Boxicons & FontAwesome** | Unified high-quality visual icons library |
| **AOS (Animate On Scroll)** | Dynamic viewport reveal and transition animations |
| **SweetAlert2** | Custom popup panels and interactive dialog notifications |

---

## 📁 Directory Architecture

```bash
porto/
├── public/                 # Static local assets
│   ├── cv/                 # Resume profile PDF documents
│   └── certification/      # Renamed PNG certification assets
├── src/
│   ├── components/         # Core layout modules
│   │   ├── Navbar.jsx      # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx        # Landing fold, bento stats & CV modal
│   │   ├── About.jsx       # Narrative, biodata & direct CV links
│   │   ├── Portofolio.jsx  # Certification grid & responsive lightbox
│   │   ├── Testimonial.jsx # Infinite marquees & interactive feedback modal
│   │   ├── Contact.jsx     # Modern glassmorphism message form
│   │   └── Footer.jsx      # Dynamic foot links & social nodes
│   ├── data/               # Centralized content store mappings
│   │   ├── homeData.jsx
│   │   ├── aboutData.jsx
│   │   ├── portofolioData.jsx
│   │   ├── contactData.jsx
│   │   └── footerData.jsx
│   ├── App.jsx             # Main router and section assembler
│   └── main.jsx            # Main app compiler link
├── index.html              # Main HTML entry point (SEO & GSC verified)
├── tailwind.config.js      # Custom theme mappings
└── package.json            # Scripts & project dependencies
```

---

## ⚡ Getting Started

### 📋 Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 📥 Installation & Setup
1. Clone this repository to your local workspace:
   ```bash
   git clone https://github.com/AlexanderIII-TheGreat/porto.git
   cd porto
   ```

2. Install all required package dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

4. Compile the production bundles for deployment:
   ```bash
   npm run build
   ```
   The compiled optimized output is exported into the `dist/` directory, ready to serve on platforms like Netlify, Vercel, or custom servers.

---

## 🔍 SEO & Verification
* **Custom Document Titles**: Tailored index tags targeting search visibility.
* **Google Search Console**: Configured with live site-verification metadata tag inside `index.html` for instant validation.

---

## 📄 License
This portfolio project is private and proprietary. All rights reserved. Created with 💙 by Abiyyu Abdiffatir Al Majid.
