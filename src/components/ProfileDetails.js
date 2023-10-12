import React from 'react';

 import  './ProfileDetails.css';


function ProfileDetails({ profile }) {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      {/* Add more profile details here */}
    </div>
  );
}

export default ProfileDetails;
