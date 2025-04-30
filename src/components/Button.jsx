import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";

const Button = ({name="Get Started"}) => {
  return (
    <div className='w-28 px-3 py-2 text-black bg-zinc-100 rounded-full'>
        <span className='text-xs font-medium flex items-center gap-2'>{name}<FaAnglesRight className='inline-block text-black'/></span>
    </div>
  )
}

export default Button