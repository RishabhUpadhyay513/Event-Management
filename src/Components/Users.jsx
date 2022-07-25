import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit,faAdd } from '@fortawesome/free-solid-svg-icons'

const Users = () => {
    <link rel = "stylesheet" href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/fontawesome.min.css'></link>
    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const usersData = await axios.get('http://localhost:3000/loginData')
        setUser(usersData.data);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto xl:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full xl:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr className='bg-dark'>
                                        <th
                                            scope="col"
                                            className="text-xl font-medium text-gray-900 text-white px-6 py-4 text-left"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-xl font-medium text-gray-900 text-white px-6 py-4 text-left"
                                        >
                                            User Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-xl font-medium text-gray-900 text-white px-6 py-4 text-left"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-xl font-medium text-gray-900 text-white px-6 py-4 text-left"
                                        >
                                            Address
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-xl font-medium text-gray-900 text-white px-6 py-4 text-left"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map((users)=>{
                                           return (
                                            <tr className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-900">
                                                {users.id}
                                            </td>
                                            <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {users.name}
                                            </td>
                                            <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {users.email}
                                            </td>
                                            <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                               {users.address}
                                            </td>
                                            <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <a href='' className='btn btn-primary'><FontAwesomeIcon icon={faEye} color="black" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to={`/edituser/${users.id}`} href='' className='btn btn-primary'><FontAwesomeIcon icon={faEdit} color="black" /></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href='' className='btn btn-danger'>Deleate</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to='/signup' href='' className='btn btn-primary'><FontAwesomeIcon icon={faAdd} color="black" /></Link>
                                            </td>
                                        </tr>
                                           )
                                        })
                                    }
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users