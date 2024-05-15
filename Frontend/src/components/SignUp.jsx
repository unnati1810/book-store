import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'

function SignUp() {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div class="w-[600px]">
            <div class="modal-box">
                <form method="dialog">
                    <Link to="/" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                </form>

                <h3 class="font-bold text-lg">Sign Up</h3>
                {/* Name */}
                <div className='mt-4 space-y-2 '>
                    <span>Name</span>
                    <br/>
                    <input type="text" 
                        placeholder="Enter your full name" 
                        className='w-80 px-3 py-1 border rounded-md outline-none'>                        
                    </input>                  
                </div>

                
                {/* Email */}
                <div className='mt-4 space-y-2 '>
                    <span>Email</span>
                    <br/>
                    <input type="email" 
                        placeholder="Enter your email" 
                        className='w-80 px-3 py-1 border rounded-md outline-none'>                        
                    </input>                  
                </div>

                {/* Password */}
                <div className='mt-4 space-y-2 '>
                    <span>Password</span>
                    <br/>
                    <input type="text" 
                        placeholder="Enter your password" 
                        className='w-80 px-3 py-1 border rounded-md outline-none'>                        
                    </input>                  
                </div>

                <div>
                    {/* SignUp Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign Up</button>
                        <p className='text-xl'>Have account ?{" "}                      
                        <button className='underline text-blue-500 cursor-pointer' 
                        onClick={()=> document.getElementById("my_modal_3").showModal()}> Login </button>{" "}
                        <Login/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
