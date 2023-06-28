import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserType {
  loading: boolean;
  users: User[];
}

const initialState = {
  loading: false,
  users: [],
} as UserType;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { fetchUsers } = userSlice.actions;
export default userSlice.reducer;
