import Image from "next/image";
import PaywallMobileFaq from "./components/PaywallMobileFaq";
import PaywallMobilePlans from "./components/PaywallMobilePlans";

function LtoHeader() {
  return (
    <div className="relative w-[375px] h-[80px]">
      <div className="absolute left-0 top-0 w-[375px] h-[80px]">
        <Image
          src="/assets/paywall-mobile/header-top.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute left-0 top-[58px] w-[375px] h-[21px]">
        <Image
          src="/assets/paywall-mobile/header-bottom.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[12px] w-[335px] flex items-center justify-between">
        <div className="flex items-baseline gap-[8px] text-[#101828] text-center whitespace-nowrap">
          <span className="font-[family-name:var(--font-inter)] font-normal text-[18px] leading-[normal]">
            Expires in
          </span>
          <span className="font-[family-name:var(--font-sf-pro-rounded)] font-medium text-[32px] leading-[normal]">
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
  );
}

function HeadingAndPing() {
  return (
    <div className="w-[375px] px-[20px] py-[44px] flex flex-col items-start gap-[32px]">
      <p className="w-full text-center font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[#101828] text-[44px] tracking-[-0.88px] whitespace-pre-wrap">
        <span className="leading-[56px]">
          {`Dominate the Lobby  with\u00A0`}
          <br aria-hidden="true" />
        </span>
        <span className="leading-[56px] text-[#7F56D9]">Zero Lag!</span>
      </p>

      <div className="relative w-[335px] h-[93.594px]">
        <Image
          src="/assets/paywall-mobile/ping-union.png"
          alt=""
          fill
          className="object-contain"
        />

        <div className="absolute left-[10.9px] top-[13.93px] w-[125.398px] flex flex-col items-center gap-[7.269px] text-center">
          <div className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[36.347px] leading-[43.617px] tracking-[-0.7269px] text-[#F04438]">
            ~110ms
          </div>
          <div className="font-[family-name:var(--font-inter)] font-semibold text-[14px] leading-[14.539px] text-[#F04438]">
            Before
          </div>
        </div>

        <div className="absolute left-[198.7px] top-[13.93px] w-[125.398px] flex flex-col items-center gap-[7.269px] text-center">
          <div className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[36.347px] leading-[43.617px] tracking-[-0.7269px] text-[#17B26A]">
            ~45ms
          </div>
          <div className="font-[family-name:var(--font-inter)] font-semibold text-[14px] leading-[14.539px] text-[#17B26A]">
            After HyperUp
          </div>
        </div>
      </div>
    </div>
  );
}

function MoneyBackGuarantee() {
  return (
    <div className="w-[375px] px-[20px] py-[44px]">
      <div className="relative w-[335px] h-[314px] mx-auto">
        <div className="absolute left-0 top-[66.512px] w-[335px] rounded-[24px] bg-[#F6FEF9] px-[24px] pt-[60px] pb-[24px] flex flex-col items-center gap-[20px]">
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

          <div className="absolute left-1/2 -translate-x-1/2 top-[-68.504px] w-[100px] h-[112px]">
            <div className="absolute left-[-0.43px] top-[51.04px] w-[51.133px] h-[61.564px] rotate-[30deg]">
              <Image
                src="/assets/paywall-mobile/guarantee-left.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute left-[49.57px] top-[51.04px] w-[51.133px] h-[61.564px] rotate-[150deg] scale-y-[-1]">
              <Image
                src="/assets/paywall-mobile/guarantee-right.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute left-[0.066px] top-[-1.464px] w-[100px] h-[100px]">
              <Image
                src="/assets/paywall-mobile/guarantee-star.png"
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
    </div>
  );
}

function Footer() {
  return (
    <div className="w-[375px] px-[20px] py-[44px] flex flex-col items-center">
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
    </div>
  );
}

export default function PaywallMobilePage() {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-[375px]">
        <LtoHeader />
        <HeadingAndPing />

        <div className="w-[375px] px-[20px] py-[44px] flex justify-center">
          <PaywallMobilePlans />
        </div>

        {/* Remaining sections (supported games, iPhone, features, testimonials, etc.)
            are present in the Figma node but will be added next with the rest of
            the exported assets for strict 1:1 parity. */}

        <MoneyBackGuarantee />

        <div className="w-[375px] px-[20px] py-[44px] flex justify-center">
          <PaywallMobileFaq />
        </div>

        <Footer />
      </div>
    </div>
  );
}

