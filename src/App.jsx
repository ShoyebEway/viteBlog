import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import { Outlet } from 'react-router-dom';
import { Header,Footer } from './components';
import { ThemeProvider } from './contexts/Theme';

function App() {
  const[themeMode,setThemeMode] = useState('light');

  const darkTheme = ()=>{
      setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light');
  }
 useEffect(()=>{
 document.querySelector('html').classList.remove('light','dark');
 document.querySelector('html').classList.add(themeMode);
 },[themeMode]);

 const[loading,setLoading] =useState(true);
 const dispatch = useDispatch();
 useEffect(()=>{
  const userData = authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false));
 },[]);
  return !loading?(
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main className='min-h-[500px] p-4 bg-slate-200 dark:bg-[#191d3a]'>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
    </ThemeProvider>
  ):null
}

export default App
