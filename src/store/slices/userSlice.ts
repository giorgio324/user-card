import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type User = {
  name: string;
  lastName: string;
  position: string;
  image: string;
  address?: string;
  agency?: string;
  venmoURL: string;
  instagramURL: string;
  facebookURL: string;
  twitterURL: string;
  linkedInURL: string;
};

type UserSliceState = {
  user: User | null;
};

const initialState: UserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

/* selector */
export const selectUser = (state: RootState) => state.user.user;

/* action */
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
