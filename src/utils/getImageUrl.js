// src/utils/getImageUrl.js
export const getImageUrl = (url) => {
  if (!url) return "";

  // ✅ رابط صحيح خارجي
  if (url.startsWith("http")) {
    return url;
  }

  // ✅ رابط فيه مشكلة زي /Store-eCommercehttps...
  if (url.includes("http")) {
    return url.substring(url.indexOf("http"));
  }

  // ✅ صور داخلية من public
  return process.env.PUBLIC_URL + url;
};
