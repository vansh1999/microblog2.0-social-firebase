import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth';

export default function SignInBtn() {

  const [user , setUser] = useContext(UserContext).user

  const SignInClick = async() => {
    let userSignIn = await signInWithGoogle()  //signinwithgoogle return user and save that user details here
    if(userSignIn) {
      setUser(userSignIn)  // add user deatils from auth to setuser , first no context , usestate works here , second adding usecontext for global user.
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
