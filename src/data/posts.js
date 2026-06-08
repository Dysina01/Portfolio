// src/data/posts.js
// برای هر پست جدید یه آبجکت اضافه کن

export const postCategories = ["All", "Case Study", "Thought Piece"];

export const posts = [
  {
    id: "tara-design-process",
    title: "روند طراحی پروژه تارا",
    subtitle: "از ایده تا پروتوتایپ نهایی",
    category: "Case Study",
    date: "2026-05-10",
    readTime: "5 min",
    // cover: یه عکس import کن اینجا مثل: import taracover from "../assets/..."
    cover:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    // images: آرایه‌ای از عکس‌های imported برای اسلایدر
    images: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    ],
    body: [
      "طراحی تارا از یه مشکل واقعی شروع شد. یه پلتفرم وب برای مدیریت محتوا که کاربرانش طیف گسترده‌ای داشتن، از تازه‌کار تا حرفه‌ای.",
      "اول رفتیم سراغ تحقیق کاربری. ۸ نفر مصاحبه کردیم و متوجه شدیم که بزرگ‌ترین مشکل، پیچیدگی ناوبری بود. کاربرها گم میشدن.",
      "بعد از journey mapping، تصمیم گرفتیم ساختار اطلاعات رو کاملاً بازنویسی کنیم. از ۵ لایه رفتیم به ۲ لایه.",
      "نتیجه؟ ۴۰٪ کاهش در زمان انجام تسک‌های اصلی. و یه رابط کاربری که کاربرها بهش گفتن «خودمونیه».",
    ],
    linkedinUrl: "https://www.linkedin.com/in/sinadalaei",
  },
  {
    id: "why-iranian-design",
    title: "چرا دیزاینرها به سمت طراحی ایرانی نمیرن؟",
    subtitle: "یه سوال که باید بپرسیم",
    category: "Thought Piece",
    date: "2026-04-22",
    readTime: "3 min",
    cover:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [],
    body: [
      "وقتی به پورتفولیوهای دیزاینرهای ایرانی نگاه میکنم، یه چیزی همیشه توجهمو جلب میکنه — همه چیز شبیه هم به نظر میرسه.",
      "Dribbble-ish. International. Generic. هیچ اثری از هویت بصری ایرانی نیست. نه تایپوگرافی فارسی قوی، نه رنگ‌بندی الهام گرفته از هنر ایرانی، نه اصلاً یه نگاه متفاوت.",
      "چرا؟ فکر میکنم جواب ساده‌ست: ما یاد گرفتیم دیزاین رو از غرب کپی کنیم. Behance و Dribbble مرجعمونن. و هیچوقت کسی بهمون نگفت که میتونیم منبع باشیم، نه مقصد.",
      "هنر ایرانی — از نگارگری تا معماری اسلامی تا خوشنویسی — پر از سیستم‌های بصری غنیه که هنوز دست نخورده‌ان. این یه فرصته، نه یه محدودیت.",
    ],
    linkedinUrl: "https://www.linkedin.com/in/sinadalaei",
  },
];
