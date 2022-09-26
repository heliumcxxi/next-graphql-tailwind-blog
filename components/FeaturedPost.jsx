import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getFeaturedPosts } from '../services'
import FeaturedPostCard from './FeaturedPostCard'

const FeaturedPost = ({post}) => {
  const [featuredPost, setFeaturedPost] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)  

  useEffect(() => {
    getFeaturedPosts()
      .then((result) => {
        setFeaturedPost(result)
        setDataLoaded(true)
      })
  },[])

  return (
    <div className='bg-white'>
     
      {dataLoaded && featuredPost.map((post) => {
        <FeaturedPostCard post={post} />
      })}
    </div>
  )
}

export default FeaturedPost