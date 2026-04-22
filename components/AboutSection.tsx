"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const features = [
  {
    title: "Geniş ürün yelpazesi",
    desc: "Motor, şanzıman, süspansiyon ve daha fazlası için yedek parça temini.",
  },
  {
    title: "Kalite odaklı",
    desc: "Orijinal ve güvenilir markalarla uzun ömürlü çözümler sunuyoruz.",
  },
  {
    title: "Yerinde destek",
    desc: "Kartal Oto Sanayi’ndeki mağazamızda yüz yüze danışmanlık.",
  },
];

export function AboutSection() {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-slate-200/80 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700"
            variants={fadeUp}
          >
            Hakkımızda
          </motion.p>
          <motion.h2
            className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
            variants={fadeUp}
          >
            Yılların deneyimi,{" "}
            <span className="text-amber-600">otomotiv yedek parça</span> uzmanlığı
          </motion.h2>
          <motion.p
            className="mt-5 text-lg leading-relaxed text-slate-600"
            variants={fadeUp}
          >
            Kartal Oto Sanayi’nde faaliyet gösteren işletmemiz, bireysel ve ticari
            araçlar için geniş bir yedek parça stoğu ile hizmet vermektedir. İhtiyaç
            duyduğunuz ürünü hızlıca bulmanız ve aracınızı güvenle kullanmanız için
            buradayız.
          </motion.p>
        </motion.div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.li
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/50"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: 0.1 * i,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.span
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-amber-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-lg font-bold text-amber-800">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
