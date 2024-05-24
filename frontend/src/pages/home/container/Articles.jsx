import React from 'react'
import ArticleCard from '../../../components/ArticleCard'

const Articles = () => {
  return (
    <section className='container mx-auto flex flex-wrap gap-x-10 gap-y-10 px-5 py-1 justify-center mt-10'>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
      <ArticleCard className='lg:w-[30%] md:w-[calc(40%)]'/>
    </section>
  )
}

export default Articles
