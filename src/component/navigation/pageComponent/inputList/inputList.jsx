import React from "react";

function InputList() {
  return (
    <div>
      <div className="text-center p-8">
        <p className="font-bold text-3xl">Our Popular Courses</p>
      </div>
      <div className="grid grid-cols-3 gap-10 ml-32 p-8">
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
