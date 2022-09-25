import React, { useEffect, useRef, useState } from 'react'
import { submitComment } from '../services'

const CommentsForm = ({slug}) => {
  const commentRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const storeRef = useRef()
  const [error, setError] = useState(false)
  const [showMessage, setShowMessage] = useState(false)


  useEffect(() => {
    nameRef.current.value = window.localStorage.getItem('name')
    emailRef.current.value = window.localStorage.getItem('email')
  }, [])
  

  const handleFormSubmission = () => {
    setError(false)

    const { value : comment} = commentRef.current;
    const { value : name} = nameRef.current;
    const { value : email} = emailRef.current;
    const {checked : storeData} = storeRef.current;

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
    }

    //add new query to services then import here
    submitComment(commentObj)
      .then((res) => {
        setShowMessage(true)

        setTimeout(() => {
          setShowMessage(false)
        }, 3000);
      })
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl border-b font-semibold mb-8 pb-4'>
        Leave a Reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
        className='block rounded-lg w-full h-40 p-4 capitalize outline-0 bg-gray-100 focus:ring-2 focus:ring-gray-200 text-gray-700' 
        name="comment"
        ref={commentRef}
        placeholder='comment'
        required
        ></textarea>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          className='block rounded-lg w-full h-10 px-4 py-2 bg-gray-100 capitalize outline-0 focus:ring-2 focus:ring-gray-200 text-gray-700'
          name='name'
          ref={nameRef}
          type="text" placeholder='name'
          required
          ></input>
        <input 
          className='block rounded-lg w-full h-10 px-4 py-2 bg-gray-100 capitalize outline-0 focus:ring-2 focus:ring-gray-200 text-gray-700'
          ref={emailRef}
          type="email" 
          placeholder='email'
          required
          ></input>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className='ml-2'>
          <input 
          ref={storeRef}
          id="storeData"
          type="checkbox" 
          className='mr-2'
          required
          ></input>
          <label>Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are mandatory</p>}
      <div className="mt-8">
        <button type="button" onClick={handleFormSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showMessage && <p className='text-xs text-green-500'> Comments submitted</p>}
      </div>
    </div>
  )
}

export default CommentsForm