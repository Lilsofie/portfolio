import type { Metadata } from "next";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ArrivalGate from "../../components/museum/ArrivalGate";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "Exhibition 01. A collection of professional experience, technical projects, and collaborative work.",
};

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="world world--professional">
      <ArrivalGate world="professional" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
