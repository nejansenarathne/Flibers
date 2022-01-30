import React , { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {db} from '../config/firebase'
import {doc, getDoc} from 'firebase/firestore'
import { useState } from 'react/cjs/react.development';
import signInWithGoogle from '../config/userLogin'
import loadingImg from '../img/loading.gif'

const BlogDetails = () => {
    const [isPending, setIsPending] = useState(true)
    let {key} = useParams()
    const [detailBlog , setDetailBlog] = useState([])
    setTimeout(() => {
        db.collection("blogs").doc(key).get().then((snapshot) => {
            setDetailBlog(snapshot.data())
            setIsPending(false)
        }).catch((e) => alert("Error: " + e))
    }, 1000) 

    const toggleLike = () => {
        const likeBtn = document.getElementById("likeBtn")
        likeBtn.classList.toggle("likeCliked");
    }
    const logged = localStorage.getItem("logged")

    return ( 
        <div className='detailBlogBlock'>
            {isPending && <img className='loading' src={loadingImg} alt="" />}
            
            {/* {JSON.stringify(detailBlog)} */}
            <i id='likeBtn' class="far fa-thumbs-up" onClick={toggleLike}></i> 
            <h1 className='detailBlogTitle'>{detailBlog.title} </h1> 
            <img src={detailBlog.img} alt="Blog image" />
            <p className="blogContent">{detailBlog.content}</p>

            <div className="commentSection">
                <h3>Post a Comment</h3>
                <input type="text" placeholder='Any Comments...'/> {logged === 'true' ? <button onClick={() => {alert("Sorry, This feature is still under constructions")}}>Post</button> : <button onClick={signInWithGoogle} className='commentLog'>Login</button>}
            </div>
        </div>
     );
}
 
export default BlogDetails;