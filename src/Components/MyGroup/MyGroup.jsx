import { BsThreeDotsVertical } from '@react-icons/all-files/bs/BsThreeDotsVertical'
import React from 'react'
import myGroupsImg from '../../../public/images/myGroups.png'
const MyGroup = () => {
  return (
    <div className='p-[22px] shadow-sm rounded-[20px] ml-[20px] w-[330px] h-[432px] mt-[20px]'>
        <div className="UserList relative  flex justify-between items-center ">
            <h1 className='text-[20px] font-bold'>My Group</h1>               
            <BsThreeDotsVertical className='text-[18px] absolute right-[0]' ></BsThreeDotsVertical>
        </div>
        <div className="innerList w-full h-[95%] overflow-y-auto  ">
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="myGroupsImg ">
                        <img src={myGroupsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="userListTitle">
                        <h1 className='myGroupstName text-[16px] font-semibold'>Swathi</h1>
                        <p className="myGroupsMessage text-[14px] text-[#797979]">sure</p>
                    </div>
                    <p className="userListMessage text-[14px] text-[#797979]">Today, 2:31pm</p>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="myGroupsImg ">
                        <img src={myGroupsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="userListTitle">
                        <h1 className='myGroupstName text-[16px] font-semibold'>Swathi</h1>
                        <p className="myGroupsMessage text-[14px] text-[#797979]">sure</p>
                    </div>
                    <p className="userListMessage text-[14px] text-[#797979]">Today, 2:31pm</p>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="myGroupsImg ">
                        <img src={myGroupsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="userListTitle">
                        <h1 className='myGroupstName text-[16px] font-semibold'>Swathi</h1>
                        <p className="myGroupsMessage text-[14px] text-[#797979]">sure</p>
                    </div>
                    <p className="userListMessage text-[14px] text-[#797979]">Today, 2:31pm</p>
            </div>

        </div>
    </div>
  )
}

export default MyGroup