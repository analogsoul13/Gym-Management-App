import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="navbar bg-transparent font-google">
                <div className="flex-1">
                    <Link to={'/'}>
                        <h1 className="btn btn-ghost font-bold text-white text-3xl">Gym Management</h1>
                    </Link>

                </div>
                <div className="flex-none">
                    <button className="btn btn-square text-slate-100 btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header