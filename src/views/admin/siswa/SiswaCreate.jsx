import React, { useState } from "react";
import axios from "axios";
import LayoutDefault from "../../../layouts/Default";
import Cookies from 'js-cookie';
import "./SiswaCreate.css";
import { Link } from "react-router-dom";

const SiswaCreate = () => {
  const [name, setName] = useState('');
  const [nisn, setNisn] = useState('');
  const [no_hp, setNo_hp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Token from cookies
  const token = Cookies.get('token');

  const saveUser = async (e) => {
    e.preventDefault();
    
    try {
      // Send the data to the Laravel backend using Axios
      const response = await axios.post(
        'http://localhost:8000/api/admin/datastudents', // Replace with your Laravel API endpoint
        {
          name,
          nisn,
          no_hp,
          alamat,
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
      setNisn('');
      setNo_hp('Male');
      setAlamat('');

      // Additional logic if needed, such as fetching updated data or redirecting
    } catch (error) {
      // Handle error and show error message
      setSuccessMessage('');
      setErrorMessage('Error creating user: ' + error.message);
    }
  };

  return (
    <LayoutDefault>
      <Link to='/siswa'>
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
              <label className="label">Nama</label>
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
              <label className="label">NISN</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                  placeholder="Nisn"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nomor Hp</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={no_hp}
                  onChange={(e) => setNo_hp(e.target.value)}
                  placeholder="No_hp"
                />
              </div>
              </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
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

export default SiswaCreate;
