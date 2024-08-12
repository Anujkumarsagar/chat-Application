import React from 'react';
import SuggestedProfiles from './SuggestedProfiles';
import TrendingNewsletters from './TrendingNewsletters';

// const SuggestedProfiles = ({ title, profiles }) => {
//   return (
//     <div className="bg-white shadow rounded-lg p-4 mb-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">{title}</h2>
//         <a href="#" className="text-blue-600 hover:underline">See all</a>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         {profiles.map((profile, index) => (
//           <div key={index} className="flex flex-col items-center border p-4 rounded-lg">
//             <div className="relative">
//               <img className="w-16 h-16 rounded-full" src={profile.image} alt={profile.name} />
//               <button className="absolute top-0 right-0 bg-gray-200 p-1 rounded-full">
//                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>
//             </div>
//             <h3 className="mt-2 text-sm font-medium">{profile.name}</h3>
//             <p className="text-xs text-gray-500">{profile.description}</p>
//             <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Connect</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const TrendingNewsletters = ({ newsletters }) => {
//   return (
//     <div className="bg-white shadow rounded-lg p-4 mb-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">Trending newsletters in your network</h2>
//         <a href="#" className="text-blue-600 hover:underline">See all</a>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         {newsletters.map((newsletter, index) => (
//           <div key={index} className="flex flex-col items-center border p-4 rounded-lg">
//             <div className="relative">
//               <img className="w-16 h-16 rounded" src={newsletter.image} alt={newsletter.title} />
//               <button className="absolute top-0 right-0 bg-gray-200 p-1 rounded-full">
//                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>
//             </div>
//             <h3 className="mt-2 text-sm font-medium">{newsletter.title}</h3>
//             <p className="text-xs text-gray-500">{newsletter.description}</p>
//             <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Subscribe</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const Connection = () => {
  const suggestedProfiles = [
    { name: 'Rajan Singh Chauhan', description: 'Automation Intern at Bharti Airtel Ltd.', image: 'profile1.jpg' },
    { name: 'Arushi Jalikhani', description: 'Student at KC Bose University of Science and Tech', image: 'profile2.jpg' },
    { name: 'Rajan Singh Chauhan', description: 'Automation Intern at Bharti Airtel Ltd.', image: 'profile1.jpg' },
    { name: 'Arushi Jalikhani', description: 'Student at KC Bose University of Science and Tech', image: 'profile2.jpg' },
    { name: 'Rajan Singh Chauhan', description: 'Automation Intern at Bharti Airtel Ltd.', image: 'profile1.jpg' },
    { name: 'Arushi Jalikhani', description: 'Student at KC Bose University of Science and Tech', image: 'profile2.jpg' },
    { name: 'Rajan Singh Chauhan', description: 'Automation Intern at Bharti Airtel Ltd.', image: 'profile1.jpg' },
    { name: 'Arushi Jalikhani', description: 'Student at KC Bose University of Science and Tech', image: 'profile2.jpg' },
    // Add more profiles
  ];

  const trendingNewsletters = [
    { title: 'Energy to the World', description: 'A look inside our world...', image: 'newsletter1.jpg' },
    { title: 'AI of the Tiger', description: 'Decoding AI, ML and Data Analytics', image: 'newsletter2.jpg' },
    // Add more newsletters
  ];
  const recentProfiles = [
    { title: 'Amit Kumar', description: 'A look inside our world...', image: 'newsletter1.jpg' },
    { title: 'Adarsh sharma', description: 'Decoding AI, ML and Data Analytics', image: 'newsletter2.jpg' },
  ]

  return (
    <div className="bg-gray-100 min-h-screen flex justify-between p-4 gap-8">
      <div className=" w-2/6 max-h-">
        <div className="mangenetwork flex flex-col gap-3">
          <div className="w-full flex justify-between p-4 rounded-lg bg-gray-500">
            <span>Manage my Network </span>
            <span>^</span>
          </div>
          <div className="profile-card p-6 rounded-lg text-center gap-4 flex flex-col bg-slate-300">
            <p className='text-sm'>Name uncover new Opportutnity with Linkdin Premium</p>
            <div className="flex  justify-center">
              <img className='bg-black w-24  h-24 rounded-full  ' src="https://www.google.com/images/animal.png" alt="" srcset="" />
              <img className='bg-black w-24  h-24 rounded-full  ' src="https://www.google.com/images/animal.png" alt="" srcset="" />
            </div>
            <h1 className='font-bold'>See who's viewed your profile in the last  90 daya</h1>

            <button className='bg-gray-500 w-32 mx-auto  py-1  px-4 rounded-full bg-transparent border-2 border-blue-500 text-blue-600 font-semibold'>Try for Free!</button>
          </div>

          <div className="links text-center w-10/12 mx-auto ">
            <a href="#" className='text-sm m-1 font-semibold'> About</a>
            <a href="#" className='text-sm m-1 font-semibold'> Accessablity</a>
            <a href="#" className='text-sm m-1 font-semibold'> Help Center</a>
            <a href="#" className='text-sm m-1 font-semibold'> Privacy & Term </a>
            <a href="#" className='text-sm m-1 font-semibold'> Ad Choices</a>
            <a href="#" className='text-sm m-1 font-semibold'> Adverstising</a>
            <a href="#" className='text-sm m-1 font-semibold'> Bussiness Service</a>
            <a href="#" className='text-sm m-1 font-semibold'> More</a>
          </div>
          <div className="flex text-center justify-center items-center gap-2">
            <img src="#" className='w-24 h-12  blac' alt="" />
            <span>Courtess Residence ©️ 2024 </span>
          </div>
        </div>
      </div>
      <div className="max-w-4xl min-h-screen    ">
        <SuggestedProfiles title="People you may know in Greater Delhi Area" profiles={suggestedProfiles} />
        <SuggestedProfiles title="People you may know based on your recent activity" profiles={recentProfiles} />
        <TrendingNewsletters newsletters={trendingNewsletters} />
      </div>
    </div>
  );
};

export default Connection;

