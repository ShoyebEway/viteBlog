import React from 'react'
import { useDispatch } from 'react-redux'
import{logout} from '../../store/authSlice'
import authService from '../../appwrite/Auth'

function Logout() {
  const dispatch = useDispatch();
  const logOutHandler=()=>{
    authService.logout().then(()=>{
      dispatch(logout());
    })
   
  }
  return (
    <button onClick={logOutHandler}
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >LogOut</button>
  )
}

export default Logout