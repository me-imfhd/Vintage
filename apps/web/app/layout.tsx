import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@vintage/shadcn";
import { fontSans, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@vintage/ui/components/ThemeProvider";
import { cn } from "@vintage/utils/utils";
import TailwindResposivenessIndicator from "@vintage/ui/components/TailwindResposivenessIndicator";
import type { PropsWithChildren } from "react";
import TrpcProvider from "@vintage/api/trpc/Provider";
import { SessionProvider } from "@vintage/auth";

export const metadata: Metadata = {
  title: "Vintage",
  description: "",
  themeColor: [
    { media: "(prefers-color-scheme: light", color: "white" },
    { media: "(prefers-color-scheme: dark", color: "black" },
  ],
};
// You might be wonder where is session provider for next-auth, well we necessarily don't need it in app router
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <TrpcProvider>
              {children}
              <TailwindResposivenessIndicator />
              <Toaster />
            </TrpcProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
