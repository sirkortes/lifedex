import './App.css'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'
import StatsRow from './components/Stats/StatsRow'
import AddButton from './components/AddButton/AddButton'

function App() {
  return (
    <div className='container mx-auto h-screen p-2 md:p-6 lg:p-10'>
      <div className='container mx-auto shadow-lg rounded-3xl'>
        <Header />
        <StatsRow />
        <MainPage />
        <AddButton />
      </div>
    </div>
  )
}

export default App
