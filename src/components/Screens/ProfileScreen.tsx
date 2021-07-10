function ProfileScreen() {
  return (
    <div className='flex-auto flex-col p-2 font-mono text-blue-600 text-opacity-60 overflow-auto space-y-2'>
      <h2 className='flex justify-center text-center'>ACCOUNT</h2>

      {/* row */}
      <div className='flex flex-auto p-4 justify-between'>
        <div className='border-2 flex flex-col justify-start items-start'>
          <div className='span text-xs'>NAME</div>
          <div className='p2 text-lg font-bold text-opacity-60 text-blue-600'>Username</div>
        </div>

        <div className='border-2 flex flex-col justify-end items-end'>
          <div className='span text-xs'>LEVEL</div>
          <div className='p2 text-lg font-bold'>11</div>
        </div>
      </div>

      {/* row */}
      <div className='flex flex-auto p-4 justify-between'>
        <div className='border-2 flex flex-col justify-start items-start'>
          <div className='span text-xs'>EMAIL</div>
          <div className='p2 text-lg font-bold text-opacity-60 text-blue-600'>fulano@testdomain.com</div>
        </div>

        <div className='border-2 flex flex-col justify-end items-end'>
          <div className='span text-xs'>EXP</div>
          <div className='p2 text-lg font-bold'>9001</div>
        </div>
      </div>

      {/* row */}
      <div className='flex flex-auto p-4 justify-between'>
        <div className='border-2 flex flex-col justify-start items-start'>
          <div className='span text-xs'>JOURNEY</div>
          <div className='p2 text-lg font-bold'>157 days since 23 Jan 2021</div>
        </div>
      </div>

      {/* row */}
      <div className='flex flex-auto p-4 justify-between'>
        <div className='border-2 flex flex-col justify-start items-start'>
          <div className='span text-xs'>DATA</div>
          <div className='p2 text-lg font-bold text-opacity-60 text-blue-600'>45 Items | Clear Data</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
