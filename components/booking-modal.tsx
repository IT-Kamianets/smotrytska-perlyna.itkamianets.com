"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const SLUG = "smotrytska-perlyna";
const API_URL = "https://it.webart.work/api/telegram/contact";

interface Props {
  open: boolean;
  onClose: () => void;
  roomTitle?: string;
}

export default function BookingModal({ open, onClose, roomTitle }: Props) {
  const { t } = useI18n();
  const m = t.bookingModal;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const message = [
      "🏨 Запит на бронювання",
      roomTitle ? `Номер: ${roomTitle}` : null,
      `Ім'я: ${name}`,
      `Телефон: ${phone}`,
      note ? `Повідомлення: ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: SLUG, message }),
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data === true) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setName("");
    setPhone("");
    setNote("");
    setStatus("idle");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-card border border-border shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="font-serif text-xl font-bold text-foreground mb-2">{m.successTitle}</h2>
            <p className="text-muted-foreground text-sm">{m.successText}</p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
            >
              {m.close}
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-xl font-bold text-foreground mb-1">{m.title}</h2>
            <p className="text-muted-foreground text-sm mb-5">{m.subtitle}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">{m.nameLabel}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={m.namePlaceholder}
                  className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1">{m.phoneLabel}</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={m.phonePlaceholder}
                  className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1">{m.noteLabel}</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={m.notePlaceholder}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{m.errorText}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 active:scale-95 transition-all disabled:opacity-60"
              >
                {status === "loading" ? m.sending : m.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
