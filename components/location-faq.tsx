"use client";

import { MapPin, Car, Clock, FileText, GlassWater, DoorOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

const policyIcons = [Car, Clock, FileText, GlassWater, DoorOpen];

export default function LocationFaq() {
  const { t } = useI18n();

  return (
    <section id="location" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.location.subtitle}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t.location.title}
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title={t.location.mapTitle}
                src="https://www.google.com/maps?q=%D0%A1%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%86%D1%8C%D0%BA%D0%B0+%D0%9F%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D0%B0,+%D0%B2%D1%83%D0%BB.+%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0+%D0%A3%D0%B4%D0%BE%D0%B2%D0%B8%D1%87%D0%B5%D0%BD%D0%BA%D0%B0+14,+%D0%9A%D0%B0%D0%BC%27%D1%8F%D0%BD%D0%B5%D1%86%D1%8C-%D0%9F%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9,+32341&output=embed&hl=uk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="mt-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {t.location.addressLabel}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t.location.addressStreet}
                  <br />
                  <span className="text-xs">
                    {t.location.addressFormer}
                  </span>
                  <br />
                  {t.location.addressCity}
                </p>
              </div>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {t.location.policies.map((policy, index) => {
                const Icon = policyIcons[index];
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-2xl border border-border bg-card px-6 mb-4 last:mb-0"
                  >
                    <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-accent" />
                        {policy.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {policy.content}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
