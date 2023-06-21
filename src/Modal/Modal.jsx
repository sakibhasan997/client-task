import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Modal = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log(data);
    const { _id, name, phoneNumber, email} = data

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        fetch(`http://localhost:5000/updateUser/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Edit Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    },
                    navigate('/')
                    )
                    // data.reset();
                }
            });
        
        console.log(data); }
    return (
        <div className='py-20'>
            <div className='flex justify-center items-center h-full'>
                <span className='bg-gradient-to-r from-cyan-200 to-blue-100 p-20 rounded-xl shadow-xl'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-center font-bold text-2xl text-primary'>UPDATE A USER</h3>
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input className="input input-bordered w-80" type="text" {...register("name", { required: true })} defaultValue={name} placeholder='Your Name' />
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input className="input input-bordered w-80" type="email" {...register("email", { required: true })} defaultValue={email} placeholder='Your Email' />
                        <label className="label">
                            <span className="label-text">Phone Number*</span>
                        </label>
                        <input className="input input-bordered w-80" type='number' {...register("phoneNumber", { required: true })} placeholder='Your Number' />
                        <br />
                        <span className='modal-action mt-8 flex justify-center'>
                            <input className='btn bg-gradient-to-r from-cyan-600 to-blue-400 text-white shadow-md' type="submit" value="Update User " />
                        </span>
                    </form>
                </span>
            </div>
        </div>
    );
};

export default Modal;