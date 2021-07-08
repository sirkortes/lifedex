function AddButton() {
  return (
    <div className='border absolute bottom-2 right-2 flex items-center'>
      <button className='rounded-full font-bold align-middle text-white bg-pink-500 hover:bg-pink-600 py-4 px-6  shadow-lg hover:shadow-outline transition-colors duration-100'>
        <span>+</span>
      </button>
    </div>
  )
}

export default AddButton
