"use client";

import { useState } from "react";
import {
  Users,
  Wifi,
  Tv,
  AirVent,
  Bath,
  Refrigerator,
  CupSoda,
  Sofa,
  Lamp,
  BedDouble,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const BOOKING_URL =
  "https://www.booking.com/hotel/ua/sadiba-smotrits-ka-pierlina.ru.html?aid=1188619&label=69a4558f422857ff297cea7e&sid=37ece3605c39643a8072ebb3e1ee877f&all_sr_blocks=301780201_241908542_2_2_0&checkin=2026-03-05&checkout=2026-03-06&dest_id=-1040849&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=301780201_241908542_2_2_0&hpos=1&matching_block_id=301780201_241908542_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=301780201_241908542_2_2_0__130000&srepoch=1772377499&srpvid=4cfa6a093f0304d2&type=total&ucfs=1&#availability";

type AmenityKey = "aircon" | "tv" | "wifi" | "privateBathroom" | "sharedBathroom" | "fridge" | "kettle" | "balconyView" | "balcony" | "sofa" | "desk";

const roomImages = [
  ["/logo/Standard_double_room1.jpg", "/logo/Standard_double_room2.jpg", "/logo/Standard_double_room3.jpg", "/logo/Standard_double_room4.jpg"],
  ["/logo/Superior_Double_Room1.jpg", "/logo/Superior_Double_Room2.jpg", "/logo/Superior_Double_Room3.jpg", "/logo/Superior_Double_Room4.jpg"],
  ["/logo/Four-bed_room_with_shower1.jpg", "/logo/Four-bed_room_with_shower2.jpg", "/logo/Four-bed_room_with_shower3.jpg", "/logo/Four-bed_room_with_shower4.jpg"],
  ["/logo/Bed_in_a_shared_6-bed_room1.jpg", "/logo/Bed_in_a_shared_6-bed_room2.jpg", "/logo/Bed_in_a_shared_6-bed_room3.jpg", "/logo/Bed_in_a_shared_6-bed_room4.jpg"],
];

const roomAmenities: AmenityKey[][] = [
  ["aircon", "tv", "wifi", "privateBathroom", "fridge", "kettle"],
  ["balconyView", "sofa", "tv", "wifi", "privateBathroom", "fridge", "kettle"],
  ["balcony", "tv", "wifi", "privateBathroom", "desk", "fridge", "kettle"],
  ["wifi", "sharedBathroom", "fridge", "kettle"],
];

const amenityIconMap: Record<AmenityKey, React.ElementType> = {
  aircon: AirVent,
  tv: Tv,
  wifi: Wifi,
  privateBathroom: Bath,
  sharedBathroom: Bath,
  fridge: Refrigerator,
  kettle: CupSoda,
  balconyView: Maximize,
  balcony: Maximize,
  sofa: Sofa,
  desk: Lamp,
};

function RoomCarousel({ images, title, photoAlt }: { images: string[]; title: string; photoAlt: string }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative h-56 overflow-hidden md:h-64">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} — ${photoAlt} ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      <button
        onClick={prev}
        aria-label={photoAlt}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-90 cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label={photoAlt}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-90 cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1.5 backdrop-blur-sm">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`${photoAlt} ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Rooms() {
  const { t } = useI18n();

  return (
    <section id="rooms" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.rooms.subtitle}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {t.rooms.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {t.rooms.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {t.rooms.items.map((room, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <RoomCarousel images={roomImages[idx]} title={room.title} photoAlt={t.rooms.photoAlt} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-card-foreground">
                    {room.title}
                  </h3>
                  <span className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">
                    {room.price}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4" />
                    {room.details}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {roomAmenities[idx].map((key) => {
                    const Icon = amenityIconMap[key];
                    const label = t.rooms.amenities[key];
                    return (
                      <span
                        key={key}
                        className="flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                        {label}
                      </span>
                    );
                  })}
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
                >
                  {t.rooms.book}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-muted-foreground italic">
          {t.rooms.bottomNote}
        </p>
      </div>
    </section>
  );
}
