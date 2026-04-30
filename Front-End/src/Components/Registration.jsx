import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const handelRegistration = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/register", {
        email,
        name,
        pwd
      });

      console.log(res.data);

      if (res.data.msg === "User registered successfully") {

      
        alert("Registered successfully");

        navigate("/login");

      } else {
        alert(res.data.msg); 
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong ");
    }
  };

  return (
    <div className='flex flex-col gap-9 justify-center items-center h-screen'>

      <h1 className='text-3xl text-center'>Full-Stack</h1>

      <div className='flex flex-col gap-6 items-center justify-center text-center'>
        <h1 className='text-3xl'>Enter Your Email To Sign In</h1>
        <p className='text-xl'>or choose another way to sign in</p>
      </div>

      <form onSubmit={handelRegistration}>
        <div className='main-section flex flex-col gap-5 items-center justify-center'>

          <input 
            onChange={(e)=> setEmail(e.target.value)}
            className="border px-3 py-2 w-[400px]"
            type="email"
            placeholder='Nitin@gmail.com'
          />

          <input 
            onChange={(e)=> setName(e.target.value)}
            className='border px-3 py-2 w-[400px]'
            type="text"
            placeholder='Name'
          />

          <input 
            onChange={(e)=> setPwd(e.target.value)}
            className="border px-3 py-2 w-[400px]"
            type="password"
            placeholder='1234'
          />

          <button type="submit" className='h-[35px] w-[400px] bg-black text-white'>
            Register
          </button>

        </div>
      </form>

    </div>
  )
}

export default Registration;
