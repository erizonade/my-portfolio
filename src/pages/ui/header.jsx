import React, { useEffect, useState } from 'react'

export default function Header() {

  const [isShowMenu, setShowMenu] = useState(1);

  const handleShowMenu = () => {
    setShowMenu(!isShowMenu);
  }

  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {

    const theme = localStorage.getItem('theme');
    if (theme == '' || theme == null || theme == undefined) localStorage.setItem('theme', 'dark');
    setIsDarkMode(theme === 'dark');

  }, []);

  const toggleDarkMode = () => {
    console.info(isDarkMode)
    const newTheme = isDarkMode ? 'light' : 'dark';
    
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    // // Tambahkan perubahan tema pada elemen <html> menggunakan class
    document.documentElement.classList.remove(!isDarkMode ? 'light' : 'dark');
    
    document.documentElement.classList.add(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="navbar dark:bg-base-100 bg-white border dark:border-none fixed z-50">
      <div className="flex-1">
        <a href='#home' className="btn btn-ghost normal-case text-xl font-mono">EAP</a>
      </div>
      <div className="flex-none">
        <div className='lg:hidden'>
          
          <button onClick={handleShowMenu}>
            {isShowMenu ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>} 
          </button>

        </div>
        <nav className={`absolute ${isShowMenu ? 'hidden' : ''} lg:static lg:block right-0 bg-black lg:bg-transparent py-5 lg:py-0 top-full w-full rounded-lg max-w-[300px] lg:max-w-full shadow-lg lg:shadow-none dark:shadow-slate-200`}>
          <ul className="justify-center items-center px-1 lg:py-0 block lg:flex ">
            <li className='my-5 lg:my-0'><a className='mx-8 hover:text-accent-focus' href="#home">Home</a></li>
            <li className='my-5 lg:my-0'><a className='mx-8 hover:text-accent-focus' href="#about">About</a></li>
            <li className='my-5 lg:my-0'><a className='mx-8 hover:text-accent-focus' href="#skills">Skills</a></li>
            <li className='my-5 lg:my-0'><a className='mx-8 hover:text-accent-focus' href="#portfolio">Portfolio</a></li>
            <li className='my-5 lg:my-0'><a className='mx-8 hover:text-accent-focus' href="#contact">Contact</a></li>
            <li>
              <button className='btn dark:btn-info  ml-8 md:ml-0 mt-2' onClick={toggleDarkMode}>
                  {
                    isDarkMode ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="group-hover:text-slate-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path></svg>
                    :
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="group-hover:text-slate-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg> 
                  }
                  
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
