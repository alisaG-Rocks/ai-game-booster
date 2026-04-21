import Image from "next/image";

export default function PingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-[80px] pb-[96px]">
      <div className="absolute left-0 top-0 h-[408px] w-[298px]">
        <Image
          src="/assets/line-pattern.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[64px]">
        <div className="flex max-w-[768px] flex-col items-center gap-[20px] text-center">
          <h2
            className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold tracking-[-1.2px] text-[36px] leading-[44px]"
          >
            <span className="text-[#101828]">Watch </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(178deg, #43CBFF 0%, #9708CC 100%)",
              }}
            >
              Ping Drop
            </span>
            <br />
            <span className="text-[#101828]">in Your Favorite Games</span>
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-[20px] font-normal leading-[30px] text-[#475467]">
            HyperUp optimizes routes for 200+ mobile games. Here&apos;s what
            <br />
            real players see after one tap.
          </p>
        </div>

        <div className="relative h-[154px] w-[553px]">
          <Image
            src="/assets/ping-union.svg"
            alt=""
            fill
            className="object-contain"
          />

          <div className="absolute left-[18px] top-[23px] flex flex-col">
            <span
              className="text-[60px] font-semibold leading-[72px] tracking-[-1.2px] text-[#f04438]"
              style={{ fontFamily: "'SF Pro Rounded', sans-serif" }}
            >
              ~110ms
            </span>
            <span className="font-[family-name:var(--font-inter)] text-center text-[16px] font-medium leading-[24px] text-[#f04438]">
              Before
            </span>
          </div>

          <div className="absolute right-[18px] top-[23px] flex flex-col">
            <span
              className="text-[60px] font-semibold leading-[72px] tracking-[-1.2px] text-[#17b26a]"
              style={{ fontFamily: "'SF Pro Rounded', sans-serif" }}
            >
              ~20ms
            </span>
            <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[24px] text-[#17b26a]">
              After HyperUp
            </span>
          </div>
        </div>

        <div className="relative h-[512px] w-full overflow-hidden">
          <div className="pointer-events-none absolute right-[60px] top-[70px] h-[408px] w-[298px]">
            <Image
              src="/assets/line-pattern.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Phones wrapper */}
          <div className="absolute left-1/2 top-0 h-full w-[760px] -translate-x-1/2">
            {/* Left phone */}
            <div className="absolute left-[120px] top-[80px] z-10 h-[618px] w-[284px]">
              <div className="absolute inset-0 z-10 overflow-hidden rounded-[40px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain"
                >
                  <source
                    src="/assets/ping-screen-lag.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>

            {/* Right phone */}
            <div className="absolute left-[360px] top-[20px] z-20 h-[618px] w-[284px]">
              <div className="absolute inset-0 z-10 overflow-hidden rounded-[40px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain"
                >
                  <source
                    src="/assets/ping-screen-smooth.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
