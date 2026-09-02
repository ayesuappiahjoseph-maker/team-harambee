export const SOCIAL_LINKS = {
  whatsapp: "[WHATSAPP NUMBER]", // digits only, e.g. "233XXXXXXXXX"
  tiktok: "[TIKTOK HANDLE]", // handle only, with or without "@", e.g. "teamharambee"
};

export function whatsappLink(prefilledMessage = "") {
  const number = SOCIAL_LINKS.whatsapp.replace(/[^\d]/g, "");
  const text = encodeURIComponent(prefilledMessage);
  if (!number) return "#";
  return `https://wa.me/${number}${text ? `?text=${text}` : ""}`;
}

export function tiktokLink() {
  const handle = SOCIAL_LINKS.tiktok.trim().replace(/^@/, "");
  if (!handle || handle.startsWith("[")) return "#";
  return `https://www.tiktok.com/@harambee02`;
}
