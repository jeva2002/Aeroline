import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Preferences {
  language: string;
  currency: string;
}

const initialState: Preferences = {
  language: 'español',
  currency: 'COP',
};

export const getUserPreferences = createAsyncThunk(
  'userPreferences/getPreferences',
  () => {
    const response = localStorage.getItem('preferences');
    if (response) {
      const parsed: Preferences = JSON.parse(response);
      return parsed;
    }
  }
);

export const setUserPreferences = createAsyncThunk(
  'userPreferences/setPreferences',
  (preferences: Preferences) => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
    return preferences;
  }
);

const userPreferences = createSlice({
  name: 'userPreferences',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserPreferences.fulfilled, (state, action) => {
      if (action.payload) return (state = action.payload);
    });
    builder.addCase(setUserPreferences.fulfilled, (state, action) => {
      if (action.payload) return (state = action.payload);
    });
  },
});

export const getPreferences = (state: { userPreferences: Preferences }) =>
  state.userPreferences;

export default userPreferences.reducer;
