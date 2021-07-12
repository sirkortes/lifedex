import { ReactNode } from 'react'

function MainDisplay({ children }: { children: ReactNode[] }) {
  return (
    <section className='relative flex flex-grow border-l-8 border-r-8 border-gray-700 bg-red-500'>
      <div
        className='absolute bottom-0 left-0 flex flex-col h-full max-h-full min-h-full
        border-8 border-opacity-0 mx-auto w-full min-w-full'>
        <div
          className='relative bottom-0 right-0 flex flex-auto flex-col h-full max-h-full min-h-full w-full
        border-4 border-gray-700 bg-gray-300 rounded-3xl px-2 py-2 shadow'>
          <div
            className='relative min-h-0 h-full top-0 flex flex-auto flex-col justify-center
          align-middle border-4 border-gray-700 bg-blue-300 rounded-2xl p-4'>
            {/* children: screens */}
            {children}
          </div>
          <div className='flex justify-center py-0.25 space-x-2 mx-auto'>
            <span className='rounded-full bg-gray-700 w-2 h-2 mt-2'></span>
            <span className='rounded-full bg-gray-700 w-2 h-2 mt-2'></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainDisplay
