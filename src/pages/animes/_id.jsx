import Character from "../../components/card/Character";

const Detail = () => {
  const deskripsi =
    "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n<br>\n(Source: Crunchyroll)";

  const htmlContent = deskripsi;

  return (
    <>
      {/* Detail hero start */}
      <section className="bg-center bg-no-repeat bg-cover bg-[url('https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg')] bg-gray-700 bg-blend-multiply relative">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-lg"></div>
        <div className="relative max-w-screen-xl px-4 mx-auto py-36">
          <div className="flex flex-col items-center lg:flex lg:flex-row md:items-start lg:items-stretch">
            <img
              src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg"
              alt=""
              className="w-[199px] rounded-lg mb-5"
            />
            <div className="lg:pl-8">
              <h1 className="text-2xl font-bold text-white ">
                Demon Slayer: Kimetsu no Yaiba
              </h1>
              <div className="badge bg-[#070720] border-none  text-white mr-2">
                Action
              </div>
              <div className="badge bg-[#070720] border-none text-white mr-2">
                Adventure
              </div>
              <div className="badge bg-[#070720] border-none text-white mr-2">
                Drama
              </div>
              <div className="badge bg-[#070720] border-none text-white mr-2">
                Fantasy
              </div>
              <div className="badge bg-[#070720] border-none text-white mr-2">
                Supernatural
              </div>
              <div className="flex mt-2">
                <p className="flex items-center mr-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-yellow-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  83
                </p>
                <p className="flex items-center mr-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  25 menit
                </p>
                <p className="flex items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  12 episode
                </p>
              </div>
              <p
                className="mt-5 font-normal text-white"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></p>
              <div className="flex flex-col justify-center my-5 space-y-4 md:justify-start sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-2 px-2 text-base font-medium text-center text-white rounded-lg bg-[#070720] hover:bg-[#0B0C2A] focus:"
                >
                  Nonton Sekarang
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 ml-1 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Detail hero end */}

      {/* character start */}
      <section className="relative max-w-screen-xl px-4 py-10 mx-auto">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-white">
            karakter & Pengisi Suara
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Character
            animeName="Tanjiro Kamado"
            role="Main"
            voiceName="Nezuko Kamado "
            from="Jepang"
          />
          <Character
            animeName="Tanjiro Kamado"
            role="Main"
            voiceName="Nezuko Kamado "
            from="Jepang"
          />
          <Character
            animeName="Tanjiro Kamado"
            role="Main"
            voiceName="Nezuko Kamado "
            from="Jepang"
          />
        </div>
      </section>
      {/* character end */}
    </>
  );
};

export default Detail;
