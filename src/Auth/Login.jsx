import React from 'react'
import { Link } from 'react-router-dom'
import { useRef,useState,useEffect } from 'react'
import './Login.css'
const Login = () => {


  return (
    <div>
     <div className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700">
        <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5">
            <h1 className="text-center text-3xl">Welcome In Event Planner</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-light" htmlFor="email">Email</label>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="email" placeholder="Your Email"
                    name="email" id="email" />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-light" htmlFor="password">Password</label>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="password"
                    placeholder="Your Password" name="password" id="password" />
            </div>

            <div>
                <input type="checkbox" name="remember" id="remember" />
                <label className="text-sm font-light" htmlFor="remember">Remember me</label>
            </div>

            <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit"> 
                Sign In
            </button>

            <div className="mt-4 text-center">
                <p className="text-sm">Don't have an account <Link to='/signup'
                    className="text-blue-600 hover:underline"> Sign up</Link></p>
              </div>
           
        </form>
    </div>
    </div>
  )
}

export default Login