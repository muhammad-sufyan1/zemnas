# Complete Step-by-Step Guide: Deploy Zemnas.com to Vercel (FREE)

Follow these steps exactly, and your website will be live on zemnas.com in about 15 minutes!

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] Your code in the `zemnas-main` folder
- [ ] Node.js installed (check with `node --version`)
- [ ] A GitHub account (free - sign up at github.com if needed)
- [ ] Your domain `zemnas.com` registered
- [ ] Access to your domain registrar (where you bought the domain)

---

## 🚀 Step 1: Prepare Your Code

### 1.1 Open Terminal/Command Prompt

- **Mac**: Open Terminal (Applications → Utilities → Terminal)
- **Windows**: Open Command Prompt or PowerShell
- **Linux**: Open Terminal

### 1.2 Navigate to Your Project

```bash
cd /Users/abdul/Desktop/zemnas-main
```

### 1.3 Verify Everything Works

```bash
# Install dependencies (if not already done)
npm install

# Test the build
npm run build
```

If you see "built in X seconds" - you're good! ✅

---

## 📦 Step 2: Set Up GitHub Repository

### 2.1 Create GitHub Account (Skip if you already have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create your account (it's free)

### 2.2 Create a New Repository

1. After logging in, click the **"+"** icon (top right)
2. Click **"New repository"**
3. Fill in:
   - **Repository name**: `zemnas-website` (or any name you like)
   - **Description**: "Zemnas marketing website"
   - **Visibility**: Choose **Public** (or Private if you prefer)
   - **DO NOT** check "Initialize with README" (we already have files)
4. Click **"Create repository"**

### 2.3 Initialize Git in Your Project

Go back to your terminal and run:

```bash
# Make sure you're in the project folder
cd /Users/abdul/Desktop/zemnas-main

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Zemnas website"

# Rename branch to main (if needed)
git branch -M main
```

### 2.4 Connect to GitHub and Push

GitHub will show you commands. Use these:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/zemnas-website.git

# Push your code
git push -u origin main
```

**If asked for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token → Select "repo" scope → Copy token
  - Use this token as password

**Example:**
```bash
git remote add origin https://github.com/johndoe/zemnas-website.git
git push -u origin main
```

✅ **Verify**: Go to your GitHub repository page - you should see all your files!

---

## 🌐 Step 3: Deploy to Vercel

### 3.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Click **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub account

### 3.2 Import Your Project

1. After logging in, you'll see the Vercel dashboard
2. Click **"Add New..."** button (top right)
3. Click **"Project"**
4. You'll see a list of your GitHub repositories
5. Find **"zemnas-website"** (or whatever you named it)
6. Click **"Import"** next to it

### 3.3 Configure Project Settings

Vercel will auto-detect Vite! Just verify these settings:

- **Framework Preset**: Should show **"Vite"** ✅
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

**Everything should be correct automatically!** Just click **"Deploy"**

### 3.4 Wait for Deployment

- Vercel will build your project (takes 30-60 seconds)
- You'll see a progress bar
- When done, you'll see: **"Congratulations! Your project has been deployed."**

✅ **Your site is now live at**: `https://zemnas-website.vercel.app` (or similar)

---

## 🔗 Step 4: Add Your Custom Domain (zemnas.com)

### 4.1 Add Domain in Vercel

1. In your Vercel project dashboard, click **"Settings"** (top tab)
2. Click **"Domains"** (left sidebar)
3. In the input field, type: `zemnas.com`
4. Click **"Add"**
5. Also add: `www.zemnas.com` (click "Add" again)

### 4.2 Get DNS Records from Vercel

After adding domains, Vercel will show you DNS records you need to add:

**You'll see something like:**

For `zemnas.com` (apex domain):
- **Type**: `A`
- **Name**: `@` (or blank)
- **Value**: `76.76.21.21` (example - use what Vercel shows)

