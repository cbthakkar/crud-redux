import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        //add
        addUser: (state,action) => {
            state.push(action.payload);
        },

        //update
        updateUser: (state,action) => {
            const {id,name,email} = action.payload;
            const same = state.find((user) => user.id == id);
            if(same) {
                same.name = name;
                same.email = email;    
            }
        },

        //delete
        deleteUser: (state,action) => {
            return state.filter(user => user.id !== action.payload);
        }
    }
})

export const {deleteUser,addUser,updateUser} = userSlice.actions
export default userSlice.reducer