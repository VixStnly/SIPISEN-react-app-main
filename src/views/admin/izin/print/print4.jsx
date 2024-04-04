import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Api from '../../../../api/index.jsx';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import hasAnyPermission from '../../../../utils/Permissions.jsx'
function Print() {
     //title page
     document.title = "Users";
     const [show, setShow] = useState(false);
     const [formData, setFormData] = useState({
       data_students_id: '',
       classstudents_id: '',
      tanggal: '',
       subject_id: '',
       description: '',
     });
   
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
   
    

     const handleDelete = async (id) => {
      try {
        const confirmDelete = window.confirm("Are you sure you want to delete the teacher?");
    
        if (confirmDelete) {
          const response = await Api.delete(`http://localhost:8000/api/admin/izins/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
    
          toast.success(response.data.message, {
            position: "top-right",
            duration: 4000,
          });
    
          fetchData(); // Reload the data after deletion
          window.location.reload(); // Reload the page
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };
    
     
 
     //define state "users"
     const [users, setUsers] = useState([]);
 
     //define state "pagination"
     const [pagination, setPagination] = useState({
         currentPage: 0,
         perPage: 0,
         total: 0
     });
 
     //define state "keywords"
     const [keywords, setKeywords] = useState('');
 
     //token from cookies
     const token = Cookies.get('token');
 
  
function DaftarIzin() {
    const { id } = useParams(); // Get the ID from the URL parameters
  
    // ... (other states and functions)
  
    const fetchDataById = async (id) => {
      try {
        const response = await Api.get(`http://localhost:8000/api/admin/izins/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const userData = response.data.data;
  
        // Fetch additional data for the user
        const studentResponse = await Api.get(
          `http://localhost:8000/api/admin/datastudents/${userData.data_students_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        const classResponse = await Api.get(
          `http://localhost:8000/api/admin/classstudents/${userData.classstudents_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Set additional data in the user object
        userData.studentName = studentResponse.data.name;
        userData.className = classResponse.data.name;
  
        // Update state with the user data
        setUsers([userData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      // Call function "fetchDataById" with the ID from the URL parameters
      fetchDataById(id);
    }, [id]);
 
     //function "searchData"
     const searchData = async (e) => {
 
         //set value to state "keywords"
         setKeywords(e.target.value);
 
         //call function "fetchData"
         fetchData(1, e.target.value)
 
     }

     return (
        <div className="text-center">
          <div className="d-sm-flex align-items-center justify-content-center mb-4">
            <h1 className="h3 mb-0 text-gray-800">Daftar-Izin-Siswa</h1>
          </div>
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th className="bg-dark text-white">Id</th>
                      <th className="bg-dark text-white">Nama Siswa</th>
                      <th className="bg-dark text-white">Kelas</th>
                      <th className="bg-dark text-white">Tanggal</th>
                      <th className="bg-dark text-white">Mata Pelajaran</th>
                      <th className="bg-dark text-white">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.reverse().map((user) => (
                      <tr key={user.id}>
                        <td><strong>ID:</strong></td>
                        <td>{user.id}</td>
                        <td><strong>Nama Siswa:</strong></td>
                        <td>{user.data_students ? user.data_students.name : ''}</td>
                        <td><strong>Kelas:</strong></td>
                        <td>{user.classstudents ? user.classstudents.name : ''}</td>
                        <td><strong>Tanggal:</strong></td>
                        <td>{user.tanggal}</td>
                        <td><strong>Mata Pelajaran:</strong></td>
                        <td>{user.subjects ? user.subjects.name : ''}</td>
                        <td><strong>Keterangan:</strong></td>
                        <td>{user.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
}}

export default Print;