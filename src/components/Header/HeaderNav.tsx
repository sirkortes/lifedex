interface HeaderNavProps {
  loggedIn: boolean
  setLoggedIn: Function
}

function HeaderNav({ loggedIn, setLoggedIn }: HeaderNavProps) {
  return (
    <header className='flex rounded-t-3xl bg-red-400 border-8 border-gray-700 pr-4'>
      <nav className='rounded-tl-2xl border-t-8 border-l-8 border-red-200 border-opacity-60 flex flex-1 pt-2 pl-4 pb-2'>
        {/* Left */}
        <div className='flex flex-1'>
          <button
            className='bg-gradient-to-br from-blue-100 via-blue-400 to-blue-600 
                    hover:from-blue-400 hover:to-blue-600 hover:shadow-inner border-8 border-gray-700
                      font-medium text-white text-center text-2xl 
                      cursor-pointer rounded-full w-20 h-20 
                      shadow-xl hover:shadow-outline transition-colors duration-100'></button>
        </div>
        {/* Right */}
        {/* Action Buttons */}
        <div className='flex flex-1 items-center justify-around'>
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
            onClick={() => setLoggedIn(false)}
            className='w-8 h-8 rounded-full border-4 border-gray-700
              bg-gradient-to-br from-red-100 via-red-400 to-red-600 
              hover:from-red-400 hover:to-red-600 hover:shadow-inner cursor-pointer'
            id='logout'></button>
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav
