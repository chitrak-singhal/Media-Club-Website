import React from 'react'
import { useEffect,useState } from 'react'
import MainLayout from '/src/components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import {images} from '../../constants'
import SuggestedPosts from '../articleDetail/container/SuggestedPosts';
import ArticleService from '../../services/ArticleService'

const breadCrumbsData = [
    {name:"Home", link:'/'},
    {name:"Surveys", link:'/surveys'},
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



const SurveysPage = () => {
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
      <div>
      <MainLayout>
        <section className='container mx-auto flex px-[10%] gap-x-5 py-5'>
            <div className='w-[65%] flex-cols pr-8'>
                <BreadCrumbs data={breadCrumbsData}/>
                <h1 className='text-[3rem] font-bold mb-7'>Surveys</h1>
                {articles.map((item=>(
                    <div key={item.id} className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[12rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)] hover:cursor-pointer'>
                        <img src={item.image} className='w-[40%] rounded-xl aspect-square'></img>
                        <div className='flex-cols'>
                            <h2 className='text-[1.8rem] mb-1 font-bold'>{item.title}</h2>
                            <div className='h-[50%] mb-1'>
                            <p className='h-full text-wrap truncate ...'>{item.description}</p>
                            </div>
                            <p className='opacity-50'>{item.created_at}</p>
                        </div>
                    </div>
                )))}
            </div>
            <div className='w-[38%]'>
                <SuggestedPosts header="Latest Posts" posts = {postData}/>
            </div>
        </section>
      </MainLayout>
    </div>
    </div>
  )
}

export default SurveysPage
