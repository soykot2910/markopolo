import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const fetchUsers = createAsyncThunk<UserState>("user/fetchUsers", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
    });
    builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<{users:UserState[]}>) => {
        state.users = action.payload;
    }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
    });
  },
});

export const { handleSearch } = userSlice.actions;
export default userSlice.reducer;
