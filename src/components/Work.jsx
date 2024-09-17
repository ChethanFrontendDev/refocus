import React from "react";

function Work() {
  var images = [
    {
      url: "https://plus.unsplash.com/premium_photo-1698513559484-dec832085ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1698364437333-10ae4e304a7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1722204109574-f6fb5541eb14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1698117061346-821cd64a4803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1698117057806-c19c990e837b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1696329179695-37303fd64525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full mt-12">
      <div className="max-w-screen-xl mx-auto relative">
        <h1 className="text-[30vw] leading-none font-medium text-center tracking-tight select-none">
          Work
        </h1>
        <div className="absolute w-full h-full top-0">
          {images.map((elem, index)=> (elem.isActive && (<img
                className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{top: elem.top, left: elem.left}}
                key={index}
                src={elem.url}
                alt=""
              />)))}
        </div>
      </div>
    </div>
  );
}

export default Work;
