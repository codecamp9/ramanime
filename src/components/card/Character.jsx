/* eslint-disable react/prop-types */
const Character = (props) => {
  return (
    <>
      <div className="flex">
        <div className="flex  bg-[#3A3A3E] bg-opacity-50 rounded-l-xl">
          <div className="flex px-2 py-5 w-[191px] md:w-[308px]">
            <div>
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRHwDk6Br2K6NR1wA1kmJ9TCH1eNuVynYPHVVmRIvbIqi85CX7NQWa7j-yKGfaD2ERqVo24oXfh&s=19" />
                </div>
              </div>
            </div>
            <div className="pl-3">
              <p className="text-base font-semibold text-white">
                {props.animeName} <br />
                <span className="font-thin "> {props.role} </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex bg-[#3A3A3E] bg-opacity-50 rounded-r-xl">
          <div className="flex px-2 py-5 md:w-[308px] justify-end">
            <div className="pr-3">
              <p className="text-base font-semibold text-right text-white">
                {props.voiceName} <br />
                <span className="font-thin"> {props.from} </span>
              </p>
            </div>
            <div>
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRFGisiDo7jw68vS5k8GLJNILJ4e_EFQ3s9gJqKtCRN4P7kRk4oQ5ADFNIYVPB1OtocVi-IEN__&s=19" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
