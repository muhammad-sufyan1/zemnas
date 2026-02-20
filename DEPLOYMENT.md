# Deployment Guide for Zemnas.com

This guide will help you deploy the Zemnas website to your own hosting and configure the domain `zemnas.com`.

## 🎯 Prerequisites

- Domain name: `zemnas.com` (already owned)
- Node.js 18+ installed locally
- Git repository (optional, but recommended)

## 📋 Step-by-Step Deployment

### Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest option with automatic deployments from GitHub.

#### Step 1: Prepare Your Code

1. **Remove Lovable dependencies** (already done):
   ```bash
   npm install
   ```

2. **Test build locally**:
   ```bash
   npm run build
   npm run preview
   ```

#### Step 2: Deploy to Vercel

**Method A: Via Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository (or upload the `dist` folder)
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

**Method B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Step 3: Configure Domain

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add domain: `zemnas.com`
3. Add domain: `www.zemnas.com` (optional)
4. Vercel will show you DNS records to add

#### Step 4: Update DNS Records

Go to your domain registrar (where you bought zemnas.com) and update DNS:

**For apex domain (zemnas.com):**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com` (or what Vercel shows)

**OR use CNAME flattening** (if your registrar supports it):
- Type: `CNAME`
- Name: `@`
- Value: `cname.vercel-dns.com`

Wait 5-60 minutes for DNS propagation, then your site will be live!

---

### Option 2: Deploy to Netlify

#### Step 1: Deploy

**Method A: Via Netlify Dashboard**

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

**Method B: Via Netlify CLI**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Step 2: Configure Domain

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Enter `zemnas.com`
4. Netlify will show DNS records

#### Step 3: Update DNS Records

**For apex domain:**
- Type: `A`
- Name: `@`
- Value: `75.2.60.5` (check Netlify dashboard for current IP)

**For www:**
- Type: `CNAME`
- Name: `www`
- Value: `your-site.netlify.app`

---

### Option 3: Deploy to AWS S3 + CloudFront

#### Step 1: Build

```bash
npm run build
```

#### Step 2: Upload to S3

1. Create an S3 bucket named `zemnas.com`
2. Enable static website hosting
3. Upload all files from `dist/` folder
4. Set bucket policy for public read access

#### Step 3: Configure CloudFront

1. Create CloudFront distribution
2. Set origin to your S3 bucket
3. Add custom domain `zemnas.com`
4. Update DNS to point to CloudFront

---

### Option 4: Deploy to Cloudflare Pages

1. Go to Cloudflare Dashboard → **Pages**
2. Connect your GitHub repository
3. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Add custom domain `zemnas.com`
5. Cloudflare will automatically configure DNS

---

## 🔧 Post-Deployment Checklist

- [ ] Test website at `https://zemnas.com`
- [ ] Test `https://www.zemnas.com` (if configured)
- [ ] Verify SSL certificate is active (should be automatic)
- [ ] Test all routes (homepage, services, about, contact, etc.)
- [ ] Check mobile responsiveness
- [ ] Verify images and assets load correctly
- [ ] Test contact form (if applicable)
- [ ] Check page load speed
- [ ] Verify SEO meta tags in page source

## 🚨 Troubleshooting

### DNS Not Working

- Wait 24-48 hours for full DNS propagation
- Use [whatsmydns.net](https://whatsmydns.net) to check DNS propagation
- Clear your browser cache
- Try accessing via IP directly

### 404 Errors on Routes

- Ensure your hosting provider supports SPA routing (all routes redirect to `index.html`)
- Vercel and Netlify handle this automatically with the config files provided
- For other hosts, you may need to configure redirects manually

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check Node.js version: `node --version` (should be 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

### SSL Certificate Issues

- Vercel and Netlify provide free SSL automatically
- Wait a few minutes after adding domain for SSL to provision
- For other hosts, you may need to configure SSL manually

## 📝 Environment Variables (If Needed)

If you need to add environment variables later:

1. **Vercel**: Project Settings → Environment Variables
2. **Netlify**: Site Settings → Environment Variables
3. **Local**: Create `.env` file (already in `.gitignore`)

Example `.env`:
```env
VITE_API_URL=https://api.zemnas.com
VITE_ANALYTICS_ID=your-id
```

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Connect your GitHub repository
2. Every push to `main` branch automatically deploys
3. Preview deployments for pull requests

## 📊 Monitoring & Analytics

Consider adding:
- Google Analytics
- Vercel Analytics (if using Vercel)
- Sentry for error tracking
- Uptime monitoring (UptimeRobot, Pingdom)

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

---

**Your website is now independent of Lovable and fully deployed on your domain!** 🎉
