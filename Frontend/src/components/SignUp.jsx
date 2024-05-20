import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


function SignUp() {

    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Signup is Successful');;
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    navigate(from , {replace:true});
                
                }

            }).catch((err) => {
                if(err.response){
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }            
            })
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div class="w-[600px]">
                <div class="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 class="font-bold text-lg">Sign Up</h3>
                        {/* Name */}
                        <div className='mt-4 space-y-2 '>
                            <span>Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your full name"
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("fullname", { required: true })}>

                            </input><br />
                            {errors.fullname && (<span className='text-sm text-red-500'>This field is required</span>)}
                        </div>

                        {/* Email */}
                        <div className='mt-4 space-y-2 '>
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your email"
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            >

                            </input><br />
                            {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2 '>
                            <span>Password</span>
                            <br />
                            <input type="password"
                                placeholder="Enter your password"
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            >

                            </input><br />
                            {errors.password && (<span className='text-sm text-red-500'>This field is required</span>)}
                        </div>

                        <div>
                            {/* SignUp Button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign Up</button>
                                <p className='text-xl'>Have account ?{" "}
                                    <button className='underline text-blue-500 cursor-pointer'
                                        onClick={() => document.getElementById("my_modal_3").showModal()}> Login </button>{" "}
                                    <Login /></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
