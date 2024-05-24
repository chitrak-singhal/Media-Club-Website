import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <section className='bg-black'>
      <footer className='pt-5'>
        <div className=' h-5 text-white flex justify-center gap-x-5'>
          <div className=''>
          <FaInstagram className='text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </div>
          <div className=''>
          <CgMail className='text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </div>
          <div className=''>
          <FaFacebookSquare className=' text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </div>
          <div className=''>
          < FaXTwitter className='text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </div>
        </div>
        <div className='text-white flex gap-x-5 justify-center my-5'>
           <a>About us</a>
           <a>Contact us</a>
        </div>
        <div className='text-white flex justify-center pb-5'>
          <p className='text-xs'>Copyright @ The Media Club IIT BHU. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
