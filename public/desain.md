# desain.md — Portfolio Dzikri Naufal Wisnu Pravida
> Referensi desain visual lengkap untuk implementasi React + Tailwind CSS

---

## 🎯 Design Brief

**Subject:** Portfolio developer — Mobile & Web Engineer fresh graduate dari Telkom University Purwokerto  
**Audience:** Recruiter tech, hiring manager startup, dan sesama developer  
**Single Job:** Meyakinkan dalam 10 detik bahwa Dzikri adalah developer yang detail-oriented, capable, dan layak dihubungi  
**Signature Element:** Setiap section dibuka dengan label kecil berformat `[01]`, `[02]` dalam `Geist Mono` — seperti kode commit atau file path — menegaskan identitas sebagai seorang engineer, bukan sekadar desainer portofolio.

---

## 🎨 Color Tokens

```
--color-bg-base:       #F7F7F8   /* Off-white, bukan putih murni — terasa hangat & bersih */
--color-bg-surface:    #FFFFFF   /* Card background */
--color-bg-subtle:     #F0F0F2   /* Section background alternate, subtle separation */

--color-border:        #E2E2E6   /* Outlined card border — tipis, elegan */
--color-border-hover:  #6366F1   /* Indigo saat hover — accent muncul saat interaksi */

--color-text-primary:  #0F0F12   /* Hampir hitam, lebih halus dari pure black */
--color-text-secondary:#52525C   /* Abu-abu gelap untuk body text */
--color-text-muted:    #A1A1AA   /* Label kecil, placeholder, tanggal */

--color-accent:        #6366F1   /* Deep Indigo — primary accent */
--color-accent-soft:   #EEF2FF   /* Indigo 50 — background chip/badge */
--color-accent-hover:  #4F46E5   /* Indigo 600 — hover state CTA */

--color-success:       #22C55E   /* Untuk badge "Available for work" */
--color-mono:          #27272A   /* Warna teks Geist Mono inline code */
```

**Rasio kontras:** Semua pasangan teks/background memenuhi WCAG AA (≥4.5:1).

---

## 🔤 Typography

### Typeface

| Role | Font | Cara Load |
|---|---|---|
| Body & UI | **Inter** | `@import` dari Google Fonts |
| Code / Label / Tag | **Geist Mono** | `@import` dari Google Fonts atau `next/font` |

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap');
```

### Type Scale

```
/* Display — nama di Hero */
font-size: 4rem (64px) | font-weight: 700 | line-height: 1.08 | letter-spacing: -0.03em
font-family: Inter

/* Heading H2 — judul section */
font-size: 2rem (32px) | font-weight: 600 | line-height: 1.2 | letter-spacing: -0.02em

/* Heading H3 — judul card */
font-size: 1.125rem (18px) | font-weight: 600 | line-height: 1.4

/* Body */
font-size: 1rem (16px) | font-weight: 400 | line-height: 1.65 | color: --color-text-secondary

/* Label / Caption */
font-size: 0.75rem (12px) | font-weight: 500 | font-family: Geist Mono | letter-spacing: 0.04em
color: --color-text-muted | text-transform: uppercase

/* Inline Code / Tag */
font-size: 0.8125rem (13px) | font-family: Geist Mono | color: --color-mono
background: --color-accent-soft | padding: 2px 8px | border-radius: 4px
```

---

## 📐 Layout & Spacing

### Grid System
```
Max-width container:  860px   /* Sengaja sempit — fokus, seperti tulisan linear.app */
Horizontal padding:   24px (mobile) / 40px (tablet) / 0 (desktop, pakai max-width)
Section gap:          120px (desktop) / 80px (mobile)
```

### Spacing Scale (Tailwind custom)
```
4px   → spacing-1
8px   → spacing-2
12px  → spacing-3
16px  → spacing-4
24px  → spacing-6
32px  → spacing-8
48px  → spacing-12
64px  → spacing-16
96px  → spacing-24
120px → spacing-30
```

### Border Radius
```
Card:        8px   (rounded-lg)
Button:      6px   (rounded-md)
Badge/Chip:  4px   (rounded)
Dot badge:   50%   (rounded-full)
```

---

## 🧩 Component Specifications

### 1. Navbar / Header

```
Position:     sticky, top: 0
Background:   rgba(247, 247, 248, 0.85) + backdrop-filter: blur(12px)
Border:       border-bottom: 1px solid --color-border
Height:       56px
Transition:   box-shadow 200ms ease saat scroll

