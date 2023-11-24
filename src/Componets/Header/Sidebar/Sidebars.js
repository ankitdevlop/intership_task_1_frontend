import { AccountBoxRounded, Close, Home, Info, Logout, Menu,    QuestionMark, Work } from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, selectUser } from '../../../features/userSclies';


function Sidebars() {
  const [isOpen, setIsOpen] = useState(false);
  const user=useSelector(selectUser)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const dispatch=useDispatch()
  const logoutf=()=>{
    dispatch(logout({
      user:null
     }))
  }


  return (
    <div className={` bg-blue-100 h-10  flex flex-row  lg:hidden   ${isOpen ? ' w-13 h-full ' : ' w-9 '}`}>
      <div className="">
        <button onClick={toggleSidebar} className="p-0">
          {isOpen ? (<Close/>) : (<Menu/>)}
        </button>
        <ul className="flex flex-col  py-4">
          <li>
            <Link to="/" className="flex flex-row items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-blue-800">
              <p className="inline-flex items-end  justify-start h-12  text-lg text-blue-400" />
              {isOpen && <span className="text-sm font-medium">   <Home/>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/questions" className="flex flex-row items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-blue-800">
              <p className="inline-flex items-end  justify-start h-12  text-lg text-blue-400" />
              {isOpen && <span className="text-sm font-medium"><QuestionMark/> Questions</span>}
           
            </Link>
          </li>
          <li>
            <Link to={user===null?"/auth":"/user"} className="flex flex-row items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-blue-800">
              <p className="inline-flex items-end  justify-start h-12  text-lg text-blue-400" />
              {isOpen && <span className="text-sm font-medium"><AccountBoxRounded/> User</span>}
           
            </Link>
          </li>
          <li>
            <Link to="info" className="flex flex-row items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-blue-800">
              <p className="inline-flex items-end  justify-start h-12  text-lg text-blue-400" />
              {isOpen && <span className="text-sm font-medium"><Info/>  Info</span>}
            </Link>
          </li>
         
          <li>
            <Link  onClick={logoutf} className="flex flex-row items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-blue-800">
              <p className="inline-flex items-end  justify-start h-12  text-lg text-blue-400" />
              {isOpen && <span className="text-sm font-medium" ><Logout/> Logout</span>}
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Sidebars;
