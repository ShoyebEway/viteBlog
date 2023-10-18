import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {Button,Input,Logo} from './index'
import authService from '../appwrite/auth'
import {login} from '../store/authSlice'

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error,setError] = useState("")
    const {register,handleSubmit} = useForm()
    const create = async (data) =>{
        setError('')
        try{
            const userData = await authService.createAccount(data);
            if(userData){
                const userdata = await authService.getCurrentUser()
                if(userdata) dispatch(login(userdata))
                navigate('/')
            }
        }catch(error){
            setError(error.message)
        }
    }
  return (
    <div className='w-full flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline text-blue-500"
                    >
                        Sign In
                    </Link>
                </p>
            {error && <p className='text-red-600 text-center mt-8'>{error}</p>}
            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-2'>
                    <Input
                    label = "Full Name :"
                    placeholder = "Enter Your Full Name"
                    {...register('name',{
                        required : true
                    })}
                    />
                     <Input
                    label = "Email :"
                    type="email"
                    placeholder = "Enter Your Email"
                    {...register('email',{
                        required : true,
                        pattern :{}
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
                    <Button type="submit" className="w-full"> Sign Up</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp