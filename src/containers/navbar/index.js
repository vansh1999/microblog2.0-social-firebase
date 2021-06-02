import React ,  { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import SignInBtn from '../../components/signin-btn';

export default function Navbar() {

  const [user , setUser] = useContext(UserContext).user

  // let displayName = user.displayName.split(",")
  // console.log(displayName)

  return (
    <>
        <p>React Social</p>

        {user ? (
        <> 
        <h3>Hey,{user.displayName.split(" ")[0]} welcome</h3> 
        <br/>
        <img src={user.photoURL}  style={{height:"40px" ,  with:"40px" , borderRadius:"50%"}} />
        <br/>
        <button>Logout</button>
        </>
         ) : <SignInBtn/>}
    </>
  );
}
