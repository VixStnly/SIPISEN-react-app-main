import React, { useState } from "react";
import axios from "axios";
import LayoutDefault from "../../layouts/Default";
import Cookies from 'js-cookie';
import "./FormAbsen.css";
import { Link } from "react-router-dom";

const GuruCreate = () => {
  const [name, setName] = useState('');
  const [nip, setNip] = useState('');
  const [gender, setGender] = useState('Male');
  const [subject, setSubject] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  // Token from cookies
  const token = Cookies.get('token');

  const saveUser = async (e) => {
    e.preventDefault();
    
    try {
      // Send the data to the Laravel backend using Axios
      const response = await axios.post(
        'http://localhost:8000/api/admin/datateachers', // Replace with your Laravel API endpoint
        {
          name,
          nip,
          gender,
          subject,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle success
      setSuccessMessage('User created successfully');
      setErrorMessage('');

      // Reset the form
      setName('');
      setNip('');
      setGender('Male');
      setSubject('');

      // Additional logic if needed, such as fetching updated data or redirecting
    } catch (error) {
      // Handle error and show error message
      setSuccessMessage('');
      setErrorMessage('Error creating user: ' + error.message);
    }
  };

  return (
    <LayoutDefault>
      <Link to='/MenuIzin'>
       <button type="submit" className="btn btn-secondary" style={{ marginTop: "20px", }}>
             Back 
          
              </button>
              </Link>
              <h3 style={{textAlign:"center", fontWeight:"bold"}}>Input Data Absen</h3>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          {successMessage && <div className="notification is-success">{successMessage}</div>}
          {errorMessage && <div className="notification is-danger">{errorMessage}</div>}
          <form onSubmit={saveUser}>
  <div className="field" style={{ marginBottom: "10px" }}>
    <label className="label">Name</label>
    <div className="control">
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
    </div>
  </div>
  <div className="field" style={{ marginBottom: "10px" }}>
    <label className="label">Kelas</label>
    <div className="control">
      <input
        type="text"
        className="input"
        value={nip}
        onChange={(e) => setNip(e.target.value)}
        placeholder="Kelas"
      />
    </div>
  </div>
  <div className="field" style={{ marginBottom: "10px" }}>
    <label className="label">Tanggal</label>
    <div className="control">
      <input
        className="input"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  </div>
  
  
  <div className="field">
    <button type="submit" className="btn btn-primary" style={{ marginTop: "20px", marginLeft:"700px"}}>
      Save
    </button>
  </div>
</form>

        </div>
      </div>
    </LayoutDefault>
  );
};

export default GuruCreate;
