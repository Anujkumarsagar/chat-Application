import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StickyNavbar } from './components/Navbar/StickyNavbar';
// Import your pages here
import HomePage from './pages/HomePage';
import LinkedinClone from './pages/LinkdinClone';
// import ChatPage from './pages/ChatPage';
// import Login from './pages/Login';
// import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='container m-auto'>
      <BrowserRouter>
          {/* <StickyNavbar /> */}
        <Routes>
          <Route path='/linkdin' element={<LinkedinClone />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          {/* <Route path="/sign-in" element={<Login />} /> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
