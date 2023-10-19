import React from 'react'
import {Link} from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({$id,title,featureImage}) {
   
  return (
    <Link to={`/post/${$id}`}>
  
        <div className='w-full p-4 rounded-xl bg-gray-100 h-72 grid place-content-center items-center shadow-inner dark:bg-slate-900'>
            <div className='w-full'>
            
                <div className=''>
                    <img src={service.filePreview(featureImage)} alt={title} className='rounded-xl object-cover h-40 w-60 hover:-translate-y-6 hover:border-b-4 hover:border-slate-800 dark:hover:border-amber-600'/>
                </div>
                <h2 className='text-xl font-bold dark:text-white'>{title}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard