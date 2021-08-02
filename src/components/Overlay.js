import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { Wrapper } from "../styles/OverlayStyles";

const Overlay = () => {
  const [overlay, setOverlay] = useState("slide-out-");
  const { is_overlay_open, closeOverlay, fetchAllData } = useGlobalContext();

  const handleOverlay = () => {
    if (is_overlay_open) {
      setOverlay("slide-in-");
    } else {
      setOverlay("slide-out-");
    }
  };

  useEffect(() => {
    handleOverlay();
  }, [is_overlay_open]);

  return (
    <Wrapper>
      <div
        className={`${
          is_overlay_open
            ? "overlay overlay-slide-right"
            : "overlay overlay-slide-left"
        }`}
      >
        {/* menu items  */}
        <nav>
          <button className="close-bar">
            <AiOutlineClose
              style={{ fontSize: "35px" }}
              onClick={closeOverlay}
            />
          </button>
          <ul>
            <Link to="/" onClick={closeOverlay}>
              <li
                className={`${overlay}1`}
                style={{ background: "var(--navColor1)" }}
              >
                <h3>Home</h3>
              </li>
            </Link>
            <Link to="/season/1" onClick={closeOverlay}>
              <li
                className={`${overlay}2`}
                style={{ background: "var(--navColor2)" }}
              >
                <h3>Primeira Temporada</h3>
              </li>
            </Link>
            <Link to="/season/2" onClick={closeOverlay}>
              <li
                className={`${overlay}3`}
                style={{ background: "var(--navColor3)" }}
              >
                <h3>Segunda Temporada</h3>
              </li>
            </Link>
            <Link to="/season/3" onClick={closeOverlay}>
              <li
                className={`${overlay}4`}
                style={{ background: "var(--navColor4)" }}
              >
                <h3>Terceira Temporada</h3>
              </li>
            </Link>
            <Link to="/season/4" onClick={closeOverlay}>
              <li
                className={`${overlay}5`}
                style={{ background: "var(--navColor5)" }}
              >
                <h3>Quarta Temporada</h3>
              </li>
            </Link>
            <Link to="/season/5" onClick={closeOverlay}>
              <li
                className={`${overlay}6`}
                style={{ background: "var(--navColor1)" }}
              >
                <h3>Quinta Temporada</h3>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Overlay;
