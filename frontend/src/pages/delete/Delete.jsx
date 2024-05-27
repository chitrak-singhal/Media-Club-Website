import React, { useEffect, useState } from 'react'
import ArticleService from '../../services/ArticleService'
import {v4 as uuidv4} from 'uuid'
import supabase from '../../config/supabaseClient';
import MainLayout from '../../components/MainLayout';
import SearchForm from '../../components/SearchForm';
import { redirect } from "react-router-dom";

function ErrorMsg({articleFound}) {
    if (articleFound==0){
        return(<div> </div>)
    }
    else if (articleFound==1){
        return(
            <div className='bg-green-200 text-center p-2 text-lg rounded-xl w-[20%] mx-auto mb-5 font-semibold text-green-950 border-2 border-green-950'>
                <p>Article found!</p>
            </div>
        )
    }
    else if (articleFound==2){
        return(
            <div className='bg-red-200 text-center p-2 text-lg rounded-xl w-[20%] mx-auto mb-5 font-semibold text-red-950 border-2 border-red-950'>
            <p>Article not found!</p>
        </div>
        )
    }
    else{
        return(
            <div className='bg-green-200 text-center p-2 text-lg rounded-xl w-[20%] mx-auto mb-5 font-semibold text-green-950 border-2 border-green-950'>
                <p>Article deleted successfully!</p>
            </div>
        )
    }
}

const Delete = () => {
    const [articleFound, setArticleFound]=useState(0); //0 initial //1 green // 2 red
    const [oldId, setOldId] = useState();
    async function deleteData(e){
        //console.log(e,'hi');
        e.preventDefault();
        const {data,error} = await ArticleService.deleteData(oldId);
        setArticleFound(4);
    }

    async function handleSearch(e){
        e.preventDefault();
        //console.log('hello');
        const checkArticle = async () => {
            const{data,error} = await supabase
            .from('articles')
            .select()
            .eq('title',e.target[0].value)
            //console.log(data);
            if (data.length) {setArticleFound(1);setOldId(data[0].id)}
            else setArticleFound(2);
        }
        checkArticle();
    }

  return (
    <div className=''>
        <MainLayout>
            <h1 className='text-center font-bold text-4xl py-10'>Delete Article</h1>
            <ErrorMsg articleFound={articleFound} />
            {(()=>{
                if (articleFound==1) 
                {
                    return(
                        <div className='mx-[25%]  px-10 py-10 rounded-xl mb-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                            <h2 className='text-2xl font-semibold mb-5 text-center'>Are you sure you want to delete the selected article?</h2>
                            <div className='flex'>
                                <button onClick={deleteData} className='mt-5 group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
                                    Yes
                                </button>
                                <button className='mt-5 group mx-auto flex items-center gap-x-2 font-bold text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300'>
                                    No
                                </button>
                            </div>
                        </div>
                    )
                }
                else
                {
                    return(
                        <SearchForm onSubmitFunc={handleSearch} />                        
                    )
                }
            })()}
        </MainLayout>
    </div>
  )
}

export default Delete
