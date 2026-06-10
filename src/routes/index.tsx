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
  Quote,
  Play,
} from "lucide-react";
import heroImg from "@/assets/hero-brujula.jpg";
import portraitImg from "@/assets/jesica-portrait.jpeg";
import workspaceImg from "@/assets/brujula-escritorio.png";
import silkImg from "@/assets/silk-abstract.jpg";
import videoThumb from "@/assets/video-thumbnail-jesica.png.asset.json";

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
          <a href="#para-quien" className="hover:text-foreground transition">Para quién</a>
          <a href="#versiones" className="hover:text-foreground transition">Versiones</a>
          <a href="#testimonios" className="hover:text-foreground transition">Resultados</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </div>
        <CtaButton className="!py-2.5 !px-5">Aplicar</CtaButton>
      </div>
    </nav>
  );
}

function VideoIntro() {
  const [playing, setPlaying] = useState(false);
  const videoId = "5SqoA3lTSbk";

  return (
    <section className="pt-28 md:pt-36 pb-6">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-3">
            Mentoría 1:1 · Método Brújula Expansiva™
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-balance">
            Cómo funciona <em className="italic gradient-text">Brújula Expansiva</em>
          </h2>

        </div>

        <div className="relative rounded-3xl overflow-hidden border border-foreground/10 shadow-[0_24px_80px_-24px_rgba(5,54,94,0.35)] aspect-video bg-[oklch(0.18_0.04_245)]">
          {!playing && (
            <>
              <img
                src={videoThumb.url}
                alt="Cómo funciona Brújula Expansiva"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10" />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                aria-label="Reproducir video"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[color:var(--cream)] blur-xl opacity-20 group-hover:opacity-35 transition-opacity" />
                  <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[color:var(--cream)]/90 text-[oklch(0.18_0.04_245)] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 md:h-10 md:w-10 ml-1" fill="currentColor" />
                  </div>
                </div>
              </button>
            </>
          )}

          {playing && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Video introductorio · Brújula Expansiva"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-28">
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

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/70 reveal">
          <Compass className="h-3.5 w-3.5" /> Mentoría 1:1 · Método Brújula Expansiva™
        </div>

        <h1 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-balance reveal" style={{ animationDelay: "0.1s" }}>
          Construí un negocio con <span className="gradient-text italic">dirección</span>, claridad y coherencia.
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-foreground/70 text-pretty leading-relaxed reveal" style={{ animationDelay: "0.2s" }}>
          Un proceso estratégico de 6 semanas para ordenar, posicionar y construir un sistema real de ventas.
          No es teoría. Es decisión, estructura e implementación real.
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 reveal" style={{ animationDelay: "0.3s" }}>
          <a href="#proceso" className="text-sm font-medium text-foreground/70 hover:text-foreground transition px-2">
            Ver el proceso ↓
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-foreground/10 pt-10 reveal" style={{ animationDelay: "0.4s" }}>
          {[
            ["6", "semanas"],
            ["6", "sesiones 1:1"],
            ["5", "fases"],
            ["2", "versiones"],
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
    <section className="relative py-16 md:py-20 surface-dark overflow-hidden">
      <div className="noise" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:oklch(0.85_0.12_350)] font-medium mb-4">Imaginá este escenario</div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-[color:var(--cream)]">
            En las próximas semanas, todo empieza a tener <em className="italic text-[color:oklch(0.78_0.14_350)]">su lugar</em>.
          </h2>
          <p className="mt-5 text-[color:var(--cream)]/75 leading-relaxed">
            No desde la exigencia. No desde el hacer constante. Desde la claridad.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={workspaceImg}
                alt="Escritorio con laptop, brújula dorada y luz natural"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>
          <ul className="md:col-span-7 flex flex-col">
            {items.map((t, i) => (
              <li
                key={i}
                className="group flex items-start gap-5 border-t border-white/10 py-3.5 first:border-t-0 first:pt-0 last:pb-0 transition-all hover:pl-2"
              >
                <span className="font-display text-sm text-[color:var(--cream)]/45 mt-1.5 tabular-nums">0{i + 1}</span>
                <p className="text-base md:text-lg text-[color:var(--cream)]/90 text-pretty leading-snug">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-[oklch(0.96_0.012_80)]">
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
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">¿Por qué puedo acompañarte en este proceso?</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Soy <em className="italic gradient-text">Jesica Ortigoza</em>.
          </h2>
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
            <p>
              Si hoy estás en un punto donde sentís que estás haciendo mucho, pero no necesariamente avanzando como te gustaría… <strong className="text-foreground">te entiendo, porque yo también pasé por ahí.</strong>
            </p>
            <p>
              Durante mucho tiempo, mi negocio se sostenía en hacer. Más contenido. Más ideas. Más esfuerzo. Pero sin una estructura clara, todo dependía de mí. Y eso no escala ni se sostiene en el tiempo.
            </p>
            <p>
              <strong className="text-foreground">El cambio no vino cuando hice más. Vino cuando empecé a <em className="italic">ordenar</em>.</strong> A entender que un negocio no crece por lo que hacés, sino por cómo está construido.
            </p>
            <p>
              Ahí empecé a integrar todo lo que hoy forma parte de mi enfoque: <strong className="text-foreground">mentalidad, liderazgo, modelo de negocio, posicionamiento, comunicación y sistema de ventas</strong>. No como partes separadas, sino como dimensiones que, al ordenarse, permiten construir un negocio más claro, más sólido y más sostenible. <strong className="text-foreground">Y eso es lo que hoy enseño.</strong>
            </p>
            <p>
              <strong className="text-foreground">Creé un método para personas que ya tienen un negocio funcionando, necesitan ordenar, decidir y avanzar con dirección.</strong> El <strong className="text-foreground">Método Brújula Expansiva™</strong> nace desde mi experiencia y la de clientes, desde lo que funciona, desde lo que se puede sostener.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["+6", "años acompañando"],
              ["+50", "procesos 1:1"],
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
      body: [
        "Acá es donde todo empieza a cambiar.",
        "Porque no solo incorporás nuevas herramientas, sino que empezás a ver tu negocio desde otro lugar.",
        <span className="font-semibold text-foreground">Trabajamos sobre tu mentalidad, tu visión y tu forma de liderar, para que puedas sostener el negocio que querés construir.</span>,
      ],
      cta: "Es la base de todo lo que viene después.",
    },
    {
      n: "02",
      icon: Target,
      title: "Dirección",
      body: [
        "Dejás de tener ideas sueltas.",
        <>Y empezás a tomar <span className="font-semibold text-foreground">decisiones con claridad</span>.</>,
        <>Definimos tu <span className="font-semibold text-foreground">modelo de negocio</span>, tu enfoque y cómo querés <span className="font-semibold text-foreground">crecer</span>.</>,
      ],
      cta: "Pasás de hacer un poco de todo a construir con intención.",
    },
    {
      n: "03",
      icon: Map,
      title: "Posicionamiento",
      body: [
        "Tu negocio empieza a tomar forma.",
        <span className="font-semibold text-foreground">Clarificás a quién le hablás, qué ofrecés y cómo lo comunicás.</span>,
      ],
      cta: "Tu mensaje deja de ser general y empieza a ser claro, directo y alineado a tu valor.",
    },
    {
      n: "04",
      icon: Layers,
      title: "Sistema",
      body: [
        "Acá aterrizamos todo a tierra.",
        <><span className="font-semibold text-foreground">Diseñamos cómo vas a vender</span>: canales, estructura, proceso.</>,
      ],
      cta: "Dejás de improvisar y empezás a tener un sistema.",
    },
    {
      n: "05",
      icon: Rocket,
      title: "Implementación",
      body: [
        "Todo lo anterior se integra y empieza a tomar forma en tu negocio.",
        <span className="font-semibold text-foreground">Lo que antes estaba en ideas, decisiones o definiciones, se traduce en acciones concretas, alineadas y sostenibles.</span>,
        <>Definimos cómo se expresa tu <span className="font-semibold text-foreground">posicionamiento</span>, cómo toma forma tu <span className="font-semibold text-foreground">comunicación</span>, cómo se estructuran tus productos y servicios y cómo empieza a <span className="font-semibold text-foreground">construirse un sistema que acompañe tu forma de vender</span> y crecer.</>,
      ],
      cta: <span className="font-semibold">Acá es donde lo que antes estaba disperso se ordena, se integra y empieza a funcionar de forma más clara, más sólida y más coherente.</span>,
    },
  ];
  return (
    <section id="proceso" className="relative py-16 md:py-20 bg-background border-t border-foreground/10">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">El proceso</div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
            Cinco fases. Una <span className="italic gradient-text">brújula</span>.
          </h2>
          <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
            Este proceso combina <strong>contenido pregrabado</strong>, <strong>sesiones estratégicas</strong> y un <strong>recorrido guiado</strong> para <strong>pasar de la claridad a la acción</strong>.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 rounded-3xl overflow-hidden border border-foreground/10">
          {fases.map(({ n, icon: Icon, title, body, cta }, idx) => (
            <div
              key={n}
              className={`group bg-background p-8 md:p-10 hover:bg-[oklch(0.99_0.008_80)] transition-colors duration-500 ${idx === fases.length - 1 && fases.length % 2 === 1 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-sm text-foreground/40 tabular-nums">Fase {n}</span>
                <Icon className="h-5 w-5 text-[color:var(--magenta)] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">{title}</h3>
              <div className="space-y-3">
                {body.map((p, i) => (
                  <p key={i} className="text-foreground/70 leading-relaxed">{p}</p>
                ))}
              </div>
              <p className="mt-4 text-[color:var(--verde)] font-medium">{cta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParaQuien() {
  const senales = [
    "Ya hiciste camino.",
    "Ya validaste algo.",
    "Ya invertiste, aprendiste, probaste y sostuviste.",
    "Y aún así, sientes que hay algo que todavía no termina de acomodarse del todo.",
  ];

  return (
    <section id="para-quien" className="py-20 md:py-28 bg-[oklch(0.96_0.012_80)]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--magenta)] mb-5">Para quién es este proceso</div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
            Creado para acompañarte cuando tu negocio <em className="italic gradient-text">ya existe</em>,
            pero todavía no refleja todo lo que podría llegar a ser.
          </h2>
        </div>

        <p className="text-center text-foreground/70 text-base md:text-xl leading-relaxed max-w-6xl mx-auto mb-14">
          Para que refleje, con claridad, estructura y coherencia, la etapa<br className="hidden md:block" />
          <span className="block md:inline">a la que estás lista para entrar.</span>
        </p>

        <div className="mb-14">
          <p className="font-display text-xl md:text-2xl text-foreground mb-6 text-center">
            Es para vos si…
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {senales.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-sm p-5 shadow-sm"
              >
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--magenta)]/10 text-[color:var(--magenta)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="rounded-2xl p-6 bg-background/60 border border-foreground/10">
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-3">Lo que necesitas hoy</div>
            <p className="text-foreground/80 leading-relaxed">
              No necesariamente más herramientas, sino algo más profundo: <strong className="text-foreground">dirección, foco, decisiones mejor alineadas</strong> y una estructura capaz de sostener el crecimiento que deseas con mayor madurez.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-background/60 border border-foreground/10">
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-3">Lo que este proceso hace</div>
            <p className="text-foreground/80 leading-relaxed">
              No está pensado para <em>idear</em> un negocio desde cero. Está pensado para <strong className="text-foreground">ordenar, fortalecer y expandir</strong> lo que ya existe, para construir desde una base más clara y sólida.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl p-8 md:p-10 text-center bg-gradient-to-br from-[color:var(--magenta)]/10 via-background to-[color:var(--magenta)]/5 border border-[color:var(--magenta)]/20">
          <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--magenta)] mb-4">Lo que pide de vos</div>
          <p className="font-display text-xl md:text-3xl leading-snug text-foreground">
            Este proceso requiere <em className="italic gradient-text">apertura, compromiso y disposición</em> para mirar, decidir y construir con más claridad.
          </p>
        </div>
      </div>
    </section>
  );
}

function Versiones() {
  const basic = [
    "Mentoría 1:1",
    "6 sesiones estratégicas",
    "Plataforma + roadmap del proceso",
    "Contenido pregrabado por fases",
    "Sistema de negocio",
    "Estrategia de contenidos",
    "Plan de acción",
    "Sistema de comunicación",
  ];
  const vipExtra = [
    "Desarrollo de marca",
    "Estrategia + contenido",
    "Piezas diseñadas para redes sociales",
    "Presentación de negocio",
    "Brújula de Comunicación™",
    "Roadmap de ventas",
  ];
  const vip = [...basic, ...vipExtra];

  return (
    <section id="versiones" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-[0.22em] text-[color:var(--magenta)] mb-5">Dos versiones</div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-balance px-2">
            Elegí cómo querés <em className="italic gradient-text">construir</em>.
          </h2>
          <p className="mt-6 text-foreground/70 text-lg">
            Mismo método. Distinto nivel de acompañamiento e implementación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Basic */}
          <article className="relative rounded-3xl border border-foreground/10 bg-card p-10 md:p-12 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-3xl">Basic</h3>
              <span className="text-xs uppercase tracking-wider text-foreground/50">Mentoría 1:1</span>
            </div>
            <p className="mt-3 text-foreground/65">El proceso completo de Brújula Expansiva, paso a paso.</p>

            <div className="mt-6 pb-6 border-b border-foreground/10">
              <div className="font-display text-4xl text-foreground">USD 700</div>
              <div className="mt-1 text-sm text-foreground/55">o ARS $700.000</div>
            </div>

            <ul className="mt-8 space-y-4 flex-1">
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
            <div className="relative flex flex-col flex-1">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl">VIP</h3>
                <span className="text-xs uppercase tracking-wider text-[color:var(--cream)]/70">Done-with-you</span>
              </div>
              <p className="mt-3 text-[color:var(--cream)]/85">Mentoría + implementación: salís con todo armado y listo para vender.</p>

              <div className="mt-6 pb-6 border-b border-[color:var(--cream)]/20">
                <div className="font-display text-4xl text-[color:var(--cream)]">USD 1.300</div>
                <div className="mt-1 text-sm text-[color:var(--cream)]/75">o ARS $1.300.000</div>
              </div>

              <ul className="mt-8 space-y-4 flex-1">
                {vip.map((f, i) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-1 shrink-0 ${i >= basic.length ? "text-[color:var(--cream)]" : "text-[color:var(--cream)]/70"}`} />
                    <span className={`${i >= basic.length ? "text-[color:var(--cream)] font-medium" : "text-[color:var(--cream)]/90"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 self-start inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] text-foreground px-6 py-3.5 text-sm font-medium transition-all hover:bg-background hover:shadow-[0_12px_40px_-12px_oklch(0_0_0/0.4)]"
              >
                Aplicar a VIP
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        </div>

        <p className="mt-10 text-center text-sm text-foreground/55">
          Cupos limitados por mes · Aplicá a la versión que tu negocio requiera en este momento
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
    <section id="testimonios" className="relative py-16 md:py-20 surface-dark overflow-hidden">
      <div className="noise" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:oklch(0.85_0.12_350)] font-medium mb-4">Ellos dicen</div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-[color:var(--cream)] md:whitespace-nowrap">
            No son frases. Son <em className="italic text-[color:oklch(0.78_0.14_350)]">decisiones tomadas</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.map((it) => (
            <figure
              key={it.name}
              className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col hover:border-white/25 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[color:oklch(0.82_0.13_165)] font-medium">{it.tag}</span>
                <Quote className="h-5 w-5 text-white/20" />
              </div>
              <blockquote className="font-display text-xl leading-snug text-[color:var(--cream)]/95 flex-1">
                "{it.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <div className="font-medium text-sm text-[color:var(--cream)]">{it.name}</div>
                <div className="text-xs text-[color:var(--cream)]/60 mt-0.5">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function LlamadoIntermedio() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">Tu próximo paso</div>
        <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
          Si algo de todo esto te resonó, <em className="italic gradient-text">conversemos</em>.
        </h2>
        <p className="mt-5 text-foreground/70 leading-relaxed">
          Definí por WhatsApp si Brújula Expansiva es el proceso para vos.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton>Conversemos en WhatsApp</CtaButton>
        </div>
      </div>
    </section>
  );
}
function Faq() {
  const items: { q: string; a: React.ReactNode }[] = [
    {
      q: "¿Cómo sé si este proceso es para mí?",
      a: (
        <>
          <p>Este proceso está pensado para personas que ya tienen un negocio en funcionamiento, que ya validaron algo y que hoy necesitan ordenar, estructurar y sostener su crecimiento con más claridad.</p>
          <p className="mt-3">Si estás en una etapa inicial o aún no tenés un negocio en marcha, es mejor comenzar por otro tipo de proceso.</p>
        </>
      ),
    },
    {
      q: "¿Necesito tener todo claro antes de empezar?",
      a: (
        <>
          <p>No.</p>
          <p className="mt-3">Este proceso está diseñado justamente para ayudarte a ordenar lo que hoy está disperso: ideas, decisiones y definiciones.</p>
          <p className="mt-3">No es necesario tener todo resuelto, pero sí estar en movimiento y con apertura para mirar, decidir y construir con mayor claridad.</p>
        </>
      ),
    },
    {
      q: "¿Cuánto tiempo tengo que dedicarle?",
      a: (
        <>
          <p>Es un proceso activo.</p>
          <p className="mt-3">Para aprovecharlo al máximo, es recomendable que puedas contar con al menos 5 a 6 horas semanales para avanzar, implementar y sostener lo trabajado en cada etapa.</p>
          <p className="mt-3">Esto es lo que permite que el proceso no quede solo en claridad, sino que se traduzca en resultados reales.</p>
        </>
      ),
    },
    {
      q: "¿Qué pasa si no implemento?",
      a: (
        <>
          <p>Este proceso está diseñado para ejecutarse.</p>
          <p className="mt-3">Cada etapa requiere avance previo y construcción progresiva. No está pensado para quedarse en la teoría.</p>
          <p className="mt-3">Si hoy no tenés el tiempo o la disposición para implementar, es mejor elegir un momento donde sí puedas aprovecharlo en profundidad.</p>
        </>
      ),
    },
    {
      q: "¿Qué diferencia hay entre Basic y VIP?",
      a: (
        <>
          <p>La diferencia está en el nivel de acompañamiento y profundidad en la implementación.</p>
          <p className="mt-3">Basic está pensado para quienes quieren avanzar de forma más autónoma y desarrollar su capacidad de autogestión dentro del proceso.</p>
          <p className="mt-3">VIP es para quienes buscan un acompañamiento más cercano y llevar todo a la práctica con mayor profundidad, incluyendo el desarrollo de activos comerciales claves del negocio.</p>
        </>
      ),
    },
    {
      q: "¿Cómo funciona el pago?",
      a: (
        <>
          <p>Podés abonar el proceso según tu ubicación.</p>
          <p className="mt-3">Si estás en Argentina, podés hacerlo vía transferencia o Mercado Pago, con posibilidad de pago en hasta 2 cuotas.</p>
          <p className="mt-3">Si estás en otro país, podés abonar vía PayPal o Western Union.</p>
          <p className="mt-3">Si necesitás organizar la forma de pago, lo vemos al momento de avanzar.</p>
        </>
      ),
    },
    {
      q: "¿Qué pasa después de realizar el pago?",
      a: (
        <>
          <p>Una vez confirmado el pago, recibís un mail de bienvenida con todos los accesos y el onboarding para comenzar el proceso.</p>
          <p className="mt-3">Desde ahí, iniciamos de forma ordenada, con claridad sobre los próximos pasos y cómo avanzar en cada etapa.</p>
        </>
      ),
    },
    {
      q: "¿Qué resultados puedo esperar?",
      a: (
        <>
          <p>Los resultados dependen de tu punto de partida y del nivel de implementación.</p>
          <p className="mt-3">En general, este proceso te permite construir un negocio más claro, mejor estructurado, con una propuesta más alineada y una base sólida para vender y crecer de forma más sostenida.</p>
        </>
      ),
    },
  ];
  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--magenta)] mb-4">Preguntas frecuentes</div>
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-10">
          Lo que quizás te estás preguntando.
        </h2>
        <div className="grid gap-4">
          {items.map((it, i) => (
            <article
              key={it.q}
              className="rounded-2xl border border-foreground/10 bg-[oklch(0.98_0.008_80)] p-6 md:p-7"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="mt-1 font-display text-sm tabular-nums text-[color:var(--verde)]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg md:text-xl leading-snug text-foreground">
                  {it.q}
                </h3>
              </div>
              <div className="pl-9 text-foreground/70 leading-relaxed">
                {it.a}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="relative overflow-hidden surface-dark py-16 md:py-24 noise">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Rocket className="h-6 w-6 mx-auto text-[color:var(--magenta)] mb-6" />
        <p className="font-display text-lg md:text-xl text-[color:var(--cream)]/85 leading-snug">
          Podés seguir haciendo. Podés seguir probando. Podés seguir ajustando…
        </p>
        <p className="mt-4 font-display text-xl md:text-2xl text-[color:var(--cream)] leading-snug">
          O podés decidir <em className="italic">hacer algo distinto</em>.
        </p>

        <ul className="mt-6 flex flex-col items-center gap-1 text-[color:var(--cream)]/85 font-display text-lg md:text-xl leading-snug">
          <li>Ordenar tu negocio</li>
          <li>Construir con dirección</li>
          <li>Avanzar con claridad</li>
        </ul>

        <h2 className="mt-10 font-display text-xl md:text-2xl text-[color:var(--cream)] leading-snug text-balance max-w-2xl mx-auto">
          Porque crecer no es <em className="italic">hacer más</em>. Es saber <span className="gradient-text">hacia dónde estás yendo</span> y construir en coherencia con eso.
        </h2>

        <div className="mt-8">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] text-foreground px-7 py-3.5 text-sm font-medium transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_var(--magenta)]"
          >
            Conversemos en WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      <VideoIntro />
      <Hero />
      <Marquee />
      <Imagina />
      <SobreMi />
      <Proceso />
      <ParaQuien />
      <Versiones />
      <Testimonios />
      <LlamadoIntermedio />
      <Faq />
      <Cierre />
      <Footer />
    </main>
  );
}
