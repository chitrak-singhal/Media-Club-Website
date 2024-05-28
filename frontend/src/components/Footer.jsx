import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <section className='bg-black'>
      <footer className='pt-5'>
        <div className=' h-5 text-white flex justify-center gap-x-5'>
          <div className=''>
            <a href="https://www.instagram.com/mediaclub.iitbhu/">
          <FaInstagram className='text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </a>
          </div>
          <div className=''>
          <a href="mailto:mediaclub.iitbhu@gmail.com">
          <CgMail className='text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </a>
          </div>
          <div className=''>
          <a href="https://www.facebook.com/MediaClub.IITBHU/">
          <FaFacebookSquare className=' text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </a>
          </div>
          <div className=''>
          <a href="https://x.com/mediaclubiitbhu">
          < FaXTwitter className='text-2xl hover:text-3xl transition-all duration-300 cursor-pointer'/>
          </a>
          </div>
        </div>
        <div className='text-white flex gap-x-5 justify-center my-5'>
           <Link to='/about'>About us</Link>
           <a href="mailto:mediaclub.iitbhu@gmail.com">Contact us</a>
        </div>
        <div className='text-white flex justify-center pb-5'>
          <p className='text-xs'>Copyright @ The Media Club IIT BHU. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
