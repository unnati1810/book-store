import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form"

function ContactUs() {

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const onSubmit = (data) => console.log(data);

  return (
    <>
       <Navbar/>
       <div>         
            <div className='flex h-screen items-center justify-center'>
              <div class="w-[600px]">
                  <div >
                      <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                      <h1 class="font-bold text-4xl"> Contact Us</h1>
                          {/* Name */}
                          <div className='mt-8 space-y-2 '>
                              <span>Name</span>
                              <br />
                              <input type="text"
                                  placeholder="Enter your full name"
                                  className='w-96 px-3 py-1 border rounded-md outline-none'
                                  {...register("name", { required: true })}>                                 
                              </input><br/>
                              {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}   
                          </div>

                          {/* Email */}
                          <div className='mt-4 space-y-2 '>
                              <span>Email</span>
                              <br />
                              <input type="email"
                                  placeholder="Enter your email"
                                  className='w-96 px-3 py-1 border rounded-md outline-none'
                                  {...register("email", { required: true })}
                                  >
                                  
                              </input><br/>
                              {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}   
                          </div>

                          {/* Message */}
                          <div className='mt-4 space-y-2 '>
                              <span>Message</span>
                              <br />                         
                              <textarea placeholder="Type the message" name="message" rows="7" cols="200" 
                              className='w-96 px-3 py-1 border rounded-md outline-none'
                              {...register("message", { required: true })}
                              >
                              </textarea>
                                  
                              <br/>
                              {errors.message && (<span className='text-sm text-red-500'>This field is required</span>)}   
                          </div>

                          <div>
                              {/* Submit Button */}
                              <div className='justify-around mt-4'>
                                  <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>                                  
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
       </div>        
    </>
  )
}

export default ContactUs
