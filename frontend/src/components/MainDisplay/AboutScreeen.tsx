function AboutScreen() {
  return (
    <div className='flex-auto flex-col p-2 font-mono text-blue-600 text-opacity-60 overflow-auto space-y-2'>
      <h2 className='flex justify-center text-center font-bold text-2xl'>WELCOME TO LIFEDEX</h2>

      <p>
        The Lifedex is a journal encyclopedia application, which is capable of analyzing and retaining information of
        the things you encounter through life.
      </p>
      <p>
        Entries are added to the Lifedex simply by capturing a photo of the item. The photo is analyzed by machine
        learning models to extract information about the elements in the photo and they are stored for later reference.
        As you capture more photos of all kinds of encounters through your journey, you will gain experience points and
        level up!
      </p>

      <h2 className='flex justify-center font-bold text-lg'>
        Use the buttons at the bottom of your Lifedex to capture your first entry!
      </h2>
    </div>
  )
}

export default AboutScreen
