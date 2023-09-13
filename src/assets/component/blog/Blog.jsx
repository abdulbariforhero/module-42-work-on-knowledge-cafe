import PropTypes from 'prop-types'
import {FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
    const { id, title, cover, author_img, author,post_date,read_time, hashtags } = blog;

    return (
        <div className='mt-16'>
            <div className=''>
                <figure className='w-full' ><img src={cover} alt={`Cover picture of the title ${title}`} /></figure>
                <div className='mt-3 flex justify-between items-center'>
                    <div className='flex'>
                        <figure className='w-14 rounded-full mr-5'><img src={author_img} alt="" /></figure>
                        <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{post_date} </p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <span>{read_time} min read</span>
                        <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-600'><FaBookmark /></button>
                    </div>
                </div>
                <h2 className='text-4xl leading-10 my-5' >{title}</h2>
                <div className='flex gap-4'>
                {
                    hashtags.map(hashtag => <p key={hashtag}>{hashtag}</p>)
                }
                </div>
                <button className='underline text-sky-500' onClick={() => handleMarkAsRead(id, read_time)}>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;

