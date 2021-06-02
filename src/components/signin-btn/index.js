import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth';

export default function SignInBtn() {

  const [user , setUser] = useContext(UserContext).user

  const SignInClick = async() => {
    let userSignIn = await signInWithGoogle()
    if(userSignIn) {
      setUser(userSignIn)
      console.log(userSignIn)
    }
  }


  return (
    <>
        <button className="signInBtn" onClick={SignInClick}>
            Sign In With Google
        </button>
    </>
  );
}
