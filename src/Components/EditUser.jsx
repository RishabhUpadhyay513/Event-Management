import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const EditUser = () => {

    let navigate = useNavigate();
    const {id}=useParams();
    console.log(id)
    let[editUser,setEditUser]=useState({
        name:"",
        email:"",
        address:"",
    })

    const {name,email,address}=editUser;
   console.log(editUser)
    const onInputChange = (e) =>{
       setEditUser({...editUser,[e.target.name]:e.target.value})
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3000/loginData/${id}`,editUser);
        navigate.push('')
    }

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async () => {
        const usersData = await axios.get(`http://localhost:3000/loginData/${id}`)
        setEditUser(usersData.data);
    }

  return (
    <>
    <div className="w-full max-w-xs mt-32" style={{marginLeft:"40rem"}}>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        placeholder={name}
        onChange = {(e)=>onInputChange(e)}
        type="text"
        
        
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        placeholder={email}
        onChange = {(e)=>onInputChange(e)}
        type="text"
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="address"
      >
        Address
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        placeholder={address}
        onChange = {(e)=>onInputChange(e)}
        type="text"
      />
    </div>
    <div className="flex items-center justify-between">
      <button onClick={onSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white ml-1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
       Update User
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link Link to='/user'
        className="bg-blue-500 hover:bg-blue-700 text-white ml-2  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
       Go Back
      </Link>
     
    </div>
  </form>
</div>
    </>
  )
}

export default EditUser