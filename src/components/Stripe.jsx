import React from 'react'

const Stripe = ({data,index }) => {
  return (
    <div className='w-[16.7%] gap-3 flex items-center justify-between  px-4 py-2 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-600' key={index}>
        <img src={data.url} className='h-[40px] w-[40px] rounded-md'></img>
        <span className='font-semibold'>{data.number}</span>
    </div>
  )
}

export default Stripe