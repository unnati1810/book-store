import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

  return (
    <div>
        <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
                <form  method="dialog" onSubmit={handleSubmit(onSubmit)} >
                <a href="/" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>

                <h3 class="font-bold text-lg">Login</h3>
                {/* Email */}
                <div className='mt-4 space-y-2 '>
                    <span>Email</span>
                    <br/>
                    <input type="email" 
                        placeholder="Enter your email" 
                        className='w-80 px-3 py-1 border rounded-md outline-none'
                        {...register("email", { required: true })}>                        
                    </input> <br/>
                    {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}                
                </div>

                {/* Password */}
                <div className='mt-4 space-y-2 '>
                    <span>Password</span>
                    <br/>
                    <input type="password" 
                        placeholder="Enter your password" 
                        className='w-80 px-3 py-1 border rounded-md outline-none'
                        {...register("password", { required: true })}>                        
                    </input>
                    <br/>
                    {errors.password && (<span className='text-sm text-red-500'>This field is required</span>)}                
                </div>

                <div>
                    {/* Login Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not registered?{" "}                       
                        <span className='underline text-blue-500 cursor-pointer'><Link to="/signup"> SignUp</Link></span>{" "}</p>
                    </div>
                </div>
                </form>
            </div>
        </dialog>
    </div>
  )
}

export default Login


