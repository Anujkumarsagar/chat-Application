import React from 'react';

function UserProfileCard() {
    return (

        <div className="scale-90 bg-white rounded-lg shadow-lg p-4 min-w-full min-w-sm">
            <div className="img  h-64 rounded object-cover overflow-hidden flex justify-center">
                <img src="https://plus.unsplash.com/premium_photo-1671557280278-3425ff9a1b08?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className=" mt-2 gap-3 flex">
                <div className="info"> <h2 className="text-2xl font-semibold">Alex Morrison</h2>
                    <p className="text-gray-500">Senior Journalist</p>
                    <p className="text-gray-500">Gender: Male</p></div>
                <div className=" flex flex-col gap-2 justify-center ">
                    <button className="bg-white text-blue-500 border border-blue-500  rounded hover:bg-blue-50 py-1 px-0.5">
                        Chat
                    </button>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700">
                        Make Friend
                    </button>
                </div>
            </div>
        </div>

    );
}

export default UserProfileCard;
