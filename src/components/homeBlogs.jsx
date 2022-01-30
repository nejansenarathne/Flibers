import React, { useState,useEffect } from 'react';
import {db} from '../config/firebase';
import OneBlogCard from './oneBlog';
import loadingImg from '../img/loading.gif'

const HomeBlog = () => {

    //blogs array
    const [blogs , setBlogs] = useState([ ])
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const blogsViaFirestore =[] //temp arr to handle data
        db.collection("blogs").onSnapshot((QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => { 
                blogsViaFirestore.push({...doc.data(),key: doc.id}) 
            }) 
            setIsPending(false)
            setBlogs(blogsViaFirestore)//pushing to blogs arr
        })
        }, 1000);
    }, [])
  
    return ( 
        <div className='homeBlogSection'>
            <h1 className="homeBlogTitle">Latest Blogs</h1>
            {isPending && <img className='loading' src={loadingImg} alt="" />}
                <OneBlogCard blogs={blogs}/>
        </div>
     );
}
 
export default HomeBlog