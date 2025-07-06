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
1. Since you already have GitHub connected to Vercel, go to your [Vercel Dashboard](https://vercel.com/dashboard)
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

### Step 4: Set Up Custom Domain (cristianchica.com)
Since you already own `cristianchica.com` through Squarespace and it's **currently connected to Google Sites**, here's how to switch it to your new Vercel site:

#### ⚠️ Important: Switching from Google Sites to Vercel

**Your domain is currently pointing to Google Sites, so we need to redirect it to Vercel instead.**

#### Step 1: In Vercel Dashboard:
1. Go to your project in Vercel
2. Click on the "Settings" tab
3. In the sidebar, click "Domains"
4. Click "Add Domain"
5. Enter `cristianchica.com` and `www.cristianchica.com` (add both!)
6. **Important**: Vercel will show you DNS records to configure

#### Step 2: In Squarespace Domain Settings:
1. Log into your [Squarespace account](https://account.squarespace.com/)
2. Go to "Settings" > "Domains"
3. Click on `cristianchica.com`
4. Click "Advanced DNS Settings" or "DNS Settings"
5. Look for "Custom Records" or "DNS Records"
6. **You'll see existing records pointing to Google Sites - we need to replace them**

#### Step 3: Replace Google Sites DNS Records in Squarespace:

**You'll likely see existing records like these (pointing to Google Sites):**
- CNAME records pointing to `ghs.googlehosted.com`
- A records pointing to Google's IPs (like `216.58.194.174`)

**Replace them with these Vercel records:**

**If you can modify A records:**
- Type: `A`
- Host: `@` (or leave blank)
- Value: `216.198.79.1`
- TTL: `Auto` or `3600`

**CNAME Record (REQUIRED - you already added this one!):**
- Type: `CNAME`
- Host: `www`
- Value: `819aeef83c397aeb.vercel-dns-017.com`
- TTL: `Auto` or `3600`

#### Step 4: If Squarespace doesn't allow A record changes (most common):
**This is totally normal!** Since you successfully added the CNAME record, here's what to do:

1. **Keep the CNAME record you added** (this is the important one!)
2. **Delete or ignore any existing Google Sites records** if possible
3. **In Vercel Dashboard:**
   - Make sure both `cristianchica.com` AND `www.cristianchica.com` are added
   - Set `www.cristianchica.com` as your **primary domain**
   - Vercel will automatically redirect `cristianchica.com` → `www.cristianchica.com`

4. **Your site will work at:**
   - `https://www.cristianchica.com` (primary - your new React site!)
   - `https://cristianchica.com` (redirects to www version)

#### Step 5: What Happens to Your Google Sites Website:
1. **Your Google Sites will become inaccessible** at `cristianchica.com` once DNS changes propagate
2. **Your Google Sites content will still exist** - it just won't be accessible via your custom domain
3. **You can still access it** via the Google Sites URL (something like `sites.google.com/view/yoursite`)
4. **Your new React website will replace it** at `cristianchica.com`

#### Step 6: Verification:
1. **With the CNAME record updated, your new site will replace Google Sites!**
2. DNS changes can take 2-24 hours to propagate
3. Vercel will automatically detect when DNS is configured correctly
4. Once verified, Vercel will automatically generate SSL certificates
5. **Your NEW React site will be available at:**
   - Primary: `https://www.cristianchica.com`
   - Redirect: `https://cristianchica.com` → `https://www.cristianchica.com`

**✅ You're switching from Google Sites to your custom React site!** This is exactly what you want.

**Note**: Since you're switching from Google Sites to Vercel, the CNAME record you added will redirect traffic from your Google Sites to your new React website. This is exactly what you want!

### Step 5: Update Google Analytics Domain
1. Go back to Google Analytics
2. Navigate to Admin > Data Streams > Web Stream
3. Update the website URL to `https://www.cristianchica.com`
4. **Optional**: Add both domains for tracking:
   - Primary: `https://www.cristianchica.com`
   - Secondary: `https://your-app-name.vercel.app` (for testing)

#### Cross-Domain Tracking Setup:
If you want to track both domains, add this to your analytics configuration:
1. In Google Analytics, go to Admin > Data Streams
2. Click on your web stream
3. Scroll down to "Configure tag settings"
4. Click "Configure your domains"
5. Add both:
   - `www.cristianchica.com`
   - `your-app-name.vercel.app`

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

## Part 6: Troubleshooting Squarespace Domain Setup

### Common Issues and Solutions

#### Issue 1: "Domain not verified" in Vercel
**Solution**: 
- Check that DNS records are exactly as specified
- Wait 24-48 hours for DNS propagation
- Use [DNS Checker](https://dnschecker.org/) to verify records are live

#### Issue 2: Switching from Google Sites to Vercel
**Solution**: 
- The CNAME record you added will override Google Sites DNS
- Wait 2-24 hours for full propagation
- Your Google Sites will become inaccessible at your domain (this is expected!)
- You can still access Google Sites via the direct Google Sites URL if needed

#### Issue 3: "I can still see my old Google Sites"
**Solution**:
- Clear browser cache and cookies
- Try visiting in incognito/private mode
- DNS changes can take up to 48 hours to fully propagate worldwide
- Use [DNS Checker](https://dnschecker.org/) to verify the CNAME record is live

#### Issue 4: Squarespace doesn't allow A records
**Solution**: 
- Use the CNAME method with `alias.vercel-dns.com`
- Some Squarespace plans have different DNS options
- Contact Squarespace support if needed

#### Issue 5: SSL certificate issues
**Solution**:
- Vercel automatically generates SSL certificates
- If not working, try removing and re-adding the domain in Vercel
- Ensure both `cristianchica.com` and `www.cristianchica.com` are added

#### Issue 6: Redirects not working properly
**Solution**:
- In Vercel, set `cristianchica.com` as primary domain
- Vercel will automatically redirect `www` to non-www (or vice versa)
- You can configure this in Vercel domain settings

#### DNS Record Check
To verify your DNS is working, use these commands in Terminal/PowerShell:
```bash
nslookup cristianchica.com
nslookup www.cristianchica.com
```

#### Quick Test
1. After setting DNS records, wait 2-4 hours
2. Visit `https://cristianchica.com` in incognito mode
3. If it doesn't work immediately, wait up to 48 hours for full propagation

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
- Your live site: `https://www.cristianchica.com` (after DNS setup)
- Temporary Vercel URL: `https://your-app-name.vercel.app`
