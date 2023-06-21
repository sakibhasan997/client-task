import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddUser = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addusers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toys Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });

        console.log(data);
    }

    return (
        <>
            <NavBar />
            <div className='py-28'>
                <div className='flex justify-center'>
                    <span className='bg-gradient-to-r from-cyan-200 to-blue-100 p-20 rounded-xl shadow-xl'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className='text-center font-bold text-2xl text-primary'>ADD NEW USER</h3>
                            <label className="label">
                                <span className="label-text">Name<span className='text-red-600'>*</span> </span>
                            </label>
                            <input className="input input-bordered w-[600px]" type="text" {...register("name", { required: true })} placeholder='Your Name' />
                            <label className="label">
                                <span className="label-text">Email<span className='text-red-600'>*</span></span>
                            </label>
                            <input className="input input-bordered w-[600px]" type="email" {...register("email", { required: true })} placeholder='Your Email' />
                            <label className="label">
                                <span className="label-text">Phone Number<span className='text-red-600'>*</span></span>
                            </label>
                            <input className="input input-bordered w-[600px]" type='number' {...register("phoneNumber", { required: true })} placeholder='Your Number' />
                            <br />
                            <span className='mt-8 flex justify-center'>
                                <input className='btn bg-gradient-to-r from-cyan-600 to-blue-400 text-white shadow-md' type="submit" value="Add User " />
                            </span>
                        </form>
                    </span>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default AddUser;