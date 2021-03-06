import React from "react";
import download from "../../../../resources/download.jpeg";

function Banner() {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-[70rem] bg-stone-200">
        <div className="pl-6">
          <p className="text-pink-900 font-bold text-xl">Featured Course</p>
        </div>
        <div className="float-left pl-6">
          <p className="text-3xl font-bold">
            Become a Full Stack Developer with MERN Stack
          </p>
          <div className="lg:grid grid-cols-2  flex flex-col-reverse gap-10 mt-4">
            <div className="">
              <p className="text-momo text-sm text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div
              className="mr-2 bg-pink-700 sm:bg-slate-900
        "
            >
              <img
                src={download}
                height="100%"
                width="100%"
                className="float-right"
              />
            </div>
          </div>
          <div className="">
            <button className="w-24 h-10 bg-pink-900 text-white mt-6">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
