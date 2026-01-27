# Aries Marine CMS (React + Vite + Redux Toolkit)

This project is a **JSON-driven CMS-style frontend** for Aries Marine, built with React, Vite, and Redux Toolkit. All public content (homepage, services, navbar/footer, services menu) is stored in JSON files and loaded into a central Redux store, ready to be swapped to a real API later.

---

## How It Works

- **Service Pages**: `src/data/services.json` - Manage all service page content
- **Homepage Sections**: `src/data/home.json` - Manage homepage content (hero, about, features, solutions)
- **Global Site Data**: `src/data/global.json` - Manage site-wide content (navbar, footer, company info)
- **Services Menu**: `src/data/servicesMenu.json` - Manage the structure of the Services mega menu
- **Redux Store**: All JSON data is loaded once into a Redux Toolkit slice (`cmsSlice`), and components read from the store using `useSelector`
- **No Backend**: Everything runs client-side; you can plug in an API later without changing component code

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## Data Files Overview

### 1. `home.json` - Homepage Sections
Contains all data for homepage sections:
- **Hero Section**: Heading, description, buttons, stats (metrics)
- **About Section**: Company info, description, certifications
- **Key Features**: Features list with titles, descriptions, images
- **Solutions**: Solutions list with titles, descriptions, images

### 2. `global.json` - Site-Wide Data
Contains data used across the entire site:
- **Company Info**: Company name, short name, full name
- **Navbar**: Logo text, navigation links
- **Footer**: Company name, social media links
- **Contact**: Address, email, phone (for future use)

### 3. `services.json` - Service Pages
Contains dynamic service page content (see Service Pages section below)

### 4. `servicesMenu.json` - Services Mega Menu
Controls the hierarchical structure of the Services menu (visions, categories, and service list items).

---

## Editing Service Content

### File Structure

`src/data/services.json`:

```json
{
  "services": [
    {
      "id": "service-1",
      "slug": "maritime-consulting",
      "title": "Service Title",
      "description": "Service description",
      "blocks": []
    }
  ]
}
```

### Adding a New Service

```json
{
  "id": "service-3",
  "slug": "your-service-slug",
  "title": "Your Service Title",
  "description": "Service description",
  "blocks": [
    {
      "type": "heading",
      "content": "Welcome",
      "level": 2
    },
    {
      "type": "paragraph",
      "content": "Your content here..."
    }
  ]
}
```

Then access it at: `/service/your-service-slug`.

---

## Editing Homepage Content

### Hero Section (`home.json` → `hero`)

```json
{
  "hero": {
    "heading": {
      "line1": "Excellence in Maritime",
      "line2": "Solutions & Services"
    },
    "description": "Your description here...",
    "buttons": {
      "primary": { "text": "Get in Touch", "link": "#contact" },
      "secondary": { "text": "Learn more", "link": "#about" }
    },
    "stats": [
      { "number": "27+", "label": "Years of Excellence" }
    ]
  }
}
```

### About Section (`home.json` → `about`)

```json
{
  "about": {
    "label": "WHO WE ARE",
    "title": "Company Name",
    "description": "Company description...",
    "certifications": {
      "title": "Our Certifications",
      "subtitle": "Subtitle text",
      "items": [
        { "code": "9001", "year": "2015" }
      ]
    }
  }
}
```

### Key Features (`home.json` → `keyFeatures`)

```json
{
  "keyFeatures": {
    "label": "WHAT WE OFFER",
    "title": "Our Core Services",
    "subtitle": "Subtitle text",
    "features": [
      {
        "number": "01",
        "title": "Feature Title",
        "description": "Feature description...",
        "image": "https://example.com/image.jpg",
        "link": "#"
      }
    ]
  }
}
```

### Solutions (`home.json` → `solutions`)

```json
{
  "solutions": {
    "label": "OUR SOLUTIONS",
    "title": "Key Solutions",
    "subtitle": "Subtitle text",
    "items": [
      {
        "id": 1,
        "title": "Solution Title",
        "description": "Solution description...",
        "image": "https://example.com/image.jpg",
        "link": "#"
      }
    ]
  }
}
```

---

## Editing Global Site Data

### Navbar (`global.json` → `navbar`)

```json
{
  "navbar": {
    "logo": "Aries Mar",
    "links": [
      { "text": "Who We Are", "href": "#about", "hasMenu": false }
    ]
  }
}
```

### Footer (`global.json` → `footer`)

```json
{
  "footer": {
    "companyName": "Aries e-Solutions",
    "socialLinks": [
      {
        "name": "Facebook",
        "url": "https://facebook.com",
        "icon": "facebook"
      }
    ]
  }
}
```

---

## Routes

- `/` - Homepage (uses `home.json` via Redux store)
- `/service/:slug` - Service detail page (uses `services.json` via Redux store)
  - Example: `/service/maritime-consulting`
  - Example: `/service/vessel-management`

---

## Redux Toolkit Integration

- Store setup: `src/store/store.js`
- CMS slice: `src/store/cmsSlice.js`
  - Loads `home.json`, `global.json`, `services.json`, `servicesMenu.json` into:
    - `state.cms.home`
    - `state.cms.global`
    - `state.cms.services`
    - `state.cms.servicesMenu`
- Components use `useSelector` to read data:
  - Homepage sections, navbar, footer, services menu, and service detail all read from the same central store.

When you add a real backend later, you can replace the JSON imports in `cmsSlice` with API calls (or async thunks) while leaving the components unchanged.

---

## Full CMS Guide

For a more detailed, step-by-step explanation of the JSON structure, content block types, and troubleshooting, see the dedicated guide:

- `CMS_GUIDE.md`

That file is the **canonical CMS manual** and is kept in sync with this README.
