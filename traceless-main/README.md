<div align="center">

<img src="https://traceless-web.vercel.app/favicon-for-public/web-app-manifest-192x192.png" width="100" alt="TraceLess Logo" />

# TraceLess

**Secure, zero‑trace file sharing for shared and public systems.**

*No signup. No account. No trace.*

[![Live App](https://img.shields.io/badge/🌐_Live_App-traceless--web.vercel.app-6366f1?style=for-the-badge&labelColor=0f0f0f)](https://traceless-web.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-24292e?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JayeshJadhav28/traceless)
[![Portfolio](https://img.shields.io/badge/👤_Author-jayeshjadhav.com-8b5cf6?style=for-the-badge&labelColor=0f0f0f)](https://jayeshjadhav.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://traceless-web.vercel.app/)

</div>

---

## 🧭 Overview

TraceLess is a minimal, login‑free file sharing web application built for speed, privacy, and simplicity. Whether you're on a library computer, a shared lab PC, or a café device — TraceLess lets you send and receive files instantly without leaving a footprint.

> **Philosophy:** *Don't sign in. Don't store more than needed. Don't leave traces.*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔓 **Login‑free** | No accounts, no sign-ups — just drop and share |
| 🔗 **Instant share links** | Generate links that work on any device or browser |
| 🌗 **Dark / Light theme** | Built-in theme toggle, consistent across all pages |
| 📱 **Fully responsive** | Fluid layout for mobile, tablet, and desktop |
| 🔔 **Inline feedback** | Toasts and progress indicators for every file action |
| ⚡ **Fast & minimal UI** | Single-screen experience with zero distractions |
| 🧩 **PWA-ready** | Installable on mobile with manifest and app icons |

---

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

</div>

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS + PostCSS |
| **UI Components** | Custom shadcn-style primitives |
| **Notifications** | Custom `use-toast` hook + Toaster |
| **Theming** | React Context (`ThemeProvider`) |
| **Deployment** | Vercel |
| **Local server** | Node.js (`server.js`) |

---

## 🗂️ Project Structure

```text
traceless/
├── app/                          # Next.js App Router root
│   ├── layout.tsx                # Root layout (providers, Navbar, Footer)
│   ├── page.tsx                  # Home — upload & share UI
│   ├── globals.css               # Global styles
│   ├── manifest.ts               # PWA web manifest
│   ├── Chat.tsx                  # Contextual messaging component
│   ├── FD.tsx                    # File Download unit
│   ├── FU.tsx                    # File Upload unit
│   ├── FUButton.tsx              # Upload trigger button
│   ├── SP.tsx                    # Share Panel
│   ├── Share.tsx                 # Core sharing orchestrator
│   ├── ShareCard.tsx             # File share card UI
│   ├── ShareLink.tsx             # Generated share link display
│   ├── Navbar.tsx                # Top navigation + brand
│   ├── Footer.tsx                # Footer + links
│   ├── ThemeProvider.tsx         # Dark/light context provider
│   ├── ThemeButton.tsx           # Theme toggle control
│   ├── f.ts                      # Utility / helper
│   ├── w.ts                      # Utility / helper
│   ├── share/
│   │   └── page.tsx              # /share route — receive & download
│   └── favicon-for-app/          # App icons (iOS, PWA)
│       ├── apple-icon.png
│       ├── favicon.ico
│       ├── icon0.svg
│       ├── icon1.png
│       └── manifest.json
│
├── components/
│   └── ui/                       # Design system primitives
│       ├── bgBeams.tsx           # Animated beam background
│       ├── button.tsx            # Base button
│       ├── card.tsx              # Card container
│       ├── compare.tsx           # Compare component
│       ├── cover.tsx             # Cover/hero element
│       ├── dialog.tsx            # Modal dialog
│       ├── dots.tsx              # Dot pattern (v1)
│       ├── dots2.tsx             # Dot pattern (v2)
│       ├── dotsv3.tsx            # Dot pattern (v3)
│       ├── dropdown-menu.tsx     # Dropdown menu
│       ├── hover-border-gradient.tsx  # Gradient border on hover
│       ├── indieCard.tsx         # Indie-style card
│       ├── input.tsx             # Input field
│       ├── label.tsx             # Form label
│       ├── progress.tsx          # Progress bar
│       ├── pullUp.tsx            # Pull-up animation
│       ├── shimmerButton.tsx     # Shimmer CTA button (v1)
│       ├── shimmerButton2.tsx    # Shimmer CTA button (v2)
│       ├── shootingStars.tsx     # Shooting stars effect
│       ├── sparkles.tsx          # Sparkle effect
│       ├── starsBg.tsx           # Stars background
│       ├── toast.tsx             # Toast notification
│       ├── toaster.tsx           # Toast renderer (root)
│       └── typewriter-effect.tsx # Typewriter text animation
│
├── hooks/
│   └── use-toast.ts              # Centralized toast hook
│
├── lib/
│   └── utils.ts                  # Shared utilities (cn, formatters)
│
├── assets/
│   ├── rfilled.png               # Logo mark (filled)
│   └── rwhite.png                # Logo mark (white)
│
├── public/
│   └── favicon-for-public/       # PWA manifest icons
│       ├── web-app-manifest-192x192.png
│       └── web-app-manifest-512x512.png
│
├── server.js                     # Optional local Node.js server
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── components.json               # shadcn-style component metadata
├── global.d.ts                   # Global type declarations
├── .eslintrc.json                # ESLint rules
└── package.json                  # Dependencies & scripts
```

---

## 🏗️ Architecture

### 1. System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        BROWSER (Sender)                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           TraceLess UI  ·  Next.js App Router        │   │
│  │   ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │   │
│  │   │  Upload  │  │  Share   │  │   Theme / Toast   │  │   │
│  │   │   (FU)   │  │  Panel   │  │     Providers     │  │   │
│  │   └────┬─────┘  └────┬─────┘  └───────────────────┘  │   │
│  └────────┼─────────────┼────────────────────────────────┘  │
└───────────┼─────────────┼────────────────────────────────────┘
            │  HTTP/API   │
┌───────────▼─────────────▼──────────┐
│         Next.js Server             │
│   ┌─────────────────────────────┐  │
│   │  App Routes  │  API Routes  │  │
│   └─────────────────────────────┘  │
│   ┌─────────────────────────────┐  │
│   │   server.js (local/extend)  │  │
│   └─────────────────────────────┘  │
└────────────────────────────────────┘
            │
┌───────────▼────────────────────────┐
│        BROWSER (Receiver)          │
│  ┌─────────────────────────────┐   │
│  │   /share  ·  ShareCard UI   │   │
│  │   Download button + info    │   │
│  └─────────────────────────────┘   │
└────────────────────────────────────┘
```

---

### 2. Page & Component Hierarchy

```
app/layout.tsx
└── ThemeProvider
    ├── Navbar
    │   └── ThemeButton
    │
    ├── app/page.tsx  (Home)
    │   └── Share
    │       ├── FU  (File Upload)
    │       │   └── FUButton
    │       ├── SP  (Share Panel)
    │       ├── ShareCard
    │       │   └── ShareLink
    │       └── Chat  (contextual hints)
    │
    ├── app/share/page.tsx  (/share route)
    │   └── ShareCard
    │       └── ShareLink  →  FD (File Download)
    │
    └── Footer
```

---

### 3. Theming & Notifications

```
ThemeProvider  (app/layout.tsx)
    │
    ├──▶  ThemeButton       toggles dark ↔ light
    └──▶  All layouts/pages receive theme context via CSS vars

use-toast  (hooks/use-toast.ts)
    │
    ├──▶  toast.tsx         individual notification component
    └──▶  toaster.tsx       global toast renderer mounted in layout
              │
              └── fires on: upload success · upload error
                            share link generated · download ready
```

---

### 4. File Transfer Flow

```
[User selects file]
        │
        ▼
   FUButton clicked
        │
        ▼
   FU component
   validates + previews
        │
        ▼
   Upload request ──────▶  Next.js API / server.js
                                    │
                              stores file + creates
                              unique share ID
                                    │
        ◀──────────────────  returns share URL
        │
        ▼
   ShareLink renders URL
        │
        ▼
   [User copies & shares link]
        │
        ▼
   Receiver opens /share?id=...
        │
        ▼
   ShareCard displays
   file name + size
        │
        ▼
   FD triggers download
```

---

## 📱 Pages & Screens

### Home — Send a File (`/`)

- Drag & drop upload zone + file picker button
- File metadata preview (name, size)
- "Upload & Share" CTA (shimmer button)
- Share link panel revealed after upload
- Toast confirmations for success or error states

### Share — Receive a File (`/share`)

- Share card with file name and size
- One-click "Download" button
- Optional context hints for shared/public systems
- Footer with TraceLess branding + theme toggle

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (LTS recommended — v18 or v20)
- **npm** (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/JayeshJadhav28/traceless.git
cd traceless

# Install dependencies
npm install
```

### Development

```bash
# Start Next.js dev server
npm run dev

# Optional: run local backend (separate terminal)
node server.js
```

Open [http://localhost:3000](http://localhost:3000) for the main UI and [http://localhost:3000/share](http://localhost:3000/share) for the receive page.

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly in the [Vercel dashboard](https://vercel.com/dashboard) for automatic deployments on every push.

---

## ⚙️ Configuration

Create a `.env.local` file in the project root for environment variables:

```bash
# .env.local (example)

# API base URL (used in frontend for API calls)
NEXT_PUBLIC_API_BASE_URL=

# Optional backend / socket server URL
# BACKEND_URL=
# SOCKET_URL=
```

Frontend variables prefixed with `NEXT_PUBLIC_` are available in browser code. Server-only variables are available in Route Handlers and Server Components only.

---

## 🗺️ Roadmap

- [ ] **One-time links** — links that expire after first download
- [ ] **Short-lived sessions** — auto-expiry for uploaded files
- [ ] **Multi-file bundles** — zip and share folders
- [ ] **Per-file progress bars** — granular transfer feedback
- [ ] **Session dashboard** — recent shares with invalidation controls
- [ ] **Environment-aware warnings** — detect shared/public PCs and show cleanup tips
- [ ] **End-to-end encryption** — client-side encryption before upload

---

## 🤝 Contributing

Contributions, issues, and feature ideas are welcome!

```bash
# 1. Fork the repo on GitHub

# 2. Create a feature branch
git checkout -b feature/my-feature

# 3. Make your changes and commit
git commit -m "feat: add my feature"

# 4. Push the branch
git push origin feature/my-feature

# 5. Open a Pull Request against main
```

Please keep PRs focused and aligned with the minimal, privacy-first spirit of TraceLess.

---

## 📄 License

See the [`LICENSE`](./LICENSE) file in the repository for licensing details.

---

<div align="center">

Built with ❤️ by [Jayesh Jadhav](https://jayeshjadhav.com/)

[![Portfolio](https://img.shields.io/badge/jayeshjadhav.com-8b5cf6?style=flat-square&logo=vercel&logoColor=white)](https://jayeshjadhav.com/)
[![GitHub](https://img.shields.io/badge/JayeshJadhav28-24292e?style=flat-square&logo=github&logoColor=white)](https://github.com/JayeshJadhav28)

*TraceLess — send files. leave nothing.*

</div>
