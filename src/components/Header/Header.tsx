import './Header.css'
// import ProfileButton from '../ProfileButton/ProfileButton'
function Head() {
  return (
    <header className='flex rounded-t-3xl bg-red-400 border-8 border-gray-700 pr-6'>
      {/* Left */}
      <div className='flex flex-1 border-red-100 border-l-8 border-t-8 rounded-tl-2xl py-4 pl-8'>
        <button
          className='bg-gradient-to-br from-blue-100 via-blue-400 to-blue-600 
                    hover:from-blue-400 hover:to-blue-600 hover:shadow-inner border-8 border-gray-700
                      font-medium text-white text-center text-2xl 
                      cursor-pointer rounded-full w-20 h-20 
                      shadow-xl hover:shadow-outline transition-colors duration-100'></button>
      </div>

      {/* Right */}
      <div className='flex flex-1 flex-col justify-start border-t-8 border-red-100'>
        {/* Title */}
        <div className='py-2'>
          <h1 className='font-bold tracking-wider text-center text-lg text-opacity-20 text-black'>LIFEDEX</h1>
        </div>
        {/* Action Buttons */}
        <div className='flex justify-around'>
          {/* Info Button */}
          <button
            className='w-8 h-8 rounded-full border-4 border-gray-700
              bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 
              hover:from-yellow-400  hover:to-yellow-600 hover:shadow-inner cursor-pointer '
            id='info'></button>

          {/* Edit Button */}
          <button
            className='w-8 h-8 rounded-full border-4 border-gray-700
              bg-gradient-to-br from-green-100 via-green-400 to-green-600 
              hover:from-green-400 hover:to-green-600 hover:shadow-inner cursor-pointer'
            id='edit'></button>

          {/* Log Out */}
          <button
            className='w-8 h-8 rounded-full border-4 border-gray-700
              bg-gradient-to-br from-red-100 via-red-400 to-red-600 
              hover:from-red-400 hover:to-red-600 hover:shadow-inner cursor-pointer'
            id='logout'></button>
        </div>
      </div>
    </header>
  )
}

export default Head
