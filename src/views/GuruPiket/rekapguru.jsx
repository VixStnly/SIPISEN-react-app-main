import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Api from '../../api/index.jsx';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import hasAnyPermission from '../../utils/Permissions.jsx';

function Userlist() {
  document.title = "Users";
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    data_teachers_id: '',
    tanggal: '',
    description: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the teacher?");

      if (confirmDelete) {
        const response = await Api.delete(`http://localhost:8000/api/admin/teacherattendances/${id}`, {
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

  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    perPage: 0,
    total: 0
  });
  const [keywords, setKeywords] = useState('');
  const token = Cookies.get('token');

  const fetchData = async (pageNumber = 1, keywords = '') => {
    const page = pageNumber ? pageNumber : pagination.currentPage;

    try {
      const response = await Api.get(`http://localhost:8000/api/admin/teacherattendances`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const usersData = response.data.data.data;
      setUsers(usersData);

      setPagination(() => ({
        currentPage: response.data.data.current_page,
        perPage: response.data.data.per_page,
        total: response.data.data.total
      }));

      // Fetch additional data for each user
      await Promise.all(usersData.map(async (user) => {
        const teacherResponse = await Api.get(`http://localhost:8000/api/admin/datateachers/${user.data_teachers_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        

        user.teachersName = teachersResponse.data.name;
     
      }));

      // Update state with additional data
      setUsers([...usersData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchData = async (e) => {
    setKeywords(e.target.value);
    fetchData(1, e.target.value);
  }
  const printAttendance = () => {
    // Add your printing logic here
    window.print();


  };
  
  return (
 <>
      <div className="text-center mb-4 " style={{marginTop:"20px"}}>
        <h1 className="h3 mb-0 text-gray-800">Rekap Guru </h1>
       
        <Button className='btn btn-danger' onClick={printAttendance} style={{ marginRight: "200px",marginTop:"20px", marginLeft:"1400px"}}>
            Print
          </Button>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th className="bg-dark text-white">Id</th>
                  <th className="bg-dark text-white">Nama Guru</th>
                  <th className="bg-dark text-white">Tanggal</th>
                  <th className="bg-dark text-white">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {users.reverse().map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.data_teachers ? user.data_teachers.name : ''}</td>
                      
                      <td>{user.tanggal}</td>
                      <td>{user.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
  );
}

export default Userlist;
