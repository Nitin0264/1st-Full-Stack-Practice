import React from 'react'

function Login() {
  return (
     <div className='flex flex-col gap-9 justify-center items-center h-screen'>
      
      <h1 className='text-3xl text-center'>Full-Stack</h1>

      <div className='flex flex-col gap-6 items-center justify-center text-center'>
        <h1 className='text-3xl'>Enter Your Email To Sign In</h1>
        <p className='text-xl'>or choose another way to sign in</p>
      </div>

      <div className='main-section flex flex-col gap-5 items-center justify-center'>
        <input 
          className="border px-3 py-2 w-[400px]" 
          type="email" 
          placeholder='Nitin@gmail.com' 
          name='email' 
        />

        <input 
          className="border px-3 py-2 w-[400px]" 
          type="password"  
          placeholder='1234' 
          name='pwd'
        />

        <button className='h-[35px] w-[400px] bg-black text-white'>
          Sign IN
        </button>
      </div>

    </div>
  )
}

export default Login