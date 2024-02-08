import React from 'react'

export default function Navbar({setSearch}) {
  return (
    <div className='flex justify-between py-3 px-20 border-b-[1px] border-gray-500'>
        <div>
            <h1 className='text-3xl text-orange-500' >Movies.com</h1>
        </div>
        <div></div>
        <div>
            <input className='border-orange-500 outline-none p-1 px-3 border-[1px] rounded-xl' type="text" name="search" onChange={(e)=>setSearch(e.target.value)} placeholder='Search'/>
        </div>
    </div>
  )
}
