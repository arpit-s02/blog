import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";

function PostDetail(){

    const[post, setPost] = useState({});
    const {postId} = useParams();

    useEffect(() => {
        async function getPost(){
            const docRef = doc(db, 'posts', postId);
            const post = await getDoc(docRef);
            setPost(post.data());
        }

        getPost();
        
    }, []);

    return(
        <div className="post-detail">
            <h1> {post.title} </h1>
            <p> {post.content} </p>
        </div>
        
    );
}

export default PostDetail;