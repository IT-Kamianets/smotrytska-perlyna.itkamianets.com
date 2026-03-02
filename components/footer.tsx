"use client";

import { Phone, Instagram, Facebook, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const BOOKING_URL =
  "https://www.booking.com/hotel/ua/sadiba-smotrits-ka-pierlina.ru.html?aid=1188619&label=69a4558f422857ff297cea7e&sid=37ece3605c39643a8072ebb3e1ee877f&all_sr_blocks=301780201_241908542_2_2_0&checkin=2026-03-05&checkout=2026-03-06&dest_id=-1040849&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=301780201_241908542_2_2_0&hpos=1&matching_block_id=301780201_241908542_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=301780201_241908542_2_2_0__130000&srepoch=1772377499&srpvid=4cfa6a093f0304d2&type=total&ucfs=1&#availability";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer id="footer" className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#hero"
              className="flex items-center gap-2 text-primary-foreground"
            >
              <img src="/logo/logo.png" alt={t.footer.brandName} className="h-11 w-11 object-contain" />
              <span className="font-serif text-lg font-bold">
                {t.footer.brandName}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              {t.footer.brandDesc}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              {t.footer.navHeading}
            </h4>
            <div className="mt-4 grid w-fit grid-cols-2 gap-x-10 gap-y-3">
              <a
                href="#highlights"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {t.nav.amenities}
              </a>
              <a
                href="#reviews"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {t.nav.reviews}
              </a>
              <a
                href="#rooms"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {t.nav.rooms}
              </a>
              <a
                href="#location"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {t.nav.locationFaq}
              </a>
              <a
                href="#dining"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {t.nav.restaurant}
              </a>
              <a
                href="#footer"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {t.nav.contacts}
              </a>
              <a
                href="#gallery"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {t.nav.gallery}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                {t.nav.book}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:block">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              {t.nav.contacts}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="tel:+380687039353"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {"(068) 703 93 53"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="tel:+380984115194"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {"(098) 411 51 94"}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/smotrytska_perlyna?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-primary-foreground/20 hover:text-primary-foreground active:scale-90"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/SmotrychPerlyna/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-primary-foreground/20 hover:text-primary-foreground active:scale-90"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between md:gap-0 border-t border-primary-foreground/10 pt-8">
          <p className="text-xs text-primary-foreground/40 text-center md:text-left">
            {t.footer.copyright.split(/(?<=\.) /)[0]}
            <br className="md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            {t.footer.copyright.split(/(?<=\.) /).slice(1).join(" ")}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/IT-Kamianets/smotrytska-perlyna.itkamianets.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-primary-foreground/20 hover:text-primary-foreground active:scale-90"
            >
              <Github className="h-4 w-4" />
            </a>
            <span className="text-xs text-primary-foreground/40 whitespace-nowrap">
              {"Designed by Valtser V. O."}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
