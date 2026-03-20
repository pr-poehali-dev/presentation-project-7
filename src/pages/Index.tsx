import { useState } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 0,
    type: "title",
    number: null,
    label: "ВВЕДЕНИЕ",
    title: "ПРОИЗВОДСТВЕННЫЙ\nТРАВМАТИЗМ",
    subtitle: "Причины. Виды. Профилактика.",
    content: null,
    extra: null,
    causes: null,
    injuries: null,
    steps: null,
  },
  {
    id: 1,
    type: "definition",
    number: "01",
    label: "ОПРЕДЕЛЕНИЕ",
    title: "ЧТО ТАКОЕ\nПРОИЗВОДСТВЕННЫЙ\nТРАВМАТИЗМ?",
    subtitle: null,
    content:
      "Производственный травматизм — это совокупность несчастных случаев на производстве, повлёкших повреждение здоровья работников при выполнении трудовых обязанностей.",
    extra:
      "Включает травмы, профессиональные заболевания и случаи со смертельным исходом, произошедшие на рабочем месте или в связи с производственной деятельностью.",
    causes: null,
    injuries: null,
    steps: null,
  },
  {
    id: 2,
    type: "causes",
    number: "02",
    label: "ПРИЧИНЫ",
    title: "ОСНОВНЫЕ ГРУППЫ\nПРИЧИН ТРАВМАТИЗМА",
    subtitle: null,
    content: null,
    extra: null,
    causes: [
      { icon: "ClipboardList", label: "Организационные", desc: "Недостатки в обучении, отсутствие инструкций, неудовлетворительный контроль" },
      { icon: "Settings", label: "Технические", desc: "Неисправность оборудования, нарушение технологического процесса" },
      { icon: "Wind", label: "Санитарно-гигиенические", desc: "Плохое освещение, шум, вибрация, загрязнённый воздух" },
      { icon: "Brain", label: "Психофизиологические", desc: "Утомление, невнимательность, спешка" },
      { icon: "UserX", label: "Ошибки персонала", desc: "Нарушение правил, неосторожность, неиспользование СИЗ" },
    ],
    injuries: null,
    steps: null,
  },
  {
    id: 3,
    type: "injuries",
    number: "03",
    label: "ВИДЫ ТРАВМ",
    title: "РАСПРОСТРАНЁННЫЕ\nВИДЫ ТРАВМ",
    subtitle: null,
    content: null,
    extra: null,
    causes: null,
    injuries: [
      { emoji: "🦴", name: "Переломы", desc: "Костей конечностей, рёбер, позвоночника" },
      { emoji: "🟤", name: "Ушибы", desc: "Мягких тканей, внутренних органов" },
      { emoji: "✂️", name: "Порезы", desc: "Резаные и колотые ранения кожи" },
      { emoji: "🔥", name: "Ожоги", desc: "Термические, химические, электрические" },
      { emoji: "⚠️", name: "Отравления", desc: "Токсичными веществами и газами" },
    ],
    steps: null,
  },
  {
    id: 4,
    type: "prevention",
    number: "04",
    label: "ПРОФИЛАКТИКА",
    title: "КАК ИЗБЕЖАТЬ\nТРАВМАТИЗМА?",
    subtitle: null,
    content: null,
    extra: null,
    causes: null,
    injuries: null,
    steps: [
      { n: "1", text: "Проводить регулярный инструктаж и обучение сотрудников" },
      { n: "2", text: "Обеспечивать исправность оборудования и инструментов" },
      { n: "3", text: "Соблюдать санитарно-гигиенические нормы на рабочем месте" },
      { n: "4", text: "Использовать средства индивидуальной защиты (СИЗ)" },
      { n: "5", text: "Контролировать режим труда и отдыха работников" },
      { n: "6", text: "Вести учёт и анализ несчастных случаев для предотвращения повторений" },
    ],
  },
];

const ACCENT = "#C0392B";

const ibm: React.CSSProperties = { fontFamily: "'IBM Plex Sans', sans-serif" };
const oswald: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

