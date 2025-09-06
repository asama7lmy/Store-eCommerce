// src/utils/getImageUrl.js

// دالة لتصليح مسار الصور سواء خارجي أو داخلي
export const getImageUrl = (url) => {
  if (!url) return "";

  // ✅ لو اللينك خارجي (بيبدأ بـ http)
  if (url.startsWith("http")) {
    return url;
  }

  // ✅ لو اللينك متخزن غلط ومعاه /Store-eCommercehttps
  if (url.includes("http")) {
    const fixedUrl = url.substring(url.indexOf("http"));
    return fixedUrl;
  }

  // ✅ داخلي (صور موجودة في public/)
  return process.env.PUBLIC_URL + url;
};
