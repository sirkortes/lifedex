function ConfigScreen() {
  return (
    <div className='flex flex-auto flex-col p-6 font-mono text-blue-500 text-opacity-60 overflow-auto space-y-2'>
      <div className='bg-blue-500 flex flex-initial flex-grow w-full h-2'>test</div>
      <h2 className='flex flex-grow justify-center text-center'>CONFIG SCREEN</h2>
      <div>Username</div>
      <div>Email</div>
      <div>Experience</div>
      <div>Color Theme</div>
      <div>Captured Data</div>
      <div>-------------------------------------------------------------------------</div>
    </div>
  )
}

export default ConfigScreen
