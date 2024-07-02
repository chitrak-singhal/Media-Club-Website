import React from 'react'
import MainLayout from '/src/components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import {images} from '../../constants'
import SuggestedPosts from '../../components/SuggestedPosts';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import supabase from '../../config/supabaseClient';

const breadCrumbsData = [
    {name:"Home", link:'/'},
    {name:"Blog", link:'/blog'},
    {name:"Article", link:'/blog/:id'},
]; //temporary

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

const ArticleDetailPage = () => {
    const[article,setArticle] = useState([])
    const params= useParams()

  useEffect(()=>{
  const fetch = async () => {
    const{data,error} = await supabase
    .from('articles')
    .select()
    .eq('id',params.id)
    setArticle(data[0])
    console.log(data);
}
   fetch()
}
  ,[])
  return (
    <div>
      <MainLayout>
        <section className='container mx-auto flex px-[10%] gap-x-5 py-5'>
            <div className='w-[65%]'>
                <article className='flex-1 mx-1'>
                <BreadCrumbs data={breadCrumbsData}/>
                <h1 className='text-[3rem] font-bold'>{article.title}</h1>
                <h2 className='text-black text-sm opacity-50 mb-10'>{formatDateWithDateObject(article.created_at)} - 7 min read</h2>
                <img src={import.meta.env.VITE_STORAGE+article.img_id} alt="title" className='w-[60%] rounded-xl'/> {/*temporary*/}
                <div className=' mt-[3rem] text-justify'
                dangerouslySetInnerHTML={{ __html: article.content }}>
                </div>
                </article>
            </div>
            <div className='w-[38%]'>
                <SuggestedPosts header="Latest Posts"/>
            </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default ArticleDetailPage
