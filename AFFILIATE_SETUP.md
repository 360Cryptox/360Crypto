# 360Crypto Affiliate Setup Guide

## ⚡ Do These TODAY (5 min each, instant links)

### 1. MEXC — 40-70% revenue share
1. Go to: https://www.mexc.com/register
2. Create account → verify email
3. Profile → Referral → copy your link
4. In `lib/affiliates.ts` replace `mexc.url` with: `https://promote.mexc.com/r/YOUR_CODE`

### 2. Bitget — 30-50% commission
1. Go to: https://www.bitget.com/register
2. Create account → Profile → Referral
3. In `lib/affiliates.ts` replace `bitget.url` with: `https://www.bitget.com/register?referralCode=YOUR_CODE`

### 3. Binance — 20% default (can increase)
1. Go to: https://accounts.binance.com/register
2. Create account → Dashboard → Referral → copy link
3. In `lib/affiliates.ts` replace `binance.url` with: `https://accounts.binance.com/register?ref=YOUR_CODE`

### 4. Changelly — 50% of swap fees
1. Go to: https://affiliate.changelly.com
2. Sign up → instant referral link
3. In `lib/affiliates.ts` replace `changelly.url` with: `https://changelly.com/?ref=YOUR_CODE`

### 5. RollerCoin — 25% lifetime
1. Go to: https://rollercoin.com
2. Sign up → Profile → Referral
3. In `lib/affiliates.ts` replace `rollercoin.url` with: `https://rollercoin.com/?r=YOUR_CODE`

---

## 🟢 Apply This Week (24-48h approval)

| Program | Apply At | Commission | Replace in affiliates.ts |
|---------|---------|-----------|--------------------------|
| Koinly | koinly.io/affiliates | **30% recurring** | `koinly.url` |
| CoinLedger | coinledger.io/affiliate | 25% | `coinledger.url` |
| Cryptohopper | cryptohopper.com/affiliates | 20% recurring | add to `cryptohopper.url` |
| 3Commas | 3commas.io/affiliate | 30% recurring | add to `threecommas.url` |

---

## 🟡 Apply When Site Has Traffic (3-7 days review)

| Program | Apply At | Commission |
|---------|---------|-----------|
| Ledger | affiliate.ledger.com | 10%, 30-day cookie |
| Trezor | trezor.io/affiliate | ~12% |
| TradingView | Already have link.360crypto.site/p67 ✓ | — |

---

## 📢 Running Ads on Crypto Sites

### A-Ads (Start for $5 in BTC — fastest)
- URL: https://a-ads.com
- Sign up as advertiser → create campaign → target crypto sites
- Pay per day/impression in Bitcoin
- Best for: sending traffic to Koinly, Pionex, MEXC pages

### Coinzilla (Premium — ~$100+ budget)
- URL: https://coinzilla.com
- Target by: coin type, exchange users, DeFi audience
- Best for: scaling once you know what converts

### Bitmedia (Mid-tier — ~$50 min)
- URL: https://bitmedia.io
- ML-based targeting across 5,000+ crypto sites
- Good quality traffic, CPC or CPM

---

## 💰 Also Add Your Site As a Publisher (earn from YOUR site's ad space)

Apply to show ads on 360crypto.site and earn CPM revenue on top of affiliate income:

1. **Coinzilla Publisher**: https://coinzilla.com/publishers
2. **A-Ads Publisher**: https://a-ads.com — paste a script tag, done in 5 min
3. **Bitmedia Publisher**: https://bitmedia.io/publishers

---

## Updating an Affiliate URL (when you get a code)

1. Open `lib/affiliates.ts`
2. Find the affiliate entry (e.g., `mexc:`)
3. Replace the `url:` value with your referral link
4. Run: `npm run build` → `git add lib/affiliates.ts && git commit -m "feat: add MEXC referral link" && git push`
5. Site auto-deploys in ~2 min via GitHub Actions
