import StatsRow from './../../components/Stats/StatsRow'
import DisplayPanel from './../../components/DisplayPanel/DisplayPanel'

interface MainPageProps {
  screen: string
  setScreen: Function
}

function MainPage({ screen, setScreen }: MainPageProps) {
  return (
    <>
      <StatsRow />
      <DisplayPanel screen={screen} setScreen={setScreen} />
      <div className='z-10 flex justify-center rounded-b-3xl bg-red-400 border-8 border-gray-700 py-4'>
        <button
          onClick={() => setScreen('Upload')}
          className='rounded-full border-4 border-gray-700 bg-green-500 hover:bg-green-700 py-2 px-10 shadow hover:shadow-outline transition-colors duration-100'></button>
      </div>
    </>
  )
}

export default MainPage
