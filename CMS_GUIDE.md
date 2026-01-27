# CMS Guide

This project uses a **JSON-based CMS** system - no backend required! All content is stored in JSON files that you can edit directly.

## How It Works

- **Service Pages**: `src/data/services.json` - Edit this file to manage all service content
- **Homepage Sections**: `src/data/home.json` - Edit this file to manage homepage content (hero, about, features, solutions)
- **Global Site Data**: `src/data/global.json` - Edit this file to manage site-wide content (navbar, footer, company info)
- **Services Menu**: `src/data/servicesMenu.json` - Edit this file to manage the structure of the Services mega menu
- **Redux Store**: All JSON data is loaded once into a Redux Toolkit slice (`cmsSlice`), and components read from the store using `useSelector`
- **No Backend**: Everything runs client-side, no server needed (API can be added later without changing components)!

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

## Quick Start

1. **Start the React app:**
   ```bash
   npm run dev
   ```

2. **View a service page:**
   - Navigate to `http://localhost:5173/service/maritime-consulting`
   - Or click "Services" in the navbar

3. **Edit content:**
   - Open `src/data/services.json`
   - Make your changes
   - Save the file
   - Refresh the browser to see changes

## Editing Service Content

### File Structure

The `services.json` file has this structure:

```json
{
  "services": [
    {
      "id": "service-1",
      "slug": "maritime-consulting",
      "title": "Service Title",
      "description": "Service description",
      "blocks": [
        // Content blocks go here
      ]
    }
  ]
}
```

### Adding a New Service

Add a new object to the `services` array:

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

Then access it at: `/service/your-service-slug`

### Content Block Types

#### 1. Heading
```json
{
  "type": "heading",
  "content": "Your Heading Text",
  "level": 2
}
```
- `level`: 1-6 (h1 to h6)

#### 2. Paragraph
```json
{
  "type": "paragraph",
  "content": "Your paragraph text here..."
}
```

#### 3. Image
```json
{
  "type": "image",
  "url": "/src/assets/images/home/hero.webp",
  "alt": "Image description",
  "caption": "Optional caption"
}
```

#### 4. Bullet List
```json
{
  "type": "bullet-list",
  "items": ["Item 1", "Item 2", "Item 3"]
}
```

#### 5. Numbered List
```json
{
  "type": "numbered-list",
  "items": ["First", "Second", "Third"]
}
```

#### 6. Quote
```json
{
  "type": "quote",
  "content": "Quote text here",
  "author": "Author Name"
}
```

#### 7. Divider
```json
{
  "type": "divider"
}
```

## Example: Complete Service Page

```json
{
  "id": "service-1",
  "slug": "maritime-consulting",
  "title": "Maritime Consulting Services",
  "description": "Expert maritime consulting solutions",
  "blocks": [
    {
      "type": "heading",
      "content": "Our Services",
      "level": 2
    },
    {
      "type": "paragraph",
      "content": "We provide comprehensive maritime consulting services."
    },
    {
      "type": "image",
      "url": "/src/assets/images/home/hero.webp",
      "alt": "Maritime Services",
      "caption": "Our team in action"
    },
    {
      "type": "heading",
      "content": "What We Offer",
      "level": 3
    },
    {
      "type": "bullet-list",
      "items": [
        "Service 1",
        "Service 2",
        "Service 3"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "quote",
      "content": "Excellence in maritime solutions",
      "author": "Our Team"
    }
  ]
}
```

## Tips

1. **Slug**: Use lowercase, hyphen-separated values (e.g., `maritime-consulting`)
2. **Images**: Place images in `src/assets/images/` and reference them with `/src/assets/images/...`
3. **Order Matters**: Blocks are rendered in the order they appear in the array
4. **Mix and Match**: Use any combination of blocks to create your page layout

## Adding New Block Types

To add a new block type:

1. **Add rendering logic** in `src/components/ContentBlocks/ContentBlock.jsx`:
   ```jsx
   case 'your-new-type':
     return (
       <div className="content-block content-your-new-type">
         {/* Your rendering logic */}
       </div>
     );
   ```

2. **Add styles** in `src/components/ContentBlocks/ContentBlock.css`

3. **Use it** in your JSON file:
   ```json
   {
     "type": "your-new-type",
     "content": "Your content"
   }
   ```

## Editing Homepage Content

### Hero Section (`home.json` → `hero`)

Edit metrics, headings, descriptions, and button text:

```json
{
  "hero": {
    "heading": {
      "line1": "Excellence in Maritime",
      "line2": "Solutions & Services"
    },
    "description": "Your description here...",
    "buttons": {
      "primary": {
        "text": "Get in Touch",
        "link": "#contact"
      },
      "secondary": {
        "text": "Learn more",
        "link": "#about"
      }
    },
    "stats": [
      {
        "number": "27+",
        "label": "Years of Excellence"
      }
    ]
  }
}
```

### About Section (`home.json` → `about`)

Edit company info, description, and certifications:

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
        {
          "code": "9001",
          "year": "2015"
        }
      ]
    }
  }
}
```

### Key Features (`home.json` → `keyFeatures`)

Edit features list:

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

Edit solutions list:

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

## Editing Global Site Data

### Navbar (`global.json` → `navbar`)

Edit navigation links and logo:

```json
{
  "navbar": {
    "logo": "Aries Mar",
    "links": [
      {
        "text": "Who We Are",
        "href": "#about",
        "hasMenu": false
      }
    ]
  }
}
```

### Footer (`global.json` → `footer`)

Edit footer company name and social links:

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

## Routes

- `/` - Homepage (uses `home.json` via Redux store)
- `/service/:slug` - Display a service page (uses `services.json` via Redux store)
  - Example: `/service/maritime-consulting`
  - Example: `/service/vessel-management`

## Future Enhancements

If you want to add a backend later:
- The `serviceApi.js` file has async functions ready
- Just replace the JSON import with API calls
- The component structure remains the same!

## Troubleshooting

**Service not found:**
- Check the slug matches exactly (case-sensitive)
- Verify the service exists in `services.json`

**Content not updating:**
- Make sure you saved the JSON file
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

**Images not showing:**
- Verify the image path is correct
- Make sure the image exists in the specified location
- Use relative paths from the `src` folder
