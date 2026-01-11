# Open Graph Image Requirement

## Current Status

The Open Graph meta tags reference: `https://lonemountainvistas.com/images/og-image.jpg`

**Issue**: This image file does not currently exist in the repository.

## Required Image Specifications

- **Dimensions**: 1200 x 630 pixels (recommended)
- **Format**: JPG, PNG, or WEBP
- **File Size**: Less than 5 MB
- **Location**: Should be in `/public/images/` directory (or `/public/` root)

## Options

### Option 1: Create OG Image
Create a 1200x630px image with:
- Site branding (Lone Mountain Vistas)
- Key messaging about luxury real estate
- Las Vegas/Nevada imagery
- Professional design

### Option 2: Use Existing Image
If you have a suitable image, place it at:
- `/public/images/og-image.jpg` (current path in meta tags)
- OR `/public/og-image.jpg` (update meta tags to match)

### Option 3: Use Placeholder
Temporarily use a placeholder service or existing property image until a custom OG image is created.

## Next Steps

1. Create or obtain a 1200x630px image
2. Save it to `/public/images/og-image.jpg`
3. Verify the image is accessible at: `https://lonemountainvistas.com/images/og-image.jpg`
4. Test with Open Graph validators:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

## Current Meta Tag Configuration

All Open Graph and Twitter Card meta tags are now properly configured in `pages/index.js`. Once the image file is added, the validation should pass.
