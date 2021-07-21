interface HeaderNavProps {
  loggedIn: boolean
  setLoggedIn: Function
  setScreen: Function
}

function HeaderNav({ loggedIn, setLoggedIn, setScreen }: HeaderNavProps) {
  const baseStyle =
    'rounded-full border-gray-700 hover:shadow-inner cursor-pointer shadow-xl hover:shadow-outline transition-all duration-500 bg-gradient-to-br '
  const inactiveStyle = 'from-gray-200 via-gray-300 to-gray-400 hover:from-gray-300 hover:to-gray-400'
  const logoutStyle = 'from-red-100 via-red-400 to-red-600 hover:from-red-400 hover:to-red-600'
  const configStyle = 'from-green-100 via-green-400 to-green-600 hover:from-green-400 hover:to-green-600'
  const aboutStyle = 'from-yellow-100 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:to-yellow-600'
  const profileStyle = 'from-blue-100 via-blue-400 to-blue-600 hover:from-blue-400 hover:to-blue-600'

  return (
    <header className='flex rounded-t-3xl bg-red-400 border-8 border-gray-700 pr-4'>
      <nav className='rounded-tl-2xl border-t-8 border-l-8 border-red-200 border-opacity-60 flex flex-1 py-3 pl-4'>
        {/* Left */}
        <div className='flex flex-1'>
          <button
            onClick={() => loggedIn && setScreen('Profile')}
            className={`border-8 w-16 h-16 ${baseStyle} ${loggedIn ? profileStyle : inactiveStyle}`}></button>
        </div>

        {/* Right */}
        <div className='flex flex-1 items-center justify-around'>
          <button
            onClick={() => loggedIn && setScreen('About')}
            className={`border-4 w-8 h-8 ${baseStyle} ${loggedIn ? aboutStyle : inactiveStyle}`}
            id='info'></button>

          <button
            onClick={() => loggedIn && setScreen('Config')}
            className={`border-4 w-8 h-8 ${baseStyle} ${loggedIn ? configStyle : inactiveStyle}`}
            id='edit'></button>

          <button
            onClick={() => loggedIn && setLoggedIn(false)}
            className={`border-4 w-8 h-8 ${baseStyle} ${loggedIn ? logoutStyle : inactiveStyle}`}
            id='logout'></button>
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav
