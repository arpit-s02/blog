import { collection } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';
import {db} from '../firebaseConfig';
import { getDocs} from 'firebase/firestore/lite';
import { Link } from 'react-router-dom';

function Home(){
    const [posts, setPost] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const postsCol = collection(db, 'posts');
            const postsDocs = await getDocs(postsCol);
            const postsList = postsDocs.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })

            setPost(postsList);
        }

        getPosts();
    }, [])

    return(
        <div className='home'>
            <h1> Blogs </h1>
            <div id = "blog-by"> Arpit </div>
            {posts.map((post) => (
                <div className='post' key = {post.id}>
                    <Link to = {`/post/${post.id}`}>
                        <h3> {post.title} </h3>
                    </Link>
                    <p> {post.subTitle} </p>
                </div>
            ))}
        </div>
    );
}

export default Home;