import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <section className='bg-bannerImg bg-no-repeat bg-cover bg-bottom'>
        <Header/>
        <div className='w-full h-screen flex items-center bg-blackOverlay'>
            <div className="container mx-auto p-6">
                <h1 className='text-7xl text-slate-100 uppercase font-bold'>Never Stop <br/>Exploring</h1>
                <p className='text-white p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing <br/> elit. Dolor aliquam iure aperiam tenetur, a ipsam ex ullam expedita consectetur asperiores!</p>
                <Link to={'/authentication'}>
                 <button className='btn mt-4 btn-primary'>Get Started</button>               
                </Link>

            </div>

        </div>
    </section>


    </>
  )
}

export default Landing