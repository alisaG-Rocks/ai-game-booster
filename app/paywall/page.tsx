import Image from "next/image";
import PaywallFaq from "./components/PaywallFaq";
import PaywallPlans from "./components/PaywallPlans";

function PaywallHeader() {
  return (
    <div className="relative w-full h-[89px] mx-auto">
      <div className="absolute left-0 top-0 w-full h-[88.921px]">
        <Image
          src="/assets/paywall/header-bg.png"
          alt=""
          fill
          priority
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[12px] w-[954px] h-[44px] flex items-center justify-between">
        <div className="flex items-center gap-[4px] w-[181px]">
          <div className="relative h-[32px] w-[32px] -rotate-90">
            <Image
              src="/assets/logo-symbol.svg"
              alt="HyperUp"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-[24px] w-[145px]">
            <Image
              src="/assets/logo-text.svg"
              alt="HyperUp"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-[12px]">
          <div className="flex items-baseline gap-[8px] text-[#101828] text-center whitespace-nowrap">
            <span className="font-[family-name:var(--font-inter)] font-normal text-[18px] leading-[22px]">
              Expires in
            </span>
            <span className="font-[family-name:var(--font-sf-pro-rounded)] font-medium text-[32px] leading-[38px]">
              09:55
            </span>
          </div>

          <button
            type="button"
            className="h-[44px] w-[145px] rounded-[8px] bg-[#7F56D9] text-white font-[family-name:var(--font-inter)] text-[16px] font-semibold leading-[24px] shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_-3px_0_0_rgba(255,255,255,1)]"
          >
            Get My Plan
          </button>
        </div>
      </div>
    </div>
  );
}

function PaywallHeading() {
  return (
    <p className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[#101828] text-[44px] leading-[normal] tracking-[-0.88px] text-center whitespace-pre">
      <span>{`Dominate the Lobby  with\u00A0`}</span>
      <br aria-hidden="true" />
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(168deg, #43CBFF 0%, #9708CC 100%)",
        }}
      >
        Zero Lag!
      </span>
    </p>
  );
}

