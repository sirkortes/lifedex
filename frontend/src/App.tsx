import './App.css'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import HeaderNav from './components/Header/HeaderNav'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [screen, setScreen] = useState('About')

  return (
    <div className='flex flex-col min-h-screen h-screen min-w-full absolute top-0 px-2 md:p-6 lg:p-10 overflow-hidden'>
      {/* back - top */}
      <div id='Top' className='flex-initial text-center py-2'>
        <h1 className='font-bold tracking-wider text-center text-sm text-opacity-20 text-black'>LIFEDEX</h1>
      </div>

      {/* device */}
      <div id='Dex' className='flex flex-grow flex-shrink flex-col justify-end shadow rounded-3xl'>
        <HeaderNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} setScreen={setScreen} />
        <div className='relative flex flex-col flex-auto justify-center'>
          {<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          <MainPage screen={screen} setScreen={setScreen} />
        </div>
      </div>

      {/* back - bottom */}
      <div id='Bottom' className='flex-initial text-center py-2'>
        <h4 className='tracking-wider text-sm text-opacity-20 text-black'>
          <a href='http://www.krizcortes.com' target='_blank' rel='noreferrer'>
            sirkortes
          </a>
        </h4>
      </div>
    </div>
  )
}

export default App
