import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import base_url from '../services/base_url'
import { toast } from 'react-toastify'
import { updateClientApi } from '../services/allApis'

function Edit({client}) {
  const modalRef = useRef(null)

  //Function to open modal
  const openModal = () => {
    modalRef.current.showModal()
  }
  // image preview
  const [data, setData] = useState({
    first_name:"", last_name:"", email:"", phone:"", image:""
  })

  const [preview, setPreview] = useState("") // image preview after change

  useEffect(()=>{
    setData({...client})
  },[])
  //console.log(data)

  useEffect(()=>{
    if(data.image.type){
      setPreview(URL.createObjectURL(data.image))
    }
    else{
      setPreview("")
    }
  },[data.image])

  const handleEdit = async()=>{
    console.log(data)
    const {first_name, last_name, email, phone, image} = data
    if(!first_name || !last_name || !email || !phone ||!image){
      toast.warning("Invalid Inputs")
    }
    else{
      if(data.image.type){
        const fd = new FormData()
        fd.append('first_name',first_name)
        fd.append('last_name',first_name)
        fd.append('email',email)
        fd.append('phone',phone)
        fd.append('image',image)

        const header={
          'Content-Type':"multipart/formdata",
          'Authorization':`Token ${sessionStorage.getItem('token')}`
        }

        const res = await updateClientApi(client._id,header,fd)
        console.log(res)
        if(res.status==200){
          toast.success("Details Updated !")
          closeModal()
        }
        else{
          toast.error("Something went wrong...updation failed!!")
        }
      }
      else{
        const header={
          'Content-Type':"application/json",
          'Authorization':`Token ${sessionStorage.getItem('token')}`

        }

        const res = await updateClientApi(client._id,header,data)
        console.log(res)
        
        if(res.status==200){
          toast.success("Details Updated !")
          closeModal()
        }
        else{
          toast.error("Something went wrong...updation failed!!")
        }
      }
    }
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
              <input type="file" onChange={(e)=>setData({...data,image:e.target.files[0]})} className='hidden' />
              <img className='w-32 h-32 shadow-lg rounded-full' src={preview?preview:`${base_url}/uploads/${data.image}`} alt="Member img" />
            </label>

          </div>
          {/* First Name */}
          <label className="input input-bordered text-slate-700 flex items-center gap-2">
            <i className="fa-solid fa-book" style={{ color: "#808080", }} />
            <input onChange={(e)=>setData({...data,first_name:e.target.value})} name='first_name' type="text" defaultValue={data.first_name} className="grow" placeholder="First Name" />
          </label>
          {/* Last Name */}
          <label className="input input-bordered text-slate-700 flex items-center gap-2">
            <i className="fa-solid fa-book" style={{ color: "#808080", }} />
            <input onChange={(e)=>setData({...data,last_name:e.target.value})} name='last_name' type="text" defaultValue={data.last_name} className="grow" placeholder="Last Name" />
          </label>
          {/* Phone */}
          <label className="input input-bordered text-slate-700 flex items-center gap-2">
            <i className="fa-solid fa-user fa-xs" style={{ color: "#808080", }} />
            <input onChange={(e)=>setData({...data,phone:e.target.value})} name='phone' type="number" defaultValue={data.phone} className="grow" placeholder="Phone" />
          </label>
          {/* Email */}
          <label className="input input-bordered text-slate-700 flex items-center gap-2">
            <i className="fa-solid fa-user fa-xs" style={{ color: "#808080", }} />
            <input onChange={(e)=>setData({...data,email:e.target.value})} name='email' type="text" defaultValue={data.email} className="grow" placeholder="Email" />
          </label>

          <div className="modal-action pt-2">
            <button onClick={handleEdit} className='btn btn-outline btn-success me-2'>Update</button>
            <button onClick={closeModal} className="btn btn-outline btn-error">Close</button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Edit