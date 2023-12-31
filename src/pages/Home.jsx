import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../components';
import service from '../appwrite/config';
import { useSelector } from 'react-redux';
function Home() {
    const [posts,setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);
    console.log(userData);
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
    },[])
    if(posts.length === 0){
        return (   <div className="w-full py-8 mt-4 text-center min-h-[300px]">
        <Container>
            <div className="flex flex-wrap justify-center items-center">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500 dark:text-white">
                        Please Login to Read Posts
                    </h1>
                </div>
            </div>
        </Container>
    </div> )
        }else{
          return (
            <div className='w-full py-3 min-h-[320px]'>
                <Container>
               
                  <div className='flex flex-wrap'>
                    
                      {posts.map((post)=>(
                          <div key={post.$id} className='p-2 w-1/4'>
                              <PostCard {...post}/>
                          </div>
                      ))}
                  </div>
                </Container>
              </div>
          )
        }
}

export default Home