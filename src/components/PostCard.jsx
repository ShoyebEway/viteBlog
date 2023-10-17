import React from 'react'
import {Link} from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({$id,title,featureImage}) {
   
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full p-4 rounded-xl bg-gray-100'>
            <div className=' justify-center w-full mb-4'>
                <div>
                    <img src={service.filePreview(featureImage)} alt={title} className='rounded-xl'/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard