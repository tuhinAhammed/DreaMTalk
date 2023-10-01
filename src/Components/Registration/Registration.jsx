import React from 'react'
import { RiEyeOffFill } from '@react-icons/all-files/ri/RiEyeOffFill'
import { RiEyeFill } from '@react-icons/all-files/ri/RiEyeFill'
import react, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {FcGoogle} from '@react-icons/all-files/fc/FcGoogle'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Registration = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [emailerr, setEmailerr] = useState('')
    const [fullNameerr, setFullNameerr] = useState('')
    const [passworderr, setPassworderr] = useState('')
    const [passwordShow, setPasswordShow] = useState(false)
    const [regSuccess , setRegSuccess] = useState('')


    const googleHandle = () =>{
        console.log("all is well")
        signInWithPopup(auth, provider)
  .then(() => {
    setTimeout(() =>{
        navigate("/")
    },3000)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
  });

    }
    const emailHandle = (e) => {
        setEmail(e.target.value)
        setEmailerr('')
    }
    const nameHandle = (e) => {
        setFullName(e.target.value)
        setFullNameerr('')
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value)
        setPassworderr('')
    }
    const submitHandle = (e) => {
        if (!email) {
            setEmailerr("please Enter Your Email")
        }
        else {
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                setEmailerr("Enter Valid Email")
            }
        }
        if (!fullName) {
            setFullNameerr("Please Enter Your Full Name")
        }
        if (!password) {
            setPassworderr("Enter Your Password")
        }
        else {
            if (!/^[A-Za-z\d]{4,}/.test(password)) {
                setPassworderr("Should be  eight characters:")
            }
            else if (!/^(?=.*\d)/.test(password)) {
                setPassworderr("Give One Number:")
            }
            else if (!/^(?=.*[A-Za-z])/.test(password)) {
                setPassworderr("Give One string:")
            }
        }
        if (email && password && (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) && (/^[A-Za-z\d]{4,}/.test(password)) && (/^(?=.*\d)/.test(password)) && (/^(?=.*[A-Za-z])/.test(password)) ){
            createUserWithEmailAndPassword(auth, email, password).then(() =>{
                sendEmailVerification(auth.currentUser)
                .then(() => {
                        toast.success('Registration Done , a Varification Link has been sent to your email account. Please check & Varify Your Email');
                        setEmail('')
                        setFullName('')
                        setPassword('')
                        setTimeout(() => {
                        navigate('/login')
                        }, 3000)
                    });

            }).catch((error) => {
                if(error.code.includes('auth/email-already-in-use')){
                    setEmailerr('This Email Already Used')
                }

              });
        }
    }
    return (
        <>
            <div className="Registration-part w-full bg-[url('/images/bg-reg.png')] cover h-screen bg-no-repeat bg-top-center bg-cover py-[80px]">
                <div className="max-w-container ">
                <ToastContainer position="top-center" theme="colored" osition="top-right" autoClose={6000}  />
                    <div className=" inner-reg justify-between  md:flex ">
                        <div className="left-part pt-[30px ] md:pt-[100px] md:pl-[200px]">
                            <h2 className='font-bold  font-Nunito text-[#11175D]  text-[#5F35F5] text-[36px] md:text-[50px] '>Get started with easily register</h2>
                            <p className='text-2xl mt-4 text-[#0000008f] font-Nunito '>Free register and you can enjoy it</p>

                        </div>
                        <div className="right-part  m-right ">
                            <div className="w-[350px] reg-form bg-[#5F35F5]  px-[25px]  pt-[35px] pb-[20px] m-auto md:m-default rounded-md font-Nunito">
                                <img src="./images/logo.png" alt="" className='w-[70%] m-auto pb-2' />
                                {
                                    regSuccess &&
                                    <h5 className='w-full  px-[10px] text-[14px]  rounded-md text-sm text-[#fff] capitalize bg-[#00aa00] m-auto mt-[5px] text-center'>{regSuccess}</h5>
                                }
                                <div className=' relative mt-[25px]'>
                                    <input onChange={emailHandle} value={email} type="email" placeholder='Enter Your Email' className='w-[300px] py-[15px] px-[25px] border-2 border-[#808080] rounded-[10px]' />
                                    <p className='w-[136px]  px-[10px] absolute top-[-10px] left-[40px] bg-[#5F35F5] rounded-md text-sm text-[#fff]  z-50 text-center'>Email Address</p>
                                    {
                                        emailerr &&
                                        <h6 className='w-[240px]  px-[10px] absolute top-[-10px] left-[30px]  bg-[red] rounded-md text-sm text-[#fff] capitalize  z-50 text-center'>{emailerr}</h6>
                                    }
                                    
                                </div>
                                <div className='relative mt-[35px]'>
                                    <input onChange={nameHandle} value={fullName} type="text" placeholder='Enter Your Full name' className='w-[300px] py-[15px] px-[25px] border-2 border-[#808080] rounded-[10px]' />
                                    <p className='w-[136px]  px-[10px] absolute top-[-10px] left-[40px] bg-[#5F35F5] rounded-md text-sm text-[#fff] text-center'>Full name</p>
                                    {

                                        fullNameerr &&
                                        <h6 className='w-[240px]  px-[10px] absolute top-[-10px] left-[30px]  bg-[red] rounded-md text-sm text-[#fff] capitalize  z-50 text-center'>{fullNameerr}</h6>
                                    }
                                </div>
                                <div className='relative mt-[35px]'>
                                    <input onChange={passwordHandle} value={password} type={passwordShow ? "text" : "password"} placeholder='Password (4-12) characters' className='w-[300px] py-[15px] px-[25px] border-2 border-[#808080] rounded-[10px]' />
                                    <p className='w-[136px]  px-[10px] absolute top-[-10px] left-[40px] bg-[#5F35F5] rounded-md text-sm text-[#fff] text-center'>Password</p>
                                    {
                                        passwordShow ? <RiEyeFill onClick={() => setPasswordShow(!passwordShow)} className='absolute right-4 top-5  text-md'></RiEyeFill> :
                                            <RiEyeOffFill onClick={() => setPasswordShow(!passwordShow)} className='absolute right-4 top-5 text-md '></RiEyeOffFill>

                                    }
                                    {
                                        passworderr &&
                                        <h6 className='w-[240px]  px-[10px] absolute top-[-10px] left-[30px]  bg-[red] rounded-md text-sm text-[#fff] capitalize  z-50 text-center'>{passworderr}</h6>
                                    }
                                </div>
                                <div className='relative mt-[35px]'>
                                    <button onClick={submitHandle} className='w-[300px] py-[15px] px-[40px] border-2 border-[#fff] rounded-full bg-[#fff] hover:bg-[#3c15c3] hover:text-[#fff] transition duration-150' >Sign Up </button>
                                </div>
                                <p className='text-sm text-[#fff] mt-[25px] text-center '>Already  have an account ? <Link to='/login' className='font-bold text-[#2dfe54] cursor-pointer'>Sign In</Link></p>
                                
                                 <div onClick={googleHandle} className="with-google flex justify-center w-[80%] m-auto  rounded-md px-[30px] py-[15px] bg-[#fff] mt-[25px] cursor-pointer ">
                                    <FcGoogle className="w-[22px] h-[22px] "></FcGoogle>
                                    <button  className='ml-[10px] font-sans text-sm' > Sign In With Google </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration