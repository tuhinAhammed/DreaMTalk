import React from 'react'
import Profile from '../../../public/images/profile.png'
import {AiOutlineHome} from '@react-icons/all-files/ai/AiOutlineHome'
import {FaCommentDots} from '@react-icons/all-files/fa/FaCommentDots'
import {AiOutlineBell} from '@react-icons/all-files/ai/AiOutlineBell'
import {AiOutlineSetting} from '@react-icons/all-files/ai/AiOutlineSetting'
import {BiCloudUpload} from '@react-icons/all-files/bi/BiCloudUpload'
import {FiLogOut} from '@react-icons/all-files/fi/FiLogOut'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { userLoginInfo } from '../../Redux/Slice/userSlice'

const Sidebar = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const [email ,setEmail] = useState('')
  const [password , setPassword] = useState ('')
  const [profileImage , setProfileImage] = useState("false")
  const dispatch = useDispatch ()
  const imageData = useSelector(state => state.userLoginInfo.userInfo)
    console.log(imageData)

  const UploadProfileUi = (() =>{
    navigate("/UpdateProfile")
    console.log("all is well")
   })

    // SignUp , Logout

 const handleSignup = (() => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    dispatch(userLoginInfo(null))
    localStorage.removeItem ("userLoginInfo")
    navigate("/login")
    console.log("SignOut Successfull");
  }).catch((error) => {
    // An error happened.
  });

 })




  return (
    <>
        <div className="homeSidebar w-[160px] h-full px-[25px] py-[25px] bg-primary text-center rounded-[20px]">
            <div onClick={UploadProfileUi} className="userImg group relative w-[100px] h-[100px] py-2 rounded-full m-auto overflow-hidden transition-[0.4s] border-2 ">
                        
              
           <img src={imageData.photoURL} alt="" className='z-[0]  absolute pointer' />  
           
            
              <div className="text-4xl  font-bold z-[1] text-[#fff] overly w-full h-full absolute left-0 top-0 group-hover:bg-[#000] group-hover:opacity-[0.4] opacity-[0] rounded-full flex justify-center items-center z-[0] cursor-pointer">                
              <BiCloudUpload className=''></BiCloudUpload>
              </div>
            </div>
            <ul className='text-center w-full py-[20px] '>
              <li className=" text-[40px] text-[#5F35F5] py-[10px] px-[40px] rounded-lg mt-[20px] bg-[#fff] flex justify-center cursor-pointer border-[2px]"><AiOutlineHome></AiOutlineHome>
              </li>
              <li className=" text-[40px] text-[#fff] py-[10px] px-[40px] rounded-lg mt-[30px] hover:bg-[#fff] flex justify-center cursor-pointer hover:text-primary mt-[20px]  border-[1px]"><FaCommentDots></FaCommentDots>
              </li>
              <li className=" text-[40px] text-[#fff] py-[10px] px-[40px] rounded-lg mt-[30px] hover:bg-[#fff] flex justify-center cursor-pointer hover:text-primary mt-[20px]  border-[1px]"><AiOutlineBell></AiOutlineBell>
              </li>
              <li className=" text-[40px] text-[#fff] py-[10px] px-[40px] rounded-lg mt-[30px] hover:bg-[#fff] flex justify-center cursor-pointer hover:text-primary mt-[20px]  border-[1px]"><AiOutlineSetting></AiOutlineSetting>
              </li >
              <li onClick={handleSignup} className='text-[40px] text-[#fff] py-[10px] px-[40px] rounded-lg mt-[30px] hover:bg-[#fff] flex justify-center cursor-pointer hover:text-primary mt-[20px] border-[1px]'>
                <FiLogOut className=' '></FiLogOut>
              </li>
            </ul>
        </div>
    </>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  )
}

export default Sidebar