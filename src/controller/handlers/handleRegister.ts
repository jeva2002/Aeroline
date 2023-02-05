import { createBasicUser, signInGoogle } from '../../model/firebase/auth';
import { RegisterValues } from '../../view/components/common/Header/UserOptions/Register';
import { createUserDoc } from '../../model/firebase/create';

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

export const handleGoogleRegister = async () => {
  try {
    await signInGoogle();
  } catch (error) {
    console.log(error);
  }
};
