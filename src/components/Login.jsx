import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider'; // Import the useAuth hook

function Login() {
  const [authUser, setAuthUser] = useAuth(); // Get authUser and setAuthUser from useAuth

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post('http://localhost:4001/user/login', userInfo)
      .then((res) => {
        console.log(data);
        if (res.data) {
          toast.success('Successfully Logged In!');
          setTimeout(() => {
            
          document.getElementById("my_modal_3").close();
          window.location.reload();
          localStorage.setItem('Users', JSON.stringify(res.data.user));
          },700);
          
        }
        setAuthUser(res.data); // Update authUser with the logged-in user's info
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error('Error: ' + err.response.data.message);
          setTimeout(() => {
            
          }, 700);
        }
      });
  };

  const closeModal = () => {
    document.getElementById('my_modal_3').close(); // Close the dialog when clicking X
  };

  return (
    <div>
      {authUser ? (
        <Logout />
      ) : (
        <button
          className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
          onClick={() => document.getElementById('my_modal_3').showModal()}
        >
          Login
        </button>
      )}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal} // Call the closeModal function
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email :</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password :</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('password', { required: true })}
              />
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Create New Register{' '}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Sign-up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
