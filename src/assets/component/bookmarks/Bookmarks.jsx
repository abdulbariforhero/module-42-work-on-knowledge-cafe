import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, redingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 mx-3 mt-4'>
            <div className='my-7'>
                <h3 className='text-4xl text-center'>ReadingTime {redingTime}</h3>
            </div>


            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>

             {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
             }
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    redingTime: PropTypes.number.isRequired,
}
export default Bookmarks;