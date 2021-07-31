import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/SeasonsStyles";

const Season = () => {
  return (
    <Wrapper>
      <div className="season-info">
        <div className="title-season">
          <h2>
            primeira <br /> temporada
          </h2>
        </div>
        <div className="first-col">
          <div className="main-img">
            <img
              src="https://images.techhive.com/images/article/2014/12/hbo-the-wire-1-100533556-large.jpg"
              alt="main"
            />
          </div>
          <div className="first-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia
              molestiae ea cum nemo quaerat tempora esse quasi? Culpa non hic
              eum cupiditate, possimus numquam fugiat beatae repellat, dicta
              nisi itaque alias provident exercitationem iusto. Non corrupti
              consectetur quisquam? Nihil voluptas distinctio cum cumque animi?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia
              molestiae ea cum nemo quaerat tempora esse quasi? Culpa non hic
              eum cupiditate, possimus numquam fugiat beatae repellat, dicta
              nisi itaque alias provident exercitationem iusto. Non corrupti
              consectetur quisquam? Nihil voluptas distinctio cum cumque animi?
            </p>
          </div>
        </div>
        <div className="second-col">
          <img src="https://wallpapercave.com/wp/wp1941999.jpg" alt="hero" />
        </div>
        <div className="third-col">
          <div className="second-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia
              molestiae ea cum nemo quaerat tempora esse quasi? Culpa non hic
              eum cupiditate, possimus numquam fugiat beatae repellat, dicta
              nisi itaque alias provident exercitationem iusto. Non corrupti
              consectetur quisquam? Nihil voluptas distinctio cum cumque animi?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia
              molestiae ea cum nemo quaerat tempora esse quasi? Culpa non hic
              eum cupiditate, possimus numquam fugiat beatae repellat, dicta
              nisi itaque alias provident exercitationem iusto. Non corrupti
              consectetur quisquam? Nihil voluptas distinctio cum cumque animi?
            </p>
          </div>
          <div className="second-img">
            <img
              src="https://images.techhive.com/images/article/2014/12/hbo-the-wire-1-100533556-large.jpg"
              alt="main"
            />
          </div>
        </div>
        <div className="fourth-col">
          <h2>
            season <br /> finale
          </h2>
        </div>
        <div className="fifth-col">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptate provident corporis, velit fugiat commodi voluptatem
            voluptatum accusantium est tempore incidunt obcaecati reiciendis
            fugit eligendi repellat illum dolorem labore hic magnam cupiditate
            aperiam pariatur. Blanditiis hic, voluptas modi, tenetur laudantium
            laboriosam quod amet quis necessitatibus facilis similique aperiam
            dignissimos recusandae quisquam nemo expedita incidunt praesentium
            placeat dolore earum ad veniam omnis! Officiis cum odit quibusdam
            officia voluptas. Est earum rerum delectus iure tenetur, fuga,
            consequuntur id voluptates dolore non facilis? Repudiandae voluptate
            molestias at earum sapiente dolores laudantium ut totam.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Season;
