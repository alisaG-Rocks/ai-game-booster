import Image from "next/image";

const features = [
  {
    icon: "/assets/icon-smart.svg",
    title: "Smart AI Routing",
    description: "Our neural network analyzes thousands of routes and picks the fastest one for your game in real-time. Lower ping, zero effort.",
    color: "#079455",
    bg: "#f6fef9",
    position: "left" as const,
    height: 550,
    top: 0,
  },
  {
    icon: "/assets/icon-tap.svg",
    title: "One-Tap Boost",
    description: "No settings. No configuration. Open the app, tap the button, and play without lag. It's that simple.",
    color: "#9f1ab1",
    bg: "#fdf4ff",
    position: "left" as const,
    height: 550,
    top: 574,
  },
  {
    icon: "/assets/icon-game.svg",
    title: "Game Profiles & Auto-Detection",
    description: "Launch a game — LagOff.ai detects it instantly and applies the optimal profile. Support for 200+ games.",
    color: "#a15c07",
    bg: "#fefbe8",
    position: "left" as const,
    height: 550,
    top: 1148,
  },
  {
    icon: "/assets/icon-global.svg",
    title: "Global Server Network",
    description: "50+ countries with nodes next to game data centers. LagOff.ai automatically finds the closest one for you.",
    color: "#0e7090",
    bg: "#ecfdff",
    position: "right" as const,
    height: 778,
    top: 0,
  },
  {
    icon: "/assets/icon-shield.svg",
    title: "Predictive Lag Shield",
    description: "AI predicts network drops before they hit your game and pre-switches routes. You'll never notice a thing.",
    color: "#c01048",
    bg: "#fff1f3",
    position: "right" as const,
    height: 778,
    top: 802,
  },
  {
    icon: "/assets/icon-stats.svg",
    title: "Real Stats, Real Results",
    description: "Your personal dashboard: ping reduction, saved packets, lag-free hours. See exactly how LagOff.ai improves your game.",
    color: "#363f72",
    bg: "#f8f9fc",
    position: "right" as const,
    height: 778,
    top: 1604,
  },
];

export default function Features() {
  return (
    <section className="w-full pb-[96px] px-[80px]">
      <div className="relative max-w-[1280px] mx-auto h-[2382px]">
        {features.map((f, i) => (
          <div
            key={i}
            className="absolute rounded-[16px] overflow-hidden p-[24px] flex flex-col gap-[20px]"
            style={{
              backgroundColor: f.bg,
              width: 628,
              height: f.height,
              left: f.position === "left" ? 0 : 652,
              top: f.top,
            }}
          >
            <div className="flex items-center gap-[10px]">
              <div className="relative w-[32px] h-[32px] shrink-0">
                <Image src={f.icon} alt="" fill />
              </div>
              <h3
                className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px]"
                style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif", color: f.color }}
              >
                {f.title}
              </h3>
            </div>
            <p className="text-[20px] leading-[30px] text-[#475467] font-normal font-[family-name:var(--font-inter)]">
              {f.description}
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[370px] h-[70%]">
              <Image src="/assets/iphone-mockup.png" alt="iPhone mockup" fill className="object-contain object-bottom" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
