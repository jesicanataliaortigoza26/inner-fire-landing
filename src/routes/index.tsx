import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Compass,
  Sparkles,
  Target,
  Map,
  Layers,
  Rocket,
  Plus,
  Minus,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-brujula.jpg";
import portraitImg from "@/assets/jesica-portrait.jpeg";
import workspaceImg from "@/assets/editorial-workspace.jpg";
import silkImg from "@/assets/silk-abstract.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP = "https://wa.me/543777470866?text=" + encodeURIComponent(
  "Hola Jesica, revisé la información en tu página y me interesa avanzar con Brújula Expansiva 1:1."
);

function CtaButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-[color:var(--verde)] hover:shadow-[0_12px_40px_-12px_var(--verde)]"
      : variant === "outline"
      ? "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
      : "text-foreground/80 hover:text-foreground";
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-foreground/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Jesica Ortigoza
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          <a href="#proceso" className="hover:text-foreground transition">Proceso</a>
          <a href="#versiones" className="hover:text-foreground transition">Versiones</a>
          <a href="#testimonios" className="hover:text-foreground transition">Resultados</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </div>
        <CtaButton className="!py-2.5 !px-5">Aplicar</CtaButton>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/70 reveal">
          <Compass className="h-3.5 w-3.5" /> Mentoría 1:1 · Método Brújula Expansiva™
        </div>

        <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-balance reveal" style={{ animationDelay: "0.1s" }}>
          Construí un negocio con <span className="gradient-text italic">dirección</span>, claridad y coherencia.
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 text-pretty leading-relaxed reveal" style={{ animationDelay: "0.2s" }}>
          Un proceso estratégico de 6 semanas para ordenar, posicionar y construir un sistema real de ventas.
          No es teoría. Es decisión, estructura e implementación real.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4 reveal" style={{ animationDelay: "0.3s" }}>
          <CtaButton>Agendar conversación</CtaButton>
          <a href="#proceso" className="text-sm font-medium text-foreground/70 hover:text-foreground transition px-2">
            Ver el proceso ↓
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-foreground/10 pt-10 reveal" style={{ animationDelay: "0.4s" }}>
          {[
            ["6", "semanas de proceso"],
            ["6", "sesiones 1:1"],
            ["4", "fases estructuradas"],
            ["2", "versiones: Basic & VIP"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl text-[color:var(--verde)]">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Claridad", "Dirección", "Estrategia", "Posicionamiento", "Implementación", "Coherencia", "Sistema"];
  const loop = [...words, ...words];
  return (
    <div className="border-y border-foreground/10 py-6 overflow-hidden">
      <div className="flex gap-16 marquee whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl text-foreground/30 italic flex items-center gap-16">
            {w} <Sparkles className="h-3 w-3 text-[color:var(--magenta)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Imagina() {
  const items = [
    "Claridad total sobre tu negocio: qué construís, para quién y por qué.",
    "Tu comunicación deja de ser confusa y refleja con precisión tu valor real.",
    "Tus servicios organizados dentro de un modelo coherente y alineado a vos.",
    "Comunicás con intención y estrategia, no improvisando contenido.",
    "Un sistema real para vender que podés sostener en el tiempo.",
  ];
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 md:sticky md:top-28">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">Imaginá este escenario</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            En las próximas semanas, todo empieza a tener <em className="italic text-[color:var(--verde)]">su lugar</em>.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            No desde la exigencia. No desde el hacer constante. Desde la claridad.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-foreground/10">
            <img
              src={workspaceImg}
              alt="Espacio editorial: cuaderno con notas, brújula de bronce y café"
              loading="lazy"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
        <ul className="md:col-span-7 space-y-1">
          {items.map((t, i) => (
            <li
              key={i}
              className="group flex items-start gap-5 border-t border-foreground/10 py-6 last:border-b transition-all hover:pl-2"
            >
              <span className="font-display text-sm text-foreground/40 mt-1.5 tabular-nums">0{i + 1}</span>
              <p className="text-lg md:text-xl text-foreground/85 text-pretty leading-snug">{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-28 md:py-40 bg-[oklch(0.96_0.012_80)]">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-[color:var(--verde)]/15 to-[color:var(--magenta)]/15 rounded-3xl blur-2xl -z-10" />
          <div className="overflow-hidden rounded-3xl border border-foreground/10 shadow-[0_30px_80px_-30px_rgba(5,54,94,0.35)]">
            <img
              src={portraitImg}
              alt="Jesica Ortigoza, mentora y creadora del método Brújula Expansiva"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">Sobre mí</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Soy Jesica. <em className="italic gradient-text">Acompaño desde la claridad</em>, no desde el ruido.
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed text-lg">
            <p>
              Creé un método para personas que ya tienen un negocio funcionando y necesitan ordenar, decidir y avanzar con dirección real.
            </p>
            <p>
              Mi voz no impone, eleva. No sobreprotege, sostiene. Trabajo con elegancia, presencia y un toque de chispa: la claridad como acto de liderazgo.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["+10", "años acompañando"],
              ["100+", "procesos 1:1"],
              ["1", "método propio"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-[color:var(--verde)]">{n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-foreground/55">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  const fases = [
    {
      n: "01",
      icon: Sparkles,
      title: "Reconfiguración interna",
      desc: "Trabajamos tu mentalidad, visión y forma de liderar para sostener el negocio que querés construir. La base de todo lo que viene.",
    },
    {
      n: "02",
      icon: Target,
      title: "Dirección & modelo de negocio",
      desc: "Validamos tu modelo, definimos enfoque y prioridades reales. Dejás de tener ideas sueltas y empezás a decidir con claridad.",
    },
    {
      n: "03",
      icon: Map,
      title: "Posicionamiento",
      desc: "Propuesta de valor, mensaje y diferenciación. Coherencia entre lo que ofrecés y lo que comunicás.",
    },
    {
      n: "04",
      icon: Layers,
      title: "Sistema de ventas",
      desc: "Construimos las piezas clave: contenido, canal, mensaje y oferta dentro de un sistema sostenible.",
    },
  ];
  return (
    <section id="proceso" className="surface-dark relative py-28 md:py-40 noise">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/60 mb-4">El proceso</div>
          <h2 className="font-display text-4xl md:text-6xl text-[color:var(--cream)] leading-tight">
            Cuatro fases. Una <span className="italic text-[color:var(--magenta)]">brújula</span>.
          </h2>
          <p className="mt-6 text-[color:var(--cream)]/70 text-lg leading-relaxed">
            Contenido pregrabado + implementación + sesiones estratégicas. Una regla: no hay sesión sin implementación previa.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-[color:var(--cream)]/10 rounded-3xl overflow-hidden">
          {fases.map(({ n, icon: Icon, title, desc }) => (
            <div
              key={n}
              className="group bg-[oklch(0.18_0.04_245)] p-10 md:p-12 hover:bg-[oklch(0.22_0.05_245)] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-sm text-[color:var(--cream)]/40 tabular-nums">Fase {n}</span>
                <Icon className="h-5 w-5 text-[color:var(--verde)] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-[color:var(--cream)] mb-4">{title}</h3>
              <p className="text-[color:var(--cream)]/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Versiones() {
  const basic = [
    "6 sesiones estratégicas 1:1",
    "Acceso a contenido pregrabado por fases",
    "Ejercicios aplicados con devolución",
    "Roadmap completo del proceso",
    "Soporte durante las 6 semanas",
    "Documentos guía y plantillas",
  ];
  const vip = [
    "Todo lo incluido en la versión Basic",
    "Desarrollo de marca completo (agencia)",
    "Identidad visual + aplicaciones de marca",
    "Optimización de hasta 3 perfiles sociales",
    "12 piezas diseñadas para redes sociales",
    "Brújula de Comunicación™ (pilares + mensajes)",
    "Presentación de negocio en PDF lista para enviar",
    "Sesiones extra de validación y activación",
  ];

  return (
    <section id="versiones" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">Dos versiones</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Elegí cómo querés <em className="italic gradient-text">construir</em>.
          </h2>
          <p className="mt-6 text-foreground/70 text-lg">
            Mismo método. Distinto nivel de acompañamiento e implementación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Basic */}
          <article className="relative rounded-3xl border border-foreground/10 bg-card p-10 md:p-12 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-3xl">Basic</h3>
              <span className="text-xs uppercase tracking-wider text-foreground/50">Mentoría 1:1</span>
            </div>
            <p className="mt-3 text-foreground/65">El proceso completo de Brújula Expansiva, paso a paso.</p>

            <ul className="mt-10 space-y-4 flex-1">
              {basic.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 mt-1 text-[color:var(--verde)] shrink-0" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>

            <CtaButton variant="outline" className="mt-10 self-start">Aplicar a Basic</CtaButton>
          </article>

          {/* VIP */}
          <article className="relative rounded-3xl p-10 md:p-12 flex flex-col gradient-brand text-[color:var(--cream)] overflow-hidden noise">
            <img
              src={silkImg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--azul)]/40 via-transparent to-[color:var(--magenta)]/40 pointer-events-none" />
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--cream)]/15 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
              <Sparkles className="h-3 w-3" /> Recomendado
            </div>
            <div className="relative">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl">VIP</h3>
                <span className="text-xs uppercase tracking-wider text-[color:var(--cream)]/70">Done-with-you</span>
              </div>
              <p className="mt-3 text-[color:var(--cream)]/85">Mentoría + implementación: salís con todo armado y listo para vender.</p>

              <ul className="mt-10 space-y-4 flex-1">
                {vip.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 mt-1 text-[color:var(--cream)] shrink-0" />
                    <span className="text-[color:var(--cream)]/95">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] text-foreground px-6 py-3.5 text-sm font-medium transition-all hover:bg-background hover:shadow-[0_12px_40px_-12px_oklch(0_0_0/0.4)]"
              >
                Aplicar a VIP
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        </div>

        <p className="mt-10 text-center text-sm text-foreground/55">
          Valores actualizados en la conversación inicial por WhatsApp · Cupo limitado por mes
        </p>
      </div>
    </section>
  );
}

function Testimonios() {
  const t = [
    {
      tag: "Claridad",
      quote: "Trabajar de forma personalizada me abrió el panorama y me diste visión a largo plazo.",
      name: "Adrián",
      role: "Coach · Mindfulness",
    },
    {
      tag: "Dirección",
      quote: "Me simplificaste un montón este camino. Por todo esto te súper agradezco y recomiendo.",
      name: "Miriam",
      role: "Área comercial & ventas",
    },
    {
      tag: "Resultados",
      quote: "Mi objetivo era tener mi agenda llena a 1 año. Lo logré en 6 semanas.",
      name: "Iris",
      role: "Coach holística",
    },
  ];

  return (
    <section id="testimonios" className="py-28 md:py-40 bg-[oklch(0.96_0.012_80)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">Resultados reales</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            No son frases. Son <em className="italic">decisiones tomadas</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.map((it) => (
            <figure
              key={it.name}
              className="rounded-3xl bg-background border border-foreground/8 p-8 flex flex-col hover:border-foreground/20 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--verde)] font-medium">{it.tag}</span>
                <Quote className="h-5 w-5 text-foreground/15" />
              </div>
              <blockquote className="font-display text-xl leading-snug text-foreground/90 flex-1">
                "{it.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-foreground/8">
                <div className="font-medium text-sm">{it.name}</div>
                <div className="text-xs text-foreground/55 mt-0.5">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "¿Necesito tener todo claro antes de empezar?",
      a: "No. Este proceso está pensado justamente para ayudarte a ordenar ideas, tomar decisiones y construir claridad paso a paso. Eso sí: tenés que tener activo un emprendimiento o negocio y estar vendiendo. Este proceso NO es para idear un negocio.",
    },
    {
      q: "¿Cuánto tiempo tengo que dedicarle?",
      a: "Es un proceso activo. Para aprovecharlo al máximo necesitás entre 5 y 6 horas semanales. Eso te permite avanzar con cada etapa y ver resultados reales.",
    },
    {
      q: "¿Qué pasa si no implemento?",
      a: "Este proceso está diseñado para ejecutar. Cada instancia requiere avance previo. No hay lugar para quedarse solo en la teoría. Si hoy no tenés el tiempo o la disposición para implementar, este proceso no es para vos.",
    },
    {
      q: "¿Necesito tener marca o equipo?",
      a: "No. Podés construir todo dentro del proceso. Y si elegís la versión VIP, lo desarrollamos juntas en la implementación.",
    },
    {
      q: "¿Este proceso es para principiantes?",
      a: "No. Está pensado para personas que ya tienen un negocio funcionando y quieren ordenar, estructurar y escalar.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">Preguntas frecuentes</div>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-12">
          Lo que quizás te estás preguntando.
        </h2>
        <div className="divide-y divide-foreground/10 border-y border-foreground/10">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-lg md:text-xl text-foreground group-hover:text-[color:var(--verde)] transition-colors">
                    {it.q}
                  </span>
                  <span className="shrink-0 h-9 w-9 rounded-full border border-foreground/15 flex items-center justify-center group-hover:border-[color:var(--verde)] group-hover:bg-[color:var(--verde)] group-hover:text-background transition-all">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-foreground/70 leading-relaxed max-w-3xl">{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="relative overflow-hidden surface-dark py-32 md:py-44 noise">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Rocket className="h-8 w-8 mx-auto text-[color:var(--magenta)] mb-8" />
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-[color:var(--cream)] leading-[0.95] text-balance">
          Crecer no es <em className="italic">hacer más</em>.
          <br />
          Es saber <span className="gradient-text">hacia dónde</span>.
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-[color:var(--cream)]/70 text-lg leading-relaxed">
          Si sentís que es el momento de ordenar tu negocio y avanzar con claridad,
          escribime por WhatsApp y vemos si este proceso es para vos.
        </p>
        <div className="mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] text-foreground px-8 py-4 text-base font-medium transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_var(--magenta)]"
          >
            Escribir por WhatsApp
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-foreground/55">
        <div className="font-display text-base text-foreground">Jesica Ortigoza</div>
        <div>© {new Date().getFullYear()} · Método Brújula Expansiva™</div>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Imagina />
      <SobreMi />
      <Proceso />
      <Versiones />
      <Testimonios />
      <Faq />
      <Cierre />
      <Footer />
    </main>
  );
}
