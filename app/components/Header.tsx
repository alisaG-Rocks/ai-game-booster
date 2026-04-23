import Image from "next/image";
import Link from "next/link";

function DesktopHeader() {
  return (
    <header className="hidden h-[80px] w-full items-center justify-between px-[80px] md:flex">
      <div className="flex items-center gap-[4px]">
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

      <div className="flex items-center gap-[12px]">
        <button className="rounded-[8px] px-[16px] py-[10px] text-[16px] font-semibold leading-[24px] text-[#475467]">
          Log in
        </button>

        <Link
          href="/quiz"
          className="rounded-[8px] bg-linear-to-b from-white to-[#7342D9] p-[2px] shadow-sm"
        >
          <span className="block rounded-[8px] bg-[#7342D9] px-6 py-2 text-[16px] font-semibold leading-[24px] text-white">
            Get Started
          </span>
        </Link>
      </div>
    </header>
  );
}

function MobileHeader() {
  return (
    <header className="flex h-[64px] w-full items-center justify-between border-b border-[#D0D5DD] px-[16px] md:hidden">
      <div className="flex items-center gap-[4px]">
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

      <button
        type="button"
        aria-label="Open menu"
        className="flex h-[40px] w-[40px] items-center justify-center"
      >
        <div className="relative h-[24px] w-[24px]">
          <Image
            src="/assets/menu-icon.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </button>
    </header>
  );
}

export default function Header() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
}
