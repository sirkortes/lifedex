import StatsRow from './../../components/Stats/StatsRow'
import DisplayPanel from './../../components/DisplayPanel/DisplayPanel'

interface MainPageProps {
  screen: string
  setScreen: Function
}

function MainPage({ screen, setScreen }: MainPageProps) {
  return (
    // <div className='flex flex-col justify-center w-full absolute bottom-0'>
    <>
      <StatsRow />
      <DisplayPanel screen={screen} setScreen={setScreen} />
      {/* bottom */}
      <div className='flex justify-center space-x-2 sm:space-x-4 rounded-b-3xl bg-red-400 border-8 border-gray-700 py-4'>
        <button
          onClick={() => setScreen('Welcome')}
          className='rounded-full border-4 border-gray-700 bg-red-500 hover:bg-red-700 py-2 px-10 shadow hover:shadow-outline transition-colors duration-100'></button>
        <button
          onClick={() => setScreen('Upload')}
          className='rounded-full border-4 border-gray-700 bg-green-500 hover:bg-green-700 py-2 px-10 shadow hover:shadow-outline transition-colors duration-100'></button>
      </div>
      {/* </div> */}
    </>
  )
}

export default MainPage
