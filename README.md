# ⚡ Solar Calculator Web App

A modern, responsive web application built with **Next.js** that helps users estimate solar energy generation, battery backup time, electricity bills, and solar installation costs.

---

## 🚀 Features

### ⚡ Solar Generation Calculator

* Estimate daily & monthly solar energy output
* Based on average Indian solar conditions

### 🔋 Battery Backup Calculator

* Calculates backup time based on:

  * Battery capacity (Ah)
  * Voltage
  * Load (W)
  * Battery type (Flat, Tubular, Lithium)
* Displays results in **hours + minutes (human-readable)**

### 💡 Electricity Bill Calculator

* Estimate monthly electricity cost
* Simple unit × rate calculation

### 💰 Solar Cost Comparison

* Compare solar installation cost across companies
* Categorized into:

  * Budget
  * Standard
  * Premium

---

## 🧱 Tech Stack

* **Frontend:** Next.js (App Router)
* **Styling:** Bootstrap 5
* **State Management:** React Hooks
* **Deployment:** AWS Amplify / Vercel
* **Ads Integration:** Google AdSense (planned)

---

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── page.js              # Home page
 │   ├── solar/page.js        # Solar calculator
 │   ├── battery/page.js      # Battery calculator
 │   ├── electricity/page.js  # Bill calculator
 │   ├── solar-cost/page.js   # Cost comparison
 │
 ├── components/
 │   ├── Navbar.js
 │   ├── AdUnit.js
 │   ├── StickyAd.js
 │   ├── AdPopup.js
 │   └── AdsenseScript.js
 │
 ├── globals.css
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/solar-calculator.git
cd solar-calculator
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Run Locally

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🌐 Deployment

### Option 1: AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify
3. Connect repository
4. Deploy

---

### Option 2: Vercel (Recommended)

1. Import project from GitHub
2. Click deploy
3. Done

---

## 💰 Monetization (Google AdSense)

### Steps:

1. Create account at:
   https://adsense.google.com

2. Add required pages:

   * About
   * Contact
   * Privacy Policy

3. Replace in code:

```js
data-ad-client="ca-pub-XXXXXXXX"
data-ad-slot="YOUR_SLOT_ID"
```

---

### Ad Placement Strategy

* Top Banner Ad
* Middle Content Ad
* Sticky Bottom Ad
* One-time Popup Ad

---

## 📱 Responsive Design

* Mobile-first layout
* Bootstrap grid system
* Adaptive navigation bar

---

## 🧠 Future Improvements

* SEO optimization (important for traffic)
* Blog/content section
* Solar ROI calculator
* Subsidy calculation (India-specific)
* User location-based estimation
* Analytics integration

---

## ⚠️ Important Notes

* Domain is required for AdSense approval
* Avoid excessive popup ads (policy violation risk)
* Focus on SEO for long-term growth

---

## 🤝 Contribution

Contributions are welcome! Feel free to:

* Fork the repo
* Create a feature branch
* Submit a PR

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 💬 Author

Built by **Nripendra**
Associate Software Engineer | Full Stack Developer

---

## ⭐ If you like this project

Give it a star ⭐ and share it!

---
