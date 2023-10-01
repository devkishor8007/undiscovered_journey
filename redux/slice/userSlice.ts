import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
    age: number;
    username: string,
    local: string,
}

const initialState: UserState = {
    age: 24,
    username: 'Kishor',
    local: 'en'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (state, v) => {
            console.log({ state, v, payload: v.payload });

            state.username = v.payload
        },
        updatelocal: (state, v) => {
            state.local = v.payload
        }
    }
})

export const { updateUsername, updatelocal } = userSlice.actions

export const selectAge = (state: RootState) => state.users.age

export default userSlice.reducer