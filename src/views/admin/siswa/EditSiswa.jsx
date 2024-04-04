import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LayoutDefault from "../../../layouts/Default";
import Cookies from 'js-cookie';
import "./SiswaCreate.css";

const SiswaCreate = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [nisn, setNisn] = useState('');
  const [no_hp, setNo_hp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Token from cookies
  const token = Cookies.get('token');

  useEffect(() => {
    // Fetch existing data if an ID is provided
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/admin/datastudents/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { name, nisn, no_hp, alamat } = response.data;

      // Populate form fields with fetched data
      setName(name);
      setNisn(nisn);
      setNo_hp(no_hp);
      setAlamat(alamat);
    } catch (error) {
      setErrorMessage('Error fetching user data: ' + error.message);
    }
  };

  const saveUser = async (e) => {
    e.preventDefault();
  
    try {
      // Send the data to the Laravel backend using Axios
      const response = await axios.patch(
        `http://localhost:8000/api/admin/datastudents/${id}`,
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
      setSuccessMessage('User updated successfully');
      setErrorMessage('');
  
      // Reset the form
      setName('');
      setNisn('');
      setNo_hp('');
      setAlamat('');
  
      // If ID is present, additional logic can be added here
  
    } catch (error) {
      // Handle error and show error message
      setSuccessMessage('');
      setErrorMessage('Error updating user: ' + error.message);
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