For `www.zemnas.com`:
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com` (example - use what Vercel shows)

**📝 Write these down or keep Vercel open!**

---

## 🌍 Step 5: Update DNS Records at Your Domain Registrar

### 5.1 Find Your Domain Registrar

Where did you buy `zemnas.com`? Common registrars:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Name.com
- Others

### 5.2 Log In to Your Domain Registrar

1. Go to your registrar's website
2. Log in to your account
3. Find **"My Domains"** or **"Domain Management"**
4. Click on `zemnas.com`

### 5.3 Access DNS Settings

Look for:
- **"DNS Management"**
- **"DNS Records"**
- **"Name Servers"**
- **"DNS Configuration"**

### 5.4 Add DNS Records

**Add Record 1 - Apex Domain:**

1. Click **"Add Record"** or **"Create Record"**
2. Fill in:
   - **Type**: `A` (or `A Record`)
   - **Name**: `@` (or leave blank, or type `zemnas.com`)
   - **Value/Points To**: `76.76.21.21` (use the IP Vercel gave you)
   - **TTL**: `3600` (or leave default)
3. Click **"Save"** or **"Add Record"**

**Add Record 2 - WWW Subdomain:**

1. Click **"Add Record"** again
2. Fill in:
   - **Type**: `CNAME` (or `CNAME Record`)
   - **Name**: `www`
   - **Value/Points To**: `cname.vercel-dns.com` (use what Vercel shows)
   - **TTL**: `3600` (or leave default)
3. Click **"Save"** or **"Add Record"**

### 5.5 Example DNS Records (Your Values May Differ)

```
Type    Name    Value
----    ----    -----
A       @       76.76.21.21
CNAME   www      cname.vercel-dns.com
```

**⚠️ Important**: Use the **exact values** Vercel shows you, not these examples!

---

## ⏳ Step 6: Wait for DNS Propagation

### 6.1 What is DNS Propagation?

DNS changes take time to spread across the internet. Usually 5-60 minutes, sometimes up to 24 hours.

### 6.2 Check DNS Propagation

1. Go to [whatsmydns.net](https://whatsmydns.net)
2. Enter `zemnas.com`
3. Select **"A"** record type
4. Check if it shows your Vercel IP address

**When it shows the correct IP everywhere = DNS is ready!**

### 6.3 Verify in Vercel

1. Go back to Vercel dashboard
2. Check **Settings → Domains**
3. You should see:
   - `zemnas.com` - Status: **"Valid Configuration"** ✅
   - `www.zemnas.com` - Status: **"Valid Configuration"** ✅

---

## ✅ Step 7: Verify Everything Works

### 7.1 Test Your Website

1. Open a new browser tab (or incognito/private window)
2. Visit: `https://zemnas.com`
3. You should see your website! 🎉

### 7.2 Test All Pages

Click through your site:
- ✅ Homepage loads
- ✅ Services pages work
- ✅ About page works
- ✅ Contact page works
- ✅ All routes work (no 404 errors)

### 7.3 Check SSL Certificate

- Your site should have `https://` (secure)
- Look for the padlock icon 🔒 in the browser
- Vercel provides free SSL automatically!

---

## 🔄 Step 8: Future Updates (How to Update Your Site)

Now that everything is set up, updating is SUPER easy:

### 8.1 Make Changes Locally

```bash
# Edit any file in your project
# For example: src/pages/Index.tsx
```

### 8.2 Test Locally (Optional)

```bash
npm run dev
# Visit http://localhost:8080 to test
```

### 8.3 Commit and Push Changes

```bash
# Add your changes
git add .

# Commit with a message
git commit -m "Update homepage content"

# Push to GitHub
git push
```

### 8.4 Vercel Automatically Deploys!

- Vercel detects the push
- Automatically builds your site
- Deploys to production
- Your site updates in 30-60 seconds!

**That's it! No manual uploads, no FTP, no hassle!** 🚀

---

## 🐛 Troubleshooting

### Problem: "Build Failed" in Vercel

**Solution:**
1. Check the build logs in Vercel dashboard
2. Make sure `npm run build` works locally
3. Check for errors in your code
4. Common issues:
   - Missing dependencies → Run `npm install` locally
   - TypeScript errors → Fix them locally first
   - Environment variables → Add them in Vercel Settings

### Problem: DNS Not Working

**Solution:**
1. Wait longer (up to 24 hours)
2. Check DNS records are correct
3. Use [whatsmydns.net](https://whatsmydns.net) to check propagation
4. Clear browser cache
5. Try incognito/private window

### Problem: "Domain Already in Use"

**Solution:**
1. You might have added it to Lovable before
2. Remove domain from Lovable first
3. Then add to Vercel

### Problem: Can't Push to GitHub

**Solution:**
1. Make sure you're logged in: `git config --global user.name "Your Name"`
2. Use Personal Access Token instead of password
3. Check repository URL is correct

### Problem: Vercel Can't Find My Repository

**Solution:**
1. Make sure repository is public (or give Vercel access)
2. Refresh Vercel dashboard
3. Check GitHub connection in Vercel Settings

---

## 📊 What You Get for FREE

✅ **Unlimited deployments**
✅ **100GB bandwidth/month** (plenty for a marketing site)
✅ **Automatic SSL certificates**
✅ **Custom domains**
✅ **Preview deployments** (for testing)
✅ **Automatic builds** from GitHub
✅ **CDN** (fast global delivery)
✅ **Analytics** (optional)

**This is more than enough for your website!**

---

## 🎉 Success Checklist

After completing all steps, you should have:

- [ ] Code pushed to GitHub
- [ ] Project deployed on Vercel
- [ ] Domain `zemnas.com` added in Vercel
- [ ] DNS records updated at registrar
- [ ] Website accessible at `https://zemnas.com`
- [ ] SSL certificate active (padlock icon)
- [ ] All pages working correctly

---

## 📞 Need Help?

If you get stuck:

1. **Check Vercel Docs**: https://vercel.com/docs
2. **Check GitHub Docs**: https://docs.github.com
3. **Vercel Support**: support@vercel.com
4. **Check build logs** in Vercel dashboard for errors

---

## 🎓 Quick Reference Commands

```bash
# Navigate to project
cd /Users/abdul/Desktop/zemnas-main

# Install dependencies
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Git commands
git add .
git commit -m "Your message"
git push

# Check git status
git status
```

---

**You're all set! Follow these steps and your website will be live on zemnas.com!** 🚀

If you need help with any specific step, let me know!
