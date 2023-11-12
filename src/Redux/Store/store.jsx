// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {},
// })
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../Slice/userSlice"
export default configureStore ({
    reducer : {
        user : userSlice
    },
})