import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { console.log(data); }
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className='text-center font-bold text-2xl text-primary'>UPDATE A USER</h3>
                    <label className="label">
                        <span className="label-text">Name*</span>
                    </label>
                    <input className="input input-bordered w-80" type="text" {...register("name", { required: true })} placeholder='Your Name' />
                    <label className="label">
                        <span className="label-text">Email*</span>
                    </label>
                    <input className="input input-bordered w-80" type="email" {...register("email", { required: true })} placeholder='Your Email' />
                    <label className="label">
                        <span className="label-text">Phone Number*</span>
                    </label>
                    <input className="input input-bordered w-80" type='number' {...register("phoneNumber", { required: true })} placeholder='Your Number' />
                    <br />
                    <span className='modal-action mt-8 flex justify-center'>
                        <input className='btn bg-gradient-to-r from-cyan-600 to-blue-400 text-white shadow-md' type="submit" value="Update User " />
                    </span>
                </form>
            </dialog>
            {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box bg-gradient-to-r from-cyan-200 to-blue-100">
                    <div className='flex justify-center'>
                        <span className='bg-gradient-to-r from-cyan-200 to-blue-100 rounded-xl'>
                            <form>
                                <h3 className='text-center font-bold text-2xl text-primary'>UPDATE A USER</h3>
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input className="input input-bordered w-80" type="text" {...register("name", { required: true })} placeholder='Your Name' />
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input className="input input-bordered w-80" type="email" {...register("email", { required: true })} placeholder='Your Email' />
                                <label className="label">
                                    <span className="label-text">Phone Number*</span>
                                </label>
                                <input className="input input-bordered w-80" type='number' {...register("phoneNumber", { required: true })} placeholder='Your Number' />
                                <br />

                            </form>
                        </span>
                    </div>
                    <span className='modal-action mt-8 flex justify-center'>
                        <input className='btn bg-gradient-to-r from-cyan-600 to-blue-400 text-white shadow-md' type="submit" value="Update User " />
                    </span>
                </form>
            </dialog> */}
        </>
    );
};

export default Modal;