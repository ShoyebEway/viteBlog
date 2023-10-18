import React from 'react'
import {Link} from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({$id,title,featureImage}) {
   
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full p-4 rounded-xl bg-gray-100 h-72 flex justify-center items-center'>
            <div className='w-full '>
                <div className=''>
                    <img src={service.filePreview(featureImage)} alt={title} className='rounded-xl object-cover h-40 w-60'/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard