import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      <div className='flex-1'>
       <Link to='/' className='whitespace-nowrap font-bold dark:text-white text-black text-4xl'>
<span className='px-2 py-1 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 rounded-lg text-white '>Max Dental</span><span className='text-black'>Clinic</span>
</Link>
<p className='mt-3 text-sm '>Max Dental Clinic is dedicated to providing exceptional dental care with a focus on patient comfort and advanced treatments</p>
      </div>
      <div className='flex-1'>
        
        <form className='flex flex-col gap-4'>
          <div>
            <Label value='Your UserName'/>
            <TextInput type='text' placeholder='Username' id='username'/>
          </div>
          <div>
            <Label value='Your email'/>
            <TextInput type='email' placeholder='@email.com' id='email'/>
          </div>
          <div>
            <Label value='Your password'/>
            <TextInput type='password' placeholder='********' id='password'/>
          </div>
          <Button gradientDuoTone='redToYellow' type='submit' outline className='text-bold'>SingUp</Button>
        </form>
       <div className='flex gap-2 text-sm mt-4'>
        <span>Have an Account?</span>
        <Link to='/signin' className='text-blue-700'>Signin</Link>
       </div>
  </div>
      </div>
    </div>
  )
}
