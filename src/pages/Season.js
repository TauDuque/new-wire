import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/SeasonsStyles";
import { useLocation, useHistory } from "react-router-dom";
import { omar_cartoon, string_avon } from "../assets";
import { useGlobalContext } from "../context";
import { Loading } from "../components";

const Season = () => {
  const { fetchAllData } = useGlobalContext();
  const { single_season, is_loading } = useGlobalContext();

  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/season/1") {
      fetchAllData(1);
    }
    if (location === "/season/2") {
      fetchAllData(2);
    }
    if (location === "/season/3") {
      fetchAllData(3);
    }
    if (location === "/season/4") {
      fetchAllData(4);
    }
    if (location === "/season/5") {
      fetchAllData(5);
    }
  }, [location]);

  if (is_loading) {
    return <Loading />;
  }

  const { temporada, plot, hero_img, main_plot, third_plot, final, images } =
    single_season;

  console.log(plot, main_plot, third_plot);

  if (single_season) {
    return (
      <Wrapper>
        <div className="season-info">
          <div className="title-season">
            <h2>
              {temporada} <br /> temporada
            </h2>
          </div>
          <div className="first-col">
            <div className="main-img">
              <img src={images && images[0].image} alt="main" />
            </div>
            <div className="first-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                quia molestiae ea cum nemo quaerat tempora esse quasi? Culpa non
                hic eum cupiditate, possimus numquam fugiat beatae repellat,
                dicta nisi itaque alias provident exercitationem iusto. Non
                corrupti consectetur quisquam? Nihil voluptas distinctio cum
                cumque animi? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ex quia molestiae ea cum nemo quaerat tempora
                esse quasi? Culpa non hic eum cupiditate, possimus numquam
                fugiat beatae repellat, dicta nisi itaque alias provident
                exercitationem iusto. Non corrupti consectetur quisquam? Nihil
                voluptas distinctio cum cumque animi?
              </p>
            </div>
          </div>
          <div className="second-col">
            <div className="text-container">
              <img src={omar_cartoon} alt="Omar" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                tenetur ex voluptate harum, hic facilis ipsa temporibus vel quas
                sunt cumque sapiente magnam perferendis, soluta sed illum quasi
                iste minima? Ipsam corrupti saepe eveniet magni aspernatur atque
                sunt laborum necessitatibus nisi sit, nemo deserunt veniam
                consequuntur eos, ea dolore. Vel nemo quod inventore accusantium
                corporis ad, quia harum corrupti unde dolore ipsum cum nobis
                laboriosam numquam consequuntur nostrum deserunt dolor optio
                ipsa neque saepe iusto magnam ullam ex. Ducimus culpa, est,
                officia architecto consectetur harum dolore sequi molestiae
                eligendi recusandae quas accusamus dolorem tempore deserunt,
                sunt fugiat. Perferendis vitae, expedita esse doloribus sed
                porro amet ipsa, doloremque nesciunt reiciendis distinctio eos
                excepturi dolorum quaerat quisquam voluptas nemo quo voluptatum
                dignissimos..
              </p>
              <img
                src={string_avon}
                alt="icon"
                style={{ height: "367px", width: "280px" }}
              />
            </div>
          </div>
          <div className="third-col">
            <img src={hero_img} alt="hero" />
          </div>
          <div className="fourth-col">
            <div className="second-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                quia molestiae ea cum nemo quaerat tempora esse quasi? Culpa non
                hic eum cupiditate, possimus numquam fugiat beatae repellat,
                dicta nisi itaque alias provident exercitationem iusto. Non
                corrupti consectetur quisquam? Nihil voluptas distinctio cum
                cumque animi? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ex quia molestiae ea cum nemo quaerat tempora
                esse quasi? Culpa non hic eum cupiditate, possimus numquam
                fugiat beatae repellat, dicta nisi itaque alias provident
                exercitationem iusto. Non corrupti consectetur quisquam? Nihil
                voluptas distinctio cum cumque animi?
              </p>
            </div>
            <div className="second-img">
              <img src={images && images[1].image} alt="main" />
            </div>
          </div>
          <div className="fifth-col">
            <h2>
              personagens <br /> principais
            </h2>
          </div>
          <div className="sixth-col">
            <div className="img-container">
              <img src={images && images[2].image} alt="wire" />
              <img src={images && images[3].image} alt="" />
              <img src={images && images[4].image} alt="" />
              <p>{images && images[2].description}</p>
              <p>{images && images[3].description}</p>
              <p>{images && images[4].description}</p>
              <img src={images && images[5].image} alt="" />
              <img src={images && images[6].image} alt="" />
              <img src={images && images[7].image} alt="" />
              <p className="second-row-text">
                {images && images[5].description}
              </p>
              <p className="second-row-text">
                {images && images[6].description}
              </p>
              <p className="second-row-text">
                {images && images[7].description}
              </p>
            </div>
          </div>
          <div className="seventh-col">
            <h2>
              season <br /> finale
            </h2>
          </div>
          <div className="eighth-col">
            <p>{final}</p>
          </div>
        </div>
      </Wrapper>
    );
  } else return <Loading />;
};

export default Season;
