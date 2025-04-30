import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className="w-full mt-24">
         <div className='max-w-screen-lg mx-auto flex gap-2 p-2 rounded-md'>
        <Card w={"basis-1/3"} start={false} para={true}/>
        <Card w={"basis-2/3"} hover="true"/>

         </div>

    </div>
  )
}

export default Cards