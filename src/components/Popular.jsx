import Card from "./card/Card";
import poser1 from "../assets/imgs/anime/SPY x FAMILY.jpg";

import Slider from "react-slick";

const Popular = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <section id="popular">
        <div className="w-full py-8 px-4 mx-auto max-w-screen-xl">
          <h1 className="text-white font-bold text-2xl">
            Popular Anime{" "}
            <a href="#">
              <span className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </a>
          </h1>
          <Slider {...settings} className="mt-5">
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
            <Card
              poster={poser1}
              title="Spy X Family"
              date="2022"
              link="https://github.com/Ramadani-coding"
            />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Popular;
