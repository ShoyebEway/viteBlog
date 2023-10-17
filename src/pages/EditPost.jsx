import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Container,PostForm } from '../components';
import service from '../appwrite/config';

function EditPost() {
    const [post,setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    // console.log(slug);
    useEffect(()=>{
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate]);
   
  return post ?( 
    <Container>
        <PostForm post ={post}/>
    </Container>
  ):null
}

export default EditPost