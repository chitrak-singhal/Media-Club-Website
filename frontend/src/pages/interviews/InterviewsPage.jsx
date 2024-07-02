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
    {name:"Blog", link:'/interviews'},
]

const InterviewsPage = () => {
    const[articles,setArticles] = useState([])

  useEffect(()=>{
  const fetch = async () => {
    const{data,error} = await supabase
    .from('articles')
    .select()
    .eq('category','Interview')
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
                <h1 className='text-[3rem] font-bold mb-7'>Interviews</h1>
                {articles.map((item=>{
                    return (
                    <div key={item.id} className='border-[1.5px] border-black p-5 mb-5 rounded-xl flex gap-x-5 h-[20rem] shadow-[5px_5px_0px_0px_rgba(151,151,151)]'>
                    <iframe
                        width="50%"
                        height="full"
                        src={item.link}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className='rounded-xl mr-2'
                        />
                        <div className='flex-cols'>
                            <h2 className='text-[1.8rem] mb-1 font-bold h-[3rem] line-clamp-1'>{item.title}</h2>
                            <div className='h-[70%] mb-1'>
                            <p className='h-full text-wrap truncate ... text-justify'>{item.description}</p>
                            </div>
                            <p className='opacity-50'>{formatDateWithDateObject(item.created_at)}</p>
                        </div>
                    </div>
                )}))}
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

export default InterviewsPage
