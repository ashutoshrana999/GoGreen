import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import{ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../../utils';

const Signup = () => {
  const[signupInfo,setSignupInfo]=useState({
    name:'',
    email:'',
    password:''
  })

  const navigate=useNavigate();

  const handleChange=(e)=>{
    const{name,value}=e.target;
    console.log(name,value);
    const copySignupInfo={...signupInfo};
    copySignupInfo[name]=value;
    setSignupInfo(copySignupInfo);
  }

  const handleSignup = async (e)=>{
    e.preventDefault();
    const{name,email,password}=signupInfo;
    if(!name||!email||!password){
      return handleError('all fileds are required')
    }
    try {
      const url=`${import.meta.env.VITE_API_URL}/auth/signup`;
      const response=await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(signupInfo)

      });
      const result=await response.json();
      const {success,message,error}=result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
            navigate('/login')
        },1000)
      }else if(error){
        const details=error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  }





  return (
    <div className="h-210 self-center justify-center items-center flex font-serif  bg-[url('/login.png')] bg-cover bg-center">
      <div className='h-130 md:w-[60%]  m-auto   bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-10 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-2xl p-3 text-green-900'>Sign Up</h1>
        <form onSubmit={handleSignup} >
            <div className='py-5'>
                <label className='text-2xl p-2' htmlFor="name">Name</label><br />
                <input onChange={handleChange} className=' bg-white/20  backdrop-blur-md border border-green/30  rounded-3xl  text-xl  h-12 p-2 ' type="text" name='name' placeholder='Enter your name...' value={signupInfo.name}/>
            </div>
            <div  className='py-5'>
                <label className='text-2xl p-2' htmlFor="email">Email</label><br />
                <input onChange={handleChange}  className=' bg-white/20  backdrop-blur-md border border-green/30  rounded-3xl   text-xl h-12 p-2 '  type="Email" name='email' placeholder='Enter your email...' value={setSignupInfo.email}/>
            </div>
            <div  className='py-5'>
                <label className='text-2xl p-2' htmlFor="password">Password</label><br />
                <input onChange={handleChange}  className=' bg-white/20  backdrop-blur-md border border-green/30  rounded-3xl   text-xl  h-12 p-2 '  type="password" name='password' placeholder='Enter your password...' value={signupInfo.password}/>
            </div>
            <div className='flex flex-col py-5'>
                <button type='submit' className='h-12 bg-green-800 text-white rounded-3xl  hover:bg-white border-green-800 border-2 hover:text-green-800'>Sign Up</button>
                <span>Already have an account ?
                    <Link to='/login'>Login</Link>
                </span>
            </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default Signup
