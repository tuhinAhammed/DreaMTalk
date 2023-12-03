import { BsThreeDotsVertical } from '@react-icons/all-files/bs/BsThreeDotsVertical'
import React from 'react'
import friendRequestImg from '../../../public/images/friendRequest.png'
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const FriendRequest = () => {
    const data = useSelector(state => state.userLoginInfo.userInfo)
    // console.log(data);
    const db = getDatabase();
    const [requestAcceptList, setRequestAcceptList] = useState([])

    const handleAcceptFriend = (item) =>{
        console.log(item);
        set(push(ref(db, 'friends/' )), {
            ...item
          }).then(() =>{
            remove(ref(db, 'friendRequest/' + item.id ))
            console.log("all is well");
          })  
    }
    useEffect(() => {
        const requestList = ref(db, 'friendRequest/');
        onValue(requestList, (snapshot) => {
            let arr = []
            snapshot.forEach((recheveRequest) => {
                console.log(recheveRequest.val());
                if (recheveRequest.val().rechiverUid == data.uid) {
                    arr.push({ ...recheveRequest.val() , id: recheveRequest.key })
                }
            })
            setRequestAcceptList(arr)
        });
        console.log(requestAcceptList);
    }, [])

    return (
        <div className='p-[22px] shadow-sm rounded-[20px] ml-[20px] w-[330px] mt-[20px]'>
            <div className="GroupList relative  flex justify-between items-center ">
                <h1 className='text-[20px] font-bold'>Friend  Request</h1>
                <BsThreeDotsVertical className='text-[18px] absolute right-[0]' ></BsThreeDotsVertical>
            </div>
            <div className="innerList">

                {
                    requestAcceptList.map((item) => (
                        <div className='flex justify-between items-center border-b-[1px] border-[#BFBFBF] py-[12px]'>
                            <div className="groupImage ">
                                <img src={friendRequestImg} className="w-[95%]" alt="" />
                            </div>
                            <div className="GroupTitle">
                                <h1 className='groupName text-[16px] font-semibold'>{item.senderName}</h1>
                                <p className="groupMeaase text-[14px] text-[#797979]">Hi....!</p>
                            </div>
                            <button onClick={() => handleAcceptFriend(item)} className="join px-[15px] py-[2px] bg-primary rounded-[5px] text-[#fff] text-[18px] font-semibold">Accept</button>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default FriendRequest