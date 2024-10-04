import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const  handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout SuccessFully ")
            setTimeout(() => {
            
                document.getElementById("my_modal_3").close();
                window.location.reload();
               
                },700);
                
           
        } catch (error) {
            toast.error("Error"+error.message );
            setTimeout(() => {
            
            }, 700);
        }

    }
  return (
    <>
    <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
    onClick={handleLogout}
    
    >LogOut</button>
    
    </>
  )
}

export default Logout
