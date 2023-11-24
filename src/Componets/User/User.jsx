import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPoints, selectUser } from '../../features/userSclies';
import axios from 'axios';
import userico from '../../Assets/7309681.jpg'
import { BASE_URL } from '../Help/help';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${BASE_URL}/api/user/profile`;
        const config = {
          headers: {
            'Authorization': `${user.token}`, // Use the token from the Redux store
          },
        };

        const response = await axios.get(apiUrl, config);
        const userData = response.data;

        // Dispatch Redux action if needed
        dispatch(setPoints(userData.points));

        // Set user data to state for rendering
        setUserData(userData);
      } catch (error) {
        setError('Error fetching user data. Please try again.'); // Set the error state
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    if (user && user.token) {
      fetchData();
    }
  }, [user, dispatch]); // Add user and dispatch dependencies to the dependency array
  return (
    
    <div>
       <div class="flex justify-center">
<div class="flex flex-col justify-center">
    <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
        <div class="overflow-hidden w-full m-4 flex justify-center">
            <div
                class="flex flex-col md:flex-row items-center shadow-md h-full text-white bg-blue-500 hover:bg-yellow-500 hover:text-black">
                <div class=" w-1/2 overflow-hidden ">
                    <div class="flex flex-col justify-center h-full p-2">
                    {loading && <p>Loading...</p>}
                    {userData && (
        <div>
          <h1 className='text-4xl'>User Data </h1>
          <p >User:  {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>Points: {userData.points}</p>
          
        </div>
      )}
                    </div>
                </div>
                <div class=" md:w-1/4 overflow-hidden "> <img src={userico}
                        alt="" class="" /> </div>
            </div>
        </div>
    </div>
</div>
</div>

  
      

    </div>
  );
};

export default User;
