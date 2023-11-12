import { createSlice } from "@reduxjs/toolkit";
export default userSlice = createSlice({
    name : "user" ,
    initialState : {
        value : 0 
    } ,
    reducers : {
        demo : (state , action) => {
            console.log("ok" , action.payload)
        }

    }
})