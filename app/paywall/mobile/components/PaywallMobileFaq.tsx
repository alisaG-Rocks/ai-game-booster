"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    question: "What is HyperUp?",
    answer:
      "HyperUp is a boosting service dedicated to\u00A0GAMING ONLY.\u00A0Our technology reduces latency, prevents packet loss, and stabilizes network connection for players trying to play games, especially\u00A0on a foreign server.",
  },
  { question: "How does HyperUp reduce ping?", answer: "" },
  { question: "Is HyperUp safe to use?", answer: "" },
  { question: "How many games does HyperUp support?", answer: "" },
  { question: "How to add a game to HyperUp?", answer: "" },
];

export default function PaywallMobileFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-[335px] flex flex-col items-start gap-[20px]">
      <p className="w-full text-center font-[family-name:var(--font-sf-pro-rounded)] font-semibold text-[#101828] text-[36px] leading-[normal] tracking-[-0.72px]">
        People also ask
      </p>

      <div className="w-full flex flex-col items-start gap-[16px]">
        {items.map((it, i) => {
          const open = i === openIndex;
          return (
            <div
              key={it.question}
              className={[
                "w-full rounded-[16px] px-[24px] py-[16px]",
                open ? "bg-[#F9FAFB]" : "bg-transparent",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="w-full flex items-start gap-[24px] cursor-pointer text-left"
              >
                <div className="flex-1 min-w-0 flex flex-col items-start">
                  <p className="font-[family-name:var(--font-sf-pro-rounded)] font-medium text-[#101828] text-[18px] leading-[28px]">
                    {it.question}
                  </p>

                  <div
                    className={[
                      "grid w-full transition-all duration-300 ease-in-out",
                      open
                        ? "grid-rows-[1fr] opacity-100 mt-[8px]"
                        : "grid-rows-[0fr] opacity-0 mt-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      {it.answer ? (
                        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[24px] text-[#475467]">
                          {it.answer}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="relative w-[24px] h-[24px] shrink-0 mt-[2px]">
                  <Image
                    src={
                      open
                        ? "/assets/paywall-mobile/faq-minus.png"
                        : "/assets/paywall-mobile/faq-plus.png"
                    }
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

