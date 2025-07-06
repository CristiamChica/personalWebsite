# Google Analytics & Vercel Deployment Guide

## Part 1: Setting Up Google Analytics 4 (GA4)

### Step 1: Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Fill in your account information:
   - Account name: "Personal Website" (or your preferred name)
   - Choose data sharing settings (recommended: check all boxes)

### Step 2: Create a Property
1. Property name: "Personal Website"
2. Reporting time zone: Choose your time zone
3. Currency: Choose your preferred currency
4. Click "Next"

### Step 3: About Your Business
1. Industry category: "Education" or "Professional Services"
2. Business size: "Small" (1-10 employees)
3. How you plan to use Analytics: Check "Examine user behavior"
4. Click "Create"

### Step 4: Accept Terms of Service
1. Read and accept the Terms of Service
2. Accept the Data Processing Amendment

### Step 5: Set Up Data Stream
1. Choose "Web" platform
2. Website URL: Will be your Vercel domain initially (e.g., `https://your-app.vercel.app`)
3. Stream name: "Personal Website"
4. Click "Create stream"

### Step 6: Get Your Measurement ID
1. After creating the stream, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. **IMPORTANT**: Copy this ID - you'll need it for the next step!

### Step 7: Update Your Website Code
1. Open `index.html` in your project
2. Replace **both instances** of `GA_MEASUREMENT_ID` with your actual Measurement ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. Open `src/utils/analytics.js`
4. Replace `GA_MEASUREMENT_ID` with your actual ID:
   ```javascript
   export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```

## Part 2: Deploying to Vercel

### Why Vercel?
- **Free tier** with generous limits
- **Automatic deployments** from GitHub
- **Custom domain support** (free)
- **Optimized for React/Vite** projects
- **Global CDN** for fast loading
- **Automatic HTTPS** and SSL certificates

### Step 1: Push to GitHub
1. Create a new repository on GitHub:
   - Go to [GitHub](https://github.com/) and click "New repository"
   - Name: "personal-website" (or your preference)
   - Description: "My personal academic website"
   - Make it **Public** (required for free Vercel hosting)
   - Don't initialize with README (you already have one)

2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website with analytics"
   git branch -M main
   git remote add origin https://github.com/yourusername/personal-website.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and sign up using your GitHub account
2. Click "New Project"
3. Import your GitHub repository:
   - Find your "personal-website" repository
   - Click "Import"

4. Configure deployment:
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `dist` (default)
   - **Install Command**: `npm install` (default)

5. Click "Deploy"

### Step 3: Verify Deployment
1. Vercel will provide a URL like `https://your-app-name.vercel.app`
2. Visit the URL to verify your site works
3. Check browser developer console for any errors

### Step 4: Set Up Custom Domain (Optional but Recommended)
1. Buy a domain from a registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. In Vercel dashboard:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

### Step 5: Update Google Analytics Domain
1. Go back to Google Analytics
2. Navigate to Admin > Data Streams > Web Stream
3. Update the website URL to your new domain
4. If using a custom domain, add both the Vercel URL and custom domain

## Part 3: Viewing Analytics

### Real-Time Data
1. Go to Google Analytics dashboard
2. Click "Reports" > "Realtime"
3. You'll see live visitors, page views, and events

### Historical Data
- Data appears within 24-48 hours
- Go to "Reports" > "Acquisition" to see traffic sources
- "Engagement" > "Events" to see tracked button clicks
- "Engagement" > "Pages and screens" for page popularity

### What You'll Track
Your website now tracks:
- **Page views** (automatic)
- **Time on site** (automatic)
- **Bounce rate** (automatic)
- **Geographic location** (automatic)
- **Device/browser info** (automatic)
- **Email copy clicks** (custom event)
- **Social media clicks** (LinkedIn, Scholar, GitHub)
- **PDF downloads** (CV, papers, publications, thesis)
- **Navigation between pages** (custom page view tracking)

### Useful Reports
1. **Audience Overview**: Demographics and technology
2. **Acquisition**: How people find your site
3. **Behavior > Site Content**: Most popular pages
4. **Events**: Custom interactions you've set up

## Part 4: Automatic Deployments

### Benefits
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Instant rollbacks if needed

### To Update Your Site
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: your changes description"
   git push
   ```
4. Vercel automatically deploys in 1-2 minutes

## Part 5: Performance Tips

### Vercel Optimization
- Your site will automatically use Vercel's global CDN
- Images are automatically optimized
- Gzip compression is enabled by default

### Analytics Best Practices
1. Check analytics weekly for the first month
2. Monitor which pages are most popular
3. Track which research papers get the most downloads
4. Use data to improve content placement

### SEO Considerations
- Your site is now production-ready for search engines
- Consider adding a sitemap (Vercel can generate automatically)
- Google will start indexing your site within days

---

## Quick Reference Commands

**Local Development:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

**Deployment:**
```bash
git add .
git commit -m "Your message"
git push             # Triggers automatic Vercel deployment
```

**Analytics Setup:**
- Replace `GA_MEASUREMENT_ID` in `index.html` and `src/utils/analytics.js`
- Your ID format: `G-XXXXXXXXXX`

**URLs to bookmark:**
- Google Analytics: https://analytics.google.com/
- Vercel Dashboard: https://vercel.com/dashboard
- Your live site: `https://your-domain.vercel.app`
