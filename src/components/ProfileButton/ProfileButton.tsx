import './ProfileButton.css'

function ProfileButton() {
  return (
    <div>
      <div className='rounded-full p-1 bg-opacity-50 shadow-inner bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400'>
        <button
          className='bg-gradient-to-br from-blue-100 via-blue-400 to-blue-600 
        hover:from-blue-300 hover:via-blue-600 hover:to-blue-800
        font-medium text-white text-center text-2xl 
        cursor-pointer rounded-full w-16 h-16 
        shadow-lg hover:shadow-outline transition-colors duration-100'>
          P
        </button>
      </div>
    </div>
  )
}

export default ProfileButton
