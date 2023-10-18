import React,{useState,useEffect} from 'react';
import { Container,PostCard } from '../components';
import authService from '../appwrite/config';

function AllPost() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        authService.getPosts([]).then((posts)=>{
                if(posts){
                    setPosts(posts.documents)
                }
        })
    },[])
 
    return (
        <div className='w-full py-4 min-h-[320px]'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='space-x-2'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
        </div>
    )
  
}

export default AllPost