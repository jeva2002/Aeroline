import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUser {
  email: string;
  username: string;
}

const initialState: CurrentUser = {
  email: '',
  username: '',
};

const currentUser = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
  },
});

export const getCurrentUser = (state: { currentUser: CurrentUser }) =>
  state.currentUser;

export const { setCurrentUser } = currentUser.actions;

export default currentUser.reducer;
