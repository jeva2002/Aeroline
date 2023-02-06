import {
  createBasicUser,
  signInBasic,
  signInGoogle,
} from '../../model/firebase/auth';
import { RegisterValues } from '../../view/components/common/Header/UserOptions/Register';
import { LoginValues } from '../../view/components/common/Header/UserOptions/Login';
import { UserCredential, updateProfile } from 'firebase/auth';

export const handleBasicRegister = async (userInfo: RegisterValues) => {
  try {
    if (userInfo.conditions) {
      const auth: UserCredential = await createBasicUser(
        userInfo.email,
        userInfo.password
      );
      if (auth) {
        updateProfile(auth.user, {
          displayName: userInfo.firstname + ' ' + userInfo.lastname,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleGoogle = async (
  callback: (email: string, username: string) => void
) => {
  try {
    const auth: UserCredential = await signInGoogle();
    if (auth?.user) {
      callback(auth.user.email ?? '', auth.user.displayName ?? '');
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleBasicLogin = async (
  loginValues: LoginValues,
  callback: (email: string, username: string) => void
) => {
  try {
    const auth: UserCredential = await signInBasic(
      loginValues.email,
      loginValues.password
    );
    if (auth?.user) {
      callback(auth.user.email ?? '', auth.user.displayName ?? '');
    }
  } catch (error) {
    console.log(error);
  }
};
