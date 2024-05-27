import React from 'react'
import MainLayout from '/src/components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import {images} from '../../constants'
import SuggestedPosts from './container/SuggestedPosts';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import supabase from '../../config/supabaseClient';

const breadCrumbsData = [
    {name:"Home", link:'/'},
    {name:"Blog", link:'/blog'},
    {name:"Article title", link:'/blog/:id'},
]; //temporary
const postData = [
    {
        _id: "1",
        image: images.Post1Image,
        title: "We Are Expanding",
        createdAt:"Date",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati placeat error delectus repellat voluptas veniam animi excepturi dolorum architecto iusto."
    },
    {
        _id: "2",
        image: images.Post1Image,
        title: "We Are Expanding",
        createdAt:"Date",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati placeat error delectus repellat voluptas veniam animi excepturi dolorum architecto iusto."
    },
    {
        _id: "3",
        image: images.Post1Image,
        title: "We Are Expanding",
        createdAt:"Date",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati placeat error delectus repellat voluptas veniam animi excepturi dolorum architecto iusto."
    }
]; //temporary //above fields are according to mongodb


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
                <h2 className='text-black text-sm opacity-50 mb-10'>{article.created_at}- 69 min read</h2>
                <img src={import.meta.env.VITE_STORAGE+article.img_id} alt="title" className='w-[60%] rounded-xl'/> {/*temporary*/}
                <div className=' mt-[3rem]'>
                    <p className='text-black text-justify mr-7'>{article.content}

                    </p>
                </div>
                </article>
            </div>
            <div className='w-[38%]'>
                <SuggestedPosts header="Latest Posts" posts = {postData}/>
            </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default ArticleDetailPage
