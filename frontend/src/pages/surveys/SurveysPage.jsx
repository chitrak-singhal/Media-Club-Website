import React from 'react'
import { useEffect,useState } from 'react'
import MainLayout from '/src/components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import SuggestedPosts from '../../components/SuggestedPosts';
import supabase from '../../config/supabaseClient'
import { Link } from 'react-router-dom';

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

const breadCrumbsData = [
    {name:"Home", link:'/'},
    {name:"Surveys", link:'/surveys'},
]; 


const SurveysPage = () => {
    const[articles,setArticles] = useState([])

  useEffect(()=>{
    const fetch = async () => {
        const{data,error} = await supabase
        .from('articles')
        .select()
        .eq('category','Survey')
        .order('created_at',{ascending:false})
        .limit(6)
        setArticles(data)
        console.log(data);
        return {data,error}
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
                  <a  key={item.id} href={item.link}>
                    <div className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[12rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)] hover:cursor-pointer'>
                        <img src={import.meta.env.VITE_STORAGE+item.img_id} className='h-full rounded-xl aspect-square'></img>
                        <div className='flex-cols'>
                            <h2 className='text-[1.8rem] mb-1 font-bold line-clamp-1'>{item.title}</h2>
                            <div className='h-[50%] mb-1'>
                            <p className='h-full line-clamp-3'>{item.description}</p>
                            </div>
                            <p className='opacity-50 italic' >{formatDateWithDateObject(item.created_at)}</p>
                        </div>
                    </div>
                    </a>
                )))}
            </div>
            <div className='w-[38%]'>
                <SuggestedPosts header="Latest Posts" posts = {articles}/>
            </div>
        </section>
      </MainLayout>
    </div>
    </div>
  )
}

export default SurveysPage
