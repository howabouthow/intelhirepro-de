// app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Rocket,
  Star,
  Globe2,
  CheckCircle,
  Smartphone,
  Monitor,
  IdCard,
  Users,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import ApplicationForm from "./components/ApplicationForm";

const categories = [
  { name: "Design", icon: <Star className="w-5 h-5" aria-hidden /> },
  { name: "Marketing", icon: <Rocket className="w-5 h-5" aria-hidden /> },
  { name: "Organisation", icon: <Globe2 className="w-5 h-5" aria-hidden /> },
  {
    name: "Kundenservice",
    icon: <ShieldCheck className="w-5 h-5" aria-hidden />,
  },
  { name: "Vertrieb", icon: <Star className="w-5 h-5" aria-hidden /> },
  { name: "Content", icon: <Star className="w-5 h-5" aria-hidden /> },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <div className="w-full text-xs text-center py-2 bg-[var(--brand-muted)] text-[var(--brand)]">
        <span className="font-medium">Neu:</span>{" "}
        Entdecke flexible Möglichkeiten für die Arbeit im Homeoffice – ohne
        Bewerbungsgebühr.
      </div>

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold">
              HP
            </div>
            <span className="font-semibold tracking-tight">HirePro</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how" className="hover:text-slate-900">
              So funktioniert's
            </a>
            <a href="#jobs" className="hover:text-slate-900">
              Stellenangebote
            </a>
            <a href="#req" className="hover:text-slate-900">
              Voraussetzungen
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#apply" className="btn-primary px-4">
              Jetzt bewerben
            </Link>
          </div>
        </div>
      </header>

      <section className="relative bg-[var(--brand-muted)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[var(--brand)]">
            Starte deine neue berufliche Möglichkeit
          </h1>

          <p className="mt-5 text-slate-700 text-lg">
            Arbeite flexibel von zu Hause und entdecke passende
            Online-Tätigkeiten, die sich in deinen Alltag integrieren lassen.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600 text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Keine Bewerbungsgebühren</span>

            <CheckCircle className="w-4 h-4" />
            <span>
              Durchschnittliche Bearbeitungszeit{" "}
              <strong>bis zu 48 Stunden</strong>
            </span>

            <CheckCircle className="w-4 h-4" />
            <span>Transparenter Bewerbungsprozess</span>
          </div>
        </div>
      </section>

      <ApplicationForm />

      <section id="how" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Bereiche entdecken</h2>

          <p className="text-slate-600 mt-2">
            Finde flexible Tätigkeiten in verschiedenen Arbeitsbereichen.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((c) => (
              <div
                key={c.name}
                className="card-like px-3 py-3 text-left flex items-center gap-2 hover:shadow-card"
              >
                <div className="w-8 h-8 rounded-xl bg-[var(--brand-muted)] text-[var(--brand)] flex items-center justify-center">
                  {c.icon}
                </div>

                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Wir suchen Unterstützung in Teilzeit und Vollzeit
          </h2>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <Card title="Teilzeit">
              <ul className="space-y-2 text-slate-700">
                <li>
                  Je nach Tätigkeit und Arbeitsumfang kannst du{" "}
                  <strong>1.890–2.690 € brutto/Monat</strong> verdienen
                </li>

                <li>
                  <strong>Monatliche Vergütung</strong>
                </li>

                <li>
                  Flexible Arbeitszeiten passend zu deinem Alltag
                </li>

                <li>
                  Online-Aufgaben können bequem über Smartphone oder Computer
                  erledigt werden
                </li>

                <li>Grundlegende digitale Kenntnisse sind von Vorteil</li>

                <li>Flexible Tätigkeit im Homeoffice</li>
              </ul>
            </Card>

            <Card title="Vollzeit">
              <ul className="space-y-2 text-slate-700">
                <li>
                  Je nach Tätigkeit und Arbeitsumfang kannst du{" "}
                  <strong>3.590–4.850 € brutto/Monat</strong> verdienen
                </li>

                <li>
                  <strong>Monatliche Vergütung</strong>
                </li>

                <li>Strukturierter und flexibler Arbeitsalltag</li>

                <li>
                  Online-Aufgaben über Smartphone oder Computer
                </li>

                <li>Grundlegende digitale Kenntnisse sind von Vorteil</li>

                <li>Arbeiten bequem von zu Hause</li>
              </ul>
            </Card>

            <Card title="Flexible Arbeit mit zusätzlichen Vorteilen">
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Flexible Einsatzmöglichkeiten:</strong>{" "}
                  Arbeitszeiten können je nach Tätigkeit und Verfügbarkeit
                  abgestimmt werden.
                </li>

                <li>
                  <strong>Langfristige Zusammenarbeit:</strong>{" "}
                  Bei guter Zusammenarbeit können sich weitere Möglichkeiten
                  innerhalb des Teams ergeben.
                </li>

                <li>
                  <strong>Individuelle Entwicklung:</strong>{" "}
                  Zusätzliche Aufgaben und Verantwortungsbereiche können je nach
                  Erfahrung und Eignung übernommen werden.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 sm:p-10 text-white"
            style={{
              background:
                "linear-gradient(0deg, rgba(37,99,235,0.25), rgba(37,99,235,0.25)), #0f172a",
            }}
          >
            <p className="text-blue-300 font-semibold">
              Finde die passende Möglichkeit für dich
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mt-2">
              Flexibel im Homeoffice arbeiten
            </h3>

            <p className="mt-3 text-white/80 max-w-3xl">
              Organisiere deine Arbeit flexibel und erledige deine Aufgaben
              online von zu Hause.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat number="183K+" label="BEWERBUNGEN" />
              <Stat number="12.500+" label="AUFGABEN" />
              <Stat number="300+" label="TEAMMITGLIEDER" />
              <Stat number="4,81" label="BEWERTUNG" />
            </div>
          </div>
        </div>
      </section>

      <section id="req" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            Voraussetzungen
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Req
              icon={<Smartphone className="w-5 h-5" />}
              text="Flexible Online-Arbeit über Smartphone oder Computer"
            />

            <Req
              icon={<Monitor className="w-5 h-5" />}
              text="Smartphone oder Computer sowie eine Internetverbindung erforderlich"
            />

            <Req
              icon={<IdCard className="w-5 h-5" />}
              text="Bewerbung ab 18 Jahren möglich"
            />

            <Req
              icon={<Users className="w-5 h-5" />}
              text="Offen für alle geeigneten Bewerberinnen und Bewerber"
            />

            <Req
              icon={<Lightbulb className="w-5 h-5" />}
              text="Grundlegende digitale Kenntnisse sind von Vorteil"
            />
          </div>
        </div>
      </section>

      <section id="why" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "Transparenter Ablauf",
              desc: "Ein klar strukturierter Bewerbungs- und Verifizierungsprozess.",
            },
            {
              icon: <Rocket className="w-5 h-5" />,
              title: "Schneller Einstieg",
              desc: "Viele Bewerbungen können innerhalb kurzer Zeit geprüft und bearbeitet werden.",
            },
            {
              icon: <Star className="w-5 h-5" />,
              title: "Flexible Möglichkeiten",
              desc: "Tätigkeiten werden nach Eignung, Erfahrung und Verfügbarkeit abgestimmt.",
            },
          ].map((f) => (
            <div key={f.title} className="card-like p-6">
              <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center bg-[var(--brand-muted)] text-[var(--brand)]">
                {f.icon}
              </div>

              <p className="font-semibold">{f.title}</p>
              <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold">
              Bereit für deine Bewerbung?
            </h3>

            <p className="mt-2 text-slate-300">
              Fülle das Bewerbungsformular aus. Unser Recruiting-Team
              kontaktiert dich anschließend über Telegram.
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="#apply" className="btn-primary px-6">
              Jetzt bewerben
            </Link>

            <button className="btn-secondary px-6">
              Support kontaktieren
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold mb-3">
              HP
            </div>

            <p>
              HirePro hilft Menschen dabei, flexible und ortsunabhängige
              Arbeitsmöglichkeiten zu entdecken.
            </p>
          </div>

          <Column
            title="Unternehmen"
            items={["Über uns", "Karriere", "Blog"]}
          />

          <Column
            title="Support"
            items={["Hilfe-Center", "Sicherheit", "Kontakt"]}
          />

          <Column
            title="Rechtliches"
            items={["Nutzungsbedingungen", "Datenschutz", "Cookies"]}
          />
        </div>

        <div className="text-xs text-slate-400 text-center mt-6">
          © {new Date().getFullYear()} HirePro, Inc. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-like p-6">
      <p className="text-lg font-bold text-[var(--brand)] mb-3">
        {title}
      </p>
      {children}
    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">{number}</div>
      <div className="text-[10px] tracking-widest text-white/70">
        {label}
      </div>
    </div>
  );
}

function Req({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-12 shrink-0 rounded-full bg-[var(--brand)] text-white grid place-items-center ring-4 ring-[var(--brand-muted)]">
        <div className="w-[18px] h-[18px]">{icon}</div>
      </div>

      <p className="text-sm leading-snug">{text}</p>
    </div>
  );
}

function Column({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p className="font-semibold text-slate-900 mb-2">
        {title}
      </p>

      <ul className="space-y-1">
        {items.map((t) => (
          <li key={t}>
            <a className="hover:underline" href="#">
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQSection() {
  const items = [
    {
      q: "Wer kann sich bewerben?",
      a: "Alle Personen ab 18 Jahren mit einem Smartphone oder Computer sowie einer Internetverbindung können sich bewerben.",
    },
    {
      q: "Ist die Tätigkeit im Homeoffice möglich?",
      a: "Ja. Die Aufgaben können je nach Tätigkeit vollständig online von zu Hause erledigt werden.",
    },
    {
      q: "Wie kann ich mich bewerben?",
      a: "Fülle das Bewerbungsformular vollständig aus und sende es ab. Unser Recruiting-Team kontaktiert dich anschließend über Telegram.",
    },
    {
      q: "Wie schnell erhalte ich eine Rückmeldung?",
      a: "Viele Bewerbungen werden innerhalb von 1–2 Werktagen geprüft. Die tatsächliche Bearbeitungszeit kann je nach Bewerbungsaufkommen variieren.",
    },
    {
      q: "Wie flexibel sind die Arbeitszeiten?",
      a: "Die Arbeitszeiten hängen von der jeweiligen Tätigkeit ab und können je nach Position flexibel gestaltet werden.",
    },
    {
      q: "Wie hoch ist die Vergütung?",
      a: "Die Vergütung hängt von der jeweiligen Tätigkeit, dem Arbeitsumfang und der Position ab. Teilzeitstellen liegen je nach Tätigkeit bei etwa 1.890–2.690 € brutto pro Monat, Vollzeitstellen bei etwa 3.590–4.850 € brutto pro Monat.",
    },
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-[var(--brand)]">
          Häufig gestellte Fragen
        </h2>

        <div className="space-y-3">
          {items.map((it, i) => (
            <FAQItem
              key={i}
              q={it.q}
              a={it.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`card-like ${
        open ? "ring-2 ring-[var(--brand)]" : ""
      }`}
    >
      <button
        className="w-full flex items-center justify-between text-left p-4 sm:p-5"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{q}</span>

        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-600 border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}
