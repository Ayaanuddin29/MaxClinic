import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useLocation} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon,FaSun} from 'react-icons/fa'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'
export default function Header() {
  const {currentUser}=useSelector(state=>state.user)
  const {theme}=useSelector(state=>state.theme);
  const path=useLocation().pathname;
  const dispatch=useDispatch();
  return (
    <Navbar className='border-b-2' color={'blue'}>
<Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white text-black'>
<span className='px-2 py-1 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 rounded-lg text-white'>Max Dental</span><span className='text-black'>Clinic</span>
</Link>
<form>
  <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
</form>
<Button  className='w-12 h-10 lg:hidden' color='gray' pill >
  <AiOutlineSearch />
</Button>
<div className='flex gap-2 md:order-2'>
  <Button className='w-12 h-10' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
    {theme==='light'?(<FaSun/>):(
      <FaMoon/>
    )}
  </Button>
    {currentUser?(
      <Dropdown className='' arrowIcon={false} inline
      label={
        <Avatar alt='user' img={currentUser.profilePicture} rounded/>
      }>
        <Dropdown.Header>
          <span>@{currentUser.username}</span><hr/>
          <span>{currentUser.email}</span><hr/>
        </Dropdown.Header>
        <Link to={'/dashboa?tab=profile'}>
        <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <Dropdown.Divider/>
        <Dropdown.Item>SignOut</Dropdown.Item>
      </Dropdown>
    ):(
      <Link to='signin'>
    <Button gradientDuoTone='redToYellow'>Sign In</Button></Link>)}
    <Navbar.Toggle/>
    </div>
    <Navbar.Collapse>
    <Navbar.Link active={path==='/'} as={'div'}>
      <Link to='/'>Home</Link>
    </Navbar.Link >
      <Navbar.Link active={path==='/about'} as={'div'}>
      <Link to='/about'>About</Link>
    </Navbar.Link>
      <Navbar.Link active={path==='/contact'} as={'div'}>
      <Link to='Contact'>Contact</Link>
    </Navbar.Link>
    </Navbar.Collapse>
    </Navbar>
  )
}
