import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='p-5 fixed top-0 w-[100%] bg-[#044e83] flex justify-between items-center'>
                <div className='text-2xl absolute top-5 font-bold text-white'>
                    <img className='w-[60px]' src="	https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold ml-[100px] text-[#b9d8f3]'>
                        Tuition Free Education Program on Latest Technologies
                    </h1>
                </div>
                <div>
                    <ul className='flex gap-10 uppercase text-white'>
                        <li>home</li>
                        <li>apply</li>
                        <li>jobs</li>
                        <li>result</li>
                        <li>Courses</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
