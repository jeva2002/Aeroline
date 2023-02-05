import { configureStore } from '@reduxjs/toolkit';
import userPreferences from '../../controller/slices/userPreferences';
import currentUser from '../../controller/slices/currentUser';

export default configureStore({
  reducer: {
    userPreferences,
    currentUser,
  },
});
