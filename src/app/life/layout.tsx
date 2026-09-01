import type { Metadata } from "next";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ArrivalGate from "../../components/museum/ArrivalGate";

export const metadata: Metadata = {
  title: "Life in Motion",
  description:
    "Side B — places, movement, people, and moments worth keeping, in Polaroids.",
};

export default function LifeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="world world--life">
      <ArrivalGate world="life" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
