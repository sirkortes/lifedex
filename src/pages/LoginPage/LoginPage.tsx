/* eslint-disable jsx-a11y/anchor-is-valid */
//  { ${ loggedIn ? '' : 'max-h-full h-full' }`}

import { useState } from 'react'

interface LoginPageProps {
  loggedIn: boolean
  setLoggedIn: Function
}

function LoginPage({ loggedIn, setLoggedIn }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section
      id='LoginContainer'
      className={`z-10 flex justify-center min-h-full h-full w-full rounded-b-3xl border-b-8 border-l-8 border-r-8 border-gray-700 absolute bottom-0 overflow-hidden pointer-events-none`}>
      {/* wrapper for hiding animation */}
      <div
        className={`flex justify-center absolute bg-red-400 w-full h-full transition-height ${
          !loggedIn ? 'duration-300 ease-linear bottom-0' : 'duration-500 ease-in -bottom-full'
        }`}
        style={{ pointerEvents: 'all' }}>
        <div className='flex flex-auto flex-col justify-center items-center border-l-8 border-red-200 border-opacity-60'>
          {/* info container */}
          <div className='flex flex-auto py-2 flex-col justify-center'>
            {/* title */}
            <div className='flex flex-auto flex-col justify-center text-center align-middle'>
              <h1 className='flex justify-center text-center font-bold text-opacity-50 text-red-800 text-4xl font-mono'>
                LIFEDEX
              </h1>
              <p className='flex text-sm text-black'>Please sign in to your account</p>
            </div>

            {/* social media */}
            <div className='flex flex-auto flex-row justify-center items-center space-x-3'>
              <span className='w-8 h-8 items-center justify-center inline-flex rounded-full text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300'>
                <img
                  alt='facebook-logo'
                  className='w-4 h-4'
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+'
                />
              </span>

              <span className='w-8 h-8 items-center justify-center inline-flex rounded-full text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300'>
                <img
                  alt='twitter-logo'
                  className='w-4 h-4'
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=='
                />
              </span>

              <span className='w-8 h-8 items-center justify-center inline-flex rounded-full text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300'>
                <img
                  alt='linkedin-logo'
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=='
                  className='w-4 h-4'
                />
              </span>
            </div>

            {/* divider */}
            <div className='flex flex-auto items-center justify-center space-x-2'>
              <span className='h-px w-16 bg-black opacity-20'></span>
              <span className='text-black font-normal'>OR</span>
              <span className='h-px w-16 bg-black opacity-20'></span>
            </div>
          </div>
          {/* form panel */}
          <div className='flex flex-auto'>
            <form
              className='flex flex-auto flex-col justify-around align-middle items-center content-center px-3 sm:px4'
              action='#'
              method='POST'>
              <input type='hidden' name='remember' value='true' />

              {/* email input */}
              <div className='flex flex-col relative'>
                <div className='absolute right-1 bottom-2 mt-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                  </svg>
                </div>

                <label className='text-sm text-black text-opacity-50 tracking-wide'>Email</label>
                <input
                  className=' w-full text-base text-black text-opacity-90 p-2 border-b border-red-300 border-opacity-60 shadow-inner rounded-md bg-red-500 bg-opacity-40 focus:outline-none focus:border-red-200 placeholder-white placeholder-opacity-30'
                  type='email'
                  placeholder='mail@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* password input */}
              <div className='flex flex-col content-center'>
                <label className='text-sm text-black text-opacity-50 tracking-wide'>Password</label>
                <input
                  className='w-full content-center text-base text-black text-opacity-90 p-2 border-b border-red-300 border-opacity-60 shadow-inner rounded-md bg-red-500 bg-opacity-40 focus:outline-none focus:border-red-200 placeholder-white placeholder-opacity-30'
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* forgot pass  */}
              <div className='flex mt-0 text-sm'>
                <a href='' className='font-medium text-black text-opacity-30 hover:text-opacity-100 mt-0'>
                  Forgot your password?
                </a>
              </div>

              {/* submit btn */}
              <div className='flex w-full justify-center'>
                <button
                  onClick={() => setLoggedIn(true)}
                  type='button'
                  className='flex flex-auto justify-center bg-indigo-500 text-gray-100 pt-1 px-6 border-4 border-gray-700 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow cursor-pointer transition ease-in duration-75'>
                  <div className='flex flex-initial justify-center pt-1 pb-1 border-t-4 border-blue-200'>Sign in</div>
                </button>
              </div>

              {/* sign up block */}
              <p className='flex flex-col items-center justify-center text-center text-sm text-black text-opacity-50'>
                <span>Don't have an account?</span>
                <a
                  href='#'
                  className='text-black text-opacity-50 hover:text-opacity-100 font-bold no-underline cursor-pointer transition ease-in duration-75'>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
