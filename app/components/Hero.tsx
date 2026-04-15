import Image from "next/image";

function BackgroundGridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute left-1/2 -translate-x-1/2 w-[1920px] h-[1440px] top-0 opacity-[0.08]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/bg-grid-vertical.svg" alt="" className="absolute inset-0 w-full h-full" role="presentation" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/bg-grid-horizontal.svg" alt="" className="absolute inset-0 w-full h-full" role="presentation" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full px-[80px] pt-[96px] pb-[96px]">
      <BackgroundGridPattern />
      <div className="relative flex items-start gap-[32px] max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-[48px] w-[626px] shrink-0">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[60px] font-semibold tracking-[-1.2px] leading-[72px]" style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif" }}>
              <span className="text-white">Cut your ping and </span>
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(167deg, #43CBFF 0%, #9708CC 100%)" }}>
                Play Smoother
              </span>
            </h1>
            <p className="text-[20px] leading-[30px] text-[#98a2b3] font-normal font-[family-name:var(--font-inter)]">
              HyperUp is the fastest way to lower ping, kill packet loss,
              <br />
              and stabilize your mobile games — powered by AI routing.
            </p>
          </div>
          <button className="flex items-center justify-center gap-[10px] px-[24px] py-[16px] bg-[#7f56d9] rounded-[8px] border-b-[3px] border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-fit">
            <span className="text-white font-semibold text-[18px] leading-[28px] font-[family-name:var(--font-inter)]">Get Started</span>
            <div className="relative w-[24px] h-[24px] rotate-90">
              <Image src="/assets/chevron-right.svg" alt="" fill />
            </div>
          </button>
        </div>

        {/* Gallery - diamond-rotated game icons grid */}
        <div className="relative w-[600px] h-[592px] shrink-0">
          <div className="absolute inset-0 overflow-hidden rounded-[600px]" style={{ clipPath: "inset(0 0 0 0 round 0)" }}>
            <div
              className="absolute"
              style={{
                top: -160,
                left: 1,
                width: 598,
                height: 598,
                display: "grid",
                gridTemplateColumns: "repeat(4, 130px)",
                gap: "26px",
              }}
            >
              {[
                "/assets/game-01.png", "/assets/game-02.png", "/assets/game-03.png", "/assets/game-08.png",
                "/assets/game-05.png", "/assets/game-06.png", "/assets/game-07.png", null,
                "/assets/game-09.png", "/assets/game-12.png", null, "/assets/game-10.png",
                null, "/assets/game-11.png", null, null,
              ].map((src, i) =>
                src ? (
                  <div key={i} className="relative w-[130px] h-[130px] rounded-[42px] overflow-hidden">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ) : (
                  <div key={i} className="w-[130px] h-[130px]" />
                )
              )}
            </div>
            {/* Second copy for seamless scroll */}
            <div
              className="absolute"
              style={{
                top: 310,
                left: 1,
                width: 598,
                height: 598,
                display: "grid",
                gridTemplateColumns: "repeat(4, 130px)",
                gap: "26px",
              }}
            >
              {[
                null, "/assets/game-02.png", "/assets/game-03.png", null,
                "/assets/game-05.png", "/assets/game-06.png", "/assets/game-07.png", "/assets/game-13.png",
                "/assets/game-09.png", null, "/assets/game-10.png", "/assets/game-11.png",
                "/assets/game-04.png", "/assets/game-12.png", null, null,
              ].map((src, i) =>
                src ? (
                  <div key={i} className="relative w-[130px] h-[130px] rounded-[42px] overflow-hidden">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ) : (
                  <div key={i} className="w-[130px] h-[130px]" />
                )
              )}
            </div>
          </div>
          {/* Stable FPS badge */}
          <div className="absolute right-[90px] top-[220px] w-[130px] h-[130px] bg-white rounded-[42px] shadow-[0px_12px_24px_0px_rgba(16,24,40,0.1)] flex flex-col items-center justify-center z-10">
            <div className="relative w-[85px] h-[70px]">
              <Image src="/assets/gemini-stable-fps.png" alt="Stable FPS" fill className="object-contain" />
            </div>
            <span className="text-[12px] font-semibold text-black text-center tracking-[-0.24px] mt-[4px]" style={{ fontFamily: "'SF Pro Rounded', sans-serif" }}>
              Stable<br />FPS
            </span>
          </div>
          {/* Worldwide Servers badge */}
          <div className="absolute left-[1px] bottom-[30px] w-[130px] h-[130px] bg-white rounded-[42px] shadow-[0px_12px_24px_0px_rgba(16,24,40,0.1)] flex flex-col items-center justify-center z-10">
            <div className="relative w-[75px] h-[62px]">
              <Image src="/assets/gemini-servers.png" alt="Worldwide Servers" fill className="object-contain" />
            </div>
            <span className="text-[12px] font-semibold text-black text-center tracking-[-0.24px] mt-[4px]" style={{ fontFamily: "'SF Pro Rounded', sans-serif" }}>
              Worldwide<br />Servers
            </span>
          </div>
        </div>
      </div>
      {/* Arrow decoration */}
      <div className="absolute left-[253px] bottom-[60px] w-[82px] h-[77px] -scale-y-100 rotate-[37.5deg]">
        <Image src="/assets/hero-arrow.svg" alt="" fill />
      </div>
    </section>
  );
}
