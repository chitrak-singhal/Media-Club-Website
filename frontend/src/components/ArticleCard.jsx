import React from 'react'
import {images} from '../constants'

const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${className}`}>
      <img src={images.Post1Image} alt = "title" className='object-cover object-center h-auto'/>
      <div className='p-5'>
        <h2 className='font-roboto font-bold text-xl'>We Are Expanding</h2>
        <p className='text-sm my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut!</p>
        <p className='text-sm text-gray-400 italic'>Date</p>
      </div>
    </div>
  )
}

export default ArticleCard
