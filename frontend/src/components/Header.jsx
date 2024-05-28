import React from 'react'
import { images } from '../constants'
import { Link, Navigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'

const navItemsInfo = [
    {name:"Home" , type:"link", link:"/"}, //type:"dropdown", items:"sasasa"
    {name:"Articles",type:"link",link:"/blog"},
    {name:"Interviews",type:"link"},
    {name:"Surveys",type:"link",link:"/surveys"},
    {name:"About",type:"link"}
]

const NavItem = ({name,link}) =>{
    return (
        <li className='relative group'>
            <Link to={link} className='px-1.5 py-2 group-hover:text-underline'>{name} </Link>
            {/* <a href='' className='px-1.5 py-2 group-hover:text-underline'>{name}</a> */}
            <span className=' cursor-pointer text-white absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[95%] opacity-0 group-hover:opacity-100'>/</span>
        </li>
    )
}

function LogButton({session,setSession}){
    
    console.log(session,'header');
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        setSession();
      }
    if (!session){
        return(
        <Link to={'/login'}>
        <button className=' text-white border-2 border-white px-6 pb-2 pt-1.5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300'>
            Sign in
        </button>
        </Link>
        )
    }
    else{
        return (
            <Link to={'/login'}>
            <button onClick={signOut} className=' text-white border-2 border-white px-6 pb-2 pt-1.5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300'>
                Sign out
            </button>
            </Link>
        )
    }
}

const Header = () => {
   const [session, setSession] = useState();
    useEffect(()=>{
            const fetch = async () => {
                const s = await supabase.auth.getSession();
                if (s.data.session)
                    setSession(true);
                else
                    setSession(false);
        }
            fetch()
        }
    ,[session])
  return (
    <section className='bg-black sticky top-0 z-50'>
        <header className='mx-auto w-full container px-5 flex justify-center py-4 bg-black items-center font-semibold position:fixed'>
            <div className='bg-black w-1/3 flex'>
                <img src={images.Logo} alt="logo" className='h-10 mr-5'/>
                <div className='flex items-center'>
                <p className='text-white align-middle md:hidden lg:block'>The Media Club IIT BHU</p>
                </div>
            </div>
            <div className='bg-black flex gap-x-9 w-1/3 justify-center font-medium'>
                <ul className='flex gap-x-5 text-white'>
                    {navItemsInfo.map(item =>(
                        <NavItem key={item.name} name={item.name} link={item.link}/>
                    ))}
                </ul>
            </div>
            <div className='w-1/3 flex justify-end'>
                <LogButton session={session} setSession={setSession}/>
            </div>
        </header>
    </section>
  )
}

export default Header
