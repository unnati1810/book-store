import React from 'react'

function Login() {
  return (
    <div>
        <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
                <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg">Login</h3>
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
                    {/* Login Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not registered?{" "} <span className='underline text-blue-500 cursor-pointer'> SignUp</span>{" "}</p>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
  )
}

export default Login