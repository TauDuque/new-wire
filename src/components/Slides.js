import React from "react";
import Slider from "react-slick";

const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    fade: true,
    autoplaySpeed: 400,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="mobile">
      <div>
        <img src="https://wallpapercave.com/wp/wp1941987.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1941953.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1941993.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpaperaccess.com/full/208800.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942010.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942049.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942216.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942054.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942078.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942134.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942136.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1942232.jpg" alt="slide" />
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp1941994.jpg" alt="slide" />
      </div>
    </Slider>
  );
};

export default Slides;
