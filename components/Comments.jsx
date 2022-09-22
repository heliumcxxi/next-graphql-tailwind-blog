import React, { useEffect, useState } from 'react'
import getComments from '../services'

const Comments = ({slug}) => {
  // const [comment, setComment] = useState([])

  // useEffect(() => {
  //   getComments(slug)
  //     .then((result) => {setComment(result)})
  // }, [])
  // console.log(comment)

  return (
   
    <div className='bg-white shadow-lg rounded-lg mb-8 p-8'>
      <h3 className='text-xl mb-8 font-semibold border-b w-full pb-4'>
        Comments
      </h3>
    </div>
  )
}

export default Comments