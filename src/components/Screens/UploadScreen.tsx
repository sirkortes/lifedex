import { useState } from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */
function UploadScreen() {
  const [imgUrl, setImgUrl] = useState('')

  return (
    <div className='flex-auto flex-col p-2 font-mono text-blue-600 text-opacity-60 overflow-auto space-y-2'>
      <h2 className='flex justify-center text-center font-bold text-xl w-full'>Capture new data</h2>

      <div className='text-sm py-4'>
        <ol className='list-decimal list-inside'>
          <li>Enter the URL of the image you wish to scan.</li>
          <li>Hit upload to have machine learning models analyze the image and report what they find.</li>
          <li>You can save, share or delete the results.</li>
        </ol>
      </div>

      {/* upload panel */}
      <div className='flex flex-col flex-auto mt-4'>
        <form className='space-y-3' action='#' method='POST'>
          <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center'>
              <label className='text-sm text-black text-opacity-50 tracking-wide'>Image URL</label>
              <input
                className=' w-full text-base text-black text-opacity-90 p-2 
                  border-b border-blue-300 border-opacity-60 shadow-inner rounded-md bg-blue-500 bg-opacity-20 focus:outline-none focus:border-blue-200 placeholder-white placeholder-opacity-60'
                type=''
                placeholder='http://www.web.com/image.jpg'
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
            {/* <label className='flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center'>
              <div className='h-full w-full text-center flex flex-col items-center justify-center'>
                <p className='pointer-none'>
                  <span className='text-sm'>Drag and drop</span> files here <br /> or{' '}
                  <a href='' id='' className='text-white hover:underline'>
                    select a file
                  </a>{' '}
                  from your computer
                </p>
              </div>
              <input type='file' className='hidden' />
            </label> */}
          </div>
          <p className='text-sm'>
            <span>File type: jpg image</span>
          </p>
          <div>
            {/* <button
              type='submit'
              className='my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300'>
              Upload
            </button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadScreen
