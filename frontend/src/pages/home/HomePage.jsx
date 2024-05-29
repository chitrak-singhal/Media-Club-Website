import React from 'react'
import { useEffect,useState } from 'react'
import MainLayout from '/src/components/MainLayout'
import Hero from './container/Hero'
import Articles from './container/Articles'
import ArticleService from '../../services/ArticleService'
import supabase from '../../config/supabaseClient'

const HomePage = () => {

  const[articles,setArticles] = useState([])
  const[page, setPage] = useState(0);
  const[maxcount, setMaxCount] = useState(6);

  useEffect(()=>{
    const getCount = async()=>{
    const { data, count, error } = await supabase
    .from('articles')
    .select('*', { count: 'exact', head: true });
    setMaxCount(count);
    }
    getCount();
  },[])

  useEffect(()=>{
    const fetch = async()=>{
   const {data,error} = await ArticleService.fetchArticles(page*6,page*6+5);

   setArticles(data)
  }
   fetch()
}
  ,[page])

  return (
    <div>
      <MainLayout>
      <Hero></Hero>
      <Articles articles={articles} page={page} setPage={setPage} maxcount={maxcount}/>
      </MainLayout>
    </div>
  )
}

export default HomePage
