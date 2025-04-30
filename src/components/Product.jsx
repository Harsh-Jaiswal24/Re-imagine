import React from 'react'
import Button from './Button'

const Product = ({index,data,mover,key}) => {
  return (
    <div className='w-full py-16 text-white h-[20rem]'>
        <div onMouseEnter={()=>{mover(index)}} key={index} className="max-w-screen-xl ms-auto flex items-center justify-between px-5">
        <h1 className='text-4xl capitalize font-semibold'>{data.title}</h1>
        <div className="details w-1/3">
            <p className="mb-4">{data.description}</p>
            <div className="flex items-center gap-3">
            {data.live==true && <Button name="See Live"/>}
            {data.case==true && <Button name='Case study'/>}
            </div>
        
        </div>
        </div>
    </div>
  )
}

export default Product