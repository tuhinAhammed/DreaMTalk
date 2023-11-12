import React from 'react'
import FriendRequest from '../FriendRequest/FriendRequest'
import GroupList from '../GroupList/GroupList'
import Friends from '../Friends/Friends'
import Search from '../Search/Search'
import Sidebar from '../Sidebar/Sidebar'
import UserList from '../UserList/UserList'
import MyGroup from '../MyGroup/MyGroup'
import BlockUser from '../BlockUser/BlockUser'
const Home = () => {
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