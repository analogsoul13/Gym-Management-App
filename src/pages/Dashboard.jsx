import React from 'react'
import Header from '../components/Header'
import Add from '../components/Add'
import Edit from '../components/Edit'

function Dashboard() {
  return (
    <>
      <div className='bg-black h-screen flex space-y-2 font-google flex-col'>
        <Header />
        <h1 className='text-slate-100 text-xl mx-auto'>All Members</h1>
        <Add/>
        {/* <button className='btn mx-auto'>Add</button> */}
        <div className="overflow-x-auto mx-14">
          <table className="table text-white glass">
            {/* head */}
            <thead>
              <tr className='text-slate-100'>
                <th>Id </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  1
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge hidden sm:block badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>
                  <div className='flex gap-2'>
                    <Edit/>
                    <button className='btn btn-error'>Delete</button>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">testghj@gmail.com</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default Dashboard