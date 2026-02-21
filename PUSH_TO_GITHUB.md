# Push Code to GitHub - Step by Step Commands

## 🚀 Step-by-Step Commands

Copy and paste these commands **one by one** in your terminal:

### Step 1: Navigate to Your Project
```bash
cd /Users/abdul/Desktop/zemnas-main
```

### Step 2: Check Current Status
```bash
git status
```

### Step 3: Make Sure All Files Are Added
```bash
git add .
```

### Step 4: Commit Your Changes (if not already committed)
```bash
git commit -m "Initial commit - Zemnas website ready for deployment"
```

### Step 5: Update Remote URL with Your Token
```bash
git remote set-url origin https://ghp_<YOUR_GITHUB_PAT>@github.com/muhammad-sufyan1/zemnas.git
```

### Step 6: Push to GitHub
```bash
git push -u origin main
```

---

## ✅ Expected Output

After running `git push`, you should see something like:

```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XX.XX MiB | X.XX MiB/s, done.
Total XX (delta X), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (X/X), done.
To https://github.com/muhammad-sufyan1/zemnas.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🎉 Success!

If you see the above output, your code is now on GitHub!

**Next Step:** Go to Vercel and deploy (see STEP_BY_STEP_DEPLOYMENT.md)

---

## 🐛 If You Get Errors

### Error: "branch 'main' does not exist"
**Solution:**
```bash
git branch -M main
git push -u origin main
```

### Error: "remote origin already exists"
**Solution:** The remote is already set, just push:
```bash
git push -u origin main
```

### Error: "nothing to commit"
**Solution:** Your files are already committed, just push:
```bash
git push -u origin main
```

---

## 🔒 Security Note

After pushing, you might want to remove the token from your command history:

```bash
# Clear last command from history (optional)
history -d $(history | tail -2 | head -1 | awk '{print $1}')
```

Or just be aware that the token is in your terminal history. For future pushes, you can use SSH keys (more secure).

---

**Ready? Copy and paste the commands above!** 🚀
