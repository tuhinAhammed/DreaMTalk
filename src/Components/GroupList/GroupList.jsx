import { BsThreeDotsVertical } from '@react-icons/all-files/bs/BsThreeDotsVertical'
import React from 'react'
import groupImage from '../../../public/images/groupImage.png'
const GroupList = () => {
  return (
    <div className='p-[22px] shadow-sm rounded-[20px] ml-[20px] w-[330px]'>
        <div className="GroupList relative  flex justify-between items-center ">
            <h1 className='text-[20px] font-bold'>Group List</h1>               
            <BsThreeDotsVertical className='text-[18px] absolute right-[0]' ></BsThreeDotsVertical>
        </div>
        <div className="innerList  ">
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="groupImage ">
                        <img src={groupImage} className="w-[95%]" alt="" />
                    </div>
                    <div className="GroupTitle">
                        <h1 className='groupName text-[16px] font-semibold'>Friends Reunion</h1>
                        <p className="groupMeaase text-[14px] text-[#797979]">Hi Guys, Wassup!</p>
                    </div>
                    <button className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Join</button>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="groupImage ">
                        <img src={groupImage} className="w-[95%]" alt="" />
                    </div>
                    <div className="GroupTitle">
                        <h1 className='groupName text-[16px] font-semibold'>Friends Reunion</h1>
                        <p className="groupMeaase text-[14px] text-[#797979]">Hi Guys, Wassup!</p>
                    </div>
                    <button className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Join</button>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="groupImage ">
                        <img src={groupImage} className="w-[95%]" alt="" />
                    </div>
                    <div className="GroupTitle">
                        <h1 className='groupName text-[16px] font-semibold'>Friends Reunion</h1>
                        <p className="groupMeaase text-[14px] text-[#797979]">Hi Guys, Wassup!</p>
                    </div>
                    <button className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Join</button>
            </div>
        </div>
    </div>
  )
}

export default GroupList