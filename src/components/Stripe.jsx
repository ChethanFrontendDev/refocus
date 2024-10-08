import React from "react";

function Stripe({val}) {
  return (
    <div className="w-[16.66%] p-4 px-10 py-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center">
      <img className="h-6 invert" src={val.url} />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
