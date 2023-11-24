
import Logo from '../../Assets/logo.png';
import { Logout, Person3Rounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  selectUser, } from '../../features/userSclies';
import { logout, } from '../../features/userSclies';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


 function Header() {
  const user=useSelector(selectUser)


  const dispatch=useDispatch()
  const logoutf=()=>{
    dispatch(logout({
      user:null
     }))
  }
 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode
    ? { body: 'grey', text: 'pink' }
    : { body: '#fff', text: '#fff' };

  // Apply styles to the body and html elements
  document.body.style.backgroundColor = theme.body;
  document.documentElement.style.backgroundColor = theme.body;


  return (
    <div className='overflow-hidden'>
      <header className="text-gray-700  sticky shadow-xl bg-blue-300 body-font top-0 w-screen z-1">
        <div className="container mx-auto inline-flex p-5 flex-row md:flex-row items-center flex-wrap md:flex-nowrap">
     
          <Link to="/" className="flex title-font text 2xl items-center text-white font-extrabold md:ml-3">
            <img src={Logo} alt="" className="w-6" />
            <span className="ml-3 text-sm">Ask Question</span>
          </Link>
          <nav className="md:ml-auto md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-sm justify-center">
            
            <Link to="/info" className="p-2 font-bold mr-5 mt-3 hover:text-gray-900 hover:bg-blue-400 rounded-lg hidden md:block">
              About
            </Link>
            <Link to="/questions" className="p-2 mr-5 font-bold mt-3 hover:text-gray-900 hover:bg-blue-400 rounded-lg hidden md:block">
              questions
            </Link>
       
            <button className='ml-4'
        style={{
background:"black",
          color: '#fff',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={toggleDarkMode}
      >
       Dark Mode
      </button>
          </nav>
          <div className='justify-end flex'>

          {user === null  ? (
            <button className="flex bg-gray-400 border-0  ml-64 sm:mt-1 sm:mb-2 sm:-mr-96 sm:ml-96   py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mr-3 -mt-9 md:mb-0 md:mt-0">
           <Link to='/auth'>
           Login
           </Link>  
            </button>
          ) : (
            <>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3  ml-2 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
               <Link to='/user' >
               <Person3Rounded  /><br />
               
               </Link> 
              </button>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3  ml-2 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <Link>
               <span className='mt-1 ml-2' onClick={logoutf}><Logout /></span>
               
               </Link> 
              </button>
    
              <button>
              <Link to={user===null?" /auth":"/Askquestions"} className="mr-0 mb-2 mt-2 bg-white p-2 rounded-lg hover:text-blue-900   md:block">
                Ask Question
              </Link>
            </button>
            </>
          )}
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;