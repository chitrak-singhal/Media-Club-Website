import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import { useState,useEffect } from 'react';

const PrivateRoutes = () => {
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
    //console.log(session,'hello')
  return (
    session? <Outlet/>:
    <div className='h-screen flex items-center'>
        <div className='w-[22rem] mb-[25rem] mx-auto rounded-xl p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <p className='text-center font-bold text-2xl'>You are not logged in!</p>
        <Link to='/login'>
        <button className='mt-5 group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
            Login
        </button>
        </Link>
        </div>
    </div>
  );
};

export default PrivateRoutes;