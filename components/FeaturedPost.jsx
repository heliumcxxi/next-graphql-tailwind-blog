import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getFeaturedPosts } from '../services'
import FeaturedPostCard from './FeaturedPostCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

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
    <div className='mb-4'>
      <Carousel responsive={responsive} itemClass="px-4">
        {dataLoaded && featuredPost.map((post, idx) => {
        return (
          <FeaturedPostCard key={idx} post={post}/>
        )})} 
      </Carousel>
    </div>
  )
}

export default FeaturedPost