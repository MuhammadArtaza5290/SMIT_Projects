import React from 'react'
import CreatePost from '../../components/createPost/CreatePost'
import FeedListing from "../../components/feedListing/FeedListing"
const Home = () => {
  return (
    <>
        <div>
            <CreatePost/>  {/* This component will create and update posts */}
            <FeedListing/>
        </div>
    </>
)
}

export default Home