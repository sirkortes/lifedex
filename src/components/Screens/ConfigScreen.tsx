function ConfigScreen() {
  return (
    <div className='flex-auto flex-col p-6 font-mono text-blue-600 text-opacity-60 overflow-auto space-y-2'>
      <h2 className='flex justify-center text-center'>PREFERENCES</h2>

      <div className='border-2 flex justify-between'>
        <div className='span'>Name</div>
        <div className='p2'>Field</div>
      </div>

      <div className='border-2 flex justify-between'>
        <div className='span'>Level</div>
        <div className='p2'>Field</div>
      </div>

      <div className='border-2 flex justify-between'>
        <div className='span'>Email</div>
        <div className='p2'>Field</div>
      </div>

      <div className='border-2 flex justify-between'>
        <div className='span'>Experience</div>
        <div className='p2'>Field</div>
      </div>

      <div className='border-2 flex justify-between'>
        <div className='span'>Account Data</div>
        <div className='p2'>Field</div>
      </div>

      <div className='border-2 flex justify-between'>
        <div className='span'>Color Theme</div>
        <div className='p2'>Field</div>
      </div>
    </div>
  )
}

export default ConfigScreen
