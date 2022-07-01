import React from "react";

function Header() {
  return (
    <div>
      <div className="w-full text-xl bg-pink-900 flex items-center h-10 relative">
        <p className="text-white text-center">HUB IT</p>
        {/* <div className="bg-yellow-500 rounded-full h-8 w-8 absolute mt-2.5 inset-y-0 right-80">
          N
        </div> */}
        {/* <button className="rounded-md w-24 h-10 border-2  text-white bg-teal-500 absolute inset-y-0 right-96 mt-2">
          share
        </button>{" "} */}
      </div>
    </div>
  );
}

export default Header;
