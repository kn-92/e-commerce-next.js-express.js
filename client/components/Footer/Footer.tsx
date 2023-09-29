import "@/components/Footer/Footer.scss";

import { FooterSection } from "@/components/Footer/index";
import { SectionTitle } from "@/components/Footer/index";

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/assets/images/logo-black.png";
import InstagramIcon from "@/public/assets/icons/instagram/InstagramIcon";
import FacebookIcon from "@/public/assets/icons/facebook/FacebookIcon";
import TikTokIcon from "@/public/assets/icons/tiktok/TikTokIcon";
import YouTubeIcon from "@/public/assets/icons/youtube/YouTubeIcon";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <FooterSection>
        <SectionTitle text="Customers service" />
        <Link className="footer-link" href="contact">
          Contact info
        </Link>
        <Link className="footer-link" href="faq">
          FAQ
        </Link>
        <Link className="footer-link" href="return">
          Return/Exchange
        </Link>
        <Link className="footer-link" href="size">
          How to choose the right size
        </Link>
      </FooterSection>
      <FooterSection>
        <SectionTitle text="Information" />
        <Link href="/privacy" className="footer-link">
          Privacy policy
        </Link>
        <Link href="/shippment" className="footer-link">
          Shippment
        </Link>
        <Link href="/payments" className="footer-link">
          Payments
        </Link>
        <Link href="/rules" className="footer-link">
          Online shop rules
        </Link>
        <Link href="/discount-codes" className="footer-link">
          Discount codes
        </Link>
      </FooterSection>
      <FooterSection>
        <SectionTitle text="About Street Fashion" />
        <Link href="/reviews" className="footer-link">
          Reviews
        </Link>
        <Link href="/carrer" className="footer-link">
          Carrer
        </Link>
        <Link href="/marketing" className="footer-link">
          Marketing & Ads
        </Link>
        <Link href="/privacy" className="footer-link">
          Find our stationary stores
        </Link>
        <Link href="/blog" className="footer-link">
          Blog
        </Link>
      </FooterSection>
      <FooterSection>
        <SectionTitle text="Our social media" />
        <Image
          className="footer-logo"
          src={logo}
          alt="Street fashion text black colour"
        />
        <p className="footer-message">
          Street Fashion&#174; helps everyone to look cool. We are not just
          selling clothes, we are creating a culture. Join to our millions
          satisfied customers. <br />
          <br />
          Folow our social medias to be up to date with news, discounts and
          more!
        </p>
        <div className="social-icons">
          <InstagramIcon />
          <FacebookIcon />
          <TikTokIcon />
          <YouTubeIcon />
        </div>
        <p className="year">Street Fashion&#174; {year}</p>
      </FooterSection>
    </footer>
  );
};
