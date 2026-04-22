import React from "react";

interface QuizLayoutProps {
  children: React.ReactNode;
}

export default function Quizlayout({ children }: QuizLayoutProps) {
  return <main>{children}</main>;
}
