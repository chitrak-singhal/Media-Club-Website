import React from 'react'
import { images } from '/src/constants'
import Search from '../../../components/Search'
import { SparklesCore } from '../../../components/sparkles'

const Hero = () => {
  return (
    <section>
      <div className='flex relative pt-5 pb-8 bg-red-500 '>
        <div className="w-full absolute z-0 inset-0 h-full bg-black">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={95}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        </div>
      <div className=' z-10 w-[40%] flex justify-end items-center'>
        <img src={images.Logo2} alt="logo" className='h-[20rem] w-[20rem]'/>
        </div>
        <div className='z-10 w-[60%] text-white'>
            <h1 className='text-[3rem] font-bold'>The Media Club IIT BHU</h1>
            <p className='pr-[15rem] text-justify mt-1 mb-5'>The journalistic and creative faction of IIT BHU Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores nulla animi, modi magni, nesciunt eius adipisci sunt accusamus natus hic aliquam deserunt rerum beatae molestiae repellendus vel nisi eaque?</p>
            <button className=' text-white border-2 border-white px-6 pb-2 pt-1.5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300'>
                    Learn More
            </button>
            <Search></Search>
        </div>
      </div>
    </section>
  )
}

export default Hero
