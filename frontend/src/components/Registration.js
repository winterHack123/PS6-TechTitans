import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const FormComponent = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    year: '',
    name: '',
    major: '',
    interests: [],
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'interests') {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      navigate('/')
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className='top-form'>
    <form onSubmit={handleSubmit}>
      <label>
        Year:
        <input type="text" name="year" value={formData.year} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Major:
        <input type="text" name="major" value={formData.major} onChange={handleChange} required />
      </label>
      <br />
      <label>
  Interests:
  <select
    name="interests"
    value={formData.interests}
    onChange={handleChange}
    required
  >
    <option value="">Select an interest</option>
    <option value="AI/ML">AI/ML</option>
    <option value="DBMS">DBMS</option>
    <option value="Python">Python</option>
    <option value="Analog electronics">Analog electronics</option>
    <option value="Web development">Web development</option>
    <option value="Software development">Software development</option>
  </select>
</label>

      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default FormComponent;
