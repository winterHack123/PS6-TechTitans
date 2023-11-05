import React, { useState } from 'react';
import jsPDF from 'jspdf';
import mockData from './mockData'; // Import the mock data file

export default function Interviewquestions() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const generatePDF = (e) => {
    e.preventDefault();
    // Code to generate PDF based on the topic and difficulty
    const filteredQuestions = mockData.filter(
      (item) =>
        item.topic.toLowerCase() === topic.toLowerCase() &&
        item.difficulty === difficulty
    );

    const doc = new jsPDF();
    doc.text(20, 20, `Topic: ${topic}`);
    doc.text(20, 30, `Difficulty: ${difficulty}`);
    doc.text(20, 40, 'Questions:');
    let yPos = 50;
    filteredQuestions.forEach((question) => {
      doc.text(20, yPos, question.question);
      yPos += 10;
    });
    doc.save(`${topic}-questions.pdf`);
  };

  return (
    <div className='questions-center'>
    <form action="">
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      >
        <option value="">Select Topic</option>
        <option value="DSA">DSA</option>
        <option value="Analog Electronics">Analog Electronics</option>
        <option value="Python">Python</option>
      </select>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button onClick={generatePDF}>Generate PDF</button>
      </form>
    </div>
  );
}
