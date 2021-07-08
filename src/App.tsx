import './App.css'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'
import StatsRow from './components/Stats/StatsRow'
import AddButton from './components/AddButton/AddButton'

function App() {
  return (
    <div className='flex flex-col container mx-auto h-screen px-2 md:p-6 lg:p-10'>
      <div id='Top' className='flex flex-initial justify-center py-2'>
        <h1 className='flex font-bold tracking-wider text-center text-lg text-opacity-20 text-black'>LIFEDEX</h1>
      </div>

      <div id='Dex' className='flex flex-auto flex-col justify-center container mx-auto shadow-md rounded-3xl'>
        <Header />
        <StatsRow />
        <MainPage />
        <AddButton />
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
