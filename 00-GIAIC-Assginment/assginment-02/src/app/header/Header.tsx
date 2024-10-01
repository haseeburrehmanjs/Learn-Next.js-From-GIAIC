import React from 'react'

const Header = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <div>
          <p className='text-[80px] text-[#044e83] font-bold'>
            Governor Sindh
          </p>
          <p className='text-[60px] text-[#044e83]'>Kamran Khan Tessori
          </p>
          </div>
          <p className='text-blue-400 text-4xl'>
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </p>
        </div>
        <div className='w-[600px] bg-transparent'>
          <img src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Header
