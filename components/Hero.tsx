"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HERO_VIDEO_FALLBACK, HERO_VIDEO_POSTER } from "@/lib/hero-video";

const LOCAL_HERO = "/videos/hero.mp4";

export function Hero() {
  const [videoSrc, setVideoSrc] = useState<string>(LOCAL_HERO);
  const [videoOk, setVideoOk] = useState(true);
  const triedFallback = useRef(false);

  /** Önce yerel `hero.mp4`; yüklenmezse uzaktaki otomotiv stok görüntü */
  const onVideoError = useCallback(() => {
    if (!triedFallback.current) {
      triedFallback.current = true;
      setVideoSrc(HERO_VIDEO_FALLBACK);
      return;
    }
    setVideoOk(false);
  }, []);

  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden"
    >
      {/* Arka plan: önce araba fotoğrafı (her zaman); üzerinde video */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_VIDEO_POSTER}
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          fetchPriority="high"
          decoding="async"
        />
        {videoOk ? (
          <video
            key={videoSrc}
            className="absolute inset-0 h-full w-full scale-105 object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_VIDEO_POSTER}
            onError={onVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(251,191,36,0.12),transparent_55%)]" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-44 lg:px-10 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-3xl"
        >
          <motion.p
            className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 backdrop-blur-md sm:text-sm"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Kartal Oto Sanayi
          </motion.p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              Yedek Parçada
            </motion.span>
            <motion.span
              className="mt-1 block bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              Güvenilir Adresiniz
            </motion.span>
          </h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Orijinal ve kaliteli yedek parça seçenekleriyle aracınızı güvenle yola
            çıkarın. Profesyonel ekibimizle her zaman yanınızdayız.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.55 }}
        >
          <motion.a
            href="#iletisim"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/25 transition-colors hover:bg-amber-400"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Bize Ulaşın
          </motion.a>
          <motion.a
            href="#hakkimizda"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Hakkımızda
          </motion.a>
        </motion.div>

        {/* Scroll göstergesi */}
        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          aria-hidden
        >
          <motion.div
            className="flex h-12 w-7 justify-center rounded-full border-2 border-white/30 pt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <motion.div
              className="h-2 w-1 rounded-full bg-amber-400"
              animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