function SlideLabel({ text }: { text: string }) {
  return (
    <div style={{ ...ibm, fontSize: "10px", letterSpacing: "4px", color: ACCENT, marginBottom: "22px", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase" as const }}>
      <span style={{ display: "block", width: "28px", height: "1px", background: ACCENT }} />
      {text}
    </div>
  );
}

function BigNumber({ n }: { n: string }) {
  return (
    <div style={{ ...oswald, position: "absolute", right: "0", top: "0", fontSize: "clamp(80px, 12vw, 140px)", fontWeight: 700, color: "rgba(0,0,0,0.04)", lineHeight: 1, userSelect: "none" as const, pointerEvents: "none" as const }}>
      {n}
    </div>
  );
}

function Heading({ children, size = "large" }: { children: React.ReactNode; size?: "large" | "medium" }) {
  const fontSize = size === "large" ? "clamp(36px, 5vw, 64px)" : "clamp(22px, 3vw, 42px)";
  return (
    <h2 style={{ ...oswald, fontSize, fontWeight: 700, lineHeight: 1.05, color: "#F0F0F0", margin: "0 0 32px 0", whiteSpace: "pre-line" as const, letterSpacing: "-0.5px" }}>
      {children}
    </h2>
  );
}

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= slides.length || animating) return;
    setDir(idx > current ? 1 : -1);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 220);
  };

  const slide = slides[current];

  return (
    <div style={{ ...oswald, background: "#0D0D0D", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ background: "#1A1A1A", padding: "11px 36px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ ...ibm, color: "#555", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const }}>
          Охрана труда
        </span>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? "26px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? ACCENT : "#3A3A3A", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
          ))}
        </div>
        <span style={{ ...ibm, color: "#555", fontSize: "10px", letterSpacing: "2px" }}>
          {current + 1} / {slides.length}
        </span>
      </div>

      {/* Main slide */}
      <div style={{ flex: 1, display: "flex", alignItems: "stretch", opacity: animating ? 0 : 1, transform: animating ? `translateY(${dir * 10}px)` : "translateY(0)", transition: "opacity 0.22s ease, transform 0.22s ease" }}>
        {/* Red bar */}
        <div style={{ width: "5px", background: ACCENT, flexShrink: 0 }} />

        {/* Content */}
        <div style={{ flex: 1, padding: "clamp(28px, 5vh, 60px) clamp(20px, 6vw, 72px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* TITLE SLIDE */}
          {slide.type === "title" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: "-60px", top: "50%", transform: "translateY(-50%)", width: "320px", height: "320px", borderRadius: "50%", border: "1px solid rgba(192,57,43,0.1)", pointerEvents: "none" as const }} />
              <div style={{ position: "absolute", right: "30px", top: "50%", transform: "translateY(-50%)", width: "190px", height: "190px", borderRadius: "50%", border: "1px solid rgba(192,57,43,0.07)", pointerEvents: "none" as const }} />
              <SlideLabel text={slide.label} />
              <h1 style={{ ...oswald, fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.05, color: "#F0F0F0", margin: "0 0 28px 0", whiteSpace: "pre-line" as const, letterSpacing: "-0.5px" }}>
                {slide.title}
              </h1>
              <div style={{ width: "56px", height: "3px", background: ACCENT, marginBottom: "28px" }} />
              <p style={{ ...ibm, fontSize: "15px", fontWeight: 300, color: "#888", margin: 0, letterSpacing: "3px", textTransform: "uppercase" as const }}>
                {slide.subtitle}
              </p>
            </div>
          )}

          {/* DEFINITION SLIDE */}
          {slide.type === "definition" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <BigNumber n={slide.number!} />
              <SlideLabel text={slide.label} />
              <Heading size="medium">{slide.title}</Heading>
              <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "28px", maxWidth: "660px" }}>
                <p style={{ ...ibm, fontSize: "17px", fontWeight: 400, color: "#E0E0E0", lineHeight: 1.75, margin: "0 0 18px 0" }}>
                  {slide.content}
                </p>
                <p style={{ ...ibm, fontSize: "14px", fontWeight: 300, color: "#888", lineHeight: 1.7, margin: 0, fontStyle: "italic" as const }}>
                  {slide.extra}
                </p>
              </div>
            </div>
          )}

          {/* CAUSES SLIDE */}
          {slide.type === "causes" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <BigNumber n={slide.number!} />
              <SlideLabel text={slide.label} />
              <Heading size="medium">{slide.title}</Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "720px" }}>
                {slide.causes!.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#1A1A1A", borderLeft: `3px solid ${ACCENT}` }}>
                    <div style={{ width: "32px", height: "32px", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={c.icon} size={15} color="#fff" />
                    </div>
                    <div style={{ display: "flex", gap: "16px", alignItems: "baseline", flexWrap: "wrap" as const }}>
                      <span style={{ ...oswald, fontSize: "14px", fontWeight: 500, letterSpacing: "0.5px", color: "#F0F0F0", minWidth: "170px" }}>{c.label}</span>
                      <span style={{ ...ibm, fontSize: "13px", fontWeight: 300, color: "#888", lineHeight: 1.5 }}>{c.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INJURIES SLIDE */}
          {slide.type === "injuries" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <BigNumber n={slide.number!} />
              <SlideLabel text={slide.label} />
              <Heading size="medium">{slide.title}</Heading>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                {slide.injuries!.map((inj, i) => (
                  <div key={i} style={{ background: "#1A1A1A", padding: "20px 16px", width: "132px", borderBottom: `3px solid ${ACCENT}`, flex: "0 0 auto" }}>
                    <div style={{ fontSize: "30px", marginBottom: "10px" }}>{inj.emoji}</div>
                    <div style={{ ...oswald, fontSize: "14px", fontWeight: 500, color: "#F0F0F0", marginBottom: "6px" }}>{inj.name}</div>
                    <div style={{ ...ibm, fontSize: "11px", fontWeight: 300, color: "#888", lineHeight: 1.5 }}>{inj.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PREVENTION SLIDE */}
          {slide.type === "prevention" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <BigNumber n={slide.number!} />
              <SlideLabel text={slide.label} />
              <Heading size="medium">{slide.title}</Heading>
              <div style={{ display: "flex", flexDirection: "column", maxWidth: "660px" }}>
                {slide.steps!.map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "18px", padding: "12px 0", borderBottom: "1px solid #2A2A2A" }}>
                    <span style={{ ...oswald, fontSize: "24px", fontWeight: 700, color: ACCENT, minWidth: "30px", lineHeight: 1 }}>{step.n}</span>
                    <span style={{ ...ibm, fontSize: "14px", fontWeight: 400, color: "#E0E0E0", lineHeight: 1.55 }}>{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ background: "#1A1A1A", padding: "14px 36px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          style={{ background: current === 0 ? "transparent" : ACCENT, border: current === 0 ? "1px solid #333" : "none", color: current === 0 ? "#444" : "#fff", padding: "9px 26px", ...oswald, fontSize: "11px", letterSpacing: "2px", cursor: current === 0 ? "default" : "pointer", transition: "all 0.2s" }}
        >
          ← НАЗАД
        </button>

        <div style={{ display: "flex", gap: "2px" }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ ...ibm, fontSize: "11px", color: i === current ? ACCENT : "#444", background: "transparent", border: "none", cursor: "pointer", padding: "4px 8px", letterSpacing: "1px", transition: "color 0.2s" }}>
              {s.number || "—"}
            </button>
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          style={{ background: current === slides.length - 1 ? "transparent" : ACCENT, border: current === slides.length - 1 ? "1px solid #333" : "none", color: current === slides.length - 1 ? "#444" : "#fff", padding: "9px 26px", ...oswald, fontSize: "11px", letterSpacing: "2px", cursor: current === slides.length - 1 ? "default" : "pointer", transition: "all 0.2s" }}
        >
          ВПЕРЁД →
        </button>
      </div>
    </div>
  );
}