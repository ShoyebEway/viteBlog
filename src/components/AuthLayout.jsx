import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function Protected({children,authentication=true}) {
    const[loader,setLoader] = useState(true);
    const authStatus = useSelector((state)=>state.auth.status);
    const navigate = useNavigate();
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate('/login');
        }else if(!authentication && authStatus !== authentication){
            navigate('/');
        }
        setLoader(false);
    },[authStatus,navigate,authentication])
  return loader?<h2>... Loading</h2>:<>{children}</>;
}

