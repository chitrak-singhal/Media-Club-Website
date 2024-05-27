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
    else{
        return(
            <div className='bg-red-200 text-center p-2 text-lg rounded-xl w-[20%] mx-auto mb-5 font-semibold text-red-950 border-2 border-red-950'>
            <p>Article not found!</p>
        </div>
        )
    }
}
const Update = () => {
    const  [check, setCheck] = useState();
    const [articleFound, setArticleFound]=useState(0); //0 initial //1 green // 2 red

    async function updateData(e){
        //console.log(e,'hi');
        e.preventDefault();
        let img_id = uuidv4();
        let title = e.target[0].value;
        let description = e.target[1].value;
        let content = e.target[2].value;
        let link = e.target[3].value;
        let category = e.target[4].value;
        let created_at = e.target[5].value;
        let file = e.target[6].files[0];

        const {data,error} = ArticleService.uploadData([{created_at,title,description,content,link,img_id,category}]);
        const {data2,error2} = ArticleService.uploadImage(img_id,file);
        document.getElementById("form_id").reset();
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
            if (data.length) {console.log(data);setArticleFound(1);}
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
                if (check) 
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
