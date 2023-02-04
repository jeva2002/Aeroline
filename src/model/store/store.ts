import { configureStore } from '@reduxjs/toolkit';
import userPreferences from '../../controller/slices/userPreferences';

export default configureStore({
  reducer: {
    userPreferences,
  },
});
