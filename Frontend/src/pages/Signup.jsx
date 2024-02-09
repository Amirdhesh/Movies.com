import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Signup = () => {

    const [SignUpDetails, setSignUpDetails] = useState({})
const navigation = useNavigate()
    function UpdateSignUpDetails(e){
        setSignUpDetails({
            ...SignUpDetails,
            [e.target.name] : e.target.value
        })
    }


    async function handleSignup(e){
        e.preventDefault()
        console.log(SignUpDetails)
        const resp = await fetch('/api/users/register', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(SignUpDetails)
        })
        const data = await resp.json()
        if (data.status){
            navigation('/dashboard',{
                replace:true
            })
        } else{
            alert("User Alread Exist")
        }
    }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='p-5 border-[1px] border-gray-500 rounded-lg'>
            <form onSubmit={handleSignup}>
                <div className=' py-1 flex justify-center'>
                    <h1>Create New Account</h1>
                </div>
                <div className='py-1 flex justify-center'>
                    <input className='outline-none border-[1px] border-orange-400 rounded-xl p-1' onChange={UpdateSignUpDetails} type="text" name="name" placeholder='Username' />
                </div>
                <div className='py-1 flex justify-center'>
                    <input className='outline-none border-[1px] border-orange-400 rounded-xl p-1' onChange={UpdateSignUpDetails} type="email" name="email" placeholder='Email' />
                </div>
                <div className='py-1 flex justify-center'>
                    <input className='outline-none border-[1px] border-orange-400 rounded-xl p-1' onChange={UpdateSignUpDetails} type="password" name='password' placeholder='Password'/>
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
