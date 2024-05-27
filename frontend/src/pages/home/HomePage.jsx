import React from 'react'
import { useEffect,useState } from 'react'
import MainLayout from '/src/components/MainLayout'
import Hero from './container/Hero'
import Articles from './container/Articles'
import ArticleService from '../../services/ArticleService'
import supabase from '../../config/supabaseClient'

const HomePage = () => {

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
    <div>
      <MainLayout>
      <Hero></Hero>
      <Articles articles={articles}/>
      </MainLayout>
    </div>
  )
}

export default HomePage
