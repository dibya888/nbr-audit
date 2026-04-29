# 🏛️ ২০২৩-২৪ সালের অডিট নির্বাচন – টিআইএন অনুসন্ধান

বাংলাদেশের **জাতীয় রাজস্ব বোর্ড (NBR)**–এর প্রদত্ত তালিকা অনুসরণ করে তৈরি একটি **স্ট্যাটিক ওয়েব অ্যাপ**, যা দিয়ে **১২ সংখ্যার টিআইএন (TIN)** ব্যবহার করে ২০২৩-২৪ সালের অডিট সিলেকশন সংক্রান্ত তথ্য অনুসন্ধান করা যায়।

এই প্রোজেক্টটি সম্পূর্ণভাবে **Frontend‑only**, **Govt‑ready UI**, **বাংলা ভাষা ও বাংলা সংখ্যা (০–৯)** সাপোর্ট করে তৈরি করা হয়েছে।

🌐 **লাইভ দেখুন:**  
👉 [Audit Selection – TIN Search (Live)](https://dibya888.github.io/nbr-audit/)

---

## ✨ প্রধান বৈশিষ্ট্য (Features)

- ✅ **Exact 12‑Digit TIN Search** (Partial বা Prefix search নয়)
- ✅ **সম্পূর্ণ বাংলা UI**
- ✅ **বাংলা সংখ্যা (০–৯)** প্রদর্শন
- ✅ **Shonar Bangla Font Family**
- ✅ **Desktop ও Mobile Responsive Design**
  - Desktop → Table View
  - Mobile → Card View
- ✅ **Bootstrap 5 ভিত্তিক Modern UI**
- ✅ **GitHub Pages‑Compatible**
- ✅ **কোনো Backend প্রয়োজন নেই**

---

## 🖥️ ব্যবহার প্রযুক্তি (Tech Stack)

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Bootstrap 5**
- **GitHub Pages** (Deployment)
- **JSON Dataset** (`data.json`)

---

## 🚀 কিভাবে কাজ করে

1. ব্যবহারকারী **১২ সংখ্যার সম্পূর্ণ TIN** ইনপুট দেয়
2. JavaScript `data.json` থেকে **Exact Match** খোঁজে
3. মিল পেলে:
   - Desktop‑এ → Table‑এ দেখায়
   - Mobile‑এ → সুন্দর Card‑এ দেখায়
4. সমস্ত সংখ্যা **স্বয়ংক্রিয়ভাবে বাংলা (০–৯)** তে রূপান্তরিত হয়।

