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
    <section className='z-10 flex flex-auto flex-col py-2 px-2 sm:px-4 border-l-8 border-r-8 border-gray-700 bg-red-500'>
      {/*metal frame */}
      <div className='flex flex-auto flex-col border-4 border-gray-700 bg-gray-300 rounded-3xl px-2 pt-2 shadow'>
        {/* display window */}
        <div className='flex flex-col justify-center align-middle font-mono flex-auto border-4 border-gray-700 bg-blue-300 rounded-2xl'>
          {screen === 'Welcome' && <WelcomeScreen />}
          {screen === 'Data' && <DataScreen />}
          {screen === 'About' && <AboutScreen />}
          {screen === 'Profile' && <ProfileScreen />}
          {screen === 'Config' && <ConfigScreen />}
          {screen === 'Upload' && <UploadScreen />}
          {screen === 'Ticket' && <TicketScreen />}
        </div>
        <div className='flex flex-initial justify-center py-0.25'>
          <span className='rounded-full bg-gray-700 w-2 h-2 m-2'></span>
          <span className='rounded-full bg-gray-700 w-2 h-2 m-2'></span>
        </div>
      </div>
    </section>
  )
}

export default DisplayPanel
