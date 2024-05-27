import React from 'react'

const SearchForm = ({onSubmitFunc}) => {
  return (
    <div className='mx-[25%]  px-10 py-10 rounded-xl mb-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <h2 className='text-2xl font-semibold mb-5'>Select your article</h2>
        <form className='' onSubmit={onSubmitFunc}>
            <label className='text-xl font-semibold py-5'> 
            Title 
            </label>
            <br></br>
            <input type="text" className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
            </input> <br></br>
            <button type="submit" className='mt-5 group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
                Search
            </button>
        </form>
    </div>
  )
}

export default SearchForm
