import React, { useEffect, useState } from 'react'
import ArticleService from '../../services/ArticleService'
import {v4 as uuidv4} from 'uuid'
import supabase from '../../config/supabaseClient';
import MainLayout from '../../components/MainLayout';
import DataForm from '../../components/DataForm';

const Upload = () => {
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
        document.getElementById("form_id").reset();
    }
  return (
    <div className=''>
        <MainLayout>
            <h1 className='text-center font-bold text-4xl py-10'>Upload New Article</h1>
            <DataForm onSubmitFunc={uploadData} />
        </MainLayout>
    </div>
  )
}

export default Upload
