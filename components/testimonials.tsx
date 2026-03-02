"use client";

import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import reviewsData from "@/reviews.json";

type LocaleKey = "uk" | "en" | "de" | "fr" | "pl";

const localeMap: Record<string, LocaleKey> = {
  UK: "uk",
  EN: "en",
  DE: "de",
  FR: "fr",
  PL: "pl",
};

function ReviewCard({
  review,
}: {
  review: { name: string; text: string; rating: number };
}) {
  return (
    <div className="flex w-56 md:w-80 shrink-0 flex-col rounded-2xl border border-border bg-card p-4 md:p-6 min-h-[220px] md:min-h-0">
      <p className="line-clamp-5 md:line-clamp-6 text-xs md:text-sm leading-relaxed text-muted-foreground flex-1">
        {`\u201C${review.text}\u201D`}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <p className="text-xs md:text-sm font-semibold text-foreground">
          {review.name}
        </p>
        <span className="rounded-lg bg-accent/20 px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-xs font-bold text-accent">
          {`${review.rating}/10`}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { locale, t } = useI18n();
  const key = localeMap[locale] || "uk";

  const reviews = reviewsData.map((r) => ({
    name: r.author[key],
    text: r.text[key],
    rating: r.rating,
  }));

  return (
    <section id="reviews" className="overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.reviews.subtitle}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t.reviews.title}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              {"9 / 10"}
            </span>
            <span className="text-sm text-muted-foreground">
              {t.reviews.ratingLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl overflow-hidden px-5 lg:px-8" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
        <div className="marquee-track flex gap-3 md:gap-6">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`r-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
