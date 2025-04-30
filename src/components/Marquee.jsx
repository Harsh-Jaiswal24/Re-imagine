import React from "react";

import {motion} from "motion/react"

const Marquee = ({ data }) => {
  return (
    <div className="flex w-full py-5 gap-20 bg-zinc-100 mb-10">
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity, duration:10}} className="w-full flex flex-shrink-0 gap-40">
        {data.map((ele, index) => {
          return <img src={ele} key={index} className="w-20" />;
        })}
      </motion.div>
      <motion.div  className="w-full flex flex-shrink-0 gap-40">
        {data.map((ele, index) => {
          return <img src={ele} key={index} className="w-20" />;
        })}
      </motion.div>
    
    
    </div>
  );
};

export default Marquee;
