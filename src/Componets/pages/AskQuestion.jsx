import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/userSclies';
import axios from 'axios'
import { BASE_URL } from '../Help/help';
function AskQuestion() {
    const user=useSelector(selectUser)
    const navigate=useNavigate();
    const [data2,setData2]=useState({
        title:"",
        tags:"",
        body:"",
    })
    const InputEvent=(event)=>{
        const {name,value}=event.target;
    
        setData2((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
        console.log(data2)
      }
const submitData= async (e)=>{
    e.preventDefault();

    if (data2.body===""|| data2.tags===""|| data2.title==="") {
        alert("fill the empty fields")
    }
    else{
const bodyJSon={
    title:data2.title,
    body:data2.body,
    tags:JSON.stringify(data2.tags),
    user:user,
}
await axios.post(`${BASE_URL}/api/question`, bodyJSon)
.then((res)=>{
    alert("Question added Successfully")
    navigate("/questions")
}).catch((error)=>{
    console.log(error)
})
    }
}

  return (
   <div className=' bg-blue-50 max-h-full'>
    <div class="flex justify-center ">
                                            <div class="flex  justify-center h-screen items-center -mt-24 max-w-7xl  w-full p-4 ">
                                    
                                                <div class="flex flex-col items-center justify-around w-3/4 md:flex-row ">
                                               <form onSubmit={submitData}>
                                                    <div class="text-gray-800 m-4 items-start border-gray-900 flex flex-col md:w-full   space-y-3">
                                                        <div class="text-xl  font-medium">Ask A Public Question </div>
                                                        <small className='flex justify-center text-center flex-wrap text-blue-500'>Please be specific about the Question imagemin  you are asking Question to another person</small>
                                                        <input onChange={InputEvent} placeholder="Enter your Question Title" name='title'
                                                            class="border border-gray-400  rounded px-2 py-1 w-48 md:w-96" />
                                                            <small className='flex justify-center text-center flex-wrap text-blue-500 '>Add upto 5 tags</small>
                                                        <input onChange={InputEvent} placeholder="Enter Your Question tags" name='tags'
                                                            class="border border-gray-400  rounded py-1 px-2 w-48 md:w-96" />
                                                            <small className='flex justify-center text-center flex-wrap text-blue-500' >Include all the necessary information according to the Question in simple words</small>
                                                        <textarea onChange={InputEvent} placeholder="Enter your Question Description" type="text" name='body'
                                                            class="border border-gray-400  rounded py-1 px-2  w-48 md:w-96 h-20 md:h-40  "></textarea>
                                                        <button class="text-white px-4 rounded font-medium hover:bg-blue-600  py-1 bg-blue-500">Post A Question</button>
                                                    </div>
                                            </form>
                                                </div>
                                            </div>
                                        </div>
                                  
   
   </div>
  )
}

export default AskQuestion
