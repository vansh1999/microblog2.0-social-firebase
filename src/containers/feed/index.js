import React , {useState ,useEffect , useContext} from 'react';
import { UserContext } from '../../contexts/user';

import Post from '../post';
import firebase from "firebase";
import { db } from '../../firebase';

export default function Feed() {

  const [posts, setPosts] = useState([]);
  const [user , setUser] = useContext(UserContext).user

  console.log("this is user" , user)

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({id : doc.id , post : doc.data()})))
    })
  } , [])

  return (
    <>
        
        {user ? <h2>My Feed</h2> : ""}

        {posts.map(({id , post}) => {
            return(
                <>
                <Post key={id} id={id} timestamp="12:00:00" username={post.username} caption={post.caption} />
                
                </>
            )
        })}
        
        

    </>
  );
}
