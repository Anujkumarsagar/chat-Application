import React, { useEffect } from 'react';
import authService from '../../../../appwrite/auth';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ name, email, password }) => {

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const logoutRes = await authService.logout();
      console.log("Logout response:", logoutRes);
      navigate('/'); // Navigate to home
      window.location.reload(); 
    } catch (error) {
      console.log("Error in the logout function:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted">
      <div className="border text-card-foreground w-full max-w-md p-6 bg-background shadow-lg rounded-lg" data-v0-t="card">
        <div className="flex flex-col items-center mb-6">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mb-4">
            <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="User" />
          </span>
          <div className="text-xl font-bold">{name}</div>
          <div className="text-muted-foreground">@{name}</div>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Account Settings</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>Change Password</div>
                  <a className="text-primary" href="#" rel="ugc">{password}</a>
                </div>
                <div className="flex items-center justify-between">
                  <div>Change Email</div>
                  <a className="text-primary" href="#" rel="ugc">{email}</a>
                </div>
                <div className="flex items-center justify-between">
                  <div>Update Profile</div>
                  <a className="text-primary" href="#" rel="ugc">Edit</a>
                </div>
                <div className="flex items-center justify-between">
                  <div>Notification Preferences</div>
                  <a className="text-primary" href="#" rel="ugc">Manage</a>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleLogout} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
