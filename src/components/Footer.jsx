import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["instagram", "twitter (X?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["Home", "Work", "careers", "contact"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              ipsa cum corporis
            </p>
            <img
              className="w-[11vw] mt-10"
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
