import React from 'react'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-lg mx-auto p-4 flex items-center justify-between border-b-[1px] border-zinc-700 rounded-sm'>
<div className="nleft flex items-center">
<h1 className="text-white tracking-wide">✨Re-imagine</h1>
        <div className="ml-20 links flex gap-14">
            {["Home",'Work',"Contact","","News"].map((ele,index)=><a key={index} className='font-regular text-sm flex items-center gap-1'>
                {index==1 && <span style={{boxShadow:"0 0 0.45em #00FF19"}} className='w-1 h-1 inline-block bg-green-300 rounded-full'></span> }   {ele.length==0  ? <span className='w-[1px] rounded-sm h-8 bg-zinc-700'></span> : ele} 
                </a>)}
        </div>
</div>
<Button name="Get Started"/>
    </div>
  )
}

export default Navbar