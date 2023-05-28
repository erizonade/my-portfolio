import React from 'react'

export default function About() {

  const listEducation = [
    {
      'campus' : 'UIN Raden Fatah Palembang',
      'major' : 'Sistem Informasi',
      'grade' : '3.58',
      'startYear' : '2015',
      'endYear' : '2019',

    },
    
  ]

  const listExperience = [
    {
      'company' : 'PT. Loko Sistem Terintegrasi',
      'position' : 'Web Developer',
      'startYear' : 'Okt 2021',
      'endYear' : 'Present',

    },
    {
      'company' : 'PT. Hedo Global Technology',
      'position' : 'Web Developer',      
      'startYear' : 'Mar 2020',
      'endYear' : 'Sep 2021',

    },
    {
      'company' : 'BPJS Ketenagakerjaan',
      'position' : 'Student Intern (Junior Web Developer)',      
      'startYear' : 'Jul 2018',
      'endYear' : 'Agu 2018',
    },
    {
      'company' : 'Freelance',
      'position' : 'Fullstack Developer',      
      'startYear' : 'Jan 2018',
      'endYear' : 'Present',
    },
    
  ]


  return (
    <div id='about' className='flex flex-col justify-center items-center w-full md:h-screen pt-20 px-2 md:px-0'>
      <div className='w-full h-full max-w-[1000px]'>
        <div className='flex flex-col md:py-10 py-5 '>
            <p className='text-2xl md:text-4xl text-[#1B9C85] font-mono font-bold'>ABOUT ME</p>
            <p>I have a passion as a Web Developer and have been in this profession for more than 1 year in the world of work.
              I&apos;m now focusing on the Laravel framework and focusing on learning the mobile framework Flutter.
              However, it is possible to continue to develop and learn new technologies as a programmer</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col'> 
              <p className='text-2xl md:text-3xl underline text-[#1B9C85]  font-mono font-bold'>Education</p>
              {
                listEducation.map((value, index) => (
                  <div key={index} className='flex flex-rows my-5'>
                      <div className='flex flex-col'>
                        <p className='text-md font-sans font-bold text-[#1B9C85]'>{value.startYear}</p>
                        <p className='text-md font-sans font-bold text-[#1B9C85]'>{value.endYear}</p>
                      </div>
                    
                      <div className='flex flex-col mx-5'>
                        <p className='text-xl font-sans font-bold'>{value.campus}</p>
                        <p className='text-xl font-light dark:text-slate-400 text-black'>{value.major} ({value.grade})</p>
                      </div>
                  </div>
                ))
              }
            </div>
            
            <div>
              <p className='text-2xl md:text-3xl underline text-[#1B9C85]  font-mono font-bold'>Experiences</p>
              {
                listExperience.map((value, index) => (
                  <div key={index} className='flex flex-rows my-5'>
                      <div className='flex flex-col'>
                        <p className='text-md font-sans font-bold text-[#1B9C85]'>{value.startYear}</p>
                        <p className='text-md font-sans font-bold text-[#1B9C85]'>{value.endYear}</p>
                      </div>
                    
                      <div className='flex flex-col mx-5'>
                        <p className='text-xl font-sans font-bold'>{value.company}</p>
                        <p className='text-xl font-light dark:text-slate-400 text-black'>{value.position}</p>
                      </div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  )
}
