# HK-Decord — Website Thiết Kế Nội Thất & Kiến Trúc

Website thương hiệu cao cấp cho **HK-Decord** — công ty thiết kế nội thất và bản vẽ kiến trúc tại Việt Nam.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond + DM Sans
- **Deploy:** Vercel

## Cấu Trúc Trang

| Trang | URL |
|---|---|
| Trang chủ | `/` |
| Portfolio | `/du-an` |
| Chi tiết dự án | `/du-an/[slug]` |
| Dịch vụ | `/dich-vu` |
| Về chúng tôi | `/ve-chung-toi` |
| Liên hệ | `/lien-he` |

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint check
```

## Cập Nhật Nội Dung

- **Dự án:** chỉnh sửa `src/data/projects.json`
- **Thông tin liên hệ:** `src/components/layout/Footer.tsx` và `src/app/lien-he/page.tsx`
- **Màu sắc / Font:** `src/app/globals.css`
- **Logo:** `src/components/layout/Navbar.tsx` và `Footer.tsx`

## Deploy

Project được deploy tự động lên Vercel mỗi khi push code lên branch `main`.

---

© 2024 HK-Decord. All rights reserved.
