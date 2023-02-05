import {
  createBasicUser,
  signInBasic,
  signInGoogle,
} from '../../model/firebase/auth';
import { RegisterValues } from '../../view/components/common/Header/UserOptions/Register';
import { createUserDoc } from '../../model/firebase/create';
import { LoginValues } from '../../view/components/common/Header/UserOptions/Login';

export const handleBasicRegister = async (userInfo: RegisterValues) => {
  try {
    if (userInfo.conditions) {
      await createBasicUser(userInfo.email, userInfo.password);
      await createUserDoc({
        email: userInfo.email,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleGoogle = async (
  callback: (email: string, username: string) => void
) => {
  try {
    const auth = await signInGoogle();
    if (auth) {
      const user = auth?.user;
      if (user) {
        callback(user.email, user.displayName);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleBasicLogin = async (loginValues: LoginValues) => {
  try {
    return await signInBasic(loginValues.email, loginValues.password);
  } catch (error) {
    console.log(error);
  }
};
