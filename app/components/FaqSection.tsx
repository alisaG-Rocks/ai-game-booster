"use client";

import Image from "next/image";
import { useState } from "react";

const faqItems = [
  {
    question: "What is HyperUp?",
    answer: "HyperUp is a boosting service dedicated to GAMING ONLY. Our technology reduces latency, prevents packet loss, and stabilizes network connection for players trying to play games, especially on a foreign server.",
  },
  {
    question: "How does HyperUp reduce ping?",
    answer: "",
  },
  {
    question: "Is HyperUp safe to use?",
    answer: "",
  },
  {
    question: "How many games does HyperUp support?",
    answer: "",
  },
  {
    question: "How to add a game to HyperUp?",
    answer: "",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white pb-[96px]">
      <div className="max-w-[1280px] mx-auto px-[32px] flex flex-wrap gap-[64px]">
        <div className="flex flex-col gap-[20px] flex-1 min-w-[480px] max-w-[768px]">
          <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-[#101828]" style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif" }}>
            FAQs
          </h2>
          <p className="text-[18px] leading-[28px] text-[#475467] font-normal font-[family-name:var(--font-inter)]">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] flex-1 min-w-[480px]">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`rounded-[16px] px-[24px] py-[16px] ${openIndex === i ? "bg-[#f9fafb]" : ""}`}
            >
              <button
                className="w-full flex items-start justify-between gap-[24px] cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div className="flex flex-col gap-[8px] text-left flex-1">
                  <span className="text-[18px] leading-[28px] text-[#101828] font-medium" style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif" }}>
                    {item.question}
                  </span>
                  {openIndex === i && item.answer && (
                    <p className="text-[16px] leading-[24px] text-[#475467] font-normal font-[family-name:var(--font-inter)]">
                      {item.answer}
                    </p>
                  )}
                </div>
                <div className="relative w-[24px] h-[24px] shrink-0 mt-[2px]">
                  <Image
                    src={openIndex === i ? "/assets/icon-minus.svg" : "/assets/icon-plus.svg"}
                    alt=""
                    fill
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
