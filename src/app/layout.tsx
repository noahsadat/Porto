import { Providers } from "./providers";
import Header from "@/app/components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noah Sadat",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-lightest bg-dotted-pattern">
      <body className="relative">
        <div className="fixed inset-0 bg-dotted-pattern pointer-events-none"></div>
        <Providers>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}