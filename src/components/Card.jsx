import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "./Button";
import {motion} from "motion/react"

const Card = ({w,start=true,para=false,hover="false"}) => {
  return (
        <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff",  padding:"25px"}} className={`w-1/2 bg-zinc-800 rounded-md p-5 ${w} min-h-[60vh] flex flex-col justify-between`}>
            <div className="w-full">
                  <div className="w-full flex items-center justify-between">
                      <h1 className='text-sm'>This is heading</h1>
                      <span className='text-xl'> <HiArrowLongRight /></span>
                  </div>
                  <div className="w-full py-5">
                      <h1 className='font-medium text-3xl'>This is another </h1>
                  </div>
            </div>
          
           
           {start==true &&  (<h1 className='mt-32 text-6xl font-light tracking-tighter leading-none'>Start Project</h1>)}
            <div className="w-full down mt-10">
               {start && <button className='rounded-full px-4 py-2 border border-zinc-100'>Contact Us</button>} 
               {para && <p className='text-sm font-semibold text-zinc-600'>This is some information about card</p>}
            </div>
    </motion.div>
  )
}

export default Card