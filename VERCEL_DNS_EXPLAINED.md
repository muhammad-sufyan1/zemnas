# Understanding Vercel DNS Records

## What Your Screenshot Shows

### 1. Domain status

| Domain | Status | Meaning |
|--------|--------|--------|
| **zemnas.com** | ✅ Valid Configuration | Root domain is correctly set up. It redirects (307) to www.zemnas.com. |
| **www.zemnas.com** | ❌ Invalid Configuration | The www subdomain is not correctly pointing to Vercel. |

So the only problem is **www.zemnas.com**.

---

## Why www.zemnas.com Is Invalid

Vercel is telling you two things:

### A) Remove this (conflicting record)

- **Type:** **A**
- **Name:** **www**
- **Value:** **185.158.133.1**

This is an **A record** for `www` that points to the IP **185.158.133.1** (likely an old host, e.g. Lovable or another provider).  
As long as this A record exists, `www.zemnas.com` will not use Vercel, so Vercel marks the domain as invalid.

**Action:** Delete this A record at your DNS provider.

---

### B) Set this (what Vercel needs)

- **Type:** **CNAME**
- **Name:** **www**
- **Value:** **c82f43a4f9a24d54.vercel-dns-017.com.**

Vercel wants `www` to be a **CNAME** pointing to their hostname, not an A record to an old IP.

**Action:** Add this CNAME record at your DNS provider (after removing the A record).

---

## Summary in One Sentence

You currently have: **www → A record → 185.158.133.1 (old host).**  
Vercel needs: **www → CNAME → c82f43a4f9a24d54.vercel-dns-017.com.**

So: remove the A record for `www`, then add the CNAME for `www`.

---

## What to Do at Your DNS Provider

1. **Remove**
   - Type: **A**
   - Name: **www**
   - Value: **185.158.133.1**

2. **Add**
   - Type: **CNAME**
   - Name: **www**
   - Value: **c82f43a4f9a24d54.vercel-dns-017.com.** (trailing dot is optional but often recommended)

3. Save, wait 5–15 minutes, then in Vercel click **Refresh** next to `www.zemnas.com`. It should then show **Valid Configuration**.

---

## Why This Fixes “Not Secure”

With the wrong A record, traffic for `www.zemnas.com` goes to 185.158.133.1, not Vercel. So Vercel cannot serve or secure that hostname.  
Once `www` points to Vercel via the CNAME, Vercel can issue SSL and serve the site, and the “not secure” warning for www will go away.
