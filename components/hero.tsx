"use client";

import { useState, useRef } from "react";
import { CalendarDays, Users, Search, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const BOOKING_URL =
  "https://www.booking.com/hotel/ua/sadiba-smotrits-ka-pierlina.ru.html?aid=1188619&label=69a4558f422857ff297cea7e&sid=37ece3605c39643a8072ebb3e1ee877f&all_sr_blocks=301780201_241908542_2_2_0&checkin=2026-03-05&checkout=2026-03-06&dest_id=-1040849&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=301780201_241908542_2_2_0&hpos=1&matching_block_id=301780201_241908542_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=301780201_241908542_2_2_0__130000&srepoch=1772377499&srpvid=4cfa6a093f0304d2&type=total&ucfs=1&#availability";

export default function Hero() {
  const { locale, t } = useI18n();
  const isDE = locale === "DE";
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const guestsRef = useRef<HTMLDivElement>(null);
  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);

  const formatDate = (val: string) => {
    if (!val) return null;
    const d = new Date(val);
    return d.toLocaleDateString("uk-UA", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] w-full">
      <div className="absolute inset-0">
        <img
          src="/logo/hero.png"
          alt="Вид на готель Смотрицька Перлина та каньйон"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero-dark/70 via-hero-dark/50 to-hero-dark/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-5 pt-24 pb-44 md:pb-32 lg:px-8">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-hero-dark-foreground md:text-5xl lg:text-6xl text-balance">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-base leading-relaxed text-hero-dark-foreground/80 md:text-lg">
            {t.hero.subheadline}
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-10 flex flex-wrap gap-8 md:gap-14 justify-center text-center">
          <div>
            <p className="font-serif text-3xl font-bold text-hero-dark-foreground md:text-4xl">
              9
            </p>
            <p className="mt-1 text-sm text-hero-dark-foreground/60">
              {t.hero.rating}
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-hero-dark-foreground md:text-4xl">
              17
            </p>
            <p className="mt-1 text-sm text-hero-dark-foreground/60">
              {t.hero.rooms}
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-hero-dark-foreground md:text-4xl">
              {"2 хв"}
            </p>
            <p className="mt-1 text-sm text-hero-dark-foreground/60">
              {t.hero.fortress}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-20 translate-y-1/2">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card p-3 shadow-xl md:flex md:items-stretch md:gap-3 md:p-4">
            <div
              className="group flex md:flex-1 cursor-pointer items-center gap-2 md:gap-3 rounded-xl border border-transparent bg-muted px-3 py-2.5 md:px-4 md:py-3.5 transition-all hover:border-accent/30 hover:bg-accent/5"
              onClick={() => checkinRef.current?.showPicker()}
            >
              <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <CalendarDays className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[9px] md:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {t.hero.checkin}
                </span>
                <span className="mt-0.5 block truncate text-[10px] md:text-sm font-bold text-foreground">
                  {formatDate(checkin) || t.hero.selectDate}
                </span>
                <input
                  ref={checkinRef}
                  type="date"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                  className="sr-only"
                  tabIndex={-1}
                />
              </div>
            </div>

            <div
              className="group flex md:flex-1 cursor-pointer items-center gap-2 md:gap-3 rounded-xl border border-transparent bg-muted px-3 py-2.5 md:px-4 md:py-3.5 transition-all hover:border-accent/30 hover:bg-accent/5"
              onClick={() => checkoutRef.current?.showPicker()}
            >
              <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <CalendarDays className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[9px] md:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {t.hero.checkout}
                </span>
                <span className="mt-0.5 block truncate text-[10px] md:text-sm font-bold text-foreground">
                  {formatDate(checkout) || t.hero.selectDate}
                </span>
                <input
                  ref={checkoutRef}
                  type="date"
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                  className="sr-only"
                  tabIndex={-1}
                />
              </div>
            </div>

            <div className="relative md:flex-1" ref={guestsRef}>
              <div
                className="group flex h-full cursor-pointer items-center gap-2 md:gap-3 rounded-xl border border-transparent bg-muted px-3 py-2.5 md:px-4 md:py-3.5 transition-all hover:border-accent/30 hover:bg-accent/5"
                onClick={() => setGuestsOpen(!guestsOpen)}
              >
                <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[9px] md:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {t.hero.guests}
                  </span>
                  <span className={`mt-0.5 block font-bold text-foreground ${isDE ? "text-[7px] md:text-[11px]" : "text-[8px] md:text-sm"}`}>
                    {guests} {t.hero.adults}
                  </span>
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${guestsOpen ? "rotate-180" : ""}`} />
              </div>
              {guestsOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setGuestsOpen(false)} />
                  <div className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <button
                        key={n}
                        onClick={() => { setGuests(n); setGuestsOpen(false); }}
                        className={`flex w-full items-center px-4 py-2.5 font-medium transition-colors hover:bg-accent/10 ${isDE ? "text-xs" : "text-sm"} ${guests === n ? "bg-accent/10 text-accent font-bold" : "text-foreground"}`}
                      >
                        {n} {t.hero.adults}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-[10px] font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-95 md:self-stretch md:px-8 md:text-sm md:shrink-0"
            >
              <Search className="h-4 w-4" />
              {t.hero.search}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
