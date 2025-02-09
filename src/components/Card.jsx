import React from 'react'

const Card = ({ elem, idx }) => {
  return (
    <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
      <img className='h-40' src={elem.download_url} alt="" />
      <h1>{elem.author}</h1>
    </div>
  )
}

export default Card
