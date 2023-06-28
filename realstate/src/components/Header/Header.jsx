import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="brand logo" width={100} />
        <div className="h-menu flexCenter">
          <a href="/">Our Value </a>
          <a href="/">Contact Us </a>
          <a href="/">Get Started </a>
          <a href="/">Contact </a>
          <button className="button">
            <a href="/">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
