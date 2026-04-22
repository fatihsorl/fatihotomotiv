/** Türkiye GSM — gösterim ve bağlantılar */
export const PHONE_DISPLAY = "0 (545) 907 02 57";
/** uluslararası biçim, tel: ve WhatsApp için */
export const PHONE_E164 = "905459070257";

export const TEL_HREF = `tel:+${PHONE_E164}`;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164}`;

/**
 * Mağaza adresi — iletişim kartı ve harita aynı metni kullanır.
 * Net konum için Google Haritalar’dan kopyalayıp burayı güncelleyin.
 */
export const SHOP_ADDRESS_DISPLAY =
  "Kartal Oto Sanayi Sitesi, Kartal, İstanbul";

/** Harita / yol tarifi sorgusu (ülke ile daha doğru pin) */
export const MAP_ADDRESS_QUERY = `${SHOP_ADDRESS_DISPLAY}, Türkiye`;

/** Gömülü harita (iframe src) — API anahtarı gerekmez */
export function googleMapsEmbedSrc(): string {
  const q = encodeURIComponent(MAP_ADDRESS_QUERY);
  return `https://maps.google.com/maps?q=${q}&hl=tr&z=15&output=embed`;
}

/** Google Haritalar’da yol tarifi (cihazdaki konumdan) */
export function googleMapsDirectionsHref(): string {
  const dest = encodeURIComponent(MAP_ADDRESS_QUERY);
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}&hl=tr`;
}
