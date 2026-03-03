"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe, Sparkles, BedDouble, UtensilsCrossed, Image, Star, MapPin, Phone } from "lucide-react";
import { useI18n, type Locale } from "@/lib/i18n";

const BOOKING_URL =
  "https://www.booking.com/hotel/ua/sadiba-smotrits-ka-pierlina.ru.html?aid=1188619&label=69a4558f422857ff297cea7e&sid=37ece3605c39643a8072ebb3e1ee877f&all_sr_blocks=301780201_241908542_2_2_0&checkin=2026-03-05&checkout=2026-03-06&dest_id=-1040849&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=301780201_241908542_2_2_0&hpos=1&matching_block_id=301780201_241908542_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=301780201_241908542_2_2_0__130000&srepoch=1772377499&srpvid=4cfa6a093f0304d2&type=total&ucfs=1&#availability";

const locales: Locale[] = ["UK", "EN", "DE", "FR", "PL"];

const navIcons = [Sparkles, BedDouble, UtensilsCrossed, Image, Star, MapPin, Phone];

export default function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.amenities, href: "#highlights" },
    { label: t.nav.rooms, href: "#rooms" },
    { label: t.nav.restaurant, href: "#dining" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.locationFaq, href: "#location" },
    { label: t.nav.contacts, href: "#footer" },
  ];

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["highlights", "rooms", "dining", "gallery", "reviews", "location", "footer"];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection("#" + entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(handleIntersect, {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 md:px-5 md:py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-1.5 md:gap-2 text-foreground">
          <img src="/logo/logo.png" alt={t.footer.brandName} className="h-7 w-7 sm:h-8 sm:w-8 md:h-11 md:w-11 object-contain" />
          <span className="font-serif text-[13px] sm:text-sm md:text-lg font-bold tracking-tight">
            {t.footer.brandName}
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
              {activeSection === link.href && (
                <span className="absolute -bottom-3.5 left-0 right-0 h-0.5 rounded-full bg-[oklch(0.65_0.06_55)] animate-in fade-in slide-in-from-left-1 duration-300" />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex cursor-pointer items-center gap-1 sm:gap-1.5 rounded-md sm:rounded-lg border border-border bg-muted/50 px-2 py-1.5 sm:px-2 sm:py-1.5 md:px-3 md:py-2 text-[9px] sm:text-[10px] md:text-xs font-semibold text-foreground transition-colors hover:bg-muted"
              aria-label="Change language"
            >
              <Globe className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              {locale}
              <ChevronDown
                className={`h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-1.5 w-24 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setLocale(loc);
                      setLangOpen(false);
                    }}
                    className={`flex w-full cursor-pointer items-center px-3 py-2 text-xs font-medium transition-colors hover:bg-muted ${
                      locale === loc
                        ? "bg-accent/10 text-accent"
                        : "text-foreground"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md sm:rounded-lg bg-primary px-2 py-1.5 sm:px-3 sm:py-2 md:px-5 md:py-2.5 text-[10px] sm:text-[11px] md:text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
          >
            {t.nav.book}
          </a>
        </div>
      </div>

    </nav>

    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md xl:hidden">
      <div className="flex items-center justify-evenly px-1 py-1.5">
        {navLinks.map((link, idx) => {
          const Icon = navIcons[idx];
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-0.5 px-0.5 py-1 text-center leading-tight transition-colors ${
                isActive
                  ? "text-[oklch(0.65_0.06_55)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="text-[9px] md:text-xs font-medium">{link.label}</span>
              {isActive && (
                <span className="absolute bottom-0 h-0.5 w-6 rounded-full bg-[oklch(0.65_0.06_55)]" />
              )}
            </a>
          );
        })}
      </div>
    </div>
    </>
  );
}
