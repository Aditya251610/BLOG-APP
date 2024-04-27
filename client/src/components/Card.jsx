import React from 'react'

const Card = () => {
  return (
    <div className='card flex border border-black border-solid rounded'>
      <div className='image'></div>
      <div className="content">
        <h1>Title</h1>
        <p>Content</p>
        <div className='foot'>
          <p>Name</p>
          <p>Date</p>
        </div>
      </div>
    </div>
  )
}

export default Card
