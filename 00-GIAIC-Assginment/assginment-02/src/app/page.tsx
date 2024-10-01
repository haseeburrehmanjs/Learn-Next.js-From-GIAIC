import Image from 'next/image'
import React from 'react'
import Navbar from './navbar/Navbar'
import Header from './header/Header'

const page = () => {
  return (
    <>
        <Navbar />
        <div className='container mx-auto mt-[100px]'>
          <Header />
        </div>
    </>
  )
}

export default page
