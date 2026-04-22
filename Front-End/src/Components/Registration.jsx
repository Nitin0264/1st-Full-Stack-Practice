import React from 'react'
import axios from "axios";
import { useState } from 'react';
function Registration() {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [pwd, setPwd] = useState(" ")

  const handelRegistration = async (e)=>
  {
    e.preventDefault();

    try{
      const res =  await axios.post("http://localhost:8000/register",
           {
             email,
             name,
             pwd
           }
          );
          console.log(res.data);

    }
       catch(err)
       {
         console.log(err);
       }
  }
  return (
    <div className='flex flex-col gap-9 justify-center items-center h-screen'>

      <h1 className='text-3xl text-center'>Full-Stack</h1>

      <div className='flex flex-col gap-6 items-center justify-center text-center'>
        <h1 className='text-3xl'>Enter Your Email To Sign In</h1>
        <p className='text-xl'>or choose another way to sign in</p>
      </div>


        <form action=""  onSubmit = {handelRegistration}>
      <div className='main-section flex flex-col gap-5 items-center justify-center'>
        <input onChange={(e)=> setEmail(e.target.value)}
          className="border px-3 py-2 w-[400px]"
          type="email"
          placeholder='Nitin@gmail.com'
          name='email'
        />

        <input onChange={(e)=> setName(e.target.value)}
          className='border px-3 py-2 w-[400px]'
          type="text"
          placeholder='Name'
          name='name' />

        <input onChange={(e)=> setPwd(e.target.value)}
          className="border px-3 py-2 w-[400px]"
          type="password"
          placeholder='1234'
          name='pwd'
        />

        <button type = "submit" className='h-[35px] w-[400px] bg-black text-white'>
          Sign IN
        </button>
      </div>
        </form>

    </div>
  )
}

export default Registration
