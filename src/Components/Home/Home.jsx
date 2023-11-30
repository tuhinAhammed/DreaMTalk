import React from 'react'
import FriendRequest from '../FriendRequest/FriendRequest'
import GroupList from '../GroupList/GroupList'
import Friends from '../Friends/Friends'
import Search from '../Search/Search'
import Sidebar from '../Sidebar/Sidebar'
import UserList from '../UserList/UserList'
import MyGroup from '../MyGroup/MyGroup'
import BlockUser from '../BlockUser/BlockUser'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { userLoginInfo } from '../../Redux/Slice/userSlice'
const Home = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const dispatch = useDispatch()
  const data = useSelector(state => state.userLoginInfo.userInfo)
  // console.log("Here data" , data);
  useEffect (() => {
    if  (!data) {
      navigate("/login")
    }
    else {
      onAuthStateChanged(auth, (user) => {       
        dispatch(userLoginInfo(user));
        // console.log(user)
        localStorage.setItem("userLoginInfo", JSON.stringify(user));
    });
      
    }
  })
  return (
    <>
      <div className="home">
        <div className="max-w-container px-[20px] ">
          <div className=" flex ">
            <Sidebar></Sidebar>
            <div className="">
              <div className="flex justify-center">
              <Search></Search>
              <Friends></Friends>
              <UserList></UserList>
              </div>
              <div className="flex">
                <FriendRequest></FriendRequest>
                <MyGroup></MyGroup>
                <BlockUser></BlockUser>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home