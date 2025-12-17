# বাকির খাতা Landing Page

A beautiful, modern landing page for the BakiKhata (বাকির খাতা) mobile app built for Cloudflare Pages.

## Features

- 🇧🇩 Bengali-first design with bilingual support
- 📱 Fully responsive for mobile and desktop
- ⚡ Fast loading with optimized assets
- 🎨 Modern design with glassmorphism and gradients
- 🌙 Beautiful animations and micro-interactions
- 📥 Direct APK download section

## Project Structure

```
baki-khata-landing/
├── index.html          # Main HTML file
├── style.css           # Stylesheets
├── script.js           # JavaScript functionality
├── wrangler.toml       # Cloudflare configuration
├── assets/             # Images and icons
│   ├── favicon.png
│   └── icon.png
└── downloads/          # APK files for download
    └── BakiKhata-v2.0.0.apk
```

## Local Development

### Using Python
```bash
cd baki-khata-landing
python3 -m http.server 8080
```

### Using Node.js
```bash
npx serve .
```

Then open http://localhost:8080 in your browser.

## Deployment to Cloudflare Pages

### Option 1: Using Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
wrangler pages deploy . --project-name baki-khata-landing
```

### Option 2: Using Cloudflare Dashboard

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Create a new project
3. Connect your GitHub repository or upload directly
4. Set the build output directory to `/`
5. Deploy!

## Adding APK for Download

1. Build your APK from the baki-khata-v2 project
2. Copy the APK to the `downloads/` folder
3. Rename it to `BakiKhata-v2.0.0.apk` (or update the HTML link)
4. Redeploy

## Customization

### Colors
Main colors are defined in `style.css` using CSS variables:
- `--primary`: #10B981 (Green)
- `--secondary`: #6366F1 (Purple)

### Content
Edit `index.html` to update:
- App description and features
- Contact information
- Download links

## License

Made with 💜 By Jibon Hossen
# Baki-Khata-Landing-page