Layout:       flex, space-between
Left:         "dzikri.dev" dalam Geist Mono, font-weight 500, color: --color-text-primary
Right:        nav links (Tentang | Stack | Proyek | Kontak) + tombol "Hire Me"

Nav link style:
  color: --color-text-muted
  font-size: 14px, font-weight: 500
  hover: color → --color-text-primary | underline offset dengan border-bottom 1px

Tombol "Hire Me":
  background: --color-accent
  color: white
  padding: 8px 16px
  border-radius: 6px
  font-size: 14px, font-weight: 500
  hover: background → --color-accent-hover | transform: translateY(-1px)
  transition: all 150ms ease
```

---

### 2. Hero Section

```
Padding top: 120px (desktop) / 80px (mobile)
Padding bottom: 100px

Layout: single column, text-left, max-width: 720px

[BADGE — paling atas]
  "✦ Open to Work"
  background: --color-accent-soft
  color: --color-accent
  font: Geist Mono 12px
  padding: 4px 12px, border-radius: 20px
  border: 1px solid rgba(99, 102, 241, 0.2)
  Titik hijau animasi pulse di kiri: --color-success

[NAMA]
  "Dzikri Naufal Wisnu Pravida"
  font-size: 64px (clamp 40px–64px untuk responsif)
  font-weight: 700
  letter-spacing: -0.03em
  color: --color-text-primary
  margin-top: 24px

[TITLE]
  "Software Engineer — Mobile & Web"
  font-size: 20px
  font-weight: 400
  color: --color-text-secondary
  margin-top: 8px

[BIO]
  Paragraf bio dalam bahasa Indonesia
  font-size: 16px, line-height: 1.65
  color: --color-text-secondary
  max-width: 560px
  margin-top: 20px

[CTA BUTTONS]
  margin-top: 36px
  gap: 12px, display: flex

  Primary — "Lihat Portofolio":
    background: --color-text-primary | color: white
    padding: 10px 22px | border-radius: 6px | font-weight: 500

  Secondary — "Hubungi Saya":
    background: transparent
    border: 1px solid --color-border
    color: --color-text-primary
    padding: 10px 22px | border-radius: 6px | font-weight: 500
    hover: border-color → --color-border-hover | color → --color-accent

[SCROLL INDICATOR — bawah]
  Teks kecil "Scroll ↓" dalam Geist Mono
  color: --color-text-muted | font-size: 12px
  margin-top: 80px
  animasi: translateY 0→8px loop, duration 1.5s ease-in-out
```

**Animasi Hero — Floating Dots Grid (Subtle):**
```
SVG dots pattern sebagai background layer, opacity: 0.035
Radial gradient mask di atas: transparent center → --color-bg-base di pinggir
Efek: grid dots "menghilang" ke arah tepi — mirip Linear.app hero
Tidak ada animasi moving/floating — cukup gradient mask reveal saat load (fadeIn 600ms)
```

---

### 3. About Section

```
Section label (signature element):
  "[01] — Tentang"
  font-family: Geist Mono | font-size: 12px | color: --color-text-muted
  margin-bottom: 12px

Section heading:
  "Tentang Saya"
  font-size: 32px | font-weight: 600

Layout (desktop): 2 kolom — 40% foto | 60% teks
Layout (mobile):  1 kolom, foto di atas

[FOTO PLACEHOLDER]
  Aspect ratio: 4/5 (portrait)
  background: --color-bg-subtle
  border: 1px solid --color-border
  border-radius: 8px
  Di dalam: initials "DN" dalam Geist Mono 32px, color: --color-text-muted
  Hint kecil di bawah foto: "Foto profil" dalam 12px muted

[STATS ROW — di bawah foto]
  3 angka kecil dalam satu baris:
    "3.86" label "IPK"
    "4+" label "Bulan Magang"
    "3+" label "Proyek"
  Setiap stat: angka dalam Inter 600 20px, label dalam Geist Mono 11px muted
  Dipisahkan garis vertikal tipis --color-border

[TEKS BIO]
  Paragraf bio lengkap
  font-size: 16px | line-height: 1.7 | color: --color-text-secondary

[DETAIL ROW — setelah teks]
  Baris kecil berisi:
    📍 Purwokerto, Indonesia
    🎓 Telkom University Purwokerto
  font-size: 14px | Geist Mono | color: --color-text-muted
```

---

### 4. Skills Section

```
Section label: "[02] — Stack"
Section heading: "Tech Stack & Tools"

Layout: 3 grup vertikal dengan divider horizontal tipis antar grup

