import Image from "next/image";

export default function BottomCta() {
  return (
    <section className="w-full bg-white pb-[96px]">
      <div
        className="relative max-w-[1280px] mx-auto rounded-[16px] overflow-hidden pt-[64px] pb-[84px] px-[32px] flex flex-col items-center gap-[32px]"
        style={{
          background: "radial-gradient(ellipse at center, #a278fc 0%, #8b5dea 50%, #7342d9 100%)",
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/assets/bg-pattern-dots.svg" alt="" fill className="object-cover" />
        </div>

        {/* Arrow decoration */}
        <div className="absolute right-[240px] top-[136px] w-[133px] h-[76px] rotate-[-18deg] z-10">
          <Image src="/assets/cta-arrow.svg" alt="" fill className="object-contain" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-[16px] max-w-[768px] text-center">
          <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-white" style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif" }}>
            Stop losing to lag.
            <br />
            Start winning with HyperUp
          </h2>
          <p className="text-[20px] leading-[30px] text-[#e9d7fe] font-normal font-[family-name:var(--font-inter)]">
            Join now and feel the difference in your first match.
          </p>
        </div>

        <button className="relative z-10 flex items-center justify-center gap-[10px] px-[24px] py-[16px] bg-white rounded-[8px] border-b-[3px] border-[#d0d0d0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <span className="text-[#101828] font-semibold text-[18px] leading-[28px] font-[family-name:var(--font-inter)]">Get Started</span>
          <div className="relative w-[24px] h-[24px] rotate-90">
            <Image src="/assets/chevron-cta.svg" alt="" fill />
          </div>
        </button>

        {/* Bottom wave + rocket */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[269px] h-[71px] -scale-y-100">
          <Image src="/assets/cta-wave.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[77px] h-[121px] z-20">
          <Image src="/assets/rocket.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}
