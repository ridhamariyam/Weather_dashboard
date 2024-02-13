import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:false,
    admin:false
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       updateUser(state,action){
        state.user = action.payload
       },
        updateAdmin(state, action) {
            state.admin = action.payload
        },

    },
});

export const { updateAdmin,updateUser } =
    authSlice.actions;
export default authSlice.reducer;