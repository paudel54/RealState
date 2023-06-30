import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    // console.log("This is menu Opened", menuOpened);
    if (document.documentElement.clientWidth <= 800) {
      // if no menu Presented hide this tab beyond Screen
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="brand logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="/">Our Value </a>
            <a href="/">Contact Us </a>
            <a href="/">Get Started </a>
            <a href="/">Contact </a>
            <button className="button">
              <a href="/">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        {/* dynamic Style with state management */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
