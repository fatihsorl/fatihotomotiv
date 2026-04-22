"use client";

import { motion } from "framer-motion";

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
            Sorularınız ve siparişleriniz için bizimle iletişime geçebilirsiniz.
            Adres ve telefon bilgilerinizi güncellediğinizde burayı düzenlemeniz
            yeterli.
          </p>
        </motion.div>

        <motion.ul
          className="flex flex-col justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            {
              label: "Adres",
              value: "Kartal Oto Sanayi Sitesi, İstanbul",
              hint: "Kapı ve blok numaranızı buraya ekleyin",
            },
            {
              label: "Telefon",
              value: "+90 (___) ___ __ __",
              hint: "Numarayı güncelleyin",
            },
            {
              label: "Çalışma saatleri",
              value: "Hafta içi 09:00 – 19:00 · Cumartesi 09:00 – 17:00",
              hint: "",
            },
          ].map((item, i) => (
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
              <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
              {item.hint ? (
                <p className="mt-1 text-sm text-slate-400">{item.hint}</p>
              ) : null}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
