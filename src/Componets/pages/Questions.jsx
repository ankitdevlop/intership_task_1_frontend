import {  AccountBox, } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSclies';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../Help/help';



function Questions() {
  const [data, setData] = useState([]);
const user=useSelector(selectUser)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/question`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
const hideExtra=(str,lg)=>{
return str?.length>lg?str.substr(0,lg-1)+"....":str
}
  return (

  <div className="container px-5 py-24 mx-auto">
      <div className="-my-8 divide-y-2 justify-center divide-gray-100">
    <p>No of Question  &nbsp; &nbsp; <b>
    {data.length} </b></p>
        {data.map((question) => (
          <div key={question._id} className="py-3 ml-11 justify-center flex flex-wrap md:flex-nowrap">
            {/* Tags */}
            <span className="font-semibold title-font ml-9 p-7 text-gray-700">Tags</span>
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            {question.tags.map((tag, index) => (
  <p key={index} className="font-semibold title-font text-black bg-blue-200 mt-1 p-1 w-24">
    {(tag)}
  </p>
))}
  <span className="mt-1 text-black-500 text-sm">
    <b>{new Date(question.created_at).toLocaleString()}</b>
  </span>
</div>

            {/* Question details */}
            <div className="md:flex-grow">
            <Link to={user===null? `/auth`:`/detailQuestion?q=${question?._id}`} >   <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{question.title}?</h2></Link> 
              <p className="leading-relaxed">{hideExtra(question.body,200)}</p><br />
              <p>Posted By <AccountBox/> {question.user ? question.user.email : 'Unknown User'}</p>
              <br />
             
     
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Questions
