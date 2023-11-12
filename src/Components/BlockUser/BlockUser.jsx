import { BsThreeDotsVertical } from '@react-icons/all-files/bs/BsThreeDotsVertical'
import React from 'react'
import blockUserImg from '../../../public/images/blockUser.png'

const BlockUser = () => {
  return (
    <div className='p-[22px] shadow-sm rounded-[20px] ml-[20px] w-[330px] mt-[20px]'>
        <div className="GroupList relative  flex justify-between items-center ">
            <h1 className='text-[20px] font-bold'>Block User</h1>               
            <BsThreeDotsVertical className='text-[18px] absolute right-[0]' ></BsThreeDotsVertical>
        </div>
        <div className="innerList  ">
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="blockUserImage ">
                        <img src={blockUserImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="blockUserTitle">
                        <h1 className='blockUserName text-[16px] font-semibold'>Marvin </h1>
                        <p className="blockUserMessage text-[14px] text-[#797979]">Today, 8:56pm</p>
                    </div>
                    <button className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Unblock</button>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="blockUserImage ">
                        <img src={blockUserImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="blockUserTitle">
                        <h1 className='blockUserName text-[16px] font-semibold'>Marvin </h1>
                        <p className="blockUserMessage text-[14px] text-[#797979]">Today, 8:56pm</p>
                    </div>
                    <button className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Unblock</button>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="blockUserImage ">
                        <img src={blockUserImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="blockUserTitle">
                        <h1 className='blockUserName text-[16px] font-semibold'>Marvin </h1>
                        <p className="blockUserMessage text-[14px] text-[#797979]">Today, 8:56pm</p>
                    </div>
                    <button className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Unblock</button>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="blockUserImage ">
                        <img src={blockUserImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="blockUserTitle">
                        <h1 className='blockUserName text-[16px] font-semibold'>Marvin </h1>
                        <p className="blockUserMessage text-[14px] text-[#797979]">Today, 8:56pm</p>
                    </div>
                    <button className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Unblock</button>
            </div>
        </div>
    </div>
  )
}

export default BlockUser