import React from 'react'
import { images } from '../constants'

const navItemsInfo = [
    {name:"Home"},
    {name:"Articles"},
    {name:"Interviews"},
    {name:"Surveys"},
]

const NavItem = ({name}) =>{
    return (
        <li className='relative group'>
            <a href='' className='px-2 py-2 group-hover:text-underline'>{name}</a>
            <span className='text-white absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[95%] opacity-0 group-hover:opacity-100'>/</span>
        </li>
    )
}

const Header = () => {
  return (
    <section>
        <header className='container mx-auto px-5 flex justify-center py-4 bg-black items-center font-semibold'>
            <div className='bg-black w-1/3 flex'>
                <img src={images.Logo} alt="logo" className='h-10 mr-5  items-center'/>
                <div className='flex items-center'>
                <p className='text-white align-middle'>The Media Club IIT BHU</p>
                </div>
            </div>
            <div className='bg-black flex gap-x-9 w-1/3 justify-center font-medium'>
                <ul className='flex gap-x-5 text-white'>
                    {navItemsInfo.map(item =>(
                        <NavItem key={item.name} name={item.name}/>
                    ))}
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
