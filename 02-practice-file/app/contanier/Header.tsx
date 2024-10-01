import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between p-5 items-center bg-green-500 text-white'>
      <div>
        <h1 className='text-2xl'>Haseeb Ur Rehman</h1>
      </div>
        <div>
          <ul className='flex gap-2 cursor-pointer'>
            <li className='hover:text-red-400'><Link href="/home">Home</Link></li>
            <li className='hover:text-red-400'><Link href="/about">about</Link></li>
            <li className='hover:text-red-400'><Link href="/contact">contact</Link></li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Header
