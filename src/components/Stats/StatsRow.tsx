function StatsRow() {
  return (
    <section className='z-10 flex flex-initial pt-2 px-2 sm:px-4 border-l-8 border-r-8 border-gray-700 bg-red-500'>
      <div className='flex flex-auto justify-around bg-gray-800 px-2 py-2 rounded-xl text-white text-sm font-mono'>
        <div className='flex flex-col flex-auto items-center'>
          <span className='flex font-bold'>Level</span>
          <span className='flex'>09</span>
        </div>
        <div className='flex flex-col flex-auto items-center'>
          <span className='flex font-bold'>Captured</span>
          <span className='flex'>31</span>
        </div>
        <div className='flex flex-col flex-auto items-center'>
          <span className='flex font-bold'>Items</span>
          <span className='flex'>10</span>
        </div>
        <div className='flex flex-col flex-auto items-center'>
          <span className='flex font-bold'>People</span>
          <span className='flex'>21</span>
        </div>
      </div>
    </section>
  )
}

export default StatsRow
