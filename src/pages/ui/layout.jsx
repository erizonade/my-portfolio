import Image from 'next/image'
import React, { useState } from 'react'

export default function Layout({ children }) {
    const [isLoding, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000)

  return (
    isLoding ? <div className={`fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center transition animate-pulse duration-75 delay-duration-75 `}>
        <p className='text-5xl'>Loading.....</p>
    </div>
    : <div className={`trasition-all`}>{children}</div>
  )
}
