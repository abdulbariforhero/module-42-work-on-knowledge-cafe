import { useState } from 'react'
import './App.css'
import Blogs from './assets/component/blogs/Blogs'
import Bookmark from './assets/component/bookmark/Bookmark'
import Header from './assets/component/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    console.log('bookmark adding soon');
  }

  return (
    <div className='max-w-6xl mx-auto'>
     <Header></Header>  
    <div className='flex justify-between'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

     <Bookmark></Bookmark>
    </div>
    </div>
  )
}

export default App
