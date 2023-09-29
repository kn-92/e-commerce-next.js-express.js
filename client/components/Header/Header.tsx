"use-client";

import "@/components/Header/Header.scss";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/images/logo.png";
import CartIcon from "@/public/assets/icons/cart/CartIcon";
import FavoritesIcon from "@/public/assets/icons/cart/favorites/FavoritesIcon";
import { SearchInput } from "@/components/Header/index";
import SearchIcon from "@/public/assets/icons/cart/Search/SearchIcon";

export const Header = () => {
  return (
    <header>
      <div className="header-left">
        <div className="logo-container">
          <Image
            className="header-logo"
            src={logo}
            alt="Street fashion text gray colour"
          />
        </div>
        <nav className="nav-menu">
          <Link className="header-link" href="/new">
            New
          </Link>
          <Link className="header-link" href="/men">
            Men
          </Link>
          <Link className="header-link" href="/woman">
            Woman
          </Link>
          <Link className="header-link" href="/sale">
            SALE
          </Link>
        </nav>
      </div>
      <div className="header-right">
        <div className="search-box">
          <SearchInput />
          <SearchIcon />
        </div>
        <div className="user-menu">
          <div className="login-register">Register</div>
          <div className="favorites">
            <FavoritesIcon />
          </div>
          <div className="cart">
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
