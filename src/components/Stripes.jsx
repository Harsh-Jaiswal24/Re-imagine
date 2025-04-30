import React from 'react'
import Stripe from "./Stripe";
const Stripes = () => {
    var data=[
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY7vIMSch3P23TO0JAqYNlTL6qRNCChxeIg&s",number:20},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SXh5l6pJ3Xb9TqWvUvTjA2A49Xpd5t0A9Q&s",number:42},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-uxPGdLgDMs-2EeSpj4RhbWQDULDT96zZw&s",number:50},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY7vIMSch3P23TO0JAqYNlTL6qRNCChxeIg&s",number:20},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SXh5l6pJ3Xb9TqWvUvTjA2A49Xpd5t0A9Q&s",number:42},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-uxPGdLgDMs-2EeSpj4RhbWQDULDT96zZw&s",number:50},
    ]
  return (
    <div className='flex items-center mt-8'>
        {data.map((ele,index)=><Stripe key={index} index={index} data={ele}/>)}

    </div>
  )
}

export default Stripes