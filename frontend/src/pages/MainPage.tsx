import AuxDisplay from '../components/AuxDisplay/AuxDisplay'
import MainDisplay from '../components/MainDisplay/MainDisplay'
import AboutScreen from '../components/MainDisplay/AboutScreeen'
import DataScreen from '../components/MainDisplay/DataScreen'
import ProfileScreen from '../components/MainDisplay/ProfileScreen'
import ConfigScreen from '../components/MainDisplay/ConfigScreen'
import UploadScreen from '../components/MainDisplay/UploadScreen'
import TicketScreen from '../components/MainDisplay/TicketScreen'
import AuxStats from './../components/AuxDisplay/AuxStats'
import { useState } from 'react'

interface MainPageProps {
  screen: string
  setScreen: Function
}

// AuxAbout: profile page title
// AuxData : default stats row
// AuxProfile: profile page title
// AuxConfig: config page title
// AuxUpload: upload page title / progress bar + status
// AuxTicket: progress bar + success status

function MainPage({ screen, setScreen }: MainPageProps) {
  const [selectedEntry, setSelectedEntry] = useState(null)

  return (
    <>
      <AuxDisplay>
        {screen === 'Data' ? (
          <AuxStats />
        ) : (
          <div className='flex flex-col flex-auto items-center'>
            <span className='flex font-bold'>{screen}</span>
          </div>
        )}
      </AuxDisplay>

      <MainDisplay>
        {screen === 'About' && <AboutScreen />}
        {screen === 'Data' && <DataScreen {...{ selectedEntry, setSelectedEntry }} />}
        {screen === 'Profile' && <ProfileScreen />}
        {screen === 'Config' && <ConfigScreen />}
        {screen === 'Upload' && <UploadScreen />}
        {screen === 'Ticket' && <TicketScreen />}
      </MainDisplay>

      {/* bottom */}
      <div className='flex justify-center space-x-2 sm:space-x-4 rounded-b-3xl bg-red-400 border-8 border-gray-700 py-4'>
        <button
          onClick={() => setScreen('Data')}
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
