import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumbs = ({data}) => {
  return (
    <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap'>
      {data.map((item,index)=>(
        <div key={item.name} className='text-black text-sm flex flex-cols'>
            <Link to={item.link} className='opacity-50 hover:opacity-100'>{item.name} </Link>
            {index!==data.length-1&&<MdKeyboardArrowRight className='my-1 opacity-50' />}            
        </div>            
      ))}
    </div>
  )
}

export default BreadCrumbs
