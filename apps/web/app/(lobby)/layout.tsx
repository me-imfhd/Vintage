import { SiteHeader } from "@vintage/ui/layout/vintage";
import { SiteFooter } from "@vintage/ui/layout/vintage";
import type { PropsWithChildren } from "react";
import React from "react";
import { ProfileHeader } from "@/components/layout/profile-header";

export default function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader>
        <ProfileHeader />
      </SiteHeader>
      <main className="flex-1">{children}</main>
      <SiteFooter></SiteFooter>
    </div>
  );
}
