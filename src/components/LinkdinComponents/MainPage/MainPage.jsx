import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainPage() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMessaging, setShowMessaging] = useState(false);
    const [handlePopSearch, sethandlePopSearch] = useState(false)

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleMessaging = () => setShowMessaging(!showMessaging);
    const togglePopSearch = () => {
        sethandlePopSearch(!handlePopSearch);
    };
    return (
        <div>
            <main className="flex w-fit  m-auto p-4 space-x-4">
                {/* Sidebar */}
                <aside className="w-1/4 shadow-xl bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="profile"
                            className="rounded-full w-12 h-12"
                        />
                        <div>
                            <div className="font-bold">Anuj Kumar</div>
                            <div className="text-sm text-gray-500">ABSS INSTITUTE OF TECHNOLOGY</div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>Profile viewers</span>
                            <span>13</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>Post impressions</span>
                            <span>51</span>
                        </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
                        Try for ₹0
                    </button>
                    <div className="mt-4">
                        <div className="font-bold">Saved items</div>
                        <div className="mt-2">
                            <div className="text-gray-500">Recent</div>
                            <ul className="mt-2 text-sm space-y-1">
                                <li>Certified Gemini AI Expert Int...</li>
                                <li>Technology Investor Club: Arti...</li>
                                <li>JavaScript</li>
                                <li>Artificial Intelligence, Deep Le...</li>
                                <li>Borderless Blockchain Alliance</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <div className="text-gray-500">Groups</div>
                            <ul className="mt-2 text-sm space-y-1">
                                <li>Technology Investor Club: Arti...</li>
                                <li>JavaScript</li>
                                <li>Artificial Intelligence, Deep Le...</li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <section className="w-1/2  relative">
                    <div className={`fixed w-9/12 h-5/6 m-auto z-10 inset-0   ${handlePopSearch ? '' : 'hidden'}`}>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-300 opacity-75"></div>
                            </div>

                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                            <div className="inline-block w-full align-center max-w-xl max-h-max bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all ">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Anuj Kumar
                                        </h3>
                                        <button onClick={togglePopSearch} className="text-gray-500 hover:text-gray-700">
                                            X
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <textarea

                                            className="w-full border underline-offset-0 border-gray-300 rounded-md p-2"
                                            rows="10" cols="50"


                                            placeholder="What do you want to talk about?"
                                        ></textarea>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow mb-4">


                        <div className="flex items-center space-x-2">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="profile"
                                className="rounded-full w-12 h-12"
                            />
                            <input
                                type="text"
                                placeholder="Start a post, try writing with AI"
                                className="flex-grow p-2 border rounded-lg"
                                onClick={togglePopSearch}
                            />
                        </div>
                        <div className="flex justify-around mt-4 text-sm text-gray-500">
                            <button className="flex items-center space-x-1">
                                <span className="text-blue-500">Media</span>
                            </button>
                            <button className="flex items-center space-x-1">
                                <span className="text-blue-500">Contribute expertise</span>
                            </button>
                            <button className="flex items-center space-x-1">
                                <span className="text-blue-500">Write article</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <div className="flex justify-between items-center">
                            <div>Post removed from your feed</div>
                            <button className="text-blue-500">Undo</button>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                            Tell us more so we can adjust your feed.
                        </div>
                        <div className="flex space-x-2 mt-2">
                            <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm">
                                Not interested in this topic
                            </button>
                            <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm">
                                Not interested in Youcef's posts
                            </button>
                            <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm">
                                Not appropriate for LinkedIn
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="profile"
                                className="rounded-full w-12 h-12"
                            />
                            <div>
                                <div className="font-bold">JavaScript</div>
                                <div className="text-sm text-gray-500">Sahil Bansal • 3rd+</div>
                                <div className="text-sm text-gray-500">2h • 🌍</div>
                            </div>
                        </div>
                        <div className="mt-4">
                            Here are some easy tips to get started with testing your code effectively:
                            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                                <li>Understand the Types of Tests ...more</li>
                            </ul>
                        </div>
                        <img
                            src="https://via.placeholder.com/600x300"
                            alt="post"
                            className="mt-4 rounded-lg"
                        />
                    </div>
                </section>

                {/* News Sidebar */}
                <aside className="w-1/4 shadow-xl bg-white p-4 rounded-lg  relative">
                    <div className="font-bold">LinkedIn News</div>
                    <div className="mt-4">
                        <div className="text-gray-500 text-sm">Top stories</div>
                        <ul className="mt-2 text-sm space-y-1">
                            <li>Digital payments set to soar • 6d ago</li>
                            <li>DLF most-valued realty firm • 2d ago</li>
                            <li>Insurers hike premium rates • 2d ago</li>
                            <li>Oil firms head to Chennai • 1d ago</li>
                            <li>Gold hits high • 3d ago</li>
                        </ul>
                    </div>

                </aside>

                <div className="fixed-messaging-strip bg-black z-40 w-7 absolute  right-0 bottom-0">
                    <button
                        className="absolute top-0 right-0 p-2"
                        onClick={toggleMessaging}
                    >
                        Messaging
                    </button>
                    {showMessaging && (
                        <div className="absolute top-12 right-0 w-80 bg-white border rounded-lg shadow-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="font-bold">Messaging</div>
                                <button onClick={toggleMessaging}>X</button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="font-bold">Mahaboob Shaik</div>
                                    <div className="text-sm text-gray-500">Thanks for the wishes</div>
                                    <div className="text-sm text-gray-500">Jul 16</div>
                                </div>
                                <div>
                                    <div className="font-bold">Parul University Online ...</div>
                                    <div className="text-sm text-gray-500">
                                        Sponsored Upskill in a High-Demand Field with an Online...
                                    </div>
                                    <div className="text-sm text-gray-500">Jul 10</div>
                                </div>
                                <div>
                                    <div className="font-bold">Sakshi Sehrawat</div>
                                    <div className="text-sm text-gray-500">Wishing you a very happy birthday! Mam</div>
                                    <div className="text-sm text-gray-500">Jul 10</div>
                                </div>
                                <div>
                                    <div className="font-bold">Harsh Nain</div>
                                    <div className="text-sm text-gray-500">Sir</div>
                                    <div className="text-sm text-gray-500">Jul 9</div>
                                </div>
                                <div>
                                    <div className="font-bold">Sanskar Vishwakarma</div>
                                    <div className="text-sm text-gray-500">
                                        Congrats on starting your new role at Insplore...
                                    </div>
                                    <div className="text-sm text-gray-500">Jul 9</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default MainPage