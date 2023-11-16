import React from 'react'
import react , {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RiEyeOffFill } from '@react-icons/all-files/ri/RiEyeOffFill'
import { RiEyeFill } from '@react-icons/all-files/ri/RiEyeFill'
import {FcGoogle} from '@react-icons/all-files/fc/FcGoogle'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux"
import { userLoginInfo } from '../../Redux/Slice/userSlice';


const Login = () => {
  const provider = new GoogleAuthProvider();
  const show = "Show"
  const notShow = "Not Show"
  const auth = getAuth();
  const navigate = useNavigate()
  const [notValid , setNotValid] = useState('')
  const [passwordShow , setPasswordShow] = useState(false)
  const [email ,setEmail] = useState('')
  const [emailErr , setEmailErr] = useState('')
  const [password , setPassword] = useState ('')
  const [passwordErr , setPasswordErr] = useState('')
  const dispatch = useDispatch()

  const googleHandle = () =>{
    console.log("all is well");
    signInWithPopup(auth, provider)
  .then(() => {
    console.log("login Success");
    setTimeout(() =>{
      navigate("/")
    },2000)
  }).catch((error) => {
    // Handle Errors here.
    console.log(error.code)
  });

  }
    const emailHandle = (e) =>{
      setEmail(e.target.value)
      setEmailErr('')
      
    }
    const passwordHandle = (e) => {
      setPassword(e.target.value)
      setPasswordErr('')
    }
    const submitHandle = (e) =>{
      if(!email){
        setEmailErr("Please Enter Your Email")
        console.log("Please Enter Your Email")
      }
      if(!password){
        setPasswordErr('Please Enter Your Password')
        console.log('Please Enter Your Password')
      }
      if (email && password ){
        console.log('All is Well')
              signInWithEmailAndPassword(auth, email, password)
        .then((e) => {
          dispatch(userLoginInfo(e.user))
          localStorage.setItem("userLoginInfo" , JSON.stringify(userLoginInfo(e)))
          setTimeout(() =>{
            navigate('/')
            setNotValid('')

          } ,3000)
          toast.success("Login Successfull , Now Enjoy Dream Talk")
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)
          if (error.code.includes("auth/invalid-login-credentials")){
            setNotValid(" Please Enter valid Email and Password")
          }
        });
        
      }
    }
  
  return (
    <>
    
      <div className="login w-full py-[80px]">
        <div className="max-w-container flex justify-around">
          <ToastContainer position="top-center" theme="colored" />
          <div className="left-part ">
            <div className="w-[90%]">
              <img src="./images/login-3.png" alt="" className='' />
            </div>
          </div>
          <div className="right-part ">
          <div className=" login-form w-[350px] m-auto bg-[#5F35F5]  px-[25px]  pt-[35px] pb-[35px]  md:m-default rounded-md font-Nunito">
            <p className='text-xl pb-[15px] text-center text-[#fff]'>Login to your account!</p>
            <img src="./images/logo.png" alt="" className='w-[70%]  pb-2 m-auto' />

            {
              notValid && <h5 className='w-full  px-[10px]  bg-[red] rounded-md text-sm text-[#fff]   text-center'>{notValid}</h5>
            }

            <div className="relative mt-[25px]">
              <input onChange={emailHandle} type="email" placeholder='Enter Your Email' className="w-[300px] py-[15px] px-[25px] border-2 border-[#808080] rounded-[10px]" />


              <p className='w-[136px]  px-[10px] absolute top-[-10px] left-[40px] bg-[#5F35F5] rounded-md text-sm text-[#fff]  z-50 text-center'>Email Address</p>
              {
                emailErr &&
                <h6 className='w-[240px]  px-[10px] absolute top-[-10px] left-[30px]  bg-[red] rounded-md text-sm text-[#fff] capitalize  z-50 text-center'>{emailErr}</h6>
              }
            </div>
            <div className="relative mt-[25px]">
              <input onChange={passwordHandle} type={passwordShow ? 'text' : 'password'} placeholder='Enter Your Password' className="w-[300px] py-[15px] px-[25px] border-2 border-[#808080] rounded-[10px]" />
              <p className='w-[136px]  px-[10px] absolute top-[-10px] left-[40px] bg-[#5F35F5] rounded-md text-sm text-[#fff]  z-50 text-center'>Password</p>
              
              {
                passwordErr && <h6 className='w-[240px]  px-[10px] absolute top-[-10px] left-[30px]  bg-[red] rounded-md text-sm text-[#fff] capitalize  z-50 text-center'>{passwordErr}</h6>
              }

              {
                passwordShow ? <RiEyeFill onClick={() => setPasswordShow(!passwordShow)} className='absolute right-4 top-5  text-md'></RiEyeFill> : <RiEyeOffFill onClick={() => setPasswordShow(!passwordShow)} className='absolute right-4 top-5 text-md '></RiEyeOffFill>
              }

            </div>
            <div className='relative mt-[35px]'>
              <button onClick={submitHandle} className='w-[300px] py-[15px] px-[25px] border-2 border-[#fff] rounded-full bg-[#fff] hover:bg-[#3c15c3] hover:text-[#fff] transition duration-150' >Sign Up </button>
            </div>
            <p className='text-sm text-[#fff] mt-[25px] text-center '>Don’t have an account ? <Link to='/registration' className='font-bold text-[#2dfe54] cursor-pointer'>Sign Up</Link></p>
            <p className='text-sm text-[#fff] mt-[10px] text-center '><Link to='/resetPassword ' className='font-bold text-[#2dfe54] cursor-pointer'>Forgot Password</Link></p>
              <div onClick={googleHandle} className="with-google flex justify-center w-[80%] m-auto  rounded-md px-[30px] py-[15px] bg-[#fff] mt-[25px] cursor-pointer ">
                  <FcGoogle className="w-[22px] h-[22px] "></FcGoogle>
                  <button  className='ml-[10px] font-sans text-sm' > Login With Google </button>
              </div>
            
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login