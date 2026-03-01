import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { HeaderAd } from "@/components/ads/AdPlacements";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      <HeaderAd />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
