import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/SeasonsStyles";
import { omar_cartoon, string_avon } from "../assets";

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
              laboriosam numquam consequuntur nostrum deserunt dolor optio ipsa
              neque saepe iusto magnam ullam ex. Ducimus culpa, est, officia
              architecto consectetur harum dolore sequi molestiae eligendi
              recusandae quas accusamus dolorem tempore deserunt, sunt fugiat.
              Perferendis vitae, expedita esse doloribus sed porro amet ipsa,
              doloremque nesciunt reiciendis distinctio eos excepturi dolorum
              quaerat quisquam voluptas nemo quo voluptatum dignissimos..
            </p>
            <img src={string_avon} alt="" />
          </div>
        </div>
        <div className="third-col">
          <img src="https://wallpapercave.com/wp/wp1941999.jpg" alt="hero" />
        </div>
        <div className="fourth-col">
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
        <div className="fifth-col">
          <h2>
            personagens <br /> principais
          </h2>
        </div>
        <div className="sixth-col">
          <div className="img-container">
            <img
              src="https://www.hivplusmag.com/sites/default/files/2017/03/17/michael-kevin-darnall_omar_hbo-copy.jpg"
              alt="wire"
            />
            <img
              src="https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/body_image/public/lance_reddick_the_wire.jpg?itok=WeF6y8fa&mtime=1506310978"
              alt=""
            />
            <img
              src="https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/body_image/public/lance_reddick_the_wire.jpg?itok=WeF6y8fa&mtime=1506310978"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              cumque.
            </p>
            <img
              src="https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/body_image/public/lance_reddick_the_wire.jpg?itok=WeF6y8fa&mtime=1506310978"
              alt=""
            />
            <img
              src="https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/body_image/public/lance_reddick_the_wire.jpg?itok=WeF6y8fa&mtime=1506310978"
              alt=""
            />

            <img
              src="https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/body_image/public/lance_reddick_the_wire.jpg?itok=WeF6y8fa&mtime=1506310978"
              alt=""
            />
            <p className="second-row-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              cumque.
            </p>
            <p className="second-row-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              cumque.
            </p>
            <p className="second-row-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              cumque.
            </p>
          </div>
        </div>
        <div className="seventh-col">
          <h2>
            season <br /> finale
          </h2>
        </div>
        <div className="eighth-col">
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
