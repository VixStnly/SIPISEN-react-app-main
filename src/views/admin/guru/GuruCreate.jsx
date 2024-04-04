import React, { useState } from "react";
import axios from "axios";
import LayoutDefault from "../../../layouts/Default";
import Cookies from 'js-cookie';
import "./GuruCreate.css";
import { Link } from "react-router-dom";

const GuruCreate = () => {
  const [name, setName] = useState('');
  const [nip, setNip] = useState('');
  const [gender, setGender] = useState('Male');
  const [subject, setSubject] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      <Link to='/guru'>
       <button type="submit" className="btn btn-secondary" style={{ marginTop: "20px", }}>
             Back
              </button>
              </Link>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          {successMessage && <div className="notification is-success">{successMessage}</div>}
          {errorMessage && <div className="notification is-danger">{errorMessage}</div>}
          <form onSubmit={saveUser}>
            <div className="field">
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
            <div className="field">
              <label className="label">Nip</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nip}
                  onChange={(e) => setNip(e.target.value)}
                  placeholder="Nip"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
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
