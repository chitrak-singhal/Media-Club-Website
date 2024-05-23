import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <section>
        <header className='container mx-auto px-5 flex justify-center py-4 bg-black items-center'>
            <div className='bg-black w-1/3 flex'>
                <img src={images.Logo} alt="logo" className='h-10 mr-5  items-center'/>
                <div className='flex items-center'>
                <p className='text-white align-middle'>The Media Club IIT BHU</p>
                </div>
            </div>
            <div className='bg-black flex gap-x-9 w-1/3 justify-center'>
                <ul className='flex gap-x-5 text-white'>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>Articles</a>
                    </li>
                    <li>
                        <a href=''>Interviews</a>
                    </li>
                    <li>
                        <a href=''>Surveys</a>
                    </li>
                </ul>
            </div>
            <div className='w-1/3 flex justify-end'>
                <button className=' text-white border-2 border-white px-6 pb-2 pt-1.5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300'>
                    Sign in
                </button>
            </div>
        </header>
    </section>
  )
}

export default Header
