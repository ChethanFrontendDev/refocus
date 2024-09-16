import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="n-left flex items-center">
        <img
          className="w-20 invert"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKC_Bjc6nzhW0qIQxdbkB-0Mx2xySFlr4rlix0bdr-Xw7ex2dIOTMApPftjDEtdCxBsw&usqp=CAU"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a
              className="font-regular text-sm flex items-center gap-1"
              href="#"
              key={index}
            >
              {elem.length === 0 ? (
                <span className="w-[2px] h-6 bg-zinc-700"></span>
              ) : (
                <a />
              )}
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="inline-block w-1 h-1 bg-green-500 rounded-full"
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
