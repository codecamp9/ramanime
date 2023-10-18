/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <>
      <div className="relative w-full h-auto">
        <div className="mr-4">
          <a href={props.link} className="block relative group">
            <img src={props.poster} alt="" className="rounded-xl" />

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
            <div className="absolute bottom-0 right-0">
              <div className="bg-gray-400 p-2  rounded-br-xl bg-opacity-[60%] flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-[12px] font-medium text-white">7.8</span>
              </div>
            </div>
          </a>
          <a href={props.link}>
            <h1 className="text-white text-sm font-medium mt-2">
              {props.title}
            </h1>
          </a>
          <span className="text-white text-[12px] font-thin">
            {" "}
            {props.date}{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