Grup 1 — Bahasa Pemrograman
  Label grup: "Bahasa Pemrograman" → Geist Mono 11px uppercase muted
  Chips: Java | PHP | Python | C++ | Dart | JavaScript

Grup 2 — Framework & Library
  Label: "Framework & Library"
  Chips: Flutter | Laravel | Filament

Grup 3 — Database & Tools
  Label: "Database & Tools"
  Chips: MySQL | Supabase | Git

[CHIP / BADGE STYLE]
  background: --color-bg-surface
  border: 1px solid --color-border
  border-radius: 6px
  padding: 6px 14px
  font-family: Geist Mono | font-size: 13px
  color: --color-text-primary | font-weight: 500

  hover:
    border-color: --color-accent
    background: --color-accent-soft
    color: --color-accent
    transition: all 150ms ease

  Layout chips: flex-wrap, gap: 8px
```

---

### 5. Experience & Projects Section

```
Section label: "[03] — Kerja & Proyek"
Section heading: "Pengalaman & Proyek Utama"

Layout: 1 kolom penuh, cards ditumpuk vertikal dengan gap: 16px
(Tidak grid 2 kolom — menjaga lebar baca optimal & fokus)
```

**Card Spec (Outlined Style):**
```
background: --color-bg-surface
border: 1px solid --color-border
border-radius: 8px
padding: 24px
transition: border-color 200ms ease, box-shadow 200ms ease

hover:
  border-color: --color-border-hover   ← indigo muncul
  box-shadow: 0 4px 24px rgba(99, 102, 241, 0.06)
  transform: translateY(-1px)

NO shadow default state — hanya border
```

**Card Internal Layout:**

```
[ROW ATAS]
  Kiri: Tipe item dalam Geist Mono chip kecil
    "Experience" → bg: #FFF7ED | color: #C2410C | border: 1px solid #FED7AA
    "Project"    → bg: --color-accent-soft | color: --color-accent
    "Organization" → bg: #F0FDF4 | color: #15803D | border: 1px solid #BBF7D0
  Kanan: Tanggal dalam Geist Mono 12px muted (jika ada)

[JUDUL CARD]
  font-size: 17px | font-weight: 600 | margin-top: 10px
  color: --color-text-primary

[INSTITUSI / LOKASI — untuk Experience]
  "TechArea · Semarang, Indonesia"
  font-size: 13px | Geist Mono | color: --color-text-muted | margin-top: 2px

[DESKRIPSI]
  font-size: 15px | line-height: 1.65 | color: --color-text-secondary | margin-top: 12px

[TECH TAGS — bawah card]
  margin-top: 16px
  padding-top: 16px
  border-top: 1px solid --color-border

  Tag style:
    background: --color-bg-subtle
    border-radius: 4px
    padding: 3px 10px
    font-family: Geist Mono | font-size: 12px
    color: --color-text-secondary
    No border, no hover effect (dekoratif, bukan interaktif)
```

**Urutan card (visual flow):**
1. Experience — Mobile Developer Intern (warna Experience)
2. Project — GamingLab E-Booking (warna Project)
3. Project — Tempat Sampah Point (warna Project)
4. Organization — Kampus & Kepanitiaan (warna Organization)

---

### 6. Contact Section

```
Section label: "[04] — Kontak"
Section heading: "Mari Terhubung"

Background section: --color-bg-subtle (satu-satunya section dengan bg berbeda)
Border-top: 1px solid --color-border

Padding: 80px 0

Layout: 2 kolom (desktop) | 1 kolom (mobile)
  Kiri: teks + detail kontak
  Kanan: social link cards
```

**Kiri — Contact Info:**
```
[AVAILABILITY BADGE]
  "● Terbuka untuk Peluang Kerja Baru"
  font: Geist Mono 12px | color: --color-success
  margin-bottom: 16px

[TEKS INTRO]
  font-size: 16px | line-height: 1.7 | color: --color-text-secondary
  max-width: 400px

[KONTAK LINKS — list vertikal]
  gap: 12px

  Email:
    href="mailto:dzikrinwp@gmail.com"
    Label Geist Mono 11px muted: "EMAIL"
    Value: "dzikrinwp@gmail.com" Inter 15px primary
    hover: color → --color-accent | underline

  WhatsApp:
    href="https://wa.me/6282133506620"
    Label: "WHATSAPP"
    Value: "+62 821-3350-6620"
    hover: color → --color-accent | underline

  Lokasi:
    Label: "LOKASI"
    Value: "Purwokerto, Indonesia"
    Non-clickable
