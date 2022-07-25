import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-15xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="hidden lg:block h-10 w-10 w-auto" src="https://i.etsystatic.com/9917841/d/il/1f18f2/886645706/il_680x540.886645706_hriy.jpg?version=0" alt="" />
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Event Planner</a>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">

                                    <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>

                                    <Link to='/bookevent' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book Event</Link>

                                    <Link to='/user' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Users</Link>

                                   
                                </div>
                            </div>
                        </div>
                        <div className="flex 
      ">

                            <Link to="/login" className="bg-gray-900 login  text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Login</Link>

                            <Link to="/signup" className="bg-gray-900  text-white px-3 py-2 rounded-md text-sm font-medium  ml-8" aria-current="page">SignUp</Link>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header