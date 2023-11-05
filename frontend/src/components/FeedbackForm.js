import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [meetingId, setMeetingId] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [fetchedFeedback, setFetchedFeedback] = useState('');
  const [fetchMeetingId, setFetchMeetingId] = useState('');
  const [fetchName, setFetchName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/sendfeedback', {
        meetingId,
        name,
        feedback,
      });
      console.log('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback: ', error);
    }
  };

  const handleFetchFeedback = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.get(`http://localhost:3001/getfeedback?meetingId=${fetchMeetingId}&name=${fetchName}`);
        if (response.data && response.data.length > 0) {
            setFetchedFeedback(response.data[0].feedback);
        } else {
            setFetchedFeedback("No feedback found for the specified criteria.");
        }
    } catch (error) {
        console.error('Error fetching feedback: ', error);
    }
};

  return (
    <div>
      <div className='feedback-post'>
      {/* <h2>Post Feedback</h2> */}
      <form onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <label>
          Meeting ID:
          <input
            type="text"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
      </div>
      <div className='fetch-feedback'>

      <form >
        <h2>View feedback</h2>
      <label>
        Meeting Id:
      <input
        type="text"
        value={fetchMeetingId}
        onChange={(e) => setFetchMeetingId(e.target.value)}
      /></label>

      <label>
        Name of Mock partner:
        <input
          type="text"
          value={fetchName}
          onChange={(e) => setFetchName(e.target.value)}
        />
      </label>
      
      <button onClick={handleFetchFeedback}>Fetch Feedback</button>
      

      <p>Feedback:{JSON.stringify(fetchedFeedback)}</p>
      </form>
      </div>

      
    </div>
  );
}

export default FeedbackForm;
