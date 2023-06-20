import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Modal from '../Modal/Modal';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    const handleUpdate = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/updateUser/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    // setControl(!control);
                }
                console.log(result);
            });
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
                                            <button className="btn btn-outline btn-primary btn-sm" onClick={() => window.my_modal_3.showModal()}><FaRegEdit /></button>

                                            {/* <button className="btn" onClick={() =>setModalShow(true)}>open modal</button>
                                            <Modal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            /> */}
                                        </td>
                                        <td>
                                            <button className="btn btn-outline btn-error btn-sm"><FaRegTrashAlt /></button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                    {/* {
                        users.map((user, index) => )
                         to={`/updateToys/${_id}`}
                         onClick={() => handleDelete(_id)}
                    } */}
                </div>
            </div>
            <Modal 
            handleUpdate={handleUpdate}
            />
            {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        if there is a button in form, it will close the modal
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog> */}
        </>
    );
};

export default AllUsers;