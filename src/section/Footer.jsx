import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>    
        </div>  
        <div className="flex gap-3">
            <a className='social-icon' href='https://github.com/Jeniya14'  target='_blank' rel='noreferrer'>
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
            <a className='social-icon' href='https://www.linkedin.com/in/jeniyaselvam/'  target='_blank' rel='noreferrer'>
                    <img src="/assets/lin.png" alt="Linkedin" className="w-1/2 h-1/2" />
            </a>
        </div>
        <p className='text-white-500'>© 2024 Jeniya. All rights reserved. </p>
    </section>
  )
}

export default Footer