```

**Kanan — Social Links:**
```
3 card kecil vertikal, sama seperti outlined card style tapi lebih compact:
  padding: 16px 20px
  display: flex | align-items: center | gap: 12px

  Icon: 20px (SVG inline atau react-icons)
  Label: nama platform Inter 14px 600
  Sublabel: URL singkat Geist Mono 12px muted

  hover: seluruh card border indigo + translateY(-1px)

  GitHub     → github.com/dzikrinwp
  Blog       → dzikrinwp.wordpress.com
  LinkedIn   → (placeholder)
```

---

## ✨ Motion & Animation

**Filosofi:** Minimal, purposeful. Tidak ada animasi yang berjalan terus-menerus kecuali pulse dot di "Open to Work". Animasi hanya saat interaksi atau load pertama.

```
Page load:
  Semua section: opacity 0 → 1, translateY 16px → 0
  Duration: 400ms | Easing: cubic-bezier(0.16, 1, 0.3, 1)
  Stagger: 80ms antar elemen Hero

Scroll reveal:
  Gunakan Intersection Observer
  Threshold: 0.15
  Cards masuk: opacity 0 → 1, translateY 12px → 0
  Duration: 350ms

Hover cards:
  border-color + box-shadow: 200ms ease
  transform translateY(-1px): 200ms ease

Hover chips:
  background + color: 150ms ease

Hover CTA buttons:
  transform translateY(-1px): 150ms ease
  background darken: 150ms ease

Scroll dot indicator di hero:
  translateY 0px → 8px → 0px
  duration: 1.5s | easing: ease-in-out | infinite

Availability pulse dot:
  scale: 1 → 1.4 → 1 | opacity: 1 → 0.5 → 1
  duration: 2s | infinite
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition-duration: 0.01ms !important; }
}
```

---

## 📱 Responsive Breakpoints

```
Mobile:   < 640px   (sm)
Tablet:   640–1023px (md)
Desktop:  ≥ 1024px  (lg)
```

| Elemen | Mobile | Desktop |
|---|---|---|
| Container padding | 20px | 0 (max-width) |
| Hero font-size | 36px | 64px |
| About layout | 1 col (foto atas) | 2 col 40/60 |
| Navbar links | Hidden (hamburger) | Inline |
| Section gap | 80px | 120px |
| Card padding | 18px | 24px |
| Contact layout | 1 col | 2 col |

---

## 🗂️ Tailwind Config Tambahan

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          base:    '#F7F7F8',
          surface: '#FFFFFF',
          subtle:  '#F0F0F2',
        },
        border: {
          DEFAULT: '#E2E2E6',
          hover:   '#6366F1',
        },
        text: {
          primary:   '#0F0F12',
          secondary: '#52525C',
          muted:     '#A1A1AA',
        },
        accent: {
          DEFAULT: '#6366F1',
          soft:    '#EEF2FF',
          hover:   '#4F46E5',
        },
      },
      maxWidth: {
        content: '860px',
      },
    },
  },
}
```

---

## 📁 Struktur Komponen React (Saran)

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Badge.jsx          ← reusable chip/tag
│       ├── OutlinedCard.jsx   ← base card component
│       ├── SectionLabel.jsx   ← "[01] — Label" component
│       └── SocialCard.jsx     ← contact social link card
├── data/
│   ├── skills.js
│   ├── experience.js
│   └── contact.js
├── hooks/
│   └── useScrollReveal.js     ← Intersection Observer hook
└── App.jsx
```

---

## 🔍 Self-Critique & Design Decisions

| Keputusan | Alasan |
|---|---|
| Container max-width 860px (sempit) | Memaksa focus, menghindari white space mati di kiri-kanan, mirip konvensi tulisan engineering blog |
| Tidak ada background gradient di hero | Arctic Minimal = restraint; dots grid + radial mask sudah cukup dinamis tanpa "ramai" |
| Cards 1 kolom, bukan grid | Konten experience butuh ruang baca, bukan thumbnail-scanning; 1 kolom = hierarki jelas |
| Geist Mono hanya untuk label & tag | Menghindari "developer cosplay" — Mono hanya muncul di tempat yang memang data/code, bukan dekorasi |
| Hover border indigo (bukan shadow besar) | Sesuai Outlined Cards brief — interaksi elegant, bukan dramatis |
| Stats row di About (IPK, Bulan Magang, Proyek) | Social proof berbasis angka konkret — lebih meyakinkan recruiter daripada deskripsi panjang |
```
