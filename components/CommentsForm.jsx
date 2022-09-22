import React from 'react'

const CommentsForm = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl border-b font-semibold mb-8 pb-4'>
        Leave a Reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
        className='block rounded-lg w-full h-40 p-4 capitalize outline-0 bg-gray-100 focus:ring-2 focus:ring-gray-200 text-gray-700' 
        name="comment"
        placeholder='comment'></textarea>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          className='block rounded-lg w-full h-10 px-4 py-2 bg-gray-100 capitalize outline-0 focus:ring-2 focus:ring-gray-200 text-gray-700'
          name='name'
          type="text" placeholder='name'></input>
        <input 
          className='block rounded-lg w-full h-10 px-4 py-2 bg-gray-100 capitalize outline-0 focus:ring-2 focus:ring-gray-200 text-gray-700'
          type="email" placeholder='email'></input>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className='ml-2'>
          <input type="checkbox" className='mr-2'></input>
          <label>Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      <div className="mt-8">
        <button type="button" className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
      </div>
    </div>
  )
}

export default CommentsForm