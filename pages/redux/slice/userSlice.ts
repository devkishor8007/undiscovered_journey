import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
    age: number;
    username: string
}

const initialState: UserState = {
    age: 24,
    username: 'Kishor'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (state, v) => {
            console.log({state, v, payload: v.payload});
            
            state.username = v.payload
        }
    }
})

export const {updateUsername} = userSlice.actions

export const selectAge = (state: RootState) => state.users.age

export default userSlice.reducer