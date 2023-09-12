import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-xl'>{bookmark.title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;