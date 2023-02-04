import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserPreferences } from '../slices/userPreferences';

export const useGetInitialData = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getUserPreferences());
  }, []);
};
