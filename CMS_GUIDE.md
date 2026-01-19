# CMS Service Pages Guide

This project uses a **JSON-based CMS** system - no backend required! All service content is stored in a JSON file that you can edit directly.

## How It Works

- **Data Storage**: `src/data/services.json` - Edit this file to manage all service content
- **Frontend**: React components automatically render the content from the JSON file
- **No Backend**: Everything runs client-side, no server needed!

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

## Routes

- `/service/:slug` - Display a service page
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
