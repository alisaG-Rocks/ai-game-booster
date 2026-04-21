"use client";

import Image from "next/image";
import { useState } from "react";

const faqItems = [
  {
    question: "What is HyperUp?",
    answer:
      "HyperUp is a boosting service dedicated to GAMING ONLY. Our technology reduces latency, prevents packet loss, and stabilizes network connection for players trying to play games, especially on a foreign server.",
  },
  {
    question: "How does HyperUp reduce ping?",
    answer:
      "Simply put, HyperUp can avoid congested routes and re-route to a dedicated pathway. The path to the server is the shortest, resulting in the lowest latency. Additionally, because you are using a dedicated route/line that is not shared with everyone like a public network, your connection will no longer experience packet loss, and network stability will be greatly enhanced.",
  },
  {
    question: "Is HyperUp safe to use?",
    answer: [
      "GearUP promises every user that we ONLY focus on your network connection optimization and NOTHING MORE.",
      "Our services do not interfere with any of your in-game performance and data, so please rest assured that you will NOT be detected or banned by the game by using GearUP.",
      "Also, we're collaborating with various game-related developers (BattlEye, Bluehole, SONY Playstation, etc.) and with approval from all the games we have in our collection. You can totally trust GearUP's service.",
    ],
  },
  {
    question: "How many games does HyperUp support?",
    answer:
      "Every day, we add new games to our extensive library, which currently boasts a selection of over 200 supported games — and that number is constantly growing. If you can’t find your game, please don’t hesitate to contact us.",
  },
  {
    question: "How to add a game to HyperUp?",
    answer:
      "If your favorite game isn’t in our portfolio yet, don’t worry — we can add it for you. Just contact us, and we’ll make sure to add it right away!",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white pb-[96px]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap gap-[64px] px-[32px]">
        <div className="flex min-w-[480px] max-w-[768px] flex-1 flex-col gap-[20px]">
          <h2
            className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold tracking-[-0.72px] text-[36px] leading-[44px] text-[#101828]"
            style={{
              fontFamily:
                "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif",
            }}
          >
            FAQs
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[28px] text-[#475467]">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="flex min-w-[480px] flex-1 flex-col gap-[16px]">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-[16px] px-[24px] py-[16px] transition-colors duration-300 ${
                  isOpen ? "bg-[#F9FAFB]" : "bg-transparent"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-start justify-between gap-[24px] text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <div className="flex-1">
                    <span className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold block text-[18px] font-medium leading-[28px] text-[#101828]">
                      {item.question}
                    </span>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-[8px]"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-[16px]">
                          {Array.isArray(item.answer) ? (
                            item.answer.map((paragraph, index) => (
                              <p
                                key={index}
                                className="font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] text-[#475467]"
                              >
                                {paragraph}
                              </p>
                            ))
                          ) : (
                            <p className="font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] text-[#475467]">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-[2px] h-[24px] w-[24px] shrink-0 transition-transform duration-300">
                    <Image
                      src={
                        isOpen
                          ? "/assets/icon-minus.svg"
                          : "/assets/icon-plus.svg"
                      }
                      alt=""
                      fill
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
