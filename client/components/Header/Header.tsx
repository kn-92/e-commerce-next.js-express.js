"use client";

import "@/components/Header/Header.scss";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDelayUnmount } from "./hooks";
import useStore from "@/store/store";

import logo from "@/public/assets/images/logo.png";
import CartIcon from "@/public/assets/icons/cart/CartIcon";
import FavoritesIcon from "@/public/assets/icons/cart/favorites/FavoritesIcon";

import { SearchInput } from "@/components/Header/index";
import SearchIcon from "@/public/assets/icons/cart/Search/SearchIcon";
import LoginModal from "./LoginModal";

const Header = () => {
  const isUserLoggedIn = useStore((state) => state.isUserLoggedIn);
  const [isMounted, setIsMounted] = useState(false);
  const shouldRenderModal = useDelayUnmount(isMounted, 650);

  const handleLoginModalVisibility = (e: React.SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      setIsMounted(!isMounted);
    }
  };

  return (
    <header>
      {shouldRenderModal && (
        <LoginModal
          modalVisible={isMounted}
          setVisible={(e) => handleLoginModalVisibility(e)}
        />
      )}
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
          <div className="login-register" onClick={handleLoginModalVisibility}>
            {isUserLoggedIn ? "Logout" : "Login"}
          </div>
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

export default Header;
