import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { addClientApi } from '../services/allApis';

function Add() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const [client, setClient] = useState({
    first_name: '', last_name: '', email: '', phone: '', image: null
  });
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (client.image) {
      setPreview(URL.createObjectURL(client.image));
    } else {
      setPreview('');
    }
  }, [client.image]);

  useEffect(() => {
    if (!isModalOpen) {
      setClient({
        first_name: '', last_name: '', email: '', phone: '', image: null
      });
      setPreview('');
    }
  }, [isModalOpen]);

  const openModal = () => {
    setAnimationClass('animate-fadeIn');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setAnimationClass('animate-fadeOut');
    setTimeout(() => setIsModalOpen(false), 300); // Delay to allow fade-out animation to finish
  };

  const handleAddClient = async () => {
    const { first_name, last_name, email, phone, image } = client;
    if (!first_name || !last_name || !email || !phone || !image) {
      toast.warning('Enter Valid Input');
    } else {
      const fd = new FormData();
      fd.append('first_name', first_name);
      fd.append('last_name', last_name);
      fd.append('email', email);
      fd.append('phone', phone);
      fd.append('image', image);

      const header = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${sessionStorage.getItem('token')}`
      };
      const res = await addClientApi(fd, header);
      if (res.status === 201) {
        toast.success('Client Details Added Successfully!');
        closeModal();
      } else {
        toast.error('Adding Failed!');
      }
    }
  };

  return (
    <>
      <button onClick={openModal} className='btn mx-14 shadow-lg'>Add Member +</button>
      {isModalOpen && (
        <dialog
          id="my_modal_1"
          open
          className={`modal ${animationClass} fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900`}
        >
          <div className="modal-box space-y-2">
            <h1 className='text-slate-700 text-lg p-2'>Enter the Details of Member</h1>
            <div className='flex justify-center text-slate-700 font-light'>
              <label>
                <input onChange={(e) => setClient({ ...client, image: e.target.files[0] })} type="file" className='hidden' />
                <img className='w-32 h-32 shadow-lg rounded-full' src={preview || "https://cdn1.iconfinder.com/data/icons/rounded-black-basic-ui/139/Photo_Add-RoundedBlack-512.png"} alt="Member img" />
              </label>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <i className="fa-solid fa-book" style={{ color: "#808080" }} />
              <input onChange={(e) => setClient({ ...client, first_name: e.target.value })} name='first_name' type="text" className="grow" placeholder="First Name" value={client.first_name} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <i className="fa-solid fa-book" style={{ color: "#808080" }} />
              <input onChange={(e) => setClient({ ...client, last_name: e.target.value })} name='last_name' type="text" className="grow" placeholder="Last Name" value={client.last_name} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <i className="fa-solid fa-user fa-xs" style={{ color: "#808080" }} />
              <input onChange={(e) => setClient({ ...client, phone: e.target.value })} name='phone' type="number" className="grow" placeholder="Phone" value={client.phone} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <i className="fa-solid fa-user fa-xs" style={{ color: "#808080" }} />
              <input onChange={(e) => setClient({ ...client, email: e.target.value })} name='email' type="email" className="grow" placeholder="Email" value={client.email} />
            </label>
            <div className="modal-action pt-2">
              <button onClick={handleAddClient} className='btn btn-outline me-2'>Add</button>
              <button onClick={closeModal} className="btn btn-outline btn-error">Close</button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Add;
