import React , {useContext} from 'react';
import SignInBtn from '../../components/signin-btn';
import { UserContext } from '../../contexts/user';

export default function CreatePost() {
  const [user , setUser] = useContext(UserContext).user
  return (
    <>
        {user ? <input placeholder="post here"/> : <> <SignInBtn/> <p>to post and comment</p> </>}
    </>
  );
}



