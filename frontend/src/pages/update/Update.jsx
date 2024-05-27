import React, { useEffect, useState } from 'react'
import ArticleService from '../../services/ArticleService'
import {v4 as uuidv4} from 'uuid'
import supabase from '../../config/supabaseClient';
import MainLayout from '../../components/MainLayout';
import DataForm from '../../components/DataForm';
import SearchForm from '../../components/SearchForm';

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
                <p>Article updated successfully!</p>
            </div>
        )
    }
}
const Update = () => {
    const [articleFound, setArticleFound]=useState(0); //0 initial //1 green // 2 red
    const [oldId, setOldId] = useState();
    async function updateData(e){
        //console.log(e,'hi');
        e.preventDefault();
        console.log(oldId);
        let article;
        const fetch = async () => {
            const{data,error} = await supabase
            .from('articles')
            .select()
            .eq('id',oldId)
            console.log(data);
            article = data[0];
        }
        await fetch();
        let old_img_id = article.img_id;
        let img_id = uuidv4();
        let title = e.target[0].value;
        if (!title) title = article.title;
        let description = e.target[1].value;
        if (!description) description = article.description;
        let content = e.target[2].value;
        if (!content) content = article.content;
        let link = e.target[3].value;
        if (!link) link = article.link;
        let category = e.target[4].value;
        if (category=="Choose category") category = article.category;
        let created_at = e.target[5].value;
        if (!created_at) created_at = article.created_at;
        let file = e.target[6].files[0];

        // console.log(title);
        // console.log(description);
        // console.log(content);
        // console.log(link);
        // console.log(category);
        // console.log(created_at);
        // console.log(img_id);

        const {data,error} = ArticleService.updateData([{created_at,title,description,content,link,img_id,category}],oldId);
        const {data2,error2} = ArticleService.uploadImage(img_id,file);
        const {data3, error3} = ArticleService.deleteImage(old_img_id);
        document.getElementById("form_id").reset();
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
            <h1 className='text-center font-bold text-4xl py-10'>Update Article</h1>
            <ErrorMsg articleFound={articleFound} />
            {(()=>{
                if (articleFound==1) 
                    return <DataForm onSubmitFunc={updateData}/>
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

export default Update
