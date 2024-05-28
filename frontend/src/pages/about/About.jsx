import React from 'react'
import { images } from '../../constants'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'

const teamData=[
    {
        name:"Chitrak",
        designation:"Senior Advisor",
        description:"Seedha saadha bacha",
        img:images.team1,
    },
    {
        name:"Vaibhav",
        designation:"Senior Advisor",
        description:"Lord vaibhav, kau kau kau 🐦‍⬛",
        img:images.team2,
    },
    {
        name:"Suhani",
        designation:"Senior Advisor",
        description:"Evil reincarnated",
        img:images.team3,
    },
]

const breadCrumbsData = [
    {name:"Home", link:'/'},
    {name:"About us", link:'/about'},
]; //temporary

const About = () => {
  return (
    <MainLayout>
    <div className="pt-5 pb-20">
    <div className="xl:container mx-auto px-6 md:px-12">
      <div className="mb-16 md:w-2/3 lg:w-1/2">
      <BreadCrumbs data={breadCrumbsData}/>
        <h1 className='text-[3rem] font-bold'>Our Team</h1>
      </div>
      <div className="grid gap-7 px-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {teamData.map(item=>{
            return (<div key={item.name}className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={item.img}
                alt="team member"
                loading="lazy"
                width="640"
                height="805"
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">{item.name}</h4>
                <span className="block text-sm text-gray-500">{item.designation}</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600 min-h-[4rem]">{item.description}</p>
            </div>
            
            </div>
        )
        })}
      </div>
    </div>
  </div>
  </MainLayout>                              
  )
}

export default About
