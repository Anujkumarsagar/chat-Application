import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StickyNavbar } from './components/Navbar/StickyNavbar';
import HomePage from './pages/HomePage';
import LinkedinClone from './pages/LinkdinClone';
import ChatMessage from './pages/ChatMessage';
import Connection from './components/LinkdinComponents/connectionpage/Connection';
import SignupPage from './pages/SignupPage';
import Login from './components/Login/Login';
import ProfileCard from './components/ChatMessage/Account-Card/ProfilelCard';
import authService from "../appwrite/auth";

function App() {

  // name = {data.name} email = {data.email} password = {data.password}

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await authService.getCurrentUser();
        console.log(data);
        return data;
      } catch (error) {
        console.log("Error while getting data:", error);
        return null;
      }
    };

  fetchUser().then((userData) => {
    setName(userData?.name);
    setEmail(userData?.email);
    setPassword(userData?.password);
  })
  }, []);

  return (
    <div className='container m-auto'>
      <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path="/linkedin" element={<LinkedinClone />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatMessage />} />
          <Route path='/account' element={<ProfileCard  name = {name} password={password} email={email}  />} />
          <Route path='/signup' element={<Login />} />
          <Route path="/linkedin/network" element={<Connection />} />
          {/* <Route path="/sign-in" element={<Login />} /> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
