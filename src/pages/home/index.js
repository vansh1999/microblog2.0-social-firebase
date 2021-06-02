import React from 'react';
import SignInBtn from '../../components/signin-btn';
import { CreatePost } from '../../containers';
import Navbar from '../../containers/navbar';

export default function Home() {
  return (
    <>
    
        <Navbar/>

        <br/>
        <br/>
        
        <hr/>

      <CreatePost/>
        
    </>
  );
}



