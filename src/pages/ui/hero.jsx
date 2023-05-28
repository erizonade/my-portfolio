import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
      <div id='home' className="w-full h-screen flex justify-center items-center">
        <div className="md:flex flex w-full justify-evenly items-center p-10 md:p-0">
          <div className="columns-lg">
            <div className="flex flex-col ">
              <p className="text-3xl font-mono">Hello I&apos;m</p>
              <h2 className="text-4xl w-full md:text-7xl text-[#1B9C85]">Erizon Ade Pratama</h2>
              
              <h2 className="text-3xl md:text-5xl font-mono my-2 text-[#1B9C85] dark:text-slate-400">Web And Mobile Developer</h2>

              <p className="text-[14px] dark:text-slate-400 text-black">I have a passion as a Web Developer and have been in this profession for more than 1 year in the world of work. </p>
              <p className="text-[14px] dark:text-slate-400 text-black">I&apos;m now focusing on the Laravel framework and focusing on learning the mobile framework Flutter.</p>
              <p className="text-[14px] dark:text-slate-400 text-black">However, it is possible to continue to develop and learn new technologies as a programmer</p>
            </div>
            
            <a className="btn btn-outline btn-accent my-5 animate-pulse" href="#contact">Hire Me!</a>
          </div>

          <div className="avatar hidden md:block">
            <div className="mask mask-squircle md:w-80 lg:w-80  invisible md:invisible lg:visible hover:scale-105 duration-700">
              <Image
                  priority={true}
                  src="/assets/erizon.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
            </div>
          </div>

        </div>
      </div>
  )
}
