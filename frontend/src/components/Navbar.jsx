import useAuthUser from '../hooks/useAuthUser';
import { Link } from 'react-router-dom';
import { BellIcon, LogOutIcon, ShipWheelIcon } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const { logoutMutation } = useLogout();

  return (
    <nav className='bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center w-full'>

          {/* Logo always visible */}
          <div className='flex items-center gap-2.5 flex-1'>
            <Link to="/" className='flex items-center gap-2.5'>
              <ShipWheelIcon
                className='text-2xl sm:text-3xl font-bold font-mono text-primary'
              />
              <span className='text-sm sm:text-lg font-semibold'>
                Varta
              </span>
            </Link>
          </div>

          {/* Right side buttons */}
          <div className='flex items-center gap-3 sm:gap-4 ml-auto'>
            <Link to="/notifications">
              <button className='btn btn-ghost btn-circle'>
                <BellIcon className='h-6 w-6 text-base-content opacity-70'/>
              </button>
            </Link>

            <ThemeSelector />

            <div className='avatar'>
              <div className='w-9 rounded-full'>
                <img src={authUser?.profilePic} alt='User Avatar' rel='noreferrer'/>
              </div>
            </div>

            <button className='btn btn-ghost btn-circle' onClick={logoutMutation}>
              <LogOutIcon className='h-6 w-6 text-base-content opacity-70'/>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
