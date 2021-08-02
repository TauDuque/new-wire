import React, { useState } from "react";
import { Wrapper } from "../styles/MenubarStyles";
import { useGlobalContext } from "../context";

const MenuBar = () => {
  const { is_overlay_open, openOverlay, closeOverlay } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={`${is_overlay_open ? "menu-bars change" : "menu-bars"}`}
        id="menu-bars"
        onClick={openOverlay}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </Wrapper>
  );
};

export default MenuBar;
