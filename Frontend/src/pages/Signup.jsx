import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {

    const [SignUpDetails, setSignUpDetails] = useState({})

    function UpdateSignUpDetails(e){
        setSignUpDetails({
            ...SignUpDetails,
            [e.target.name] : e.target.value
        })
    }


    function handleSignup(e){
        e.preventDefault()
        // Api to add user
    }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='p-5 border-[1px] border-gray-500 rounded-lg'>
            <form onSubmit={handleSignup}>
                <div className=' py-1 flex justify-center'>
                    <h1>Create New Account</h1>
                </div>
                <div className='py-1 flex justify-center'>
                    <input className='outline-none border-[1px] border-orange-400 rounded-xl p-1' onChange={UpdateSignUpDetails} type="text" name="user_name" placeholder='Username' />
                </div>
                <div className='py-1 flex justify-center'>
                    <input className='outline-none border-[1px] border-orange-400 rounded-xl p-1' onChange={UpdateSignUpDetails} type="email" name="user_email" placeholder='Email' />
                </div>
                <div className='py-1 flex justify-center'>
                    <input className='outline-none border-[1px] border-orange-400 rounded-xl p-1' onChange={UpdateSignUpDetails} type="password" name='user_password' placeholder='Password'/>
                </div>
                <div className='py-1 flex justify-center'>
                    <input className='bg-orange-200 hover:bg-orange-500 hover:text-white p-2 rounded-xl delay-150' type="submit" value="SignUp" />
                </div>
                <div className='py-1 flex justify-center'>
                    <p>or</p>
                </div>
                <div className='py-1'>
                    <p className='text-xs text-blue-600'><Link to='/'>{"<<"}Back to login</Link></p>
                </div>
                
            </form>
        </div>

    </div>
  )
}
