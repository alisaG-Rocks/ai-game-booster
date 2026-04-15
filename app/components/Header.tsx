import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-[80px]">
      <div className="flex items-center gap-[4px]">
        <div className="relative w-[32px] h-[32px] -rotate-90">
          <Image src="/assets/logo-symbol.svg" alt="HyperUp" fill className="object-contain" />
        </div>
        <div className="relative w-[145px] h-[24px]">
          <Image src="/assets/logo-text.svg" alt="HyperUp" fill className="object-contain" />
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <button className="px-[18px] py-[10px] rounded-[8px] text-[#98a2b3] font-semibold text-[16px] leading-[24px] font-[family-name:var(--font-inter)]">
          Log in
        </button>
        <button className="px-[18px] py-[10px] rounded-[8px] bg-[#7342d9] text-white font-semibold text-[16px] leading-[24px] border-2 border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] font-[family-name:var(--font-inter)]">
          Get Started
        </button>
      </div>
    </header>
  );
}
