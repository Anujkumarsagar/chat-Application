import React from 'react';

const SuggestedProfiles = ({ title, profiles }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <a href="#" className="text-blue-600 hover:underline">See all</a>
      </div>
      <div className="flex flex-wrap place-content-center  gap-4">
        {profiles.map((profile, index) => (
          <div key={index} className="flex shadow-indigo-200 shadow-md flex-grow-0 w-1/4 flex-col items-center border p-4 rounded-lg">
            <div className="relative">
              <img className="w-16 h-16 rounded-full" src={profile.image} alt={profile.name} />
              <button className="absolute top-0 right-0 bg-gray-200 p-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <h3 className="mt-2 text-sm font-medium">{profile.name}</h3>
            <p className="text-xs text-gray-500">{profile.description}</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SuggestedProfiles;