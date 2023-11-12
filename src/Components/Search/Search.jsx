import React from 'react'
import {AiOutlineSearch} from '@react-icons/all-files/ai/AiOutlineSearch'
import {BsThreeDotsVertical} from '@react-icons/all-files/bs/BsThreeDotsVertical'
import GroupList from '../GroupList/GroupList'
const Search = () => {
  return (
    <>
        <div className=' '>
            <div className="search relative py-[22px] flex justify-between items-center ml-[20px]">
                <AiOutlineSearch className='text-[22px] absolute left-[20px]'></AiOutlineSearch>
                <input className='w-[330px] text-[16px] h-[60px] rounded-[20px] px-[60px] border-2 border-primary' type="text" placeholder='Search' />
                <BsThreeDotsVertical className='text-[22px] absolute right-[20px]' ></BsThreeDotsVertical>
            </div>
            <GroupList></GroupList>
        </div>
    </>
  )
}

export default Search