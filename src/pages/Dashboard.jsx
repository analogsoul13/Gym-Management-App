import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Add from '../components/Add'
import Edit from '../components/Edit'
import { getClientsApi } from '../services/allApis'

function Dashboard() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`
    }
    const res = await getClientsApi(header)
    console.log(res)
    if (res.status == 200) {
      setClients(res.data)
    }
  }

  return (
    <>
      <div className='bg-black h-screen flex space-y-2 font-google flex-col'>
        <Header />
        <h1 className='text-slate-100 text-xl mx-auto'>All Members</h1>
        <div className='flex justify-center md:justify-start w-full'>
          <Add />
        </div>

        {/* <button className='btn mx-auto'>Add</button> */}
        <div className="overflow-x-auto mx-6 sm:mx-14">
          {
            clients.length > 0 ?
              <table className="table text-white glass">
                {/* head */}
                <thead>
                  <tr className='text-slate-100'>
                    <th>Id </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {/* row 1 */}
                  {
                    clients.map((item, index) => (
                      <tr>
                        <th>{index + 1}</th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                  alt="profile" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{item.first_name} {item.last_name}</div>
                              <div className="text-sm opacity-50">New</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {item.phone}
                          <br />
                          {/* <span className="badge hidden sm:block badge-ghost badge-sm">Desktop Support Technician</span> */}
                        </td>
                        <td>
                          <button className="btn btn-ghost btn-sm">{item.email}</button>
                        </td>
                        <th>
                          <div className='flex gap-2'>
                            <Edit />
                            <button className='btn btn-error'>Delete</button>
                          </div>

                        </th>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
              :
              <h3 className='text-center text-2xl text-slate-400 uppercase'>No Members added yet !</h3>
          }

        </div>
      </div>

    </>
  )
}

export default Dashboard