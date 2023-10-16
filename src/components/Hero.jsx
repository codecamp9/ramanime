/* eslint-disable react/no-unknown-property */
import Slider from "react-slick";
import gambar from "../assets/imgs/anime/SPY x FAMILY.jpg";
import gambar1 from "../assets/imgs/anime/ONE PIECE.jpg";

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <section className="bg-[#0B0C2A] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-center md:text-left mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              Nonton <span className="text-blue-500">Gratis</span> <br /> Tanpa
              Karcis.
            </h1>
            <p className="text-center md:text-left mb-8 text-lg font-normal text-white lg:text-xl dark:text-gray-400">
              Selamat Datang di Dunia Anime Tanpa Batas! Nikmati Semua Serunya
              Petualangan Anime Tanpa Perlu Khawatir Tentang Karcis. Saksikan
              Dunia Anime Terbuka di Depan Matamu - Gratis!
            </p>
            <div className="flex justify-center md:justify-start flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Nonton Sekarang
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:hidden">
            <Slider {...settings} className="w-[300px] md:max-w-sm">
              <div className="flex justify-center">
                <div className="rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-lg"
                    src="https://i.ytimg.com/vi/6vMuWuWlW4I/hqdefault.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-lg"
                    src="https://i.ytimg.com/vi/luYOt2-c2TI/hqdefault.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
          <div className="hidden justify-center md:flex">
            <Slider {...settings} className="w-[300px] md:max-w-sm">
              <div className="flex justify-center">
                <div className="rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-lg" src={gambar1} alt="" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-lg" src={gambar} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
