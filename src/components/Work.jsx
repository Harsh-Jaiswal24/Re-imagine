import React, { useState } from "react";
import { motion, useMotionValueEvent } from "motion/react";
import { useScroll } from "motion/react";

const Work = () => {
  const [images, setimages] = useState([
    {
      url: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "40%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "46%",
      left: "39%",
      isActive: false,
    },
    {
      url: "https://cdn.dribbble.com/userupload/4287187/file/original-e7086b44464c24bac20aca5137cdf5b9.jpeg?resize=400x0",
      top: "50%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1718347478724-d13189138aa2?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "55%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAJ7ApaQMq7TB0y6V1BrLzf7tDNhofgb0iXPAYaukkJhPQazxk4uzBlu_i8ZlfrB2bI8&usqp=CAU",
      top: "48%",
      left: "44%",
      isActive: false,
    },
  ]);

  const { scrollY, scrollYProgress, scrollX, scrollXProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
  
    const showhideimage = (latestIndexes) => {
      setimages((prev) =>
        prev.map((item, index) => ({
          ...item,
          isActive: latestIndexes.includes(index),
        }))
      );
    };
  
    switch (Math.floor(latest * 100)) {
      case 0:
        showhideimage([]);
        break;
      case 1:
        showhideimage([0]);

        break;
      case 2:
        showhideimage([0, 1]);

        break;
      case 3:
        showhideimage([0, 1, 2]);

        break;
      case 4:
        showhideimage([0, 1, 2, 3]);
        break;
      case 5:
        showhideimage([0.1, 2, 3, 4]);
        break;

      case 6:
        showhideimage([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[32vw] select-none leading-none font-medium tracking-tight ">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (ele, index) =>
              ele.isActive == true && (
                <img
                  className="absolute w-48 h-48 rounded-lg"
                  src={ele.url}
                  style={{ top: ele.top, left: ele.left }}
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
