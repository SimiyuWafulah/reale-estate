import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: null,
    error: null,
    loading: false,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        signiInStart: (state) => {
            state.loading=true;
        },
        signInSucess: (state, action ) => {
            state.currentUser = action.payload;
            state.loading =false;
            state.error = null;
        },
        signInFailure :(state, action) => {
            state.error = action.payload;
            state.loading =false;
        }
    }
});

export const {signiInStart,signInSucess,signInFailure} =userSlice.actions;
export default userSlice.reducer;