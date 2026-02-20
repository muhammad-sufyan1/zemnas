# 🚀 Quick Deployment Checklist

Use this checklist as you go through the deployment process. Check off each step as you complete it!

## ✅ Pre-Deployment Checklist

- [ ] Node.js installed (`node --version` works)
- [ ] Code builds successfully (`npm run build` works)
- [ ] GitHub account created
- [ ] Domain `zemnas.com` registered
- [ ] Access to domain registrar

---

## 📦 Step 1: GitHub Setup (5 minutes)

- [ ] Created new GitHub repository
- [ ] Initialized git in project (`git init`)
- [ ] Added all files (`git add .`)
- [ ] Created first commit (`git commit -m "Initial commit"`)
- [ ] Connected to GitHub (`git remote add origin ...`)
- [ ] Pushed code to GitHub (`git push -u origin main`)
- [ ] Verified files appear on GitHub

---

## 🌐 Step 2: Vercel Setup (5 minutes)

- [ ] Created Vercel account (via GitHub)
- [ ] Imported project from GitHub
- [ ] Verified build settings (Vite detected automatically)
- [ ] Clicked "Deploy"
- [ ] Waited for deployment (30-60 seconds)
- [ ] Got deployment URL (e.g., `zemnas-website.vercel.app`)

---

## 🔗 Step 3: Domain Setup (5 minutes)

- [ ] Added `zemnas.com` in Vercel Settings → Domains
- [ ] Added `www.zemnas.com` in Vercel Settings → Domains
- [ ] Copied DNS records from Vercel
- [ ] Logged into domain registrar
- [ ] Added A record for `@` (apex domain)
- [ ] Added CNAME record for `www`
- [ ] Saved DNS records

---

## ⏳ Step 4: Wait & Verify (5-60 minutes)

- [ ] Waited 5-60 minutes for DNS propagation
- [ ] Checked DNS at [whatsmydns.net](https://whatsmydns.net)
- [ ] Verified domain status in Vercel (shows "Valid Configuration")
- [ ] Tested `https://zemnas.com` in browser
- [ ] Verified SSL certificate (padlock icon shows)
- [ ] Tested all pages work correctly

---

## 🎉 Success!

- [ ] Website live at `https://zemnas.com`
- [ ] All pages working
- [ ] SSL certificate active
- [ ] Mobile responsive
- [ ] Ready for updates!

---

## 🔄 Future Updates

When you want to make changes:

1. Edit files locally
2. `git add .`
3. `git commit -m "Your message"`
4. `git push`
5. Vercel automatically deploys! ✨

---

**Total Time: ~15-20 minutes for initial setup**

**Future Updates: 30 seconds (just push code!)**
