import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Logout';
import {Container, Logo} from '../index'



function Header() {
  const navigate = useNavigate();
   const authStatus = useSelector((state)=> state.auth.status);
   const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
]
  return (
    <header className='py-3 shadow bg-[#081229] text-white sticky top-0'>
      <Container>
      <nav className='flex'>
        <div className='ml-4'>
          <Link to="/">
              <Logo/>
         </Link>
        </div>
        <ul className='flex ml-auto'>
          {
            navItems.map((item)=>
            
            item.active ?(
              <li key={item.name}>
              <button
              onClick={() => navigate(item.slug)}
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
              >{item.name}</button>
            </li>
            ):null)
          }
          {
            authStatus && (
              <Logout/>
            )
          }
        </ul>
      </nav>
      </Container>
    </header>
  )
}

export default Header