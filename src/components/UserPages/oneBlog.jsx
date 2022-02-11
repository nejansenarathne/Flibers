import React from 'react';
import { useParams } from 'react-router-dom';

const OneBlogCard = (props) => {
    const blogs = props.blogs
    let {key} = useParams()
    return ( 
        <div className="blogCards">

        {blogs.map((blog) =>
            <div key={blog.id} className="blogCard">
                <a href={'/blogDetails/' + blog.key}>
                <img src={blog.img} alt="photo" />
                <div className="blogCardText">
                    <h3>{blog.title}</h3>
                    {/* <p><i class="far fa-thumbs-up"></i> 10</p> */}
                </div>
                </a>
            </div>
        )}

        </div>
     );
}
 
export default OneBlogCard;