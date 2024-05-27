import React from 'react'

const DataForm = ({onSubmitFunc}) => {
  return (
    <div>
      <div className='mx-[25%]  px-10 py-10 rounded-xl mb-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <form id="form_id" className='' onSubmit={onSubmitFunc}>
                    <label className='text-xl font-semibold py-5'> 
                    Title 
                    </label>
                    <br></br>
                    <input type="text" className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold'> 
                    Description 
                    </label>
                    <br></br>
                    <textarea type="text" className='px-2 py-1 h-[7rem] w-full bg-gray-100 border-[1px] text-wrap border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </textarea> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Content
                    </label>
                    <br></br>
                    <textarea type="text" className='px-2 py-1 h-[20rem] w-full bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </textarea> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Link
                    </label>
                    <br></br>
                    <input type="text" className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Category
                    </label>
                    <br></br>
                    <select className='px-2 h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                        <option defaultValue="Choose Category" >Choose category</option>
                        <option value="Article">Article</option>
                        <option value="Interview">Interview</option>
                        <option value="Survey">Survey</option>
                        <option value="Other">Other</option>
                    </select>
                    <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Date
                    </label>
                    <br></br>
                    <input type="text" className='px-2 h-[2rem] w-[20rem] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Image
                    </label> <br></br>
                    <input type="file" className='px-2 file:border-[2px] file:border-black mt-2 file:mr-7 file:rounded-lg file:p-2 font-semibold file:bg-white file:hover:bg-black file:hover:text-white file:transition-all file:duration-300 file:cursor-pointer'
                    >
                    </input> <br></br>
                    <button type="submit" className='mt-5 group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
                        Upload
                    </button>
                </form>
            </div>
    </div>
  )
}

export default DataForm
