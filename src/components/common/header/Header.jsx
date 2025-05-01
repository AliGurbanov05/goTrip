import { Link } from "react-router-dom";
import im from "../../../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={style.header}>
      <div className={style.top}>
        <div className={style.container}>
          <div className={style.info}>
            <span>
              <FaPhoneAlt /> + 1235 2355 98
            </span>
            <span>
              <IoIosMailOpen />
              youremail@email.com
            </span>
            <span>3-5 Business days delivery & Free Returns</span>
          </div>
          <div className={style.icons}>
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaPinterestP />
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.container}>
          <a className={style.logo} href="/">
            <img src={im} alt="" />
          </a>
          <div className={style.nav}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="/basket">
                  <FaShoppingCart />
                </a>
              </li>
            </ul>
          </div>
          <div
            className={style.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div
            className={
              menuOpen
                ? `${style.mobileMenu} ${style.mobileMenuActive}`
                : `${style.mobileMenu}`
            }
          >
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/services" onClick={handleLinkClick}>
              Services
            </Link>
            <Link to="/portfolio" onClick={handleLinkClick}>
              Portfolio
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
