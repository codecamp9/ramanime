import poser1 from "../assets/imgs/anime/SPY x FAMILY.jpg";

import Slider from "react-slick";

const Populer = () => {
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
      <section className="h-screen" id="popular">
        <div className="w-full py-8 px-4 mx-auto max-w-screen-xl">
          <h1 className="text-white font-bold text-2xl">Popular</h1>
          <div className="">
            <Slider {...settings} className="mt-5">
              <div className="relative w-[118px] h-[210px] pr-3">
                <a href="/" className="block relative group">
                  <img src={poser1} alt="" className="rounded-xl" />
                  <div className="absolute h-full w-full bg-black/60 rounded-xl flex items-center justify-center opacity-0 bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="/">
                  <h1 className="text-white text-sm font-medium mt-2">
                    SPY x FAMILY
                  </h1>
                </a>
                <span className="text-white text-[12px] font-thin">2022</span>
              </div>
              <div className="relative w-[118px] h-[210px] pr-3">
                <a href="/" className="block relative group">
                  <img src={poser1} alt="" className="rounded-xl" />
                  <div className="absolute h-full w-full bg-black/60 rounded-xl flex items-center justify-center opacity-0 bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="/">
                  <h1 className="text-white text-sm font-medium mt-2">
                    Jujutsu Kaisen
                  </h1>
                </a>
                <span className="text-white text-[12px] font-thin">2020</span>
              </div>
              <div className="relative w-[118px] h-[210px] pr-3">
                <a href="/" className="block relative group">
                  <img src={poser1} alt="" className="rounded-xl" />
                  <div className="absolute h-full w-full bg-black/60 rounded-xl flex items-center justify-center opacity-0 bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="/">
                  <h1 className="text-white text-sm font-medium mt-2">
                    ONE PIECE
                  </h1>
                </a>
                <span className="text-white text-[12px] font-thin">1999</span>
              </div>
              <div className="relative w-[118px] h-[210px] pr-3">
                <a href="/" className="block relative group">
                  <img src={poser1} alt="" className="rounded-xl" />
                  <div className="absolute h-full w-full bg-black/60 rounded-xl flex items-center justify-center opacity-0 bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="/">
                  <h1 className="text-white text-sm font-medium mt-2">
                    Bleach
                  </h1>
                </a>
                <span className="text-white text-[12px] font-thin">2004</span>
              </div>
              <div className="relative w-[118px] h-[210px] pr-3">
                <a href="/" className="block relative group">
                  <img src={poser1} alt="" className="rounded-xl" />
                  <div className="absolute h-full w-full bg-black/60 rounded-xl flex items-center justify-center opacity-0 bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="/">
                  <h1 className="text-white text-sm font-medium mt-2">
                    SPY x FAMILY
                  </h1>
                </a>
                <span className="text-white text-[12px] font-thin">2022</span>
              </div>
              <div className="relative w-[118px] h-[210px] pr-3">
                <a href="/" className="block relative group">
                  <img src={poser1} alt="" className="rounded-xl" />
                  <div className="absolute h-full w-full bg-black/60 rounded-xl flex items-center justify-center opacity-0 bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="/">
                  <h1 className="text-white text-sm font-medium mt-2">
                    Jujutsu Kaisen
                  </h1>
                </a>
                <span className="text-white text-[12px] font-thin">2020</span>
              </div>
              <div className="relative w-[118px] h-[210px] pr-3">
                <a href="/" className="block relative group">
                  <img src={poser1} alt="" className="rounded-xl" />
                  <div className="absolute h-full w-full bg-black/60 rounded-xl flex items-center justify-center opacity-0 bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </a>
                <a href="/">
                  <h1 className="text-white text-sm font-medium mt-2">
                    ONE PIECE
                  </h1>
                </a>
                <span className="text-white text-[12px] font-thin">1999</span>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Populer;
