import React from 'react';
import Logo from "../assets/logo.png";
const Nav = () => {
    return (
        <div className=''>

         <nav className=" container mx-auto grid grid-cols-2  justify-between my-5">
        <img className='ml-5' src={Logo} alt="" />
        <ul className='flex items-center justify-end gap-6 mr-6'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <button className='border border-gray-200 px-3.5'> {} Coin</button>
          
        </ul>
       </nav>
        </div>
    );
};

export default Nav;