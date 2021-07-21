/* eslint-disable jsx-a11y/anchor-is-valid */
function TicketActions() {
  return (
    <div className='px-7 bg-white shadow-lg rounded-2xl mb-5'>
      <div className='flex'>
        <div className='flex-auto hover:w-full group'>
          <a
            href='#'
            className='flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500'>
            <span className='block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow'>
              <i className='far fa-home text-2xl pt-1'></i>
              <span className='hidden group-hover:inline-block ml-3 align-bottom pb-1'>Home</span>
            </span>
          </a>
        </div>
        <div className='flex-auto hover:w-full group'>
          <a
            href='#'
            className='flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500'>
            <span className='block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow'>
              <i className='far fa-compass text-2xl pt-1'></i>
              <span className='hidden group-hover:inline-block ml-3 align-bottom pb-1'>Explore</span>
            </span>
          </a>
        </div>
        <div className='flex-auto hover:w-full group'>
          <a
            href='#'
            className='flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500'>
            <span className='block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow'>
              <i className='far fa-search text-2xl pt-1'></i>
              <span className='hidden group-hover:inline-block ml-3 align-bottom pb-1'>Search</span>
            </span>
          </a>
        </div>
        <div className='flex-auto hover:w-full group'>
          <a
            href='#'
            className='flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500'>
            <span className='block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow'>
              <i className='far fa-cog text-2xl pt-1'></i>
              <span className='hidden group-hover:inline-block ml-3 align-bottom pb-1'>Settings</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TicketActions
