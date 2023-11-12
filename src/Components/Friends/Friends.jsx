import { BsThreeDotsVertical } from '@react-icons/all-files/bs/BsThreeDotsVertical'
import React from 'react'
import FriendsImg from '../../../public/images/Friends.png'
const Friends = () => {
  return (
    <div className='p-[22px] shadow-sm rounded-[20px] ml-[20px] mt-[22px] w-[330px] h-[432px] '>
        <div className="GroupList relative  flex justify-between items-center ">
            <h1 className='text-[20px] font-bold'>Friends</h1>               
            <BsThreeDotsVertical className='text-[18px] absolute right-[0]' ></BsThreeDotsVertical>
        </div>
        <div className="innerList w-full h-[95%] overflow-y-auto ">
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="friendsImg ">
                        <img src={FriendsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="FriendTitle">
                        <h1 className='friendName text-[16px] font-semibold'>Angle Rokeya</h1>
                        <p className="friendMeaase text-[14px] text-[#797979]">Miss Youuu..!</p>
                    </div>
                    <p className='text-[10px] text-[#797979]'>Today, 8:56pm</p>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="friendsImg ">
                        <img src={FriendsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="FriendTitle">
                        <h1 className='friendName text-[16px] font-semibold'>Angle Rokeya</h1>
                        <p className="friendMeaase text-[14px] text-[#797979]">Miss Youuu..!</p>
                    </div>
                    <p className='text-[10px] text-[#797979]'>Today, 8:56pm</p>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="friendsImg ">
                        <img src={FriendsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="FriendTitle">
                        <h1 className='friendName text-[16px] font-semibold'>Angle Rokeya</h1>
                        <p className="friendMeaase text-[14px] text-[#797979]">Miss You..!</p>
                    </div>
                    <p className='text-[10px] text-[#797979]'>Today, 8:56pm</p>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="friendsImg ">
                        <img src={FriendsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="FriendTitle">
                        <h1 className='friendName text-[16px] font-semibold'>Angle Rokeya</h1>
                        <p className="friendMeaase text-[14px] text-[#797979]">Miss You..!</p>
                    </div>
                    <p className='text-[10px] text-[#797979]'>Today, 8:56pm</p>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="friendsImg ">
                        <img src={FriendsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="FriendTitle">
                        <h1 className='friendName text-[16px] font-semibold'>Angle Rokeya</h1>
                        <p className="friendMeaase text-[14px] text-[#797979]">Miss You..!</p>
                    </div>
                    <p className='text-[10px] text-[#797979]'>Today, 8:56pm</p>
            </div>
            <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                    <div className="friendsImg ">
                        <img src={FriendsImg} className="w-[95%]" alt="" />
                    </div>
                    <div className="FriendTitle">
                        <h1 className='friendName text-[16px] font-semibold'>Angle Rokeya</h1>
                        <p className="friendMeaase text-[14px] text-[#797979]">Miss You..!</p>
                    </div>
                    <p className='text-[10px] text-[#797979]'>Today, 8:56pm</p>
            </div>


        </div>
    </div>
  )
}

export default Friends