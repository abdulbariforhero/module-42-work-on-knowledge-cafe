import { useState } from 'react'
import './App.css'
import Blogs from './assets/component/blogs/Blogs'
import Bookmarks from './assets/component/bookmarks/Bookmarks'
import Header from './assets/component/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [redingTime, setREadingTime] = useState(0)

  const handleMarkAsRead = (id, time) => {
    setREadingTime(redingTime + time);
    const newBookMark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookMark);
  }

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  return (
    <div className='max-w-6xl mx-auto'>
     <Header></Header>  
    <div className='md:flex justify-between'>
    <Blogs handleAddToBookmark={handleAddToBookmark}
    handleMarkAsRead= {handleMarkAsRead}></Blogs>

     <Bookmarks bookmarks={bookmarks}  redingTime={redingTime}></Bookmarks>
    </div>
    </div>
  )
}

export default App
