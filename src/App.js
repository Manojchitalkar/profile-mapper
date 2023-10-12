import React, { useState, useEffect } from 'react';
// import './App.css';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import Map from './components/Map';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    // Simulated data fetching from an API or local JSON file
    fetch('profiles.json')
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile Mapper</h1>
      </header>
      <div className="App-content">
        <ProfileList
          profiles={profiles}
          setSelectedProfile={setSelectedProfile}
        />
        {selectedProfile && <ProfileDetails profile={selectedProfile} />}
        <Map profiles={profiles} selectedProfile={selectedProfile} />
      </div>
    </div>
  );
}

export default App;
