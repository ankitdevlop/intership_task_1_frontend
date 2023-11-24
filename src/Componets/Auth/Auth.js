import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../features/userSclies';
import axios from 'axios';
import { BASE_URL } from '../Help/help';

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setFormData({
      email: '',
      password: '',
      username: '',
    });
    setIsLogin((prev) => !prev);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post(`${BASE_URL}/api/login`, formData);
        alert('User logged in successfully');
       

        const { token } = response.data;
        dispatch(login({ token, login: true,}));
        navigate('/');
      } else {
        const response = await axios.post(`${BASE_URL}/api/register`, formData);
        alert('User registration is successful');
       

        const { token } = response.data;
        dispatch(register({ token, register: true }));
        navigate('/');
      }
    } catch (error) {
   
      alert(`Error: ${isLogin ? 'Login' : 'Registration'} failed. Please check your credentials.`);
    }
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            {isLogin ? 'Login' : 'Register'}
          </h2>

          <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label htmlFor="username" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  User Name
                </label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              {isLogin ? 'Log in' : 'Register'}
            </button>
          </form>

          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={toggleForm}
                className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                {isLogin ? 'Register' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Auth;
