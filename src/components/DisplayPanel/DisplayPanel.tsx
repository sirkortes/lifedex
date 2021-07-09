import DataScreen from '../Screens/DataScreen'
import WelcomeScreen from './../Screens/WelcomeScreen'
import AboutScreen from './../Screens/AboutScreen'
import ProfileScreen from './../Screens/ProfileScreen'
import UploadScreen from './../Screens/UploadScreen'
import TicketScreen from './../Screens/TicketScreen'
import ConfigScreen from './../Screens/ConfigScreen'

interface DisplayPanelProps {
  screen: string
  setScreen: Function
}

function DisplayPanel({ screen, setScreen }: DisplayPanelProps) {
  return (
    // container
    <section className='relative flex flex-grow sm:px-4 border-l-8 border-r-8 border-gray-700 bg-red-500'>
      {/*metal frame (section) */}
      <div
        className='absolute bottom-0 left-0 flex flex-col h-full max-h-full min-h-full
        border-4 border-gray-700 bg-gray-300 rounded-3xl px-2 py-2 m-2 shadow'>
        {/* display window (should scroll) */}
        <div
          className='z-50 relative h-full top-0 flex flex-col flex-grow flex-shrink min-h-0 justify-center
          align-middle border-4 border-gray-700 bg-blue-300 rounded-2xl'>
          {screen === 'Welcome' && <WelcomeScreen />}
          {screen === 'Data' && <DataScreen />}
          {screen === 'About' && <AboutScreen />}
          {screen === 'Profile' && <ProfileScreen />}
          {screen === 'Config' && <ConfigScreen />}
          {screen === 'Upload' && <UploadScreen />}
          {screen === 'Ticket' && <TicketScreen />}
        </div>
        {/* panel decor */}
        <div className='flex justify-center py-0.25 space-x-2 mx-auto'>
          <span className='rounded-full bg-gray-700 w-2 h-2 mt-2'></span>
          <span className='rounded-full bg-gray-700 w-2 h-2 mt-2'></span>
        </div>
      </div>
    </section>
  )
}

export default DisplayPanel
