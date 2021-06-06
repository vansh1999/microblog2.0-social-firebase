import React , {useContext, useState} from 'react';
import SignInBtn from '../../components/signin-btn';
import { UserContext } from '../../contexts/user';
import firebase from "firebase";
import { storage, db } from "../../firebase";

export default function CreatePost() {

  const [user , setUser] = useContext(UserContext).user
  const [caption , setCaption] = useState("")
  const [image , setImage] = useState("")
  const [progress , setProgress] = useState(0)

  console.log(caption)

  const handleChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
    var selectedURL = URL.createObjectURL(e.target.files[0])
    var imagePreview = document.getElementById('image-preview')
    imagePreview.src = selectedURL;
    imagePreview.style.display = "block"
  }


  const handleUpload = () => {
    
    if(caption){

    alert("post added successfully!")
      
    return db.collection("posts").add({
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            caption : caption , 
            // imageUrl : null,
            username : user.displayName.split(" ")[0]
          })
          
          
    }
    
    
  }


  return (
    <>
        {user ? 
        
        (
        <>

          <h3>Create Post</h3>
          <div>
            <textarea placeholder="post somethings" rows="3" value={caption} onChange={(e) => {
              setCaption(e.target.value)
            }}></textarea> <br/>
            <div>
              <img id="image-preview" alt="" style={{display: 'none' , width:"100" , height : "100px"}}/>
            </div>
            <br/>
            <input type="file" accept="image/*" onChange={handleChange}/>
            <br/>
            <button style={{ padding:"8px" , backgroundColor : caption ? "blue" : "grey" , color: "white"}} onClick={handleUpload} >Post</button>
          </div> 

        </>
        ) 
        
        
        
        
        : <> <SignInBtn/> <p>to post and comment</p> </>}
    </>
  );
}



