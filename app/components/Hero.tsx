import Image from "next/image";
import HeroArrowLottie from "./HeroArrowLottie";

function BackgroundGridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute left-1/2 -translate-x-1/2 w-[1920px] h-[1440px] top-0 opacity-[0.1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/bg-grid-vertical.svg"
          alt=""
          className="absolute inset-0 w-full h-full"
          role="presentation"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/bg-grid-horizontal.svg"
          alt=""
          className="absolute inset-0 w-full h-full"
          role="presentation"
        />
      </div>
    </div>
  );
}

type GalleryItem =
  | { type: "game"; src: string }
  | {
      type: "badge";
      icon: string;
      title: [string, string];
      iconClassName?: string;
    };

const columns: GalleryItem[][] = [
  [
    { type: "game", src: "/assets/game-01.png" },
    { type: "game", src: "/assets/game-05.png" },
    {
      type: "badge",
      icon: "/assets/gemini-servers.png",
      title: ["Worldwide", "Servers"],
    },
    { type: "game", src: "/assets/game-04.png" },
  ],
  [
    { type: "game", src: "/assets/game-02.png" },
    { type: "game", src: "/assets/game-06.png" },
    { type: "game", src: "/assets/game-11.png" },
    { type: "game", src: "/assets/game-12.png" },
  ],
  [
    { type: "game", src: "/assets/game-03.png" },
    {
      type: "badge",
      icon: "/assets/gemini-stable-fps.png",
      title: ["Stable", "FPS"],
      iconClassName: "w-[85px] h-[70px]",
    },
    { type: "game", src: "/assets/game-13.png" },
    { type: "game", src: "/assets/game-07.png" },
  ],
  [
    { type: "game", src: "/assets/game-08.png" },
    { type: "game", src: "/assets/game-10.png" },
    {
      type: "badge",
      icon: "/assets/gemini-latency.png",
      title: ["Lower", "Latency"],
    },
    { type: "game", src: "/assets/game-09.png" },
  ],
];

function SectionFadeOverlay() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[160px] bg-gradient-to-b from-white via-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[160px] bg-gradient-to-t from-white via-white/90 to-transparent" />
    </>
  );
}

function GameCard({ src }: { src: string }) {
  return (
    <div className="relative h-[130px] w-[130px] shrink-0 overflow-hidden rounded-[42px]">
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}

function BadgeCard({
  icon,
  title,
  iconClassName = "w-[75px] h-[62px]",
}: {
  icon: string;
  title: [string, string];
  iconClassName?: string;
}) {
  return (
    <div className="flex h-[130px] w-[130px] shrink-0 flex-col items-center justify-center rounded-[42px] bg-white border border-[#EAECF0]">
      <div className={`relative ${iconClassName}`}>
        <Image
          src={icon}
          alt={`${title[0]} ${title[1]}`}
          fill
          className="object-contain"
        />
      </div>

      <span
        className="mt-[4px] text-center text-[12px] font-semibold tracking-[-0.24px] text-black"
        style={{ fontFamily: "'SF Pro Rounded', sans-serif" }}
      >
        {title[0]}
        <br />
        {title[1]}
      </span>
    </div>
  );
}

function GalleryCell({ item }: { item: GalleryItem }) {
  if (item.type === "game") {
    return <GameCard src={item.src} />;
  }

  return (
    <BadgeCard
      icon={item.icon}
      title={item.title}
      iconClassName={item.iconClassName}
    />
  );
}

function GalleryColumn({
  items,
  reverse = false,
  duration = 22,
}: {
  items: GalleryItem[];
  reverse?: boolean;
  duration?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative h-[860px] w-[130px] overflow-hidden">
      <div
        className={`flex flex-col gap-[26px] ${
          reverse ? "animate-gallery-up" : "animate-gallery-down"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, index) => (
          <GalleryCell key={`${item.type}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full px-[80px] pt-[96px] pb-[96px]">
      <BackgroundGridPattern />
      <div className="relative flex-col-reverse md:flex-row flex items-start gap-[32px] max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-[48px] w-[626px] shrink-0">
          <div className="flex flex-col gap-[24px]">
            <h1 className="font-[family-name:var(--font-sf-pro-rounded)] font-semibold tracking-[-1.2px] text-[60px] leading-[72px]">
              <span className="text-[#101828]">Cut your ping and </span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(167deg, #43CBFF 0%, #9708CC 100%)",
                }}
              >
                Play Smoother
              </span>
            </h1>
            <p className="text-[20px] leading-[30px] text-[#475467] font-normal font-[family-name:var(--font-inter)]">
              HyperUp is the fastest way to lower ping, kill packet loss,
              <br />
              and stabilize your mobile games — powered by AI routing.
            </p>
          </div>
          <div className="relative w-fit">
            <button
              className="
                inline-flex items-center justify-center
                gap-[10px] px-[24px] py-[16px]
                rounded-[8px]
                bg-[#7F56D9] text-white
                shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_-3px_0_0_rgba(34,10,85,0.5)]
                transition-[transform,background-color,box-shadow] duration-150 ease-out
                hover:bg-[#6941C6]
                hover:shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_-3px_0_0_rgba(34,10,85,0.65)]
                active:translate-y-[3px]
                active:bg-[#6941C6]
                active:shadow-[0px_1px_2px_rgba(16,24,40,0.05),inset_0_0_0_0_rgba(34,10,85,0.65)]
              "
            >
              <span className="text-[18px] leading-[28px] font-semibold font-[family-name:var(--font-inter)]">
                Get Started
              </span>

              <div className="relative w-[24px] h-[24px] rotate-90">
                <Image src="/assets/chevron-right.svg" alt="" fill />
              </div>
            </button>

            <div className="pointer-events-none absolute left-[calc(100%-3px)] top-[55px] w-[71px] h-[42px] ]">
              <HeroArrowLottie />
            </div>
          </div>
        </div>

        {/* Gallery - diamond-rotated game icons grid */}
        <div className="relative h-[592px] w-[600px] shrink-0">
          <div className="absolute inset-0 overflow-hidden">
            <SectionFadeOverlay />

            <div className="absolute left-0 top-[-120px] flex gap-[26px]">
              <GalleryColumn items={columns[0]} duration={24} />
              <GalleryColumn items={columns[1]} reverse duration={22} />
              <GalleryColumn items={columns[2]} duration={26} />
              <GalleryColumn items={columns[3]} reverse duration={23} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
