import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#eaecf0] px-[80px] py-[32px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[32px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[3px] w-[136px]">
            <div className="relative w-[24px] h-[24px] -rotate-90">
              <Image src="/assets/logo-symbol-sm.svg" alt="HyperUp" fill className="object-contain" />
            </div>
            <div className="relative w-[109px] h-[18px]">
              <Image src="/assets/logo-text-sm.svg" alt="HyperUp" fill className="object-contain" />
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-[32px]">
            {["Privacy Policy", "Money-Back Policy", "Terms of Use", "Subscription Terms", "Contact us"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[16px] leading-[24px] text-[#475467] font-medium font-[family-name:var(--font-inter)] hover:text-[#101828] transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <span className="text-[16px] leading-[24px] text-[#667085] font-normal font-[family-name:var(--font-inter)]">
            © 2026 All rights reserved.
          </span>
        </div>

        <div className="border-t border-[#eaecf0] pt-[32px] flex justify-center">
          <span className="text-[16px] leading-[24px] text-[#667085] font-normal text-center font-[family-name:var(--font-inter)]">
            A-Z TECH VENTURES LTD  Company No. 15388786  Registered Office: 50 Princes Street, Ipswich, Suffolk, England, IP1 1 RJ
          </span>
        </div>
      </div>
    </footer>
  );
}
