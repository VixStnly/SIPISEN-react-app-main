import React, { useState } from "react";
import axios from "axios";
import LayoutDefault from "../../../layouts/Default";
import Cookies from 'js-cookie';
import "./PiketCreate.css";
import { Link } from "react-router-dom";

const PiketCreate = () => {
  const [hari, setHari] = useState('');
  const [nip, setNip] = useState('');
  const [name, setName] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Token from cookies
  const token = Cookies.get('token');

  const saveUser = async (e) => {
    e.preventDefault();
    
    try {
      // Send the data to the Laravel backend using Axios
      const response = await axios.post(
        'http://localhost:8000/api/admin/jadwalpikets', // Replace with your Laravel API endpoint
        {
          hari,
          nip,
         name,
         
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
      setHari('');
      setNip('');
      setName('');
     

      // Additional logic if needed, such as fetching updated data or redirecting
    } catch (error) {
      // Handle error and show error message
      setSuccessMessage('');
      setErrorMessage('Error creating user: ' + error.message);
    }
  };

  return (
    <LayoutDefault>
      <Link to='/piket'>
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
              <label className="label">Hari</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={hari}
                  onChange={(e) => setHari(e.target.value)}
                  placeholder=""
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
              <label className="label">Nama</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <input type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                 placeholder="nama"
                 />
         
                </div>
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

export default PiketCreate;
