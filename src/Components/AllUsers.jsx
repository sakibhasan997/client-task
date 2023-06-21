import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://user-management-server-side.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    // Delete the user
    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                    fetch(`https://user-management-server-side.vercel.app/users/${id}`,{
                        method: 'DELETE'
                    })
                    .then(res =>res.json())
                    .then(data =>{
                        console.log(data);
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                              )
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })
            }
          })
        
        
    }

    

    return (
        <>
            <div className='w-[1114px] mx-auto py-40'>
                <div>
                    <div className="overflow-x-auto shadow-lg rounded-lg">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-gradient-to-r from-cyan-600 to-blue-400 text-white'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>email address</th>
                                    <th>phone number</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr key={user._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>
                                            <Link to={`/updateUser/${user._id}`}>
                                                <button className="btn btn-outline btn-primary btn-sm"><FaRegEdit /></button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-outline btn-error btn-sm"><FaRegTrashAlt /></button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllUsers;