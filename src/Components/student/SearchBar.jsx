import React from 'react'
import assets from '../../assets/assets'
import { useNavigate } from 'react-router-dom'  

const SearchBar = () => {
  
  return (
    <div>
        <form className='' > 
          <img src={assets.search_icon} alt="search icon" className='md:w-auto w-10 px-3 ' />
          <input type="text" placeholder="Search courses..." className='w-full h-full outline-none
          text-gray-500/80' />
          <button type="submit" className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
          </form>
    </div>
  )  
}
22
export default SearchBar