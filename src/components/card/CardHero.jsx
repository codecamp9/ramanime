/* eslint-disable react/prop-types */
const CardHero = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-lg" src={props.poster} alt="" />
        </div>
      </div>
    </>
  );
};

export default CardHero;
