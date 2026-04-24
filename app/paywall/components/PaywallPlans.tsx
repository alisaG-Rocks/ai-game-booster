"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Variant = "choose-plan" | "smooth-boost";

type PlanKey = "week1" | "week4" | "week12";

const plans: Array<{
  key: PlanKey;
  label: string;
  oldPrice: string;
  newPrice: string;
  perDayInt: string;
  perDayDec: string;
  strikePrice: string;
  badgeVariant: "light" | "purple";
  isMostPopular?: boolean;
  borderVariant: "normal" | "highlight";
}> = [
  {
    key: "week1",
    label: "1-WEEK PLAN",
    oldPrice: "$19.99",
    newPrice: "$9.99",
    strikePrice: "$2.85",
    perDayInt: "1",
    perDayDec: "42",
    badgeVariant: "light",
    borderVariant: "normal",
  },
  {
    key: "week4",
    label: "4-WEEK PLAN",
    oldPrice: "$39.99",
    newPrice: "$19.99",
    strikePrice: "$1.42",
    perDayInt: "0",
    perDayDec: "71",
    badgeVariant: "purple",
    borderVariant: "highlight",
    isMostPopular: true,
  },
  {
    key: "week12",
    label: "12-WEEK PLAN",
    oldPrice: "$99.99",
    newPrice: "$49.99",
    strikePrice: "$1.19",
    perDayInt: "0",
    perDayDec: "59",
    badgeVariant: "light",
    borderVariant: "normal",
  },
];

function PlanBadge({
  variant,
  perDayInt,
  perDayDec,
}: {
  variant: "light" | "purple";
  perDayInt: string;
  perDayDec: string;
}) {
  const src =
    variant === "purple"
      ? "/assets/paywall/plan-badge-purple.png"
      : "/assets/paywall/plan-badge-light.png";

  const textClass = variant === "purple" ? "text-white" : "text-[#101828]";

  return (
    <div className="relative w-[104px] h-[57px] shrink-0">
      <Image src={src} alt="" fill className="object-contain" />

      <div className={`absolute left-[24px] top-[11px] ${textClass}`}>
        <span className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[16px] leading-[normal] tracking-[-0.43px]">
          $
        </span>
      </div>

      <div className={`absolute left-[36px] top-[5px] ${textClass}`}>
        <span className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[40px] leading-[normal] tracking-[9px]">
          {perDayInt}
        </span>
      </div>

      <div className={`absolute left-[64px] top-[11px] ${textClass}`}>
        <span className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[16px] leading-[normal] tracking-[-0.43px]">
          {perDayDec}
        </span>
      </div>

      <div className={`absolute left-[64px] top-[29px] ${textClass}`}>
        <span className="font-[family-name:var(--font-inter)] font-light text-[10px] leading-[normal] tracking-[-0.43px]">
          per day
        </span>
      </div>
    </div>
  );
}

function Radio({ selected }: { selected: boolean }) {
  if (selected) {
    return (
      <div className="relative h-[24px] w-[24px] shrink-0 rounded-full bg-[#7F56D9]">
        <div className="absolute inset-[31.25%] rounded-full bg-white" />
      </div>
    );
  }

  return (
    <div className="relative h-[24px] w-[24px] shrink-0">
      <Image
        src="/assets/paywall/radio-off.png"
        alt=""
        fill
        className="object-contain"
      />
    </div>
  );
}

function MostPopularBadge() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[-2px]">
      <div
        className="px-[8px] py-[4px] rounded-bl-[8px] rounded-br-[8px]"
        style={{
          backgroundImage: "linear-gradient(142deg, #43CBFF 0%, #9708CC 100%)",
        }}
      >
        <span className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[11px] leading-[16px] tracking-[0.06px] text-white">
          MOST POPULAR
        </span>
      </div>
    </div>
  );
}

