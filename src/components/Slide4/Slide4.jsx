const Slide4 = () => {
  return (
    <div className="bg-[#fff] h-[1080px] w-auto">
      <h1 className="text-5xl text-center pt-20">Students Space Summit 2023</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1">
          <img src="./images/image-2.png" alt="" className="m" />
          <img src="./images/demo-speaker.png" alt="" />
        </div>
        <div className="grid ml-11 mb-6 grid-cols-1">
          <img src="./images/wide-image.png" alt="" />
          <div className="ml-20 mt-6  grid grid-cols-2 ">
            <img src="./images/standard-image.png" alt="" />
            <img src="./images/standard-image.png" alt="" />
            <img src="./images/standard-image2.png" alt="" />
          </div>
        </div>
        <div className="ml-4 border-l-2 border-gray-400 pl-4 flex flex-row">
          <div className="ml-4 border-r-2 border-gray-400">
            <h2 className="text-2xl mb-4 transform rotate-90 origin-left">
              Heading 1
            </h2>
          </div>
          <div className="ml-8  border-r-2 border-gray-400">
            <h2 className="text-2xl mb-4 transform rotate-90 origin-left">
              Heading 2
            </h2>
          </div>
          <div className="ml-4 border-r-2 border-gray-400">
            <h2 className="text-2xl transform rotate-90 origin-left">
              Heading 3
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
