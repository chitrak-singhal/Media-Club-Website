import React from 'react'

const SuggestedPosts = ({className,header,posts=[]}) => {
  return (
    <div className={`w-full pt-2rouned-xl ${className}`}>
        <h2 className='text-black font-bold text-2xl mt-6 pl-2'>{header}</h2>
        <div className='flex-cols gap-y-5 mt-5 p-2'>
        {posts.map((item=>(
            <div key={item._id} className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[12rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)] hover:cursor-pointer'>
                <img src={item.image} className='w-[40%] rounded-xl'></img>
                <div className='overflow-hidden'>
                    <h2 className='text-[1.4rem] mb-4 font-bold'>{item.title}</h2>
                    <div className=' overflow-hidden'>
                      <p className='text-justify'>{item.description}</p>
                    </div>
                </div>
            </div>
        )))}
        </div>
    </div>
  )
}

export default SuggestedPosts
