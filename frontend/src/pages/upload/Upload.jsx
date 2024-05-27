import React, { useEffect, useState } from 'react'
import ArticleService from '../../services/ArticleService'
import {v4 as uuidv4} from 'uuid'
import supabase from '../../config/supabaseClient';
import MainLayout from '../../components/MainLayout';

const Upload = () => {
    async function uploadImage(e){
        e.preventDefault();
        let img_id = uuidv4();
        //console.log(e,'hi');
        //console.log(e.target[0].files[0]);
        let file = e.target[0].files[0];
        const {data,error}=await supabase
        .storage
        .from('images')
        .upload(img_id,file)
        console.log(data, error);
    }
  return (
    <div className=''>
        <MainLayout>
            <h1 className='text-center font-bold text-4xl py-10'>Upload New Article</h1>
            <div className='mx-[25%]  px-10 py-10 rounded-xl mb-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <form className=''>
                    <label className='text-xl font-semibold py-5'> 
                    Title 
                    </label>
                    <br></br>
                    <input type="text" className='h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Description 
                    </label>
                    <br></br>
                    <input type="text" className='h-[7rem] w-full bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Content
                    </label>
                    <br></br>
                    <input type="text" className='h-[20rem] w-full bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Link
                    </label>
                    <br></br>
                    <input type="text" className='h-[2rem] w-[70%] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Category
                    </label>
                    <br></br>
                    <input type="text" className='h-[2rem] w-[20rem] bg-gray-100 border-[1px] border-gray-200 rounded-md mt-2 mb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                    </input> <br></br>

                    <label className='text-xl font-semibold py-5'> 
                    Image
                    </label> <br></br>
                    <input type="file" className='file:border-[2px] file:border-black mt-2 file:mr-7 file:rounded-lg file:p-2 font-semibold file:bg-white file:hover:bg-black file:hover:text-white file:transition-all file:duration-300 file:cursor-pointer'
                    >
                    </input> <br></br>
                </form>
            </div>
        </MainLayout>
    </div>
  )
}

export default Upload
