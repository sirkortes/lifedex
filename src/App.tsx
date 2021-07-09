import './App.css'
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { useState } from 'react'
import HeaderNav from './components/Header/HeaderNav'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [screen, setScreen] = useState('Data')

  return (
    <div className='flex flex-col container mx-auto h-screen px-2 md:p-6 lg:p-10'>
      <div id='Top' className='flex flex-initial justify-center py-2'>
        <h1 className='flex font-bold tracking-wider text-center text-lg text-opacity-20 text-black'>LIFEDEX</h1>
      </div>

      <div id='Dex' className='relative flex flex-auto flex-col justify-end container mx-auto shadow-md rounded-3xl'>
        <HeaderNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} setScreen={setScreen} />
        <div className='relative flex flex-col flex-auto justify-center'>
          {<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          <MainPage screen={screen} setScreen={setScreen} />
        </div>
      </div>

      <div id='Bottom' className='flex flex-initial justify-center py-2'>
        <h4 className='flex tracking-wider text-center text-sm text-opacity-20 text-black'>
          <a href='http://www.krizcortes.com' target='_blank' rel='noreferrer'>
            sirkortes
          </a>
        </h4>
      </div>
    </div>
  )
}

export default App
