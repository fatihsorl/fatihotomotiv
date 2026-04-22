/** Cep telefonu — gösterim ve bağlantılar */
export const PHONE_MOBILE_DISPLAY = "0 (545) 907 02 57";
/** uluslararası biçim, tel: ve WhatsApp için */
export const PHONE_E164 = "905459070257";

export const TEL_HREF_MOBILE = `tel:+${PHONE_E164}`;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164}`;

/** İkinci cep hattı */
export const PHONE_MOBILE_EXTRA_DISPLAY = "0 (541) 907 55 57";
export const PHONE_MOBILE_EXTRA_E164 = "905419075557";
export const TEL_HREF_MOBILE_EXTRA = `tel:+${PHONE_MOBILE_EXTRA_E164}`;

/** Kurumsal sabit hat */
export const PHONE_OFFICE_DISPLAY = "(0216) 784 15 57";
export const TEL_HREF_OFFICE = "tel:+902167841557";

/** Geriye dönük uyumluluk */
export const PHONE_DISPLAY = PHONE_MOBILE_DISPLAY;
export const TEL_HREF = TEL_HREF_MOBILE;

/**
 * Mağaza adresi — iletişim kartı ve harita aynı kaynaktan beslenir.
 * Google Haritalar’daki işletme kaydıyla uyumlu (B5 Blok No:46).
 */
export const SHOP_ADDRESS_DISPLAY =
  "FATİH OTOMOTİV ORJİNAL YEDEK PARÇA\nEsentepe Mah. İnönü Cad.\nKartal Oto Sanayi Sitesi B5 Blok No:46\n34870 Kartal/İstanbul";

/** Google Haritalar’daki işletme pin koordinatları */
export const MAP_LAT = 40.9075512;
export const MAP_LNG = 29.1950296;

/** Gömülü harita — koordinatla sabit pin */
export function googleMapsEmbedSrc(): string {
  const q = encodeURIComponent(`${MAP_LAT},${MAP_LNG}`);
  return `https://maps.google.com/maps?q=${q}&hl=tr&z=17&output=embed`;
}

/**
 * Yol tarifi: kullanıcının bulunduğu yerden işletmeye (Google’ın standart API’si).
 * Sabit bir başlangıç noktası kullanılmaz.
 */
export function googleMapsDirectionsHref(): string {
  const dest = encodeURIComponent(`${MAP_LAT},${MAP_LNG}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}&hl=tr`;
}
