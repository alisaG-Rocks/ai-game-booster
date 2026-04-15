import Image from "next/image";

const gameBlocks = [
  { top: "/assets/game-pg-1.png", bottom: "/assets/game-pg-2.png", type: "a" },
  { top: "/assets/game-pg-1.png", bottom: "/assets/game-pg-1.png", type: "b" },
  { top: "/assets/game-pg-3.png", bottom: "/assets/game-pg-3.png", type: "c" },
  { top: "/assets/game-pg-1.png", bottom: "/assets/game-pg-2.png", type: "a" },
  { top: "/assets/game-pg-1.png", bottom: "/assets/game-pg-1.png", type: "b" },
  { top: "/assets/game-pg-3.png", bottom: "/assets/game-pg-3.png", type: "c" },
  { top: "/assets/game-pg-1.png", bottom: "/assets/game-pg-2.png", type: "a" },
  { top: "/assets/game-pg-1.png", bottom: "/assets/game-pg-1.png", type: "b" },
  { top: "/assets/game-pg-3.png", bottom: "/assets/game-pg-3.png", type: "c" },
];

function GameBlock({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="relative w-[156px] h-[52px] shrink-0">
      <div className="absolute left-[6px] top-0 w-[52px] h-[25px] rounded-t-[12px] overflow-hidden mix-blend-luminosity">
        <Image src={top} alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute left-[6px] top-[26px] w-[52px] h-[26px] rounded-b-[12px] overflow-hidden">
        <Image src={bottom} alt="" fill className="object-cover object-bottom" />
      </div>
      <div className="absolute left-0 top-[25px] w-[65px] h-[3px] bg-[#101828] border border-white rounded-[10px]" />
      <div className="absolute left-[69px] top-0 flex items-center gap-[4px]">
        <div className="relative w-[24px] h-[24px]">
          <Image src="/assets/ping-red.svg" alt="" fill />
        </div>
        <span className="text-[#f04438] font-semibold text-[14px] font-[family-name:var(--font-inter)]">110 ms</span>
      </div>
      <div className="absolute left-[69px] top-[28px] flex items-center gap-[4px]">
        <div className="relative w-[24px] h-[24px]">
          <Image src="/assets/ping-green.svg" alt="" fill />
        </div>
        <span className="text-[#17b26a] font-semibold text-[20px] font-[family-name:var(--font-inter)]">47 ms</span>
      </div>
    </div>
  );
}

export default function PopularGames() {
  return (
    <section className="w-full bg-white py-[96px]">
      <div className="max-w-[1280px] mx-auto px-[32px] flex flex-col items-center gap-[44px]">
        <h2 className="text-[36px] font-semibold text-center tracking-[-0.72px] leading-[44px]" style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', -apple-system, sans-serif" }}>
          <span className="text-[#101828]">Worldwide </span>
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(178deg, #43CBFF 0%, #9708CC 100%)" }}>
            popular games
          </span>
          <span className="text-[#101828]"> included</span>
        </h2>
        <div className="flex gap-[64px] overflow-hidden w-full">
          {gameBlocks.map((block, i) => (
            <GameBlock key={i} top={block.top} bottom={block.bottom} />
          ))}
        </div>
      </div>
    </section>
  );
}
