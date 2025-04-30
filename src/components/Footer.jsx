import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-10 mt-28'>
        <div className="max-w-screen-lg mx-auto flex gap-20 border-b-1"> 
            <div className="basis-1/2">
            <h1 className='text-[7rem] font-semibold leading-none tracking-tight'>Re imagine.</h1>
            </div>
            <div className="basis-1/2 flex gap-4">
                <div className='basis-1/3 ' >
                    <h4 className='mb-10 text-zinc-500 capitalize'>Social </h4>
                    {["Instagram","Github","Linkedin","Google"].map((ele,index)=>{
                        return <a className="block mt-3 text-zinc-500 capitalize" key={index}>{ele}</a>
                    })}
                </div>
                <div className='basis-1/3 ' >
                    <h4 className='mb-10 text-zinc-500 capitalize'>Social </h4>
                    {["Instagram","Github","Linkedin","Google"].map((ele,index)=>{
                        return <a className="block mt-3 text-zinc-500 capitalize" key={index}>{ele}</a>
                    })}
                </div>
                <div className='basis-1/2 flex justify-between flex-col gap-5 items-end' >
                    <p className='text-right text-bolder tracking-tighter '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, minus.</p>
                    <img className="max-h-20" src="https://plus.unsplash.com/premium_vector-1721646140814-58022696cb45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHJlaW1hZ2luZXxlbnwwfDB8MHx8fDA%3D"/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Footer