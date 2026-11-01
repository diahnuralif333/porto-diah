# 🌿 Modern Minimalist Editorial Portfolio

Desain portofolio modern & elegan berbasis **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS v4** dengan gaya visual *high-end editorial* dan aksen radiant *lime-green glow*.

---

## 📸 Menaruh Foto Profil Anda

Sesuai permintaan Anda, foto profil sudah dikonfigurasi untuk diambil langsung dari folder `public/`:

1. Simpan foto profil Anda (disarankan foto tanpa background / cutout PNG) ke dalam:
   ```text
   public/profile.png
   ```
2. Aplikasi akan otomatis memuat `public/profile.png` di hero section!
3. Jika file `profile.png` belum ditaruh, aplikasi memiliki fallback otomatis ke vektor placeholder `profile.svg` sehingga tampilan tetap rapi tanpa ada icon gambar rusak.
4. Jika Anda ingin menggunakan nama file atau format lain (misal `my-photo.jpg`), Anda cukup mengubah `profileImage: '/my-photo.jpg'` di [`src/data/portfolioData.ts`](file:///c:/laragon/www/porto/src/data/portfolioData.ts).

---

## 📁 Struktur Komponen & Layout

```text
src/
├── components/
│   ├── Navbar.tsx             # Header logo italic serif & menu drawer
│   ├── Hero.tsx               # Hero section dengan radiant lime aura, award badge, headline, photo slot & trust proof
│   ├── FeaturedShowcase.tsx   # Rounded lime container berisi kartu mockup proyek terkini
│   ├── ValueProposition.tsx   # Filosofi desain & floating skill pills (UX, Product Design, System, dll.)
│   ├── ProcessSection.tsx     # "Here's how it works" (01 Discover, 02 Design, 03 Deliver) & Testimoni
│   ├── SelectedWorks.tsx      # Showcase 4 proyek unggulan (Fintech, Real Estate, EdTech, M-Banking)
│   ├── Contact.tsx            # Dark contact box dengan copy email & form pesan
│   └── Footer.tsx             # Footer minimalis dengan tautan sosial & back-to-top
├── data/
│   └── portfolioData.ts       # Pusat data (nama, headline, link, testimoni, proyek)
├── types/
│   └── index.ts               # Interface TypeScript
├── App.tsx                    # Komponen utama
└── index.css                  # Custom fonts & Tailwind CSS v4 styling
```

---

## ⚡ Cara Menjalankan

```bash
# Menjalankan development server
npm run dev
```

Buka `http://localhost:5173` di browser.
