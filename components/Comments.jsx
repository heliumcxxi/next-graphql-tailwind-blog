import React, { useEffect, useState } from 'react'
import {getComments} from '../services'
import moment from 'moment'
import parse from 'html-react-parser'

const Comments = ({slug}) => {
  const [comment, setComment] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((result) => {setComment(result)})
  }, [])
 

  return (
   
    <div className='bg-white shadow-lg rounded-lg mb-8 p-8'>
      <h3 className='text-xl mb-8 font-semibold border-b w-full pb-4'>
        {comment.length} {' '}Comments
      </h3>
      {comment.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
    </div>
  )
}

export default Comments