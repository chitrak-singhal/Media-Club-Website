import React from 'react'
import MainLayout from '/src/components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'

const breadCrumbsData = [
    {name:"Home", link:'/'},
    {name:"Blog", link:'/blog'},
    {name:"Article title", link:'/blog/:id'},
];

const ArticleDetailPage = () => {
  return (
    <div>
      <MainLayout>
        <section className='container mx-auto flex flex-cols px-5 py-5'>
        <article className='flex-1'>
            <BreadCrumbs data={breadCrumbsData}/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatibus modi accusantium quasi minus harum sed illum assumenda ea molestias ad amet illo deserunt, commodi repellat quae. Sapiente, dignissimos maiores.
        </article>
        </section>
      </MainLayout>
    </div>
  )
}

export default ArticleDetailPage
