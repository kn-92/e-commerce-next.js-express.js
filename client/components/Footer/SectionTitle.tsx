import { SectionTitleProps } from "./types";

import "@/components/Footer/SectionTitle.scss";

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <p className="footer-section-title">{text}</p>;
};
