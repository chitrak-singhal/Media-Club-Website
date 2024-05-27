import React from 'react'
import {images} from '../constants'

const ArticleCard = ({className,item}) => {
  return (
    <div className={`relative group rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${className} `}>
        <div className='inset-0 absolute z-10 h-full w-full bg-black opacity-0 group-hover:opacity-30 transition-all duration-300'>
        </div>
      <img src={import.meta.env.VITE_STORAGE+item.img_id} alt="title" className='relative object-cover object-center h-auto'/>
      <div className='relative p-5 z-20 bg-white'>
        <h2 className='z-20 font-roboto font-bold text-xl'>{item.title}</h2>
        <p className='text-sm my-2'>{item.description}</p>
        <p className='text-sm text-gray-400 italic'>{item.created_at}</p>
      </div>
    </div>
  )
}

export default ArticleCard
