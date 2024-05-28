import React from 'react'
import { useState,useEffect } from 'react'
import ArticleService from '../services/ArticleService'
import { Link } from 'react-router-dom'

const SuggestedPosts = ({className,header,posts=[]}) => {

  const[articles,setArticles] = useState([])

  useEffect(()=>{
    const fetch = async()=>{
   const {data,error} = await ArticleService.fetchArticles();
   setArticles(data)
  }
   fetch()
}
  ,[])

  return (
    <div className={`w-full pt-2rouned-xl ${className}`}>
        <h2 className='text-black font-bold text-2xl mt-6 pl-2'>{header}</h2>
        <div className='flex-cols gap-y-5 mt-5 p-2'>
        {articles.map((item=>(
          <Link key={item.id} to={"/blog/"+item.id}>
            <div  className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[12rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)] hover:cursor-pointer'>
              
                <img src={import.meta.env.VITE_STORAGE+item.img_id} className='h-full rounded-xl aspect-square'></img>
                <div className='flex-cols'>
                    <h2 className='text-[1.4rem] mb-2.5 font-bold'>{item.title}</h2>
                    <div className='h-[50%] mb-1'>
                      <p className='h-full text-wrap truncate ...'>{item.description}</p>
                    </div>
                    <p className='opacity-50'>{item.created_at}</p>
                </div>
            </div>
            
            </Link>
        )))}
        </div>
    </div>
  )
}

export default SuggestedPosts
