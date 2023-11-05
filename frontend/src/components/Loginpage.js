import React, { useState } from 'react';
import axios from 'axios';
import Matchdisplay from './Matchdisplay';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [showMatch, setShowMatch] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/login?email=${email}&password=${password}`);
      setUserData(response.data); // Assuming response.data is an object containing user data
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  const handleMatch = () => {
    setShowMatch(true);
  };
 

  return (
    <div>
        <div className='login-flex'>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className='login-output'>
      {userData && (
        <div>
          <h3>User Data</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Year: {userData.year}</p>
          <p>Interests: {userData.interests}</p>
          <p>Meetingid:{userData.Meetingid}</p>
          <button onClick={handleMatch}>Find Match</button>
        </div>
      )}
      {showMatch && <Matchdisplay userData={userData} />}
      </div>
    </div>
  );
};

export default Loginpage;
