import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="container md:flex mx-auto md:justify-between mt-4">


            </div>
            <div className="max-w-xl mx-2">
                <h1 className="text-center text-2xl mb-5">Blogs: {blogs.length}</h1>
                {
                    blogs.map(blog => <Blog key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleMarkAsRead={handleMarkAsRead} ></Blog>)
                }
            </div>
        </div>

    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;