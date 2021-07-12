function DexGrid() {
  return (
    <div className='grid grid-cols-4 gap-4 mt-4'>
      <div className='bg-gray-200 rounded-md px-6 py-4'>1</div>
      <div className='bg-gray-200 rounded-md px-6 py-4 col-span-2'>2</div>
      <div className='bg-gray-200 rounded-md px-6 py-4'>3</div>
      <div className='bg-gray-200 rounded-md px-6 py-4'>4</div>
      <div className='bg-gray-200 rounded-md px-6 py-4'>5</div>
      <div className='bg-gray-200 rounded-md px-6 py-4 col-span-2'>6</div>
    </div>
  )
}

export default DexGrid
