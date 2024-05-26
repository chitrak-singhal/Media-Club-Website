import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumbs = ({data}) => {
  return (
    <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap'>
      {data.map((item,index)=>(
        <div className='text-black opacity-50 text-sm flex flex-cols'>
            <Link to={item.link}>{item.name} </Link>
            {index!==data.length-1&&<MdKeyboardArrowRight className='my-1' />}            
        </div>            
      ))}
    </div>
  )
}

export default BreadCrumbs
