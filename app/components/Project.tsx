"use client"
import React from 'react'

function Project({title, index, src, color, setModal }:{title:string, index:number, src:string, color:any, setModal:Function}) {
  return (
    <div 
      className='w-[600px] p-6 items-center bg-slate-100 flex justify-between h-[100px] border border-b-2 border-b-black hover:opacity-40 transition duration-300 hover:scale-105 group'
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h1 className='text-4xl group-hover:-translate-x-2 transition-transform'>{title}</h1>
      <p>Design and Development</p>
    </div>
  )
}

export default Project
