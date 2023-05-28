import Image from 'next/image'
import React, {useState, useEffect, Suspense} from 'react'

export default function Portfolio() {
  const listPortfolio = [
    {
        'images' : 'assets/portfolio/dibajol.png',
        'title'  : 'Dibajol',
        'description' : 'The Dibajolbae application is an online shopping application for market and retail goods in the city of Palembang. My role here is fullstack admin',
        'url'  : '',
        'type' : 1,
        'id' : 1
    },
    {
        'images' : 'assets/portfolio/digital.png',
        'title'  : 'Digital Printing',
        'description' : 'Websites that provide printing services for banners, posters, XBanners, etc. that are used for consumers. my role here is to configure save to Gdrive from consumer uploads, login funds, and the direction for making this application.',
        'url' : '',
        'type' : 1,
        'id' : 2
    },
    {
        'images' : 'assets/portfolio/pasardhd.png',
        'title'  : 'Pasar Online',
        'description' : 'Pasardhd application as an online shopping application for market and retail goods in the city of Palembang. My role here is fullstack in several admins',
        'url' : '',
        'type' : 1,
        'id' : 3
    },
    {
        'images' : 'assets/portfolio/profile_si.png',
        'title'  : 'Web Prodi Sistem Informasi',
        'description' : 'This website is a portal of the information systems study program from the science and technology faculty of UIN Raden Fatah Palembang to provide information to students and the public. My role here is as a full stack web developer.',
        'url' : '',
        'type' : 1,
        'id' : 4
    },
    {
        'images' : 'assets/portfolio/seminar.png',
        'title'  : 'LKPK Masterpreneur',
        'description' : 'Is a website that provides online and offline seminar services intended for the general public. My role here is fullstack admin and web portal backend',
        'url' : '',
        'type' : 1,
        'id' : 5
    },
    {
        'images' : 'assets/portfolio/sbsplg.png',
        'title'  : 'PT. Semangat Baru Sejahtera',
        'description' : 'Web created for company profiles engaged in spare parts and oil. My role here is fullstack admin',
        'url' : '',
        'type' : 1,
        'id' : 6
    },
    {
        'images' : 'assets/portfolio/sisfo_campus.png',
        'title'  : 'Sisfo Campus',
        'description' : 'Web created for company profiles engaged in spare parts and oil. My role here is fullstack admin',
        'url' : '',
        'type' : 1,
        'id' : 7
    },
    {
        'images' : 'assets/portfolio/diary_monitoring.png',
        'title'  : 'Diary Monitoring',
        'description' : 'Application used to monitor the daily life of diabetes patients by using an alarm for reminders. this app is build with flutter my fullstack role',
        'url' : '',
        'type' : 2,
        'id' : 8
    },
    {
        'images' : 'assets/portfolio/resepmasak.png',
        'title'  : 'Resep Masakan',
        'description' : 'Application that is used for housewives and others so that they can get recipes for traditional and international dishes more quickly. app made with flutter',
        'url' : 'https://github.com/erizonade/resep-masak-bunda',
        'type' : 2,
        'id' : 9
    },
    {
        'images' : 'assets/portfolio/emuslim.png',
        'title'  : "Muslim Qur'an",
        'description' : "This application was made to make it easier for all Muslims to read the Al-Qur&apos;an anywhere and prayer schedules and there are prayers. However, this application is not finished, it is still in the development stage, when the application can only be used internally",
        'url' : '',
        'type' : 2,
        'id' : 10
    },
  ]

  const [portfolio, setPortfolio] = useState(listPortfolio.filter(item => item.type === 1))
  const [detailPortfolio, setDetailPortfolio] = useState([])
  const [isActive, setActive] = useState(1)
  const [isShow, setShow] = useState(false)

  const handleTabPortfolio = (type) => {
    setPortfolio(listPortfolio.filter(item => item.type === type))
    setActive(type)
  }

  const handleShowPortfolio = (id) => {
    let newPortfolio = listPortfolio.filter((v, i) => v.id === id)
    setDetailPortfolio(newPortfolio)
    setShow(true)
  }

  return (
      <div id='portfolio' className={`w-full pt-20 md:pt-0 ${portfolio.length > 5 ? '' : 'md:h-screen'}`}>
        <div className="flex flex-col justify-center item-center mx-auto p-4 h-full w-full max-w-7xl">
            
            <div className='flex flex-col md:pt-20 py-5'>
                <p className='text-2xl md:text-4xl text-[#1B9C85]  font-mono font-bold'>PORTFOLIO</p>
                <p>Here is a project I&apos;ve worked on</p>
            </div>
            
            <div className="tabs mb-3">
                <a className={`tab tab-bordered  text-2xl ${isActive == 1 ? 'tab-active text-black dark:text-white' : ''}`}  onClick={() => handleTabPortfolio(1)}>Web</a> 
                <a className={`tab tab-bordered  text-2xl ${isActive == 2 ? 'tab-active text-black dark:text-white' : ''}`} onClick={() => handleTabPortfolio(2)}>Mobile</a> 
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${isActive ? '' : ''}`}>
                {
                    portfolio.map((value, index) => (
                        <div key={index} onClick={() => handleShowPortfolio(value.id)} className='dark:bg-base-100 bg-white rounded-lg flex flex-col shadow-md shadow-gray-500/50 transition hover:scale-105 duration-700 delay-75 ease-in-out  cursor-pointer'>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Image src={value.images} 
                                    alt="Portfolio Image" 
                                    width={500}
                                    height={500}
                                    className="overflow-hidden rounded-md shadow-md w-full p-2" />

                            </Suspense>
                            
                            <div className='flex flex-col /* px-5 my-2 */'>
                                <p className='my-2 font-bold font-mono underline '>{value.title} </p>
                                <p className='text-base font-mono'>{value.description}</p>
                                
                                {value.url === '' ? '' : <a href={value.url} className='btn btn-outline my-2'>Browser</a>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div id='modalPortfolio' className={` ${isShow ? 'w-full h-screen transition-all duration-700 delay-150 top-0 left-0' : 'invisible w-0 h-0 top-80 left-1/2'} flex justify-center items-center fixed bg-black/80  z-50`}>
            <div>
            <a className="fixed right-8 top-8 font-bold text-5xl text-white z-50 cursor-pointer" onClick={() => setShow(false)}>&times;</a>
                
                {
                    detailPortfolio.map((value, index) => (
                        <div key={index}  className={`flex flex-col justify-center items-center ${isShow ? 'h-full w-full transition-all duration-300 delay-75' : 'h-0 w-0'} mx-auto max-w-[1000px]`}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Image src={value.images} 
                                        alt="Portfolio Baru" 
                                        width={500}
                                        height={500}
                                        className="rounded-md w-8/12" />
    
                                    <div className='flex flex-col /* px-5 my-2 */'>
                                        <p className='my-2 font-bold font-mono underline '>{value.title} </p>
                                        <p className='text-base font-mono'>{value.description}</p>
                                        
                                        {value.url === '' ? '' : <a href={value.url} className='btn btn-outline my-2'>Browser</a>}
                                    </div>
                                </Suspense>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
