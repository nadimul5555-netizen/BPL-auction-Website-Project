
import Logo from "../assets/logo.png";
import { BsCoin } from "react-icons/bs";
const Nav = ({ammunt}:{ammunt:number}) => {

    
    return (
        <div className=''>

        <nav className=" container mx-auto grid grid-cols-2  justify-between my-5">
        <img className='ml-5' src={Logo} alt="" />
        <ul className='flex items-center justify-end gap-6 mr-6'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <button className='flex gap-1.5 border border-gray-200 px-5.5 py-2 rounded-2xl'> {ammunt} Coin <BsCoin /></button>
          
        </ul>
       </nav>
        </div>
    );
};

export default Nav;