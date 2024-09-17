import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      number: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png",
      number: 11,
    },
  ];
  return (
    <div className="flex items-center mt-20">
      {data.map((elem, index) =>(
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
