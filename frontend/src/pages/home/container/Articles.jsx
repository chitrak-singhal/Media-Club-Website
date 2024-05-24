import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
  return (
    <section className='flex flex-col container mx-auto  px-5 py-5 mt-5'>
      <div className='flex flex-wrap gap-x-10 gap-y-10 justify-center pb-10'>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
      </div>
      <button className='mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg'>
        <span>Explore</span>
        <FaArrowRight className='w-3 h-3'/>
      </button>
    </section>
  )
}

export default Articles
