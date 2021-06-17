import React ,  { useContext } from 'react';
import { useHistory } from "react-router-dom"
import { UserContext } from '../../contexts/user';
import SignInBtn from '../../components/signin-btn';
import { logout } from '../../services/auth';

export default function Navbar() {

  let history = useHistory();

  const [user , setUser] = useContext(UserContext).user

  // let displayName = user.displayName.split(",")
  // console.log(displayName)

  const logoutClick = async() => {
    let UserLogout = await logout()
    if(UserLogout){
      setUser(UserLogout);
      window.location.reload();
    }
  }

  return (
    <>
        <p>React Social</p>

        {user ? (
        <> 
        <h3>Hey,{user.displayName.split(" ")[0]} welcome</h3> 
        <br/>
        <img src={user.photoURL}  style={{height:"40px" ,  with:"40px" , borderRadius:"50%"}} />
        <br/>
        
        </>
         ) : <SignInBtn/>}

         {user ? <button onClick={logoutClick}>Logout</button> : ""}
    </>
  );
}
