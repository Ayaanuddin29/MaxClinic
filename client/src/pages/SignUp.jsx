import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInFaliure,signInStart,signInSuccess } from '../redux/user/userSlice';
import { useSelector,useDispatch} from 'react-redux';
import OAuth from '../components/OAuth';
export default function SignUp() {
  const [formData,setFormData]=useState({});
  const {loading,error:errorMessage}=useSelector(state=>state.user)||{};
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }

const handleSubmit=async(e)=>{
  e.preventDefault();
  if(!formData.username||!formData.email||!formData.password){
    return dispatch(signInFaliure("Please fill all Fields"))
  }
  try{
    dispatch(signInStart());
const res=await fetch('/api/auth/signup',{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(formData)
})
const data=await res.json();
if(data.success===false){
  return dispatch(signInFaliure('Email Already Exist'))
}
if(res.ok){
  dispatch(signInSuccess(data))
  navigate('/signin')
}
  }
  catch(err){
dispatch(signInFaliure(err.message))
  }
}
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
        
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your UserName'/>
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
          </div>
          <div>
            <Label value='Your email'/>
            <TextInput type='email' placeholder='@email.com' id='email' onChange={handleChange}/>
          </div>
          <div>
            <Label value='Your password'/>
            <TextInput type='password' placeholder='********' id='password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='redToYellow' type='submit' outline className='text-bold' disabled={loading}>{loading?(
            <>
            <Spinner className='sm'/>
              <span>Loading....</span>
            </>
          ):'SignUp'}</Button>
          <OAuth/>
        </form>
       <div className='flex gap-2 text-sm mt-4'>
        <span>Have an Account?</span>
        <Link to='/signin' className='text-blue-700'>Signin</Link>
       </div>
       {
        errorMessage&&(
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )
       }
  </div>
      </div>
    </div>
  )
}
