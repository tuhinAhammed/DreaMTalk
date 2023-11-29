import { BsThreeDotsVertical } from '@react-icons/all-files/bs/BsThreeDotsVertical'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import React from 'react'
import userListImg from '../../../public/images/userList.png'
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect } from 'react';
import { useState } from 'react';
const UserList = () => {
    const [userDataList, setUserDataList] = useState([])
    const db = getDatabase();
    useEffect(() => {

        const userRef = ref(db, "users/");
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((userItem) => {
                // console.log(userItem.val())
                arr.push(userItem.val());
            })
            setUserDataList(arr)
        });
    }, [])
    console.log(userDataList)
    return (
        <div className='p-[22px] shadow-sm rounded-[20px] ml-[20px] w-[330px] h-[432px] mt-[20px]'>
            <div className="UserList relative  flex justify-between items-center ">
                <h1 className='text-[20px] font-bold'>User List</h1>
                <BsThreeDotsVertical className='text-[18px] absolute right-[0]' ></BsThreeDotsVertical>
            </div>
            <div className="innerList w-full h-[95%] overflow-y-auto  ">
            {
                userDataList.map((item) =>(
                    
                        <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                            <div className="userListImage ">
                                <img src={item.photoURL} className="w-[95%]" alt="" />
                            </div>
                            <div className="userListTitle">
                                <h1 className='userListName text-[16px] font-semibold'>{item.username}</h1>
                                <p className="userListMessage text-[14px] text-[#797979]">Today, 2:31pm</p>
                            </div>
                            <button className="join px-[8px] py-[8px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold"><FaPlus></FaPlus></button>
                        </div>
                ))
            }

            </div>
        </div>
    )
}

export default UserList