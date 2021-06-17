import React , {useContext} from 'react';
import { UserContext } from '../../contexts/user';
import { db } from '../../firebase';


export default function Post({id , timestamp , username , caption}) {
const [user , setUser] = useContext(UserContext).user

const deletePost = () => {
    db.collection('posts').doc(id).delete()
    .then(() => alert("Post Deleted!"))
    .catch((error) => alert(error))
}

  return (
    <>
        {user ? 
        
        <div>
            
            <p>{username}</p>
            <p>{timestamp}</p>
            <p style={{fontWeight:"bold"}}>{caption}</p>
            <button onClick={deletePost}>Delete</button>
            <br/><br/>
        </div>
        
        : <div></div>}


        

    </>
  );
}


