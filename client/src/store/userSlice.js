import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "feelssapman"
    },
    reducers: {
        login(state, action) {
            state.username = action.payload;
        },
        logout(state, action) {
            state.username = "";
        }
    }
});

export default userSlice;
export const userActions = userSlice.actions;