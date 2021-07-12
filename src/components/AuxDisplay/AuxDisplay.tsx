import { ReactNode } from 'react'

function AuxDisplay({ children }: { children: ReactNode }) {
  return (
    <section className='flex flex-initial pt-2 px-2 sm:px-4 border-l-8 border-r-8 border-gray-700 bg-red-500'>
      <div className='flex flex-auto justify-around bg-gray-800 px-2 py-2 rounded-xl text-white font-mono text-xs sm:text-sm md:text-base'>
        {/* children: aux displays */}
        {children}
      </div>
    </section>
  )
}

export default AuxDisplay
