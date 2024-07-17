import React from 'react';
import UserProfileCard from '../components/ChatMessage/UserProfileCard/UserProfileCard';

function HomePage() {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="bg-gray-800 hidden text-gray-200 w-64 flex-shrink-0 p-4">
        <div className="flex items-center space-x-4 mb-6">
          <img className="h-12 w-12 rounded-full" src="profile-pic.jpg" alt="User profile picture" />
          <span className="text-lg font-bold">User Name</span>
        </div>
        <nav className="space-y-2 hidden">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">MEMES</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">HOME</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">CHAT</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">PEOPLE</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">APPS</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">SHARE</a>
        </nav>
      </div>
      <div className='w-1/4 '>
      <div className="profile">
      <UserProfileCard/>
      <UserProfileCard/>
      </div>
      </div>

      {/* Main Panel */}
      <div className="w-3/4  mx-auto p-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Chat Room */}
          <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Welcome Room (System)</h2>
              <p className="text-gray-600">System announcements and news</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Join</button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Example Chat Room with notification */}
          <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Friends Forum [PM ONLY]</h2>
              <p className="text-gray-600">Private messages only</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Open</button>
              <button className="text-gray-500 hover:text-gray-700 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
              </button>
            </div>
          </div>

          {/* Add more chat rooms here in the same format as above */}

        </div>
      </div>
    </div>
  );
}

export default HomePage;
