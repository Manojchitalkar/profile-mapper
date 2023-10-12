import React from 'react';

 import  './ProfileList.css';

function ProfileList({ profiles, setSelectedProfile }) {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <h2>{profile.name}</h2>
          <img src={profile.photo} alt={profile.name} />
          <p>{profile.description}</p>
          <button onClick={() => setSelectedProfile(profile)}>Summary</button>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
