import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigation = useNavigate()
    const [LoginDetails, setLoginDetails] = useState({})

    function updateUserDetails(e){
        setLoginDetails({
            ...LoginDetails,
            [e.target.name] : e.target.value
        })
    }


    async function handleLogin(event){
        event.preventDefault()
        // fetch post for login
        const resp = await fetch('/api/users/login', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(LoginDetails)
        })
        const data = await resp.json()
        if (data.status){
            navigation('/dashboard',{
                replace:true
            })
        }
    }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='p-4 border-[1px] border-gray-700 rounded'>
            <form onSubmit={handleLogin}>
                <div className='flex justify-center py-2'>
                    <h1 className='text-3xl'>Login</h1>
                </div>
                <div className='flex justify-center py-2'>
                    <input className='border-[1px] border-orange-500 outline-none p-1 rounded-xl' onChange={updateUserDetails} type="text" name="name" placeholder='Username' id="" />
                </div>
                <div className='flex justify-center py-2'>
                    <input className='border-[1px] border-orange-500 outline-none p-1 rounded-xl' onChange={updateUserDetails} type="password" name="password" placeholder='password' id="" />
                </div>
                <div className='flex justify-center py-2'>
                    <input className='bg-orange-200 hover:bg-orange-900 hover:text-white p-2 rounded-xl' type="submit" value="Login Here" />
                </div>
                <div className='flex justify-center'>
                    <p>or</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-blue-600 text-xs'><Link to='/signup'>Create New Account</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}
