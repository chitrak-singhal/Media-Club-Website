import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black'>
      <footer className=''>
        <div className='text-white flex justify-center'>
          For social flow
        </div>
        <div className='text-white flex gap-x-5 justify-center my-5'>
           <a>About us</a>
           <a>Contact us</a>
        </div>
        <div className='text-white flex justify-center'>
          <p className='text-xs'>Copyright @ The Media Club IIT BHU. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
