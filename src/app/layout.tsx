import { Providers } from "./providers";
import Header from "@/app/components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-lightest">
      <body>
        <Providers>
          <Header />
          <main className="pt-32">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}