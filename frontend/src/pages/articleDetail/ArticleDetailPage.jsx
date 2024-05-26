import React from 'react'
import MainLayout from '/src/components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import {images} from '../../constants'
import SuggestedPosts from './container/SuggestedPosts';

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
  return (
    <div>
      <MainLayout>
        <section className='container mx-auto flex px-[10%] gap-x-5 py-5'>
            <div className='w-[65%]'>
                <article className='flex-1 mx-1'>
                <BreadCrumbs data={breadCrumbsData}/>
                <h1 className='text-[3rem] font-bold'>Article Title</h1>
                <h2 className='text-black text-sm opacity-50 mb-10'>Posted on Date- 69 min read</h2>
                <img src={images.Post1Image} alt="title" className='w-[60%] rounded-xl'/> {/*temporary*/}
                <div className=' mt-[3rem]'>
                    <p className='text-black text-justify mr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, debitis. Aliquam, asperiores? Corrupti eaque molestiae reiciendis, vel velit excepturi, consectetur alias perspiciatis officia minus, iure possimus totam libero exercitationem odit suscipit nulla error quia quibusdam in eligendi repellat ad quasi. Deserunt amet facere rerum excepturi dolorum dolore assumenda minus nulla modi nemo quisquam, atque quo iure alias! Delectus illum nihil nostrum tempore est vero deserunt eum ea odit inventore maiores consequatur vel rerum numquam mollitia, voluptates laborum omnis sunt quisquam id vitae saepe dolorem. Nostrum labore quas ea aperiam animi. Omnis quia facilis laboriosam odio corrupti eligendi iusto et fugiat.

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
