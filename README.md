# Vashisth Health Care & Medical Store — Website

Premium, production-ready React 19 + Vite + Tailwind CSS v4 healthcare website.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, config lives in `src/index.css` under `@theme`)
- **Framer Motion** for scroll reveals, floating cards and micro-interactions
- **lucide-react** + **react-icons** for iconography

## Structure

```
src/
  assets/data.js          — all business content (name, phone, services, testimonials, FAQ)
  components/
    AnnouncementBar.jsx
    Navbar.jsx
    Hero.jsx
    AnimatedCounter.jsx
    Stats.jsx
    Services.jsx
    About.jsx
    WhyChooseUs.jsx
    UploadPrescription.jsx
    HomeDelivery.jsx
    Testimonials.jsx
    FAQ.jsx
    Contact.jsx
    Footer.jsx
    FloatingButtons.jsx
  App.jsx
  main.jsx
  index.css
```

## Notes for going live

- **Colors, font and content** are centralized: brand colors in `src/index.css` (`@theme` block), all business copy in `src/assets/data.js` — update phone, address, services or testimonials in one place.
- **Prescription upload** (`UploadPrescription.jsx`) currently previews the file locally and is Cloudinary-ready — swap the `handleFiles` logic for an unsigned upload call to your Cloudinary preset, or point the "Submit Order" button at your backend/WhatsApp API.
- **Contact form** (`Contact.jsx`) is currently front-end only — wire the `handleSubmit` function to your email service or backend endpoint (e.g. Formspree, Resend, or a serverless function).
- **Google Map** embed in `Contact.jsx` uses a plain query string; replace with your exact place ID/coordinates once you have the store pinned on Google Maps.
- **Hero and delivery illustrations** are custom inline SVGs (no external image dependency, fully editable, zero load time). Swap `PharmacistIllustration` in `Hero.jsx` for a real photo/PNG if you have one — just drop it in `src/assets/` and replace the `<svg>` with an `<img>`.
- Social links in the footer are placeholders (`href="#"`) — add your real Facebook/Instagram/Twitter URLs.
