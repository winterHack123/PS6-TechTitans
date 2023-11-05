import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './components/Mainpage';
import Registration from './components/Registration'
import Loginpage from './components/Loginpage';
import Navbar from './components/Navbar';
import Interviewquestions from './components/Interviewquestions';
import FeedbackForm from './components/FeedbackForm';
import Info from './components/Info';

function App() {
  return (
    <Router>
     <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Mainpage/>} />
          <Route path="/register" element={<Registration />} />
          <Route path='/login' element={<Loginpage/>} />
          <Route path='/interview-questions' element={<Interviewquestions/>}/>
          <Route path='/feedback'element={<FeedbackForm/>}/>
          <Route path='/dsa' element={<Info/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;