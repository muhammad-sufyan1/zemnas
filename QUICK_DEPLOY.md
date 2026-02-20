# Quick Deploy Guide - Zemnas.com

## ✅ What's Been Done

1. ✅ Removed Lovable dependencies (`lovable-tagger`)
2. ✅ Updated `vite.config.ts` (removed Lovable plugin)
3. ✅ Updated `package.json` (removed Lovable package)
4. ✅ Created deployment configs (`vercel.json`, `netlify.toml`)
5. ✅ Updated README with deployment instructions
6. ✅ Updated domain references to `zemnas.com`
7. ✅ Tested build - works perfectly!

## 🚀 Deploy Now (Choose One)

### Option 1: Vercel (Fastest - 5 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Then:
1. Go to vercel.com → Your Project → Settings → Domains
2. Add `zemnas.com` and `www.zemnas.com`
3. Copy DNS records shown
4. Update DNS at your domain registrar
5. Wait 5-60 minutes

### Option 2: Netlify (Also Fast)

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

Then:
1. Go to Netlify → Site Settings → Domain Management
2. Add custom domain `zemnas.com`
3. Update DNS records as shown

### Option 3: Manual Upload

```bash
# Build the site
npm run build

# Upload the 'dist' folder to your hosting
```

## 📋 DNS Configuration

After deploying, update DNS at your domain registrar:

**For Vercel:**
- A Record: `@` → `76.76.21.21` (check Vercel dashboard)
- CNAME: `www` → `cname.vercel-dns.com`

**For Netlify:**
- A Record: `@` → `75.2.60.5` (check Netlify dashboard)
- CNAME: `www` → `your-site.netlify.app`

## ✅ Verify Deployment

1. Visit `https://zemnas.com` (wait for DNS propagation)
2. Test all pages (home, services, about, contact)
3. Check mobile view
4. Verify SSL certificate (should be automatic)

## 📚 Full Documentation

See `DEPLOYMENT.md` for detailed instructions.

---

**Your site is ready to deploy!** 🎉
