import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
    // const [uploadImageModal , setUploadImageModal] = useState("false")
    const navigate = useNavigate()
    const uploadImageModalCancel = (() =>{
        navigate("../home")
        console.log("cancel Successfull")
    })
  return (
    <>
        <div className="updateProfile  flex justify-center bg-primary items-center m-auto h-screen">
            <div className="w-1/2 p-10 rounded bg-white">
                <div className="text">Upload Profile Picture</div>
                <input type='file' />
                <div className="btn-list flex mt-[40px]">
                    <button className="bg-primary px-[25px] py-[12px] text-[18px] text-white rounded">Upload</button>
                    <button onClick={uploadImageModalCancel} className="bg-[red] px-[25px] py-[12px] text-[18px] text-white ml-[20px] rounded">Cancel</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default UpdateProfile