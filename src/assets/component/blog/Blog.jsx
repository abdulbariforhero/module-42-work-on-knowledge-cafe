import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
    console.log(blog);
    const { title, cover, author_img, author,post_date,readtime, } = blog;

    return (
        <div className='lg:w-[800px]'>
            <div className='ml-32'>
                <figure className='' ><img src={cover} alt="" /></figure>
                <div className='mt-8 flex justify-between '>
                    <div className='flex'>
                        <figure className='w-14 rounded-full mr-5'><img src={author_img} alt="" /></figure>
                        <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{post_date} </p>
                        </div>
                    </div>
                    <div>
                        <p>{readtime} min read</p>
                    </div>
                </div>
                <h2 className='text-4xl' >{title}</h2>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;

