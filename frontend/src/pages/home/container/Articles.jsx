import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

 function prevPage(page,setPage){
  if (page==0) return;
  setPage(page-1);
  return;
 }
 
 function nextPage(page,setPage,maxcount){
  if (Number((page+1)*6)>=Number(maxcount)) {
    setPage(0);
    return;}
  else{
  setPage(page+1);
  return;}
 }

const Articles = ({articles,page,setPage, maxcount}) => {
  //console.log(page,setPage,maxcount);
  return (
    <section className='flex flex-col container mx-auto  px-5 py-5 mt-5'>
      <div className='flex flex-wrap gap-x-10 gap-y-10 justify-center pb-10'>
        
          {articles.map(item=>(
            <ArticleCard key={item.id} className='lg:w-[30%] md:w-[calc(40%)]' item={item}/>
          ))}
      
      </div>

      <div className="flex justify-center mt-5 mb-4 gap-x-10">
        <button onClick={()=>prevPage(page,setPage)} className='w-[9rem] group flex justify-center items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'> 
        <FaArrowLeft className='w-3 h-3'/>
          <span>Previous</span>
        </button>
        
        <button onClick={()=>nextPage(page,setPage,maxcount)} className='w-[9rem] group justify-center flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
          <span>Next</span>
          <FaArrowRight className='w-3 h-3'/>
        </button>
      </div>
    </section>
  )
}

export default Articles
