import Image from "next/image";
import Link from "next/link";

export default function BottomCta() {
  return (
    <section className="w-full bg-white pb-[96px] relative">
      <div
        className="relative max-w-[1280px] mx-auto rounded-[16px] overflow-hidden pt-[64px] pb-[84px] px-[32px] flex flex-col items-center gap-[32px]"
        style={{
          background:
            "radial-gradient(38.28% 38.28% at 50% 0%, #A278FC 0%, #7342D9 100%), linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0">
          <Image
            src="/assets/dots-bg-pattern.svg"
            alt=""
            fill
            className="object-center"
          />
        </div>

        {/* Arrow decoration */}
        <div className="absolute right-[400px] bottom-[96px] w-[133px] h-[76px] rotate-[-18deg] z-10">
          <Image
            src="/assets/cta-arrow.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-[16px] max-w-[768px] text-center">
          <h2
            className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold tracking-[-0.72px] text-[36px] leading-[44px] text-white"
            style={{
              fontFamily:
                "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif",
            }}
          >
            Stop losing to lag.
            <br />
            Start winning with HyperUp
          </h2>
          <p className="text-[20px] leading-[30px] text-[#e9d7fe] font-normal font-[family-name:var(--font-inter)]">
            Join now and feel the difference in your first match.
          </p>
        </div>

        <Link
          href="/quiz"
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
        </Link>

        {/* Bottom wave + rocket */}
        <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[269px] h-[71px] -scale-y-100">
          <Image
            src="/assets/cta-wave.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[77px] h-[121px] z-20">
        <video
          src="/assets/rocket.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-[50%]"
        />
      </div>
    </section>
  );
}
