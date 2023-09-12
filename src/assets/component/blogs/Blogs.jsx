import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div>
            <div className="container md:flex mx-auto md:justify-between">
            <h1>Blogs: {blogs.length}</h1>
            <h3>bookmarks</h3>
            </div>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} ></Blog> )
            }            
        </div>
    );
};

export default Blogs;