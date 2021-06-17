import React from 'react';
import SignInBtn from '../../components/signin-btn';
import { CreatePost, Feed, Post } from '../../containers';
import Navbar from '../../containers/navbar';

export default function Home() {
  return (
    <>
    
        <Navbar/>

        <br/>
        <br/>
        
        <hr/>

      <CreatePost/>

        <br/>
        
        <hr/>

        <Feed/> 
        
    </>
  );
}



