import React from 'react';
import '../App.css'; // Import your CSS file for styling

const Infoboxes = ({topic,description}) => {
  return (
    <div className="box-container">
      <h2>{topic}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Infoboxes;
