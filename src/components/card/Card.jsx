/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <>
      <div className="relative w-full h-auto">
        <div className="mr-3">
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
