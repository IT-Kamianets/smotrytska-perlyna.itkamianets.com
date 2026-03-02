"use client";

import { Wifi, ParkingCircle, Coffee, Utensils, ConciergeBell, Building2, CigaretteOff, CoffeeIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const featureIcons = [
  Wifi,
  ParkingCircle,
  Coffee,
  Utensils,
  ConciergeBell,
  Building2,
  CigaretteOff,
  CoffeeIcon,
];

const featureKeys = [
  "wifi",
  "parking",
  "comfort",
  "delivery",
  "reception",
  "conference",
  "nosmoking",
  "cafe",
] as const;

export default function Highlights() {
  const { t } = useI18n();

  return (
    <section id="highlights" className="bg-background pt-36 md:pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.highlights.subtitle}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t.highlights.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i];
            const feature = t.highlights.features[key];
            return (
              <div
                key={key}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
