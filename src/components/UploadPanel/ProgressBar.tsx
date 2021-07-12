function ProgressBar() {
  return (
    <>
      <h1 className=' pl-10 pt-2 sm:pt-5 text-white sm:pl-80'>
        Java Script <span className=' text-xs text-indigo-500'>10%</span>
      </h1>
      <div className='mb-10 mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden'>
        <div className=' w-full h-full bg-gray-200 absolute '></div>
        <div className=' h-full bg-indigo-500 sm:bg-gray-600 absolute' style={{ width: '10%' }}></div>
      </div>
    </>
  )
}

export default ProgressBar
