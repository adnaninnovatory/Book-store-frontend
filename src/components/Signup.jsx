import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm()
  const onSubmit = (data) =>{ 
    console.log(data)
    
    reset()
  }
  return (
    <div className='max-w-screen-2xl mx-auto px-4 min-h-screen flex justify-center items-center'>
          <div id="my_modal_3">
        <div className="modal-box dark:bg-slate-900 dark:border w-[398px]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">SignUp</h3>
          <div >
            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2 dark:text-white dark:bg-slate-900 dark:border-2 dark:border-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" {...register("username", { required: true })}/>
            </label>
            <div className='-mt-2'>{errors.username && <span className='text-red-600 text-sm'>This field is required</span>}</div>
            <label className="input input-bordered flex items-center gap-2 dark:text-white dark:bg-slate-900 dark:border-2 dark:border-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow"   placeholder="Password" {...register("password", { required: true })}/>
            </label>
            <div className='-mt-2'>{errors.password && <span className='text-red-600 text-sm'>This field is required</span>}</div>
            <label className="input input-bordered flex items-center gap-2 dark:text-white dark:bg-slate-900 dark:border-2 dark:border-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow"   placeholder="Confirm Password" {...register("cpassword", { required: true })}/>
            </label>
            <div className='-mt-2'>{errors.cpassword && <span className='text-red-600 text-sm'>This field is required</span>}</div>
            <button className="py-2 px-3 bg-pink-500 text-white rounded-md" type="submit">SignUp</button>
            {/* <p>Already have an account? <Link className="text-blue-500 underline" onClick={()=> document.getElementById("my_modal_3").showModal()}>Signup</Link></p>
            <Login/> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
