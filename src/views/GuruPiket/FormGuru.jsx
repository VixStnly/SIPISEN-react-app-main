import React, { useState } from "react";
import axios from "axios";
import LayoutDefault from "../../layouts/Default";
import Cookies from 'js-cookie';
import "./FormAbsen.css"
import { Link } from "react-router-dom";

const FormSiswa = () => {

  const [data_teachers_id, setData_teachers_id] = useState('');

  const [tanggal, setTanggal] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  // Token from cookies
// Token from cookies
const token = Cookies.get('token');
console.log('Token:', token);

const saveUser = async (e) => {
  e.preventDefault();

// Check if token exists
if (!token) {
  setSuccessMessage('');
  setErrorMessage('Error: Token is missing');
 
}
    try {
      // Send the data to the Laravel backend using Axios
      const response = await axios.post(
        'http://localhost:8000/api/admin/teacherattendances',
        {
          data_teachers_id,
         
          tanggal,
          description,
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
      setData_teachers_id('');
    
      setTanggal('');
      setDescription('');
      setSelectedDate('');
  
      // Additional logic if needed, such as fetching updated data or redirecting
    } catch (error) {
      // Handle error and show error message
      setSuccessMessage('');
      setErrorMessage('Error creating user: ' + error.message);
    }
  };
  
  return (
    <LayoutDefault>
      <Link to='/AbsenGuru'>
       <button type="submit" className="btn btn-secondary" style={{ marginTop: "20px", }}>
             Back 
          
              </button>
              </Link>
              <h3 style={{textAlign:"center", fontWeight:"bold"}}>Input Data Absen Guru</h3>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          {successMessage && <div className="notification is-success">{successMessage}</div>}
          {errorMessage && <div className="notification is-danger">{errorMessage}</div>}
          <form onSubmit={saveUser}>
  <div className="field" style={{ marginBottom: "10px" }}>
    <label className="label">Nama</label>
    <div className="control">
      <input
        type="text"
        className="input"
        value={data_teachers_id}
        onChange={(e) => setData_teachers_id(e.target.value)}
        placeholder="nama"
      />
    </div>
  </div>
  <div className="field" style={{ marginBottom: "10px" }}>
    <label className="label">Tanggal</label>
    <div className="control">
      <input
        type="text"
        className="input"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        placeholder="Tanggal"
      />
    </div>
  </div>
  <div className="field" style={{ marginBottom: "10px" }}>
  <label className="label">Keterangan</label>
  <div className="control">
    <div className="select">
      <select
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
        <option value="">Pilih Keterangan</option>
        <option value="sakit">Sakit</option>
        <option value="izin">Izin</option>
        <option value="tanpa-keterangan">Tanpa Keterangan</option>
      </select>
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

export default FormSiswa;
