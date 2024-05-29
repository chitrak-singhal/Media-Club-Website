import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from "react-icons/fa";

const Articles = ({articles}) => {
  //console.log(articles)
  return (
    <section className='flex flex-col container mx-auto  px-5 py-5 mt-5'>
      <div className='flex flex-wrap gap-x-10 gap-y-10 justify-center pb-10'>
        
          {articles.map(item=>(
            <ArticleCard key={item.id} className='lg:w-[30%] md:w-[calc(40%)]' item={item}/>
          ))}
      
      </div>

      <div class="flex justify-center mt-5 mb-4">
        <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
            previous
        </a>

        <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            1
        </a>

        <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            2
        </a>

        <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            3
        </a>

        <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            Next
        </a>
      </div>
      {/* <button className='group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
        <span>Explore</span>
        <FaArrowRight className='w-3 h-3'/>
      </button> */}
    </section>
  )
}

export default Articles
