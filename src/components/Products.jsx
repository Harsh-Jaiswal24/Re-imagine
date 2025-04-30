import React, { useState } from "react";
import Product from "./Product";
import {motion} from "motion/react"
import v1 from "/src/assets/v1.mp4"
import v2 from "/src/assets/v2.webm"
import v3 from "../assets/v3.mp4"
import v4 from "../assets/v4.mp4"
import v5 from "../assets/v5.mp4"

const Products = () => {
  var product = [
    {
      title: "Title Is",
      description:
        "lorem10 this is descrption o the pahge inn whihch we want tot cewate a lrdcy tid  jd kn s nd sd ",
        live:true,case:true
    },
    {
        title: "TTRSS",
        description:
          "lorem10 this is descrption o the pahge inn whihch we want tot cewate a lrdcy tid  jd kn s nd sd ",
          live:true,case:false
      }, {
        title: "TiSDSD",
        description:
          "lorem10 this is descrption o the pahge inn whihch we want tot cewate a lrdcy tid  jd kn s nd sd ",
          live:true,case:false
      }, {
        title: "YELLOW",
        description:
          "lorem10 this is descrption o the pahge inn whihch we want tot cewate a lrdcy tid  jd kn s nd sd ",
          live:true,case:false
      }, {
        title: "MERDICI",
        description:
          "lorem10 this is descrption o the pahge inn whihch we want tot cewate a lrdcy tid  jd kn s nd sd ",
          live:true,case:false
      },
  ];
  const [pos,setpos]=useState(0);
  const mover=(val)=>{
    setpos(val*20);
  }

  return (
    <div className="mt-10 relative">
     {product.map((pro,index)=><Product index={index} key={index} data={pro} mover={mover}/>)}
     <div className="w-full h-full absolute top-0 pointer-events-none">
      <motion.div animate={{y:pos+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.5}} className={`window absolute w-96 h-[20rem] left-1/3 overflow-hidden -translate-y-[${20}]]`}>
            <motion.div animate={{y: -pos+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.4}} className="w-full h-full left-1/3">    <video src={v2} autoPlay loop muted className="w-full h-full" /> </motion.div>
            <motion.div animate={{y: -pos+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.4}} className="w-full h-full left-1/3">   <video src={v3} autoPlay loop muted className="w-full h-full "/>  </motion.div>  
            <motion.div animate={{y: -pos+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.4}} className="w-full h-full left-1/3">   <video src={v1} autoPlay loop muted className="w-full h-full"/>   </motion.div>  
            <motion.div animate={{y: -pos+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.4}} className="w-full h-full left-1/3">   <video src={v4} autoPlay loop muted className="w-full h-full"/>   </motion.div>  
            <motion.div animate={{y: -pos+'rem'}} transition={{ease:[0.76, 0, 0.24, 1],duration:.4}} className="w-full h-full left-1/3">   <video src={v5} autoPlay loop muted className="w-full h-full"/>   </motion.div>  

      </motion.div>  
     </div>
    </div>
  );
};

export default Products;
