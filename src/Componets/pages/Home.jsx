import { Diversity1, EmojiEvents, HelpOutline } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='m-auto h-auto w-auto overflow-hidden'>
      <section className="text-gray-600 sm:w-4/5 ml-12 body-font overflow-hidden">
      
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
             <HelpOutline style={{fontSize:"80px"}}/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Ask a Question</h2>
              <p className="leading-relaxed text-base">
                Have a burning question on your mind? Ask the community and get insightful answers. Engage in meaningful conversations.
              </p>
              
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
          <EmojiEvents style={{fontSize:"80px"}}/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Reward System</h2>
              <p className="leading-relaxed text-base">
              After every correct answer, people will get a point, which encourages people to give more answers. Five points will be added by default.
              </p>
              
            </div>
          </div>


          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            <Diversity1 style={{fontSize:"80px"}}/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">  Large Community </h2>
              <p className="leading-relaxed text-base">
              large community where people are excited to give answers of any type of question, and all categories have expert support.
              </p>
              
            </div>
          </div>

  
         <Link to='/questions'>
      <button className="flex mx-auto mt-20 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg">Explore</button>   </Link> 
        </div>
     

      </section>
    </div>
  );
}

export default Home;
