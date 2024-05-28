import React, { useState } from 'react'
import supabase from '../../config/supabaseClient'
import { Navigate } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';

function Msg({doWhat}) {
  console.log(doWhat,'doWhat');
  if (doWhat==0){
      return(<div className='mt-20'> </div>)
  }
  if (doWhat==1){
      return(
          <div className='bg-red-200 mt-10 mb-8 text-center p-2 text-lg rounded-xl w-[25%] mx-auto font-semibold text-red-950 border-2 border-red-950'>
          <p>Incorrect username or password!</p>
      </div>
      )
  }
  else{
      return(
         <Navigate to='/manage/'/>
      )
  }
}

const Login = () => {
  const [doWhat, setdoWhat] = useState(0);// 0 nothing 1// error// 2 success
  const handleLogin = (e)=>{
      e.preventDefault();
      let email = e.target[0].value;
      let password = e.target[1].value;
      async function signIn(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
      
        if (error) { setdoWhat(1);
          //console.error('Error signing in:', error);
          return null;
        }
        
        console.log('User signed in:', data);
        setdoWhat(2);
      }
      signIn(email,password);
      document.getElementById("login_form").reset();
  }

  return (
    <MainLayout>
    <div className='flex-cols h-screen mb-20'>
    <Msg doWhat={doWhat} />
    <div className=' h-[25rem] w-[22rem] mx-auto my-auto rounded-xl p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <h1 className='text-3xl font-bold mb-10'>Login</h1>
      <form id="login_form" onSubmit={handleLogin}>
        <label className='text-xl font-semibold py-5'>Email:</label><br></br>
        <input className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'></input>
        <label className='text-xl font-semibold py-5'>Password:</label>
        <input className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'></input>
        <button type="submit" className='mt-5 group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
            Login
        </button>
      </form>
    </div>
    </div>
    </MainLayout>
  )
}

export default Login
