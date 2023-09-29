import "@/components/Footer/FooterSection.scss";
import React from "react";

export const FooterSection = ({ children }: { children: React.ReactNode }) => {
  return <section className="footer-section">{children}</section>;
};
