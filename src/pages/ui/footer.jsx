import Image from 'next/image'
import React from 'react'

export default function Footer() {
  const listSosmed = [
    {
      'name': 'Github',
      'link': 'https://github.com/erizonade',
      'icon' : '/assets/icon/github.png'
    },
    {
      'name': 'LinkedIn',
      'link': 'https://www.linkedin.com/in/erizon-ade-pratama',
      'icon' : '/assets/icon/linkedinn.png'
    },
    {
      'name': 'Email',
      'link': 'https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=erizonsmart88@gmail.com',
      'icon' : '/assets/icon/email.png'
    },
  ]
  return (
    <div id='contact' className='flex flex-col w-full pt-20'>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            {
              listSosmed.map((item, index) => (
                <a key={index} target='_blank' className='border border-slate-600 rounded-full p-2 hover:bg-white transition-all hover:scale-125 duration-300 delay-150' href={item.link} title={item.title}>
                    <Image 
                      src={item.icon}
                      width={30}
                      height={30}
                      alt='footer'
                    />
                </a> 
              ))
            }
          </div>
        </div> 
        <div>
          <p>Copyright © 2023 - All right reserved by Erizon Ade Pratama</p>
        </div>
      </footer>
    </div>
  )
}
