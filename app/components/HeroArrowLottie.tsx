"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function HeroArrowLottie() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/assets/hero-arrow-lottie.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load lottie:", error));
  }, []);

  if (!animationData) return null;
  return (
    <div className="pointer-events-none relative h-[80px] w-[120px]">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
