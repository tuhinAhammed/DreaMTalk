import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ResetPassword = () => {
    const auth = getAuth();
    const  SignIn = <Link to={"/registration"}>SignUp</Link>
    const  [resetLinkSend , setResetLinkSend] = useState("")
    const [email , setEmail] = useState('')
    const [userNotFound , setUserNotFound] = useState("")

    const resetPassword = () =>{
        sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('ok')
      setResetLinkSend(`We sent you a reset link to your Email. Please check your email inbox.`)
      setUserNotFound('')
      
    })
    .catch((error) => {
      console.log(error.code)
      if (error.code.includes("auth/invalid-email")){
        setUserNotFound("No Accout Found With This Email Address , Please" + SignIn  )
        setResetLinkSend("")
      }
      
    });
    }

    
    const emailHandle = (e) =>{
      setEmail(e.target.value)
    }
  return (
    <>
      <div className="resetPassword w-full bg-[#5F35F5] h-[800px] py-[150px]">
          <div className="innerResetPassword w-[450px] bg-[#fff] m-auto px-[60px] py-[60px] rounded-md">
            <div className="resetPasswordContent m-auto text-center">
              <p className='text-2xl text-semibold'>Forgot Password</p>
              <div className="relative mt-[40px] mb-[20px] ">
                <input onChange={emailHandle} type="email" placeholder='Enter Your Email' className="w-[300px] py-[15px] px-[25px] border-2 border-[#808080] rounded-[10px]" />
                <p className='w-[136px]  px-[10px] absolute top-[-10px] left-[40px] bg-[#5F35F5] rounded-md text-sm text-[#fff]  z-50 text-center'>Email Address</p>
                {
                  userNotFound && 
                  <h6 className='text-[red] mt-4 text-sm '>{userNotFound}</h6>
                }
                {
                  resetLinkSend && 
                  <h6 className='text-[green] mt-4 text-sm '>{resetLinkSend}</h6>
                }
              </div>
              <div className="btnList flex justify-center">
                <button onClick={resetPassword} className='py-[8px] px-[20px] bg-[#5F35F5] text-[#fff] active:bg-[#051dad] rounded-md'>Reset</button>
                <button className='py-[8px] px-[20px] bg-[#5F35F5] text-[#fff] active:bg-[#051dad] rounded-md ml-4'><Link to={"/login"}>Back To Login</Link></button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

