import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-[16px] py-[44px] py-[48px] md:px-[80px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[32px]">
        {/* Top block */}
        <div className="flex flex-col items-center gap-[32px] md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="flex items-center gap-[3px] w-[136px]">
            <div className="relative w-[24px] h-[24px] -rotate-90">
              <Image
                src="/assets/logo-symbol-sm.svg"
                alt="HyperUp"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[109px] h-[18px]">
              <Image
                src="/assets/logo-text-sm.svg"
                alt="HyperUp"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[12px] md:flex-nowrap md:gap-[32px]">
            {["Privacy", "Terms", "Pricing"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[16px] leading-[24px] text-[#475467] font-semibold hover:text-[#101828] transition-colors text-center"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <span className="text-[16px] leading-[24px] text-[#667085] text-center md:text-right">
            © 2026 All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
