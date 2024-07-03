import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type User = {
  name: string;
  lastName: string;
  position: string;
  image: string;
  adress?: string;
  instagramLink: string;
  facebookLink: string;
  twitterLink: string;
  linkedInLink: string;
  website?: string;
  imdb?: string;
  features?: string;
  contact?: string;
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

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
