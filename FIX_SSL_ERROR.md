# Fix: ERR_SSL_VERSION_OR_CIPHER_MISMATCH on www.zemnas.com

Your DNS is correct (Vercel shows ✅ Valid Configuration). The SSL error usually means:
- Your browser/network is still hitting an **old server** (cached DNS), or
- Vercel's SSL certificate is still **provisioning**, or
- **Browser/network cache** needs to be cleared.

Try these steps **in order**.

---

## Step 1: Wait 15–30 Minutes (SSL Provisioning)

After DNS becomes valid, Vercel needs time to **issue the SSL certificate**.

- **Do nothing** for 15–30 minutes.
- Then try again in a **new incognito/private window**: `https://www.zemnas.com`

If it works after waiting, the issue was certificate provisioning.

---

## Step 2: Flush DNS Cache (You Might Be Hitting Old Server)

Your computer may still be using **old DNS** and sending you to the previous server (which has the SSL error).

### On Mac:
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```
Enter your Mac password when asked.

### On Windows:
1. Open **Command Prompt** as Administrator
2. Run:
```bash
ipconfig /flushdns
```

### Then:
1. **Restart your browser** (close all windows and reopen).
2. Try again: `https://www.zemnas.com` in a **new tab** or **incognito/private window**.

---

## Step 3: Try Different Browser or Device

- Try **Chrome Incognito** (Ctrl+Shift+N or Cmd+Shift+N).
- Or try **Safari**, **Firefox**, or **Edge**.
- Or try on your **phone** using **mobile data** (not Wi‑Fi).

If it works in incognito or on another device/network, the problem is **cache or DNS on your main device/network**.

---

## Step 4: Verify You’re Actually Reaching Vercel

Check that `www.zemnas.com` resolves to Vercel, not the old IP.

### On Mac/Linux:
```bash
nslookup www.zemnas.com
```
Or:
```bash
dig www.zemnas.com CNAME
```

### On Windows:
```bash
nslookup www.zemnas.com
```

**You want to see:** a CNAME to something like `c82f43a4f9a24d54.vercel-dns-017.com` (or similar Vercel hostname).

If you still see the **old IP (e.g. 185.158.133.1)** or a different host, DNS is not fully updated for you yet → wait and flush DNS again (Step 2).

---

## Step 5: Check Vercel SSL / Force Redeploy

1. Go to **Vercel Dashboard** → your **zemnas** project.
2. **Settings** → **Domains**.
3. For `www.zemnas.com`:
   - Remove the domain, **Save**.
   - Add `www.zemnas.com` again, **Save**.
   - Wait 5–10 minutes and test again.

Optional: trigger a **new deployment** (e.g. push a small commit or use “Redeploy” in Vercel) so the latest config is applied.

---

## Step 6: Try HTTP (Temporary Test Only)

**Only to confirm the site is being served by Vercel:**

- Try: `http://www.zemnas.com` (no “s” in http).

If **HTTP works** but **HTTPS** gives the SSL error:
- Vercel is serving the site.
- The problem is SSL (certificate or cipher). Waiting (Step 1) and re-adding the domain (Step 5) usually fix it.

**After it works on HTTPS, always use:** `https://www.zemnas.com`.

---

## Step 7: Check From Another Network

- Use **mobile data** on your phone (turn off Wi‑Fi).
- Or use a different Wi‑Fi (e.g. friend’s house, hotspot).

If it works on another network, the issue is **your current network’s DNS cache** or **ISP cache**. Waiting 24–48 hours often resolves it.

---

## Summary Checklist

- [ ] Waited 15–30 minutes after “Valid Configuration”
- [ ] Flushed DNS (Mac or Windows)
- [ ] Restarted browser, tried incognito/private
- [ ] Tried another browser or device
- [ ] Checked `nslookup www.zemnas.com` / `dig www.zemnas.com CNAME` → points to Vercel
- [ ] Re-added `www.zemnas.com` in Vercel Domains and waited
- [ ] Tested on another network (e.g. mobile data)

---

## If It Still Fails

1. **Vercel Support:** [vercel.com/help](https://vercel.com/help) – tell them: “ERR_SSL_VERSION_OR_CIPHER_MISMATCH on www.zemnas.com after DNS Valid Configuration.”
2. **Certificate status:** In Vercel → Project → Settings → Domains, check if SSL shows as “Valid” or “Pending” for `www.zemnas.com`.

Most of the time this error goes away after **waiting for SSL** and **flushing DNS / trying incognito or another network**.
