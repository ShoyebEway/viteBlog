import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login as authLogin} from '../store/authSlice'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error,setError] = useState('');
    const {register,handleSubmit} = useForm();
     const login = async (data) =>{
        setError('')
        try{
            const session = await authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                console.log(userData);
                if(userData) dispatch(authLogin(userData))
                navigate('/');
            }
        }catch(error){
            setError(error.message)
        }
     } 
    return (
        <div className='flex items-center justify-center '>
        <div className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 justify-center flex'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="60%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline text-blue-500"
                    >
                        Sign Up
                    </Link>
        </p>
            {error && <p className='bg-red-600 mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    label = "Email :"
                    type="email"
                    placeholder = "Enter Your Email"
                    {...register('email',{
                        required : true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    <Input
                    label = "Pasword : "
                    type = "password"
                    placeholder= "Enter Your password"
                    {...register('password',{
                        required:true
                    })}
                    />
                    <Button type="submit"
                    className="w-full"
                    > Log In </Button>
                </div>
            </form>
            </div>
        </div>
     )
}

export default Login