import React from "react";
import { motion } from "framer-motion";
function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img className="invert flex-shrink-0 w-[7vw]" key={index} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img className="invert flex-shrink-0 w-[7vw]" key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
