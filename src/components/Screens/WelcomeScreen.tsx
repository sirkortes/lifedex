function WelcomeScreen() {
  return (
    <div className='flex-auto flex-col p-6 font-mono text-blue-500 text-opacity-60 overflow-auto'>
      <h2 className='flex justify-center text-center font-bold text-2xl'>WELCOME TO LIFEDEX</h2>

      <p>
        The Lifedex is a journal encyclopedia application, which is capable of analyzing and retaining information of
        the things you encounter through life.
      </p>
      <p>
        Entries are added to the Lifedex simply by capturing a photo of the item, which is analyzed by our ML models to
        get descriptive information about the elements in the photo and stored for later reference. As you capture more
        of the encounters you get, you level up with the experience you gain!
      </p>

      <h2 className='flex justify-center font-bold text-lg'>
        Use the buttons at the bottom of your Lifedex to capture your first entry!
      </h2>
    </div>
  )
}

export default WelcomeScreen
