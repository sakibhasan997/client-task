import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const navLink = <>
        <li><NavLink title='Home' to='/'>Home</NavLink></li>
        <li><NavLink title='addUser' to='/addUser'>Add User</NavLink></li>
    </>
    return (
        <div className=''>
            <div className="navbar bg-black bg-opacity-10 fixed z-50 px-60 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className=' text-2xl font-extrabold'>
                        <span>USE<span className='text-red-600'>R</span>S</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end avatar ">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/src/assets/279312602_734737191043200_3706230763934917786_n.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;