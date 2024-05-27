import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex'>
    <div className=' h-[25rem] w-[22rem] mx-auto my-auto rounded-xl p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <h1 className='text-3xl font-bold mb-10'>Login</h1>
      <form>
        <label className='text-xl font-semibold py-5'>Username:</label>
        <input className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'></input>
        <label className='text-xl font-semibold py-5'>Password:</label>
        <input className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'></input>
        <button type="submit" className='mt-5 group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
            Login
        </button>
      </form>
    </div>
    </div>
  )
}

export default Login
