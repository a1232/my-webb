import React from "react";
import Data from "./cardsData";

function Cards() {
  return (
    <div>
      {Data.map((val, i) => {
        return (
          <div
            key={i}
            className="max-w-sm rounded shadow-xl h-[50rem] grid grid-rows-3 float-left mx-8 my-8"
          >
            <div>
              <img src={val.src} className="h-[30rem] w-full" />
            </div>
            <div className="relative">
              <div className="text-xl text-pink-700 pt-6 pl-2 absolute bottom-0 left-0">
                {val.title}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold pt-6 pl-2">{val.para}</div>
            </div>
            <div>
              <div>{val.sara}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
