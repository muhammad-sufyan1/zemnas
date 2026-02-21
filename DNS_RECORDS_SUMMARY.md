# Your DNS Records Summary – zemnas.com

This document explains what you have and what matters for Vercel vs other services.

---

## 1. A records (address records)

| Name | Points to (IP) | Purpose |
|------|-----------------|--------|
| **zemnas.com** | 216.198.79.1 | Root domain – currently points to your hosting (cPanel/A2), not Vercel |
| **mail** | 70.32.23.19 | Email server |
| **webmail** | 70.32.23.19 | Webmail (e.g. Roundcube) |
| **cpanel, whm, webdisk** | 70.32.23.19 | cPanel / hosting panel |
| **cpcontacts, cpcalendars, autoconfig, autodiscover** | 70.32.23.19 | Calendar/contacts (e.g. CalDAV) |

Important for Vercel:

- There is **no A record for `www`** in this list. That’s correct – `www` should be a CNAME to Vercel, not an A record.
- If Vercel says to **remove** an A record for **www** with value **185.158.133.1**, and you don’t see it here, it may already be removed (or you need to check “All” records and search for `www`).

---

## 2. CNAME records

| Name | Points to | Purpose |
|------|-----------|--------|
| **www.zemnas.com** | c82f43a4f9a24d54.vercel-dns-017.com | **Vercel website** – this is what makes https://www.zemnas.com work on Vercel |
| **ftp.zemnas.com** | c82f43a4f9a24d54.vercel-dns-017.com | FTP subdomain (optional; can point to Vercel or stay as is) |
| **733gmz5kos5r** | gv-...googlehosted.com | Google domain verification |
| **url6458, 59184182, em1026** | sendgrid.net / wl183.sendgrid.net | SendGrid email |
| **s1._domainkey, s2._domainkey** | sendgrid.net (DKIM) | SendGrid DKIM for email authentication |

For Vercel you only need the **www** CNAME; the rest are for email/Google and can stay.

---

## 3. TXT records

These are for email (SPF, DKIM, DMARC), cPanel, SSL (ACME), and Google verification. **Do not remove or change them** unless you know you’re changing email or verification setup.

- **SPF / DKIM / DMARC** – email deliverability and authentication  
- **_acme-challenge** – SSL certificate (e.g. Let’s Encrypt)  
- **Google site verification** – Google Search Console / services  
- **CalDAV/CardDAV** – calendar/contacts  
- **_cpanel-dcv-test-record** – cPanel domain validation  

Leave all of these as they are for Vercel.

---

## What matters for Vercel only

- **www** must be a **CNAME** → `c82f43a4f9a24d54.vercel-dns-017.com`  
  - You already have this.
- **www** must **not** have an **A** record pointing to **185.158.133.1** (or any other IP).  
  - In your A records list there is no `www`; if Vercel still says “remove A for www”, search all record types for `www` and remove that A record only.

Root domain (**zemnas.com**):

- Right now **zemnas.com** (A record) points to **216.198.79.1** (your current host).
- If you want **https://zemnas.com** (without www) to show the Vercel site, you have two options:
  1. **Change the A record** for **zemnas.com** to Vercel’s IP (Vercel will show it in the Domains page for the root domain), or  
  2. **Use CNAME flattening** at your DNS provider (if supported) so **zemnas.com** resolves via a CNAME to Vercel.

If you’re okay with only **https://www.zemnas.com** being on Vercel and **zemnas.com** staying on your current host, you can leave the root A record as is.

---

## Quick checklist for “Invalid Configuration” on www

1. **Remove** (if it still exists): A record **Name = www**, **Value = 185.158.133.1**.  
2. **Keep**: CNAME **Name = www**, **Value = c82f43a4f9a24d54.vercel-dns-017.com**.  
3. **Do not touch**: All other A, CNAME, and TXT records (email, cPanel, Google, etc.).

After any change, wait 5–15 minutes and click **Refresh** next to **www.zemnas.com** in Vercel → Domains. Once it shows “Valid Configuration”, the secure connection for www will work.
