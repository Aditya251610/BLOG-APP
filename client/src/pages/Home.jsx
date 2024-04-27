import React from 'react'
import { IoSearch } from "react-icons/io5";
import Card from '../components/Card';

const Home = () => {
  return (
    <div className='px-3 py-3'>
      <h1>Discover Delicious Homemade Meals Here</h1>
      <p>
        Join our community and start sharing your favourite hommade meal with food 
        enthusiasts around the world.
      </p>
      <button className='bg-red-500 font-bold rounded px-3 py-3 mt-3'>Read Now</button>
      <div className="mt-3 flex items-center">
        <h2 className='mx-auto'>Featured Posts</h2>
      </div>
      <form className='flex items-center mt-3'>
        <div className="flex items-center relative mx-auto">
          <input placeholder='Search' className='border border-black-500 border-solid rounded-3xl py-3 px-2'/>
          <IoSearch className='absolute ml-44' />
        </div>
      </form>
      <Card />
    </div>
  )
}

export default Home
