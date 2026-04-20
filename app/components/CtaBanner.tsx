import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="w-full bg-white pb-[96px] px-[80px]">
      <div className="relative max-w-[1280px] mx-auto bg-[#7342d9] rounded-[16px] overflow-hidden p-[64px] flex flex-wrap items-center justify-between gap-y-[32px]">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <Image
            src="/assets/dots-bg-pattern.svg"
            alt=""
            fill
            className="object-center"
          />
        </div>
        <div className="relative flex flex-col gap-[16px] max-w-[768px] min-w-[480px] flex-1 z-10">
          <h2
            className="text-[30px] font-semibold leading-[38px] text-white"
            style={{
              fontFamily:
                "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif",
            }}
          >
            No Disconnects. No Lag. Just Crisp, Seamless Gameplay
          </h2>
          <p className="text-[20px] leading-[30px] text-[#E9D7FE] font-normal font-[family-name:var(--font-inter)]">
            Every match — a new record. HeperUp learns from your sessions
            <br />
            and gets faster every day.
          </p>
        </div>
        <button
          className="
            relative z-10 inline-flex items-center justify-center
            gap-[10px] px-[24px] py-[16px]
            rounded-[8px] bg-white
            text-[#101828] shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_-3px_0_0_#D0D0D0]
            transition-[transform,background-color,box-shadow] duration-150 ease-out
            hover:bg-[#DCDCDC] hover:shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_-3px_0_0_#B4B4B4]
            active:translate-y-[3px] active:bg-[#DCDCDC] active:shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_0_0_0_#B4B4B4]
          "
        >
          <span className="font-semibold text-[18px] leading-[28px] font-[family-name:var(--font-inter)]">
            Get Started
          </span>
          <div className="relative h-[24px] w-[24px] rotate-90">
            <Image src="/assets/chevron-cta.svg" alt="" fill />
          </div>
        </button>
      </div>
    </section>
  );
}
