import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-evenly py-3 gap-96 border-b-[1px] border-gray-500'>
        <div>
            <h1 className='text-3xl text-orange-500' >Movies.com</h1>
        </div>
        <div></div>
        <div>
            <input className='border-orange-500 outline-none p-1 px-3 border-[1px] rounded-xl' type="text" name="search" placeholder='Search'/>
        </div>
    </div>
  )
}