function PingCard() {
  return (
    <div className="relative w-[600px] h-[155px]">
      <Image
        src="/assets/paywall/ping-union.png"
        alt=""
        fill
        className="object-contain"
        priority
      />

      <div className="absolute left-[47px] top-[23px] w-[207px] flex flex-col items-center gap-[12px] text-center">
        <div className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[60px] leading-[72px] tracking-[-1.2px] text-[#F04438]">
          ~110ms
        </div>
        <div className="font-[family-name:var(--font-inter)] font-semibold text-[16px] leading-[24px] text-[#F04438]">
          Before
        </div>
      </div>

      <div className="absolute left-[347px] top-[23px] w-[207px] flex flex-col items-center gap-[12px] text-center">
        <div className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[60px] leading-[72px] tracking-[-1.2px] text-[#17B26A]">
          ~45ms
        </div>
        <div className="font-[family-name:var(--font-inter)] font-semibold text-[16px] leading-[24px] text-[#17B26A]">
          After HyperUp
        </div>
      </div>
    </div>
  );
}

function PremiumIncludes() {
  const items = [
    "Eliminate lag spikes and lower base ping instantly.",
    "Zero packet loss for perfect hit registration.",
    "Automatic optimal routing to global servers.",
    "Maximized FPS",
  ];

  return (
    <div className="flex flex-col items-start gap-[32px] w-[600px]">
      <p className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[#101828] text-[36px] leading-[44px] tracking-[-0.72px] text-center w-full">
        <span>{`What Your `}</span>
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(176deg, #43CBFF 0%, #9708CC 100%)",
          }}
        >
          Premium Pass
        </span>
        <span> Includes:</span>
      </p>

      <div className="flex flex-col items-start gap-[24px] w-[600px] py-[12px]">
        {items.map((text) => (
          <div key={text} className="flex items-center gap-[8px]">
            <div className="relative h-[24px] w-[24px] shrink-0">
              <Image
                src="/assets/paywall/check-purple.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p className="capitalize font-[family-name:var(--font-inter)] font-semibold text-[#101828] text-[16px] leading-[1.6]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCards() {
  const cards = [
    {
      bg: "#F6FEF9",
      headerBg: "#079455",
      icon: "/assets/paywall/feature-ai.png",
      title: "Smart AI Routing",
      body:
        "Our neural network analyzes thousands of routes and picks the fastest one for your game in real-time. Lower ping, zero effort.",
      rotate: "-2deg",
      w: "579.678px",
      h: "249.822px",
    },
    {
      bg: "#ECFDFF",
      headerBg: "#0E7090",
      icon: "/assets/paywall/feature-globe.png",
      title: "Global Server Network",
      body:
        "50+ countries with nodes next to game data centers. LagOff.ai automatically finds the closest one for you.",
      rotate: "2deg",
      w: "578.631px",
      h: "219.841px",
    },
    {
      bg: "#FDF4FF",
      headerBg: "#9F1AB1",
      icon: "/assets/paywall/feature-tap.png",
      title: "One-Tap Boost",
      body:
        "No settings. No configuration. Open the app, tap the button, and play without lag. It's that simple.",
      rotate: "-2deg",
      w: "578.631px",
      h: "219.841px",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[32px] w-[600px]">
      <p className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[#101828] text-[36px] leading-[44px] tracking-[-0.72px] text-center w-full">
        Advanced Booster Features:
      </p>

      <div className="flex flex-col items-start gap-[20px]">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex items-center justify-center"
            style={{ width: c.w, height: c.h }}
          >
            <div className="flex-none" style={{ transform: `rotate(${c.rotate})` }}>
              <div
                className="w-[572px] rounded-[24px] p-[24px] flex flex-col items-center justify-center"
                style={{ backgroundColor: c.bg }}
              >
                <div className="w-full flex flex-col items-start justify-center gap-[20px]">
                  <div
                    className="w-full rounded-[12px] px-[24px] py-[20px] flex items-center gap-[16px]"
                    style={{ backgroundColor: c.headerBg }}
                  >
                    <div className="relative h-[32px] w-[32px] shrink-0">
                      <Image src={c.icon} alt="" fill className="object-contain" />
                    </div>
                    <p className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-white text-[22px] leading-[normal] whitespace-nowrap">
                      {c.title}
                    </p>
                  </div>

                  <p className="font-[family-name:var(--font-inter)] font-normal text-[#475467] text-[20px] leading-[30px]">
                    {c.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GameLine() {
  const blocks = new Array(12).fill(null).map((_, i) => i);
  const thumbs = [
    "/assets/paywall/game-thumb-1.png",
    "/assets/paywall/game-thumb-2.png",
    "/assets/paywall/game-thumb-3.png",
  ];

  return (
    <div className="flex flex-col items-center gap-[32px] w-[600px]">
      <p className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[#101828] text-[36px] tracking-[-0.72px] text-center whitespace-pre-wrap">
        <span>Before and After you star</span>
        <span>t</span>
        <span>
          {" "}
          <br aria-hidden="true" />
          using{" "}
        </span>
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(172deg, #43CBFF 0%, #9708CC 100%)",
          }}
        >
          HyperUp:
        </span>
      </p>

      <div className="w-[600px] overflow-hidden">
        <div className="flex w-max gap-[64px] items-center justify-center animate-[marquee-left_18s_linear_infinite]">
          {blocks.map((i) => (
            <div key={i} className="relative w-[156px] h-[52px] shrink-0">
              <div className="absolute left-0 top-[25px] h-[3px] w-[65px] rounded-[10px] bg-[#101828] border border-white" />

              <div className="absolute left-[6px] top-0 w-[52px] h-[25px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden mix-blend-luminosity">
                <Image
                  src={thumbs[i % thumbs.length]}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[6px] top-[28px] w-[52px] h-[24px] rounded-bl-[12px] rounded-br-[12px] overflow-hidden">
                <Image
                  src={thumbs[i % thumbs.length]}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[69px] top-0 flex items-center gap-[4px]">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src="/assets/paywall/wifi-red.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-[family-name:var(--font-inter)] font-semibold text-[14px] text-[#F04438]">
                  110 ms
                </span>
              </div>

              <div className="absolute left-[69px] top-[28px] flex items-center gap-[4px]">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src="/assets/paywall/wifi-green.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-[family-name:var(--font-inter)] font-semibold text-[20px] text-[#17B26A] leading-[24px]">
                  47 ms
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IPhonePic() {
  return (
    <div className="relative w-[550px] h-[500px]">
      <div className="absolute left-[167.106px] top-[8.628px] w-[221.894px] h-[482.426px]">
        <div className="absolute -left-[13.249px] -top-[12.696px] w-[248.389px] h-[507.817px]">
          <Image
            src="/assets/paywall/iphone-frame.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute left-0 top-0 w-[221.812px] h-[482.674px]">
          <div className="absolute inset-0 rounded-[34.365px] overflow-hidden">
            <Image
              src="/assets/paywall/iphone-center.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute left-[6.894px] top-[3.372px] w-[209px] h-[15px]">
            <Image
              src="/assets/paywall/iphone-topbar.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-[-5.238px] top-[86.359px] w-[235.225px] h-[383.555px]">
        <div className="absolute inset-0 rounded-[30.217px] overflow-hidden rotate-[-12deg] origin-center">
          <Image
            src="/assets/paywall/iphone-left.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute left-[319px] top-[96px] w-[237.222px] h-[373.571px] flex items-center justify-center">
        <div className="relative w-[168.977px] h-[346px] rounded-[30px] overflow-hidden rotate-[12deg] origin-center">
          <Image
            src="/assets/paywall/iphone-screen.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute left-0 top-[228px] w-[17px] h-[289px] bg-[#12131A]" />
        </div>
      </div>
    </div>
  );
}

function MoneyBackGuarantee() {
  return (
    <div className="relative w-[430px] h-[314px]">
      <div className="absolute left-0 top-[66.512px] w-[430px] rounded-[24px] bg-[#F6FEF9] px-[24px] pt-[60px] pb-[24px] flex flex-col items-center gap-[20px]">
        <p className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[#101828] text-[24px] leading-[32px] text-center">
          Money-Back Guarantee
        </p>
        <p className="text-[#475467] text-[16px] leading-[1.4] text-center font-[family-name:var(--font-inter)]">
          If you are not satisfied with our service we are ready to offer a full
          refund within 30 days of your initial purchase or before the end of
          your first subscription period. Additional{" "}
          <a
            href="https://courshark.ai/subscription-terms"
            target="_blank"
            className="underline"
          >
            Terms &amp; Conditions
          </a>{" "}
          apply.
        </p>

        <div className="absolute left-[165px] top-[-68.504px] w-[100px] h-[112px]">
          <div className="absolute left-[-0.43px] top-[51.04px] w-[51.133px] h-[61.564px] rotate-[30deg]">
            <Image
              src="/assets/paywall/guarantee-left.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute left-[49.57px] top-[51.04px] w-[51.133px] h-[61.564px] rotate-[150deg] scale-y-[-1]">
            <Image
              src="/assets/paywall/guarantee-right.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute left-[0.066px] top-[-1.464px] w-[100px] h-[100px]">
            <Image
              src="/assets/paywall/guarantee-star.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[29.536px] text-white text-center font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[16px] leading-[normal]">
            <div>30</div>
            <div>DAYS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaywallFooter() {
  return (
    <div className="w-[205px] flex flex-col items-center gap-[16px]">
      <div className="flex items-center gap-[4px] w-[181px]">
        <div className="relative h-[32px] w-[32px] -rotate-90">
          <Image
            src="/assets/logo-symbol.svg"
            alt="HyperUp"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-[24px] w-[145px]">
          <Image
            src="/assets/logo-text.svg"
            alt="HyperUp"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <p className="font-[family-name:var(--font-inter)] text-[16px] leading-[24px] text-[#667085] text-center">
        © 2026 All rights reserved.
      </p>
    </div>
  );
}

export default function PaywallPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <PaywallHeader />

      <main className="w-[1440px] mx-auto">
        <div className="w-[600px] mx-auto pt-[36px]">
          <div className="pt-[0px]" />
        </div>

        <div className="w-[600px] mx-auto pt-[36px]">
          <PaywallHeading />
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <PingCard />
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <PaywallPlans variant="choose-plan" />
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <PremiumIncludes />
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <div className="flex items-center justify-center">
            <IPhonePic />
          </div>
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <FeatureCards />
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <GameLine />
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <PaywallPlans variant="smooth-boost" />
        </div>

        <div className="w-[430px] mx-auto pt-[72px]">
          <MoneyBackGuarantee />
        </div>

        <div className="w-[600px] mx-auto pt-[72px]">
          <PaywallFaq />
        </div>

        <div className="w-[205px] mx-auto pt-[72px] pb-[64px]">
          <PaywallFooter />
        </div>
      </main>
    </div>
  );
}

