import React from 'react'

const Search = () => {
  return (
  <div className="flex justify-start mt-5">
      <form action="" className="relative">
        <input type="search" 
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full bg-transparent pl-12 outline-none focus:border focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white-500 px-3.5 peer-focus:border-white peer-focus:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


</div>

  )
}
export default Search
