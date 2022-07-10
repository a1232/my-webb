import React from "react";

function InputList() {
  return (
    <div>
      <div className="text-center p-8">
        <p className="font-bold text-3xl">Our Popular Courses</p>
      </div>
      <div className="grid md:grid-cols-3 md:w-[70rem] gap-10 place-content-center p-8 sm:grid-cols-1">
        <input
          type="text"
          className="border-solid border-4 h-10 bg-stone-200 border-b-pink-900"
        />
        <input
          type="text"
          className="border-solid border-4 h-10 bg-stone-200 border-b-pink-900"
        />
        <button className=" inline-block text-xl bg-pink-900 w-52 text-white">
          Search
        </button>
      </div>
    </div>
  );
}

export default InputList;
