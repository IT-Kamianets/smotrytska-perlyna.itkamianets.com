"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const TOTAL_IMAGES = 30;
const COLS = 5;
const VISIBLE_ROWS = 2;
const ITEMS_PER_PAGE = COLS * VISIBLE_ROWS;

export default function Gallery() {
  const { t } = useI18n();
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const totalPages = Math.ceil(TOTAL_IMAGES / ITEMS_PER_PAGE);

  const GALLERY_IMAGES = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    src: `/gallery/${i + 1}.webp`,
    alt: `${t.gallery.photoAlt} ${i + 1}`,
  }));

  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);
  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);

  const currentImages = GALLERY_IMAGES.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const lightboxPrev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, [lightbox, GALLERY_IMAGES.length]);

  const lightboxNext = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % GALLERY_IMAGES.length);
  }, [lightbox, GALLERY_IMAGES.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, lightboxPrev, lightboxNext]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const touchStartX = useRef<number | null>(null);

  return (
    <section id="gallery" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.gallery.subtitle}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t.gallery.title}
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {currentImages.map((img, i) => {
              const globalIdx = page * ITEMS_PER_PAGE + i;
              return (
                <button
                  key={globalIdx}
                  onClick={() => setLightbox(globalIdx)}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-border bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </button>
              );
            })}
          </div>

          {totalPages > 1 && (
            <>
              <button
                onClick={prev}
                aria-label={t.gallery.prevPage}
                className="hidden md:flex absolute -left-14 top-1/2 z-10 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label={t.gallery.nextPage}
                className="hidden md:flex absolute -right-14 top-1/2 z-10 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-90 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {totalPages > 1 && (
            <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
              <button
                onClick={prev}
                aria-label={t.gallery.prevPage}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`${t.gallery.page} ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === page
                        ? "w-6 bg-accent"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label={t.gallery.nextPage}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-90 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 hidden items-center justify-center gap-2 md:flex">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`${t.gallery.page} ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === page
                    ? "w-6 bg-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 50) { dx > 0 ? lightboxPrev() : lightboxNext(); }
            touchStartX.current = null;
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
            aria-label={t.gallery.close}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="hidden md:flex absolute left-4 top-1/2 z-10 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
            aria-label={t.gallery.prevPhoto}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="hidden md:flex absolute right-4 top-1/2 z-10 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
            aria-label={t.gallery.nextPhoto}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <img
            src={GALLERY_IMAGES[lightbox].src}
            alt={GALLERY_IMAGES[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[70vh] md:max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          />

          <div className="mt-4 flex items-center gap-6 md:hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={lightboxPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
              aria-label={t.gallery.prevPhoto}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {lightbox + 1} / {GALLERY_IMAGES.length}
            </span>
            <button
              onClick={lightboxNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
              aria-label={t.gallery.nextPhoto}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
