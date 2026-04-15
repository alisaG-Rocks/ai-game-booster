import Image from "next/image";

export default function PingSection() {
  return (
    <section className="relative w-full bg-white py-[96px] px-[80px] overflow-hidden">
      {/* Line pattern decorations */}
      <div className="absolute left-0 top-0 w-[298px] h-[408px] opacity-30">
        <Image src="/assets/line-pattern.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute right-0 bottom-[100px] w-[298px] h-[408px] opacity-30 scale-x-[-1]">
        <Image src="/assets/line-pattern.svg" alt="" fill className="object-contain" />
      </div>

      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-[64px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[20px] max-w-[768px] text-center">
          <h2 className="text-[36px] font-semibold tracking-[-0.72px] leading-[44px]" style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif" }}>
            <span className="text-[#101828]">Watch </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(178deg, #43CBFF 0%, #9708CC 100%)" }}>
              Ping Drop
            </span>
            <br />
            <span className="text-[#101828]">in Your Favorite Games</span>
          </h2>
          <p className="text-[20px] leading-[30px] text-[#475467] font-normal font-[family-name:var(--font-inter)]">
            HyperUp optimizes routes for 200+ mobile games. Here&apos;s what
            <br />real players see after one tap.
          </p>
        </div>

        {/* Ping comparison boxes */}
        <div className="relative w-[553px] h-[154px]">
          <Image src="/assets/ping-union.svg" alt="" fill className="object-contain" />
          <div className="absolute left-[18px] top-[23px] flex flex-col">
            <span className="text-[#f04438] text-[60px] font-semibold leading-[72px] tracking-[-1.2px]" style={{ fontFamily: "'SF Pro Rounded', sans-serif" }}>~110ms</span>
            <span className="text-[#f04438] text-[16px] font-medium leading-[24px] font-[family-name:var(--font-inter)]">Before</span>
          </div>
          <div className="absolute right-[18px] top-[23px] flex flex-col">
            <span className="text-[#17b26a] text-[60px] font-semibold leading-[72px] tracking-[-1.2px]" style={{ fontFamily: "'SF Pro Rounded', sans-serif" }}>~20ms</span>
            <span className="text-[#17b26a] text-[16px] font-medium leading-[24px] font-[family-name:var(--font-inter)]">After HyperUp</span>
          </div>
        </div>

        {/* iPhone mockups */}
        <div className="relative w-full h-[512px] flex items-center justify-center">
          {/* Lagging phone */}
          <div className="relative w-[284px] h-[618px] mr-[-15px] mt-[75px]">
            <div className="absolute inset-[-17px] z-0">
              <Image src="/assets/ping-iphone.png" alt="iPhone mockup" fill className="object-contain" />
            </div>
            <div className="absolute inset-0 rounded-[40px] overflow-hidden z-10">
              <Image src="/assets/ping-screen-lag.png" alt="Lagging gameplay" fill className="object-cover" />
            </div>
          </div>
          {/* Smooth phone */}
          <div className="relative w-[284px] h-[618px] ml-[-15px]">
            <div className="absolute inset-[-17px] z-0">
              <Image src="/assets/ping-iphone.png" alt="iPhone mockup" fill className="object-contain" />
            </div>
            <div className="absolute inset-0 rounded-[40px] overflow-hidden z-10">
              <Image src="/assets/ping-screen-smooth.png" alt="Smooth gameplay" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
