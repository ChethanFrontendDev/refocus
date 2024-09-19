import React from "react";

function Marquee({ imagesurls }) {
  return (
    <div className="flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden">
      {imagesurls.map((url, index) => (
        <img className="invert flex-shrink-0 w-[7vw]" key={index} src={url} />
      ))}
      {imagesurls.map((url, index) => (
        <img className="invert flex-shrink-0 w-[7vw]" key={index} src={url} />
      ))}
    </div>
  );
}

export default Marquee; 
