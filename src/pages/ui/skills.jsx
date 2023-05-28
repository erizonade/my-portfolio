import Image from 'next/image';
import React, { Suspense } from 'react'

export default function Skills() {


    const listSkillSummary = [
        {
          'icon'  : 'assets/skills/php.png',
          'title' : 'PHP'
        },
        {
          'icon'  : 'assets/skills/laravel.png',
          'title' : 'LARAVEL'
        },
        {
          'icon'  : 'assets/skills/dart.png',
          'title' : 'DART'
        },
        {
          'icon'  : 'assets/skills/flutter.png',
          'title' : 'FLUTTER'
        },
        {
          'icon'  : 'assets/skills/jquery.png',
          'title' : 'JQUERY'
        },
        {
          'icon'  : 'assets/skills/mysql.png',
          'title' : 'MYSQL'
        },
        {
          'icon'  : 'assets/skills/sqlserver.png',
          'title' : 'SQL SERVER'
        },
        {
          'icon'  : 'assets/skills/javascript.png',
          'title' : 'JAVASCRIPT'
        },
        {
          'icon'  : 'assets/skills/bootstrap.png',
          'title' : 'BOOTSTRAP'
        },
    
      ];
    

  return (
    <div id="skills" className="w-full md:h-screen pt-20 md:pt-0">
         <div className="flex flex-col justify-center w-full h-full mx-auto p-4 max-w-[1000px]">
            <div className="flex flex-col md:py-10 py-2">
              <p className="text-2xl md:text-4xl text-[#1B9C85]  font-mono font-bold">SKILL SUMMARY AND TOOLS</p>
              <p>This is the technology I use to do work</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-5 text-center md:px-0 px-0 py-4">
              {
                listSkillSummary.map((item, index) => (
                  <div key={index} className="dark:bg-slate-700 bg-white rounded-lg flex flex-col justify-between shadow-md shadow-gray-500/50 
                                  transition  hover:scale-105 duration-700 delay-75">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Image width={500}
                            height={500}
                            src={item.icon} alt="Skills" className="mx-auto object-contain h-32 w-64 my-4" />
                    </Suspense>
                    <p className="my-2 dark:text-white text-black">{item.title}</p>
                  </div>
                ))
              }

            </div>
         </div>
    </div>
  )
}
