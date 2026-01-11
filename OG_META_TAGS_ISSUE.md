# Open Graph Meta Tags Not Rendering Issue

## Problem

The rendered HTML output shows only ONE Open Graph meta tag:
- ✅ `<meta property="og:url" content="https://lonemountainvistas.com/" />`

Missing tags:
- ❌ `og:title`
- ❌ `og:description`
- ❌ `og:image`
- ❌ `og:site_name`
- ❌ `og:type`
- ❌ All Twitter Card tags

## Current Code

All meta tags ARE present in `pages/index.js` using the `<Head>` component from `next/head`:

```javascript
<Head>
  <title>Lone Mountain Vistas | Luxury Real Estate in Northwest Las Vegas</title>
  <meta name="description" content="..." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lonemountainvistas.com/" />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="..." />
  // ... all other tags
</Head>
```

## Likely Cause

This is a known issue with **Next.js static exports** (`output: 'export'`). The `<Head>` component from `next/head` may not reliably render all meta tags during the static export build process.

## Solutions

### Option 1: Verify Build Process

The tags might be in the source but filtered during build. Check:
1. Local build output: `npm run build`
2. Check the generated HTML files in `out/` directory
3. Verify if tags appear in the static HTML files

### Option 2: Use Next.js Metadata API (App Router)

If migrating to App Router, use the Metadata API instead of `<Head>`:
- More reliable for static exports
- Better TypeScript support
- Requires App Router (`app/` directory)

### Option 3: Custom HTML Template

For static exports, you could use a custom HTML template, but this is complex and not recommended.

### Option 4: Manual Meta Tags in _document.js

Add default meta tags in `_document.js`, but this applies to all pages (not ideal for page-specific tags).

### Option 5: Post-Build Script

Create a script that adds meta tags to the generated HTML files after build, but this is a workaround.

## Recommended Next Steps

1. **Check local build output**:
   ```bash
   npm run build
   # Check out/index.html to see if meta tags are present
   ```

2. **If tags are missing in build output**:
   - This confirms the static export issue
   - Consider migrating to App Router with Metadata API
   - Or use a post-build script to inject tags

3. **If tags ARE in build output but not in deployed version**:
   - Check Vercel build logs
   - Verify deployment is using the built files correctly

## Current Status

- ✅ Meta tags are correctly coded in `pages/index.js`
- ❌ Meta tags are not appearing in rendered HTML
- ⚠️ Likely a Next.js static export limitation
