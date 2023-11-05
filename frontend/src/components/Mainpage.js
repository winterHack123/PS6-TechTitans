import React from 'react'
import Infoboxes from './Infoboxes'
import { Link } from 'react-router-dom'

export default function Mainpage() {
  return (
    <>
    <h1 className='center-tag'>✨Checkout the main Interview topics ✨</h1>
    <div className='infobox-container'>

      <Infoboxes 
    topic="DSA" 
    description="involves organizing data for efficient storage and retrieval crucial for problem-solving and software development" 
    />
<Infoboxes 
  topic="DBMS" 
  description="DBMS: Database Management System organizes, retrieves, updates, and manages data efficiently, ensuring data integrity and security" 
/>
<Infoboxes 
  topic="PYTHON" 
  description="Python: Versatile, high-level programming language emphasizing simplicity, readability, and broad application in software development and data science." 
/>
<Infoboxes 
  topic="MACHINE LEARNING" 
  description="Machine learning: AI technology enabling systems to learn and improve from experience autonomously" 
/>
<Infoboxes 
  topic="WEB DEV" 
  description="Web development: Creating interactive websites and web applications for diverse purposes and user experiences online" 
/>
<Infoboxes 
  topic="ANALOG ELECTRONICS" 
  description="Analog electronics: Branch of electronics dealing with continuous signals, emphasizing circuits for amplification, filtering, and modulation." 
/>
<Infoboxes 
  topic="SOFTWARE DEV" 
  description="Software development: Iterative process crafting applications, involving design, coding, testing, and deployment, meeting user needs effectively" 
/>
<Infoboxes 
  topic="ARTIFICIAL INTELIGENCE" 
  description="AI: Artificial Intelligence simulates human intelligence, enabling machines to learn, reason, and solve problems autonomously." 
/>
    </div>
    </>
  )
}
