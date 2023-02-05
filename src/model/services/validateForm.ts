import * as yup from 'yup';

export const REGISTER_SCHEMA = yup.object().shape({
  firstname: yup.string().min(2).max(20).required(),
  lastname: yup.string().min(2).max(20).required(),
  email: yup.string().email().min(7).max(20).required(),
  password: yup.string().min(6).max(50).required(),
});
