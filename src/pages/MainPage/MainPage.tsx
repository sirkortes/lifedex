// import DexGrid from './../../components/DexGrid/DexGrid'
// import AddButton from './../../components/AddButton/AddButton'

function MainPage() {
  return (
    <section className='flex flex-auto flex-col p-2 border-l-8 border-r-8 border-gray-700 bg-red-500'>
      {/*metal frame */}
      <div className='flex flex-auto flex-col border-4 border-gray-700 bg-gray-300 rounded-3xl px-2 pt-2 shadow'>
        {/* display window */}
        <div className='flex flex-auto border-4 border-gray-700 bg-blue-300 rounded-2xl'>
          {/* no data intro display */}
          {/* data grid display */}
          {/* upload display */}
          {/* data display */}
        </div>
        <div className='flex flex-initial justify-center py-0.25'>
          <span className='rounded-full bg-gray-700 w-2 h-2 m-2'></span>
          <span className='rounded-full bg-gray-700 w-2 h-2 m-2'></span>
        </div>
      </div>
    </section>
  )
}

export default MainPage

// <DexGrid />
// <AddButton />
