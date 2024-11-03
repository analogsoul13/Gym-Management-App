import React, { useState } from 'react'
import Header from '../components/Header'
import { toast } from 'react-toastify'
import { registerApi } from '../services/allApis'

function Authentication() {

  const [authStatus, setAuthStatus] = useState(false)
  const [user, setUser] = useState({
    username: "", email: "", password: ""
  })

  const changeStatus = () => {
    setAuthStatus(!authStatus)
  }

  const handleRegister = async() => {
    console.log(user)
    const { email, username, password } = user
    if (!email || !username || !password) {
      toast.warning("Enter Valid Inputs !!!")
    }
    else{
      const res = await registerApi(user)
      console.log(res)
    }

  }

  return (
    <>
      <div className='h-screen w-full bg-bannerImg flex flex-col items-center bg-no-repeat bg-cover '>
        <Header />
        <div className='flex flex-col sm:flex-row h-screen justify-center items-center'>

          <div className='grid grid-rows-1 rounded-xl gap-4 p-6 w-96'>
            {
              authStatus ?
                <h1 className='text-xl font-semibold mx-auto text-slate-100'>Register</h1>
                :
                <h1 className='text-xl font-semibold mx-auto text-slate-100'>Login</h1>
            }

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" className="grow" placeholder="Email" />
            </label>

            {
              authStatus &&
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" className="grow" placeholder="Username" />
              </label>
            }

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder='Password' />
            </label>
            <div className='flex justify-between'>
              {
                authStatus ?
                  <button onClick={handleRegister} className='btn text-slate-100 btn-outline'>Register</button>
                  :
                  <button className='btn text-slate-100 btn-outline'>Login</button>

              }
              {
                authStatus ?
                  <button onClick={changeStatus} className='btn btn-dark no-underline text-slate-100 btn-link'>Already a user ?</button>
                  :
                  <button onClick={changeStatus} className='btn btn-dark text-slate-100 btn-link'>New User ?</button>
              }

            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Authentication