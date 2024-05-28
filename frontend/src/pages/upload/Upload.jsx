import React, { useEffect, useState } from 'react'
import ArticleService from '../../services/ArticleService'
import {v4 as uuidv4} from 'uuid'
import MainLayout from '../../components/MainLayout';
import DataForm from '../../components/DataForm';

function Msg({articleUploaded}) {
    if (articleUploaded){
    return(
        <div className='bg-green-200 text-center p-2 text-lg rounded-xl w-[20%] mx-auto mb-5 font-semibold text-green-950 border-2 border-green-950'>
            <p>Article uploaded successfully!</p>
        </div>
        )
    }
    else{
        return(<div></div>)
    }
}

const Upload = () => {
    const [articleUploaded, setArticleUploaded] = useState(false);
    async function uploadData(e){
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
        //console.log(data2)
        document.getElementById("form_id").reset();
        setArticleUploaded(true);
    }
  return (
    <div className=''>
        <MainLayout>
            <h1 className='text-center font-bold text-4xl py-10'>Upload New Article</h1>
            <Msg articleUploaded={articleUploaded} />
            <DataForm onSubmitFunc={uploadData} />
        </MainLayout>
    </div>
  )
}

export default Upload
