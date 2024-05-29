import React from 'react'
import { useState,useEffect } from 'react'
import ArticleService from '../services/ArticleService'
import { Link } from 'react-router-dom'

function formatDateWithDateObject(ymdDate) {
  const date = new Date(ymdDate);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = String(date.getDate()).padStart(2, '0');
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const dmyDate = `${day} ${monthName} ${year}`;
  return dmyDate;
}

const SuggestedPosts = ({className,header,posts=[]}) => {

  const[articles,setArticles] = useState([])

  useEffect(()=>{
    const fetch = async()=>{
   const {data,error} = await ArticleService.fetchArticles(0,5);
   setArticles(data)
  }
   fetch()
}
  ,[])

  return (
    <div className={`w-full pt-2rouned-xl ${className}`}>
        <h2 className='text-black font-bold text-2xl mt-6 pl-2'>{header}</h2>
        <div className='flex-cols gap-y-5 mt-5 p-2'>
        {articles.map((item=>{
          if (item.category=="Interview"){
            return(
                <div  key ={item.id} className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[12rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)] hover:cursor-pointer'>
                  <iframe
                        width="150.4"
                        height="150.4"
                        src={item.link}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className='rounded-xl mr-2'
                        />
                    <div className='flex-cols'>
                        <h2 className='text-[1.4rem] mb-2.5 font-bold h-[2rem] w-full line-clamp-1'>{item.title}</h2>
                        <div className='h-[50%] mb-1'>
                          <p className='h-full line-clamp-3'>{item.description}</p>
                        </div>
                        <p className='opacity-50'>{formatDateWithDateObject(item.created_at)}</p>
                    </div>
                </div>
            )
          }
          else if (item.category=="Article"){
          return(
          <Link key={item.id} to={"/blog/"+item.id}>
            <div  className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[12rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)] hover:cursor-pointer'>
              
                <img src={import.meta.env.VITE_STORAGE+item.img_id} className='h-full rounded-xl aspect-square'></img>
                <div className='flex-cols'>
                    <h2 className='text-[1.4rem] mb-2.5 font-bold h-[2rem] w-full line-clamp-1'>{item.title}</h2>
                    <div className='h-[50%] mb-1'>
                      <p className='h-full line-clamp-3'>{item.description}</p>
                    </div>
                    <p className='opacity-50'>{formatDateWithDateObject(item.created_at)}</p>
                </div>
            </div>
            
            </Link>
        )}
        else {
          console.log('heelo');
          
            return (
              <a key={item.id} href={item.link}>
            <div  className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[12rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)] hover:cursor-pointer'>
                
                <img src={import.meta.env.VITE_STORAGE+item.img_id} className='h-full rounded-xl aspect-square'></img>
                <div className='flex-cols '>
                    <h2 className='text-[1.4rem] mb-2.5 font-bold h-[2rem] w-full line-clamp-1'>{item.title}</h2>
                    <div className='h-[50%] mb-1'>
                      <p className='h-full line-clamp-3'>{item.description}</p>
                    </div>
                    <p className='opacity-50 italic'>{formatDateWithDateObject(item.created_at)}</p>
                </div>
            </div>
            </a>
            )
        }
        }))}
        </div>
    </div>
  )
}

export default SuggestedPosts