function PaymentMethods() {
  return (
    <div className="w-full flex flex-col gap-[16px]">
      <div className="flex gap-[8px]">
        <div className="flex-1 min-w-0 bg-[#F9F5FF] rounded-[12px] p-[16px] flex items-center gap-[4px]">
          <div className="relative w-[24px] h-[24px] shrink-0">
            <Image
              src="/assets/paywall/shield-check.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <span className="font-[family-name:var(--font-inter)] font-semibold text-[16px] leading-[1.2] text-[#101828] whitespace-nowrap">
            Pay safe &amp; secure
          </span>
        </div>

        <div className="flex-1 min-w-0 bg-[#F9F5FF] rounded-[12px] p-[16px] flex items-center gap-[4px]">
          <div className="relative w-[24px] h-[24px] shrink-0">
            <Image
              src="/assets/paywall/shield-check.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <span className="font-[family-name:var(--font-inter)] font-semibold text-[16px] leading-[1.2] text-[#101828] whitespace-nowrap">
            30-day money-back
          </span>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-[12px]">
        {[
          ["/assets/paywall/pay-visa.png", "Visa"],
          ["/assets/paywall/pay-mastercard.png", "Mastercard"],
          ["/assets/paywall/pay-gpay.png", "Google Pay"],
          ["/assets/paywall/pay-applepay.png", "Apple Pay"],
        ].map(([src, alt]) => (
          <div key={alt} className="relative w-[48px] h-[32px]">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DiscountSticker({ topPx }: { topPx: number }) {
  return (
    <div
      className="absolute left-[338px] w-[107.339px] h-[51.369px] flex items-center justify-center"
      style={{ top: `${topPx}px` }}
    >
      <div className="rotate-[10deg]">
        <div className="relative w-[103px] h-[34px]">
          <Image
            src="/assets/paywall/discount-bg.png"
            alt=""
            fill
            className="object-contain scale-x-[-1]"
          />
          <div className="absolute left-[4.6px] top-[6.3px] text-white font-bold text-[16px] leading-[20px] tracking-[-0.06px] font-[family-name:var(--font-sf-pro-rounded)]">
            50% OFF
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaywallPlans({ variant }: { variant: Variant }) {
  const [selected, setSelected] = useState<PlanKey>("week4");

  const heading = useMemo(() => {
    if (variant === "smooth-boost") {
      return (
        <div className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[#101828] text-[48px] leading-[normal] text-center">
          <div className="whitespace-pre">{`Smooth gameplay `}</div>
          <div className="whitespace-pre">
            from your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(166deg, #43CBFF 0%, #9708CC 100%)",
              }}
            >
              first boost
            </span>
          </div>
        </div>
      );
    }

    return (
      <p className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[#101828] text-[48px] leading-[42px] text-center">
        <span>{`Choose your `}</span>
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(174deg, #43CBFF 0%, #9708CC 100%)",
          }}
        >
          plan
        </span>
      </p>
    );
  }, [variant]);

  const stickerTop = variant === "smooth-boost" ? 480.5 : 410.5;

  return (
    <div className="w-[434px] mx-auto flex flex-col items-center gap-[20px]">
      <div className="w-[434px] flex flex-col items-center gap-[32px] relative">
        {heading}

        <div className="w-full flex flex-col items-start gap-[24px]">
          <div className="w-full flex flex-col items-start gap-[8px]">
            {plans.map((p) => {
              const isSelected = selected === p.key;
              const isHighlight = p.borderVariant === "highlight";

              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setSelected(p.key)}
                  className={[
                    "relative w-[434px] rounded-[16px] px-[16px] py-[24px] flex items-center justify-between text-left shadow-[0px_1px_8px_rgba(43,28,23,0.2)]",
                    isHighlight
                      ? "border-2 border-[#43CBFF] bg-white"
                      : "border border-[#E4E4E7] bg-white",
                  ].join(" ")}
                >
                  {p.isMostPopular ? <MostPopularBadge /> : null}

                  <div className="flex items-center gap-[12px]">
                    <Radio selected={isSelected} />

                    <div className="flex flex-col items-start justify-center gap-[8px]">
                      <div className="font-[family-name:var(--font-sf-pro-rounded)] font-bold text-[#101828] text-[24px] leading-[20px] tracking-[-0.43px] whitespace-nowrap">
                        {p.label}
                      </div>

                      <div className="flex items-start gap-[8px]">
                        <div className="relative">
                          <div className="font-[family-name:var(--font-sf-pro-rounded)] text-[#98A2B3] text-[16px] leading-[20px] tracking-[-0.06px] whitespace-nowrap">
                            {p.oldPrice}
                          </div>
                          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#F04438]" />
                        </div>

                        <div className="font-[family-name:var(--font-sf-pro-rounded)] font-medium text-[#101828] text-[16px] leading-[20px] tracking-[-0.06px] whitespace-nowrap">
                          {p.newPrice}
                        </div>
                      </div>
                    </div>
                  </div>

                  <PlanBadge
                    variant={p.badgeVariant}
                    perDayInt={p.perDayInt}
                    perDayDec={p.perDayDec}
                  />

                  <div className="absolute left-[275px] top-[52px]">
                    <div className="relative">
                      <div className="font-[family-name:var(--font-sf-pro-rounded)] text-[#98A2B3] text-[15px] leading-[20px] tracking-[-0.06px] whitespace-nowrap">
                        {p.strikePrice}
                      </div>
                      <div className="absolute left-0 right-0 top-1/2 h-px bg-[#F04438]" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full flex flex-col items-start gap-[16px]">
            <button
              type="button"
              className="w-full rounded-[8px] bg-[#7F56D9] px-[24px] py-[16px] flex items-center justify-center gap-[10px] shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_-3px_0_0_rgba(34,10,85,0.5)]"
            >
              <span className="font-[family-name:var(--font-inter)] font-semibold text-[18px] leading-[28px] text-white">
                Get Full Access
              </span>
              <div className="relative w-[24px] h-[24px] rotate-90">
                <Image
                  src="/assets/paywall/chevron-right.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </button>

            <p className="w-full text-center opacity-40 font-[family-name:var(--font-inter)] text-[13px] leading-[1.2] text-[#475467]">
              By clicking&nbsp;&quot;Get My Plan&quot;, you agree to start a
              subscription with automatic renewal.&nbsp;You will be charged
              nineteen dollars and ninety-nine cents for the first four weeks
              (special offer). After the initial four weeks, your subscription
              will automatically renew at thirty-nine dollars and ninety-nine
              cents every four weeks unless you cancel through your account
              settings before renewal.&nbsp;
              <a
                className="underline"
                href="https://courshark.ai/service-terms"
                target="_blank"
              >
                Terms &amp; Conditions
              </a>
              &nbsp;and&nbsp;
              <a
                className="underline"
                href="https://courshark.ai/privacy"
                target="_blank"
              >
                Privacy Policy
              </a>
              &nbsp;apply. For more details, contact us at&nbsp;
              <a className="underline" href="mailto:support@hyperup.app">
                support@hyperup.app
              </a>
              .
            </p>
          </div>
        </div>

        <DiscountSticker topPx={stickerTop} />
      </div>

      <PaymentMethods />
    </div>
  );
}

