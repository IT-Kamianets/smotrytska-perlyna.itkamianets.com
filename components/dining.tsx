"use client";

import { UtensilsCrossed, Grape, Users, Sun, Croissant } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const itemIcons = [UtensilsCrossed, Grape, Users, Sun, Croissant];

export default function Dining() {
  const { t } = useI18n();

  return (
    <section id="dining" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {t.dining.subtitle}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              {t.dining.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.dining.description}
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {t.dining.items.map((item, idx) => {
                const Icon = itemIcons[idx];
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-3 self-stretch">
            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/logo/kitchen1.jpg"
                alt={t.dining.imgAlt.kitchen}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/logo/kitchen2.jpg"
                alt={t.dining.imgAlt.kitchen}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/logo/yard.jpg"
                alt={t.dining.imgAlt.yard}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/logo/dining_room.jpg"
                alt={t.dining.imgAlt.diningRoom}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
