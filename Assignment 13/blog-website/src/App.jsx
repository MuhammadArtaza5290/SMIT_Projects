import { useState } from 'react'
import '../src/index.css'
import HomePage from './pages/homepage/HomePage'
import BlogPage from './pages/blogpage/BlogPage'
import Footer from './pages/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage />
     <BlogPage />
     <Footer />
    </>
  )
}

export default App
