import React from 'react'
import { useRef } from 'react'

function Edit() {
  const modalRef = useRef(null)

  //Function to open modal
  const openModal = () => {
    modalRef.current.showModal()
  }

  //Function to close modal
  const closeModal = () => {
    modalRef.current.close()
  }
  return (
    <>
      {/* Modal for adding new book */}
      <button onClick={openModal} className='btn btn-outline text-slate-100 shadow-lg'>Edit</button>
      <dialog id="my_modal_1" ref={modalRef} className="modal">
        <div className="modal-box space-y-2">
          <h1 className='text-slate-700 text-lg p-2'>Edit Details</h1>
          <div className='flex justify-center '>
            <label>
              <input type="file" className='hidden' />
              <img className='w-32 h-32 shadow-lg rounded-full' src="https://cdn1.iconfinder.com/data/icons/rounded-black-basic-ui/139/Photo_Add-RoundedBlack-512.png" alt="Member img" srcset="" />
            </label>

          </div>
          {/* First Name */}
          <label className="input input-bordered flex items-center gap-2">
            <i className="fa-solid fa-book" style={{ color: "#808080", }} />
            <input name='first_name' type="text" className="grow" placeholder="First Name" />
          </label>
          {/* Last Name */}
          <label className="input input-bordered flex items-center gap-2">
            <i className="fa-solid fa-book" style={{ color: "#808080", }} />
            <input name='last_name' type="text" className="grow" placeholder="Last Name" />
          </label>
          {/* Phone */}
          <label className="input input-bordered flex items-center gap-2">
            <i className="fa-solid fa-user fa-xs" style={{ color: "#808080", }} />
            <input name='phone' type="number" className="grow" placeholder="Phone" />
          </label>
          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <i className="fa-solid fa-user fa-xs" style={{ color: "#808080", }} />
            <input name='email' type="text" className="grow" placeholder="Email" />
          </label>

          <div className="modal-action pt-2">
            <button className='btn btn-outline btn-success me-2'>Update</button>
            <button onClick={closeModal} className="btn btn-outline btn-error">Close</button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Edit