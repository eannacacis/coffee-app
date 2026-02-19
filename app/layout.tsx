import "./globals.css";
import { createElement, ReactElement } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee App",
  description: "Mini-projet Next.js + TypeScript sans JSX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return createElement(
    "html",
    { lang: "fr" },
    createElement("body", { className: "root" }, children)
  );
}
