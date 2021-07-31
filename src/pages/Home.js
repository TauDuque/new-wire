import React from "react";
import { Wrapper } from "../styles/HomeStyles";
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import { mobile_bg, hbo_go, hbo_max, omar_icon, oi_icon } from "../assets";
import { SocialBtn } from "../styles/SocialBtnStyle";
import { Slides } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Slides className="mobile" />
      <div className="mobile-bg">
        <img src={mobile_bg} alt="mobile background" />
      </div>
      <div className="home-info">
        <h2>
          The Wire
          <br /> Brasil
        </h2>
        <div className="text-info">
          <div className="col-info">
            <h5>Onde Assistir</h5>
            <ul>
              <li>
                <a
                  href="https://www.hbomax.com/br/pt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={hbo_max} alt="ícone" />
                </a>
                <p>HBO Max</p>
              </li>
              <li>
                <a
                  href="https://www.hbomax.com/br/pt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={hbo_go} alt="ícone" style={{ padding: "4px" }} />
                </a>
                <p>HBO Go</p>
              </li>
              <li>
                <a href="https://oiplay.tv/" target="_blank" rel="noreferrer">
                  <img src={oi_icon} alt="ícone" style={{ padding: "1px" }} />
                </a>
                <p>Oi Play</p>
              </li>
            </ul>
          </div>
          <div className="col-info">
            <h5>Sobre</h5>
            <div className="about-text">
              <p>
                Desenvolvido com React, Styled-Components, Axios, <br /> Node,
                Express, Sequelize e mySQL.
              </p>
              <p>
                <span>Autor: </span>Tauan Ribeiro
              </p>
              <SocialBtn>
                <div className="btn-wrapper">
                  <a href="mailto:duque.tauribeiro@gmail.com">
                    <div className="icon google">
                      <FaGoogle />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/TauDuque"
                    rel="noreferrer"
                  >
                    <div className="icon github">
                      <div style={{ padding: "5px 8px", fontSize: "14px" }}>
                        <FaGithub />
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/tau-ribeiro/"
                    rel="noreferrer"
                  >
                    <div className="icon linkedin">
                      <div style={{ padding: "5px 8px", fontSize: "14px" }}>
                        <FaLinkedin />
                      </div>
                    </div>
                  </a>
                </div>
              </SocialBtn>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
