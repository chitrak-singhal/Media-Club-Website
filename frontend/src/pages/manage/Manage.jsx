import React from 'react'
import { Link } from 'react-router-dom'

const Manage = () => {
  return (
    <div className='h-screen flex'>
    <div className=' h-[22rem] w-[22rem] mx-auto my-auto rounded-xl px-5 pt-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <h1 className='text-3xl font-bold text-center'>Manage</h1>
      <div className='mt-11'>
        <Link to={'/upload'}>
        <button className='mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
            Upload
        </button>
        </Link>
        <Link to={'/update'}>
        <button className='mt-5 mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
            Update
        </button>
        </Link>
        <Link to={'/delete'}>
        <button className='mt-5 mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
            Delete
        </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Manage
