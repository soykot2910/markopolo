import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    allUsers: [],
    isLoading: true,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
   try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
   }catch(error){
       console.log(error);
   }
}
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        handleSearch: (state, action) => {
            state.allUsers = action.payload;
        }   
    },
    extraReducers: {    
        [fetchUsers.pending]: (state, action:PayloadAction<[]>) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.allUsers = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
});
