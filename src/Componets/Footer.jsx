import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
       <div className="flex items-center justify-center">
<div className="m-2 max-w-5xl items-center">
    <div className="flex flex-col items-center"> <img alt='' className="flex m-1 w-10" src={logo} />
        <div className="m-2"> <a href="/"
                className="w-9 h-10 text-center border-current border-2 text-violet-600 hover:text-black pt-1 inline-block"><i
                    className="fa fa-facebook m-2"></i></a> <a href="/"
                className="w-9 h-10 text-center border-current border-2 text-blue-600 hover:text-black pt-1 inline-block"><i
                    className="fa fa-twitter m-2"></i></a> <a href="/"
                className="w-9 h-10 text-center border-current border-2 text-rose-600 hover:text-black pt-1 inline-block"><i
                    className="fa fa-reddit m-2"></i></a> <a href="/"
                className="w-9 h-10 text-center border-current border-2 text-red-600 hover:text-black pt-1 inline-block"><i
                    className="fa fa-pinterest m-2"></i></a> <a href="/"
                className="w-9 h-10 text-center border-current border-2 text-orange-600 hover:text-black pt-1 inline-block"><i
                    className="fa fa-quora m-2"></i></a> </div>
      
        <div className="text-gray-500 font-medium mt-4 text-xs"> Copyright 2023. All rights reserved by <Link to="/"
                className="text-blue-600">Ask Question</Link> </div>
    </div>
</div>
</div>

    </div>
  )
}

export default Footer
