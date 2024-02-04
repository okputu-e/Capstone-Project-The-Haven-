// import React from 'react'
import Nav from '../../components/Nav/Nav'
import { useState } from 'react';
import Button from '../../components/button/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Button clicked!');
  };
  return (
    <>
    <Nav/>
    <div className='bg-signup-pattern bg-cover h-[100%]'>
      <div className='flex justify-center gap-20 pb-24 '>

      <div className='rounded-2xl bg-white py-12 px-8 mt-10 w-[400px] md:w-[75%] max-w-[400px] md:max-w-[450px]'>
        <h1 className='text-[#0602B2] text-[24px] font-bold mt-6 mb-2'>LOGIN</h1>
        <form  className='flex flex-col gap-2'>
   


      <label>Email Address</label>
      <input type="email" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl' value={email}   onChange={(e) => setEmail(e.target.value)} required />
 
  
       <label >Password</label>
     <input type="password" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl ' value={password} onChange={(e) => setPassword(e.target.value)} required />

     <div className='flex justify-center mt-8 font-bold'>
      <Button
        onClick={handleLogin}
        label="LOGIN"
        color="#FFFFFF"
        backgroundColor = "#1E18FF"
        borderRadius= '26px'
        borderColor="#1E18FF"
        width="50%"
        fontSize="12px"
        padding="4px 0px"
      />
      </div>

      <div className='flex justify-center ml-3 mt-1 gap-2'>
        <h3 className=''>Don't have an account yet? </h3>  
        </div>
 

   
    

      
      

    </form>
        
      </div>
      <div className='hidden md:flex md:justify-center items-center md:w-[25%]'>
        <h1 className='font-[1000] text-[40px] text-[#F4F4F4] p-[20px] '><span className='text-[#0602B2]'>LOGIN</span> TO GET THE FULL EXPERIENCE <span className='text-[#0602B2]'>EXPERIENCE</span></h1>

       </div>
      </div>
      
            </div> 
  </>

  )
}
