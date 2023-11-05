import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Matchdisplay = ({ userData }) => {
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [randomUser, setRandomUser] = useState(null);
  const [isMeetingSet, setIsMeetingSet] = useState(false); // State to manage meeting set status

  useEffect(() => {
    fetchMatches();
  }, []);

  useEffect(() => {
    if (matchedUsers.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchedUsers.length);
      const randomPerson = matchedUsers[randomIndex];
      setRandomUser(randomPerson);
    }
  }, [matchedUsers]);

  const fetchMatches = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/findmatch?year=${userData.year}&interests=${userData.interests}`
      );
      const filteredUsers = response.data.filter(
        (user) => user.islook === 'true' && user.ismatched === false && user.name !== userData.name
      );
      setMatchedUsers(filteredUsers);
    } catch (error) {
      console.error('Error finding match:', error);
    }
  };

  const generateToken = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  let sharedToken = generateToken();

  const setMatchedStatus = async (id, meetingId) => {
    try {
      await axios.put(`http://localhost:3001/setIsMatchedTrue?id=${id}&Meetingid=${meetingId}`);
      setIsMeetingSet(true); // Setting meeting status to true
    } catch (error) {
      console.error('Error setting isMatched to true:', error);
    }
  };

  const handleSetIsMatchedTrue = async () => {
    if (randomUser && randomUser._id) {
      await setMatchedStatus(randomUser._id, sharedToken);
    }
    if (userData && userData._id) {
      await setMatchedStatus(userData._id, sharedToken);
    }
  };

  return (
    <div>
      <h2>Matched Users:</h2>
      {matchedUsers.length > 0 ? (
        <ul>
          {matchedUsers.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No user found.</p>
      )}
      {randomUser && (
        <div>
          <h2>Randomly Chosen User:</h2>
          <p>Name: {randomUser.name}</p>
          <p>Year: {randomUser.year}</p>
          <p>Interests: {randomUser.interests}</p>
          <p>Email: {randomUser.email}</p>
          <button onClick={handleSetIsMatchedTrue}>Set Mock-Interview</button>
        </div>
      )}
      {isMeetingSet && <p>Meeting is set!</p>} {/* Display message when meeting is set */}
    </div>
  );
};

export default Matchdisplay;
