"use client";

import { motion } from "framer-motion";
import {
  PHONE_DISPLAY,
  SHOP_ADDRESS_DISPLAY,
  TEL_HREF,
  googleMapsDirectionsHref,
  googleMapsEmbedSrc,
} from "@/lib/contact";

type ContactRow = {
  label: string;
  value: string;
  hint?: string;
  tel?: string;
};

const rows: ContactRow[] = [
  {
    label: "Adres",
    value: SHOP_ADDRESS_DISPLAY,
    hint: "Kapı ve blok numaranızı buraya ekleyin",
  },
  {
    label: "Telefon",
    value: PHONE_DISPLAY,
    tel: TEL_HREF,
  },
  {
    label: "Çalışma saatleri",
    value: "Hafta içi 09:00 – 19:00 · Cumartesi 09:00 – 17:00",
  },
];

export function ContactSection() {
  return (
    <section
      id="iletisim"
      className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(251,191,36,0.08)_0%,transparent_45%,rgba(15,23,42,0.9)_100%)]" />
      <motion.div
        className="absolute -right-20 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-amber-500/15 blur-[100px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 sm:gap-16 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            İletişim
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mağazamızı ziyaret edin veya arayın
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Sorularınız ve siparişleriniz için telefon veya WhatsApp üzerinden
            bize ulaşabilirsiniz.
          </p>
        </motion.div>

        <motion.ul
          className="flex flex-col justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {rows.map((item, i) => (
            <motion.li
              key={item.label}
              className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                {item.label}
              </p>
              {item.tel ? (
                <a
                  href={item.tel}
                  className="mt-2 block text-lg font-medium text-white underline decoration-amber-400/60 underline-offset-4 transition-colors hover:text-amber-200 hover:decoration-amber-200"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
              )}
              {item.hint ? (
                <p className="mt-1 text-sm text-slate-400">{item.hint}</p>
              ) : null}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className="relative mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-6 lg:px-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Konum
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-white sm:text-3xl">
              Bizi haritada bulun
            </h3>
            <p className="mt-2 max-w-xl text-slate-400">
              Kartal Oto Sanayi yakınında misafirlerimizi bekliyoruz.
            </p>
          </div>
          <motion.a
            href={googleMapsDirectionsHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Yol tarifi al
          </motion.a>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-2xl ring-1 ring-white/5">
          <div className="relative aspect-[16/10] w-full min-h-[220px] sm:min-h-[320px]">
            <iframe
              title="Fatih Otomotiv konumu — Google Haritalar"
              src={googleMapsEmbedSrc()}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
