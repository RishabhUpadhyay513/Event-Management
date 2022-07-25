import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Signup = () => {

  const url = "http://localhost:3000/loginData"
  const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      address:""
  })


  function submitData(e) {

    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
}

function signUpData(e) {
    e.preventDefault();
    axios.post(url, {
        name: data.name,
        email: data.email,
        password: data.password,
        address:data.address
    }).then((result) => {
        console.log(result.data)
    })
    alert("Successfully Register")
    signUpData.reset();

}

  return (
    <div>
      <form onSubmit={(e) => signUpData(e)} name="signUpForm" value={data.signUpForm}>
      <div className="flex items-center min-h-screen bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img className="object-cover w-full h-full" src="https://thumbs.dreamstime.com/z/event-planning-clock-word-notepad-white-computer-desk-98974324.jpg"
              alt="img" />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <div className="flex justify-center">
               
  
                </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Welcome
              </h1>

              <div>
                <label className="block text-sm">
                  Name
                </label>
                <input type="text"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={(e) => submitData(e)} id="name" value={data.name}
                  placeholder="Name" required/>
              </div>
              <div className="mt-4">
                <label className="block text-sm">
                  Email
                </label>
                <input type="email"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={(e) => submitData(e)} id="email" value={data.email}
                  placeholder="Email Address" required />
              </div>
              <div>
                <label className="block mt-4 text-sm">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={(e) => submitData(e)} id="password" value={data.password}
                  placeholder="Password" type="password" required/>
              </div>
              <div>
                <label className="block mt-4 text-sm">
                  Address
                </label>
                <input
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={(e) => submitData(e)} id="address" value={data.address}
                  placeholder="Enter Address" type="text" required />
              </div>
              <button type='submit'
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                href="#">
                Sign up
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm">Already have an account <Link to='/login' href="#"
                    className="text-blue-600 hover:underline"> Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
    </div>
  )
}

export default Signup