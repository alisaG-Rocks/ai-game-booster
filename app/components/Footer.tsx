import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#eaecf0] bg-white px-[16px] py-[32px] md:px-[80px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[32px]">
        {/* Top block */}
        <div className="flex flex-col items-center gap-[24px] md:flex-row md:justify-between md:items-center">
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
          <div className="flex flex-wrap justify-center gap-x-[16px] gap-y-[12px] md:flex-nowrap md:gap-[32px]">
            {[
              "Privacy Policy",
              "Money-Back Policy",
              "Terms of Use",
              "Subscription Terms",
              "Contact us",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[14px] leading-[20px] text-[#475467] font-medium md:text-[16px] md:leading-[24px] hover:text-[#101828] transition-colors text-center"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <span className="text-[14px] leading-[20px] text-[#667085] md:text-[16px] md:leading-[24px] text-center md:text-right">
            © 2026 All rights reserved.
          </span>
        </div>

        {/* Bottom legal text */}
        <div className="border-t border-[#eaecf0] pt-[24px] md:pt-[32px] flex justify-center">
          <span className="max-w-[720px] text-center text-[14px] leading-[20px] text-[#667085] md:text-[16px] md:leading-[24px]">
            A-Z TECH VENTURES LTD Company No. 15388786 Registered Office: 50
            Princes Street, Ipswich, Suffolk, England, IP1 1 RJ
          </span>
        </div>
      </div>
    </footer>
  );
}
