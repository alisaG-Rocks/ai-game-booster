"use client";

import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { getStepProgress } from "@/lib/quiz-flow";
import { quizHeaderConfig } from "@/lib/quiz-header-config";
import { QuizHeader } from "./QuizHeader";

export function QuizShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const header = quizHeaderConfig[pathname as keyof typeof quizHeaderConfig];
  const progress = getStepProgress(pathname);

  return (
    <div className="min-h-screen bg-white text-[#101828]">
      <QuizHeader
        showBackButton={header?.showBackButton}
        showProgress={header?.showProgress}
        currentStep={header?.currentStep}
        totalSteps={header?.totalSteps}
      />
      <div className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-9">
        {/* {progress > 0 ? <QuizProgress value={progress} /> : null} */}

        <main className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">{children}</div>
        </main>
      </div>
    </div>
  );
}
