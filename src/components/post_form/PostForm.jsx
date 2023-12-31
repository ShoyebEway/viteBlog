import React,{useCallback,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button,Input,Select,RTE} from '../index'
import { useSelector } from 'react-redux'
import service from '../../appwrite/config'
import {useForm} from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,control,getValues,formState: { errors },} = useForm({
        defaultValues:{
            title : post?.title || '',
            slug : post?.$id || '', 
            content : post?.content || '',
            status : post?.status || 'active',
        }
    });
    const navigate = useNavigate();
    const userData = useSelector((state)=> state.auth.userData);
    const submit = async (data) =>{
        if(post){
            const file = data.image[0]? service.fileUpload(data.image[0]):null;
            if(file){
                service.deleteFile(post.featureImage);
            }
            const dbPost = await service.updateBlog(post.$id,{
                ...data,
                featureImage : file?file.$id: undefined
            })
            if(dbPost){
                toast.success('🦄 Wow so easy!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    setTimeout(() => {
                        navigate(`/post/${dbPost.$id}`)   
                    }, 5000);
                 
              
            }
        }else{
            const file = await service.fileUpload(data.image[0]);
            if(file){
                const fileId = file.$id;
                data.featureImage = fileId;
                const dbPost = await service.createBlog({
                    ...data,
                    userId : userData.$id,
                })
                if(dbPost){
                    toast.success('🦄 Wow so easy!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
       
    }

    const slugTransform = useCallback((value)=>{
    if(value && typeof value === 'string')
    return  value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g,'-').replace(/\s/g,'-') 
    return ''
    },[]);
        useEffect(()=>{
        const subcription = watch((value,{name})=>{
            if(name === 'title'){
                setValue('slug',slugTransform(value.title),{shouldValidate : true})
            }
        })
        return ()=>subcription.unsubscribe();
        
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap dark:text-white">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                {errors.title && <span className='text-red-600'>This field is required</span>}
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.filePreview(post.featureImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                {errors.image && <span className='text-red-600'>This field is required</span>}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
            <ToastContainer />
        </form>

  )
}

export default PostForm