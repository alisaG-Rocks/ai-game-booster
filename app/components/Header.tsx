import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-[80px]">
      <div className="flex items-center gap-[4px]">
        <div className="relative w-[32px] h-[32px] -rotate-90">
          <Image
            src="/assets/logo-symbol.svg"
            alt="HyperUp"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[145px] h-[24px]">
          <Image
            src="/assets/logo-text.svg"
            alt="HyperUp"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <button className="px-[16px] py-[10px] rounded-[8px] text-[#475467] font-semibold text-[16px] leading-[24px]">
          Log in
        </button>

        <button className="p-[2px] rounded-[8px] bg-linear-to-b from-white to-[#7342D9] shadow-sm">
          <span className="block px-6 py-2 rounded-[8px] bg-[#7342D9] text-white font-semibold text-[16px] leading-[24px]">
            Get Started
          </span>
        </button>
      </div>
    </header>
  );
}
