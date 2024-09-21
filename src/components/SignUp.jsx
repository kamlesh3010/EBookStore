import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex h-screen items-center justify-center'>
      <div id="my_modal_3" className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button for the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Sign-Up</h3>

            <div className='mt-4 space-y-2'>
              <span>Name :</span>
              <br />
              <input
                type="text"
                placeholder='Enter Your Name'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Email :</span>
              <br />
              <input
                type="email"
                placeholder='Enter Your Email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password :</span>
              <br />
              <input
                type="password"
                placeholder='Enter Your password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>

            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Register</button>
            </div>
            
            <p className="mt-4">Already Have an Account?  
              <Link to="/" className='underline text-blue-500 cursor-pointer'> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
