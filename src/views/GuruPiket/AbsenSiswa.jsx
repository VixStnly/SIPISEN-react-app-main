import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutDefault from '../../layouts/Default.jsx';
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
    data_students_id: '',
    majors_id: '',
    classstudents_id: '',
    description: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the teacher?");

      if (confirmDelete) {
        const response = await Api.delete(`http://localhost:8000/api/admin/studentattendances/${id}`, {
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
      const response = await Api.get(`http://localhost:8000/api/admin/studentattendances`, {
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
        const studentResponse = await Api.get(`http://localhost:8000/api/admin/datastudents/${user.data_students_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        const majorResponse = await Api.get(`http://localhost:8000/api/admin/majors/${user.majors_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        const classResponse = await Api.get(`http://localhost:8000/api/admin/classstudents/${user.classstudents_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        user.studentName = studentResponse.data.name;
        user.majorName = majorResponse.data.name;
        user.className = classResponse.data.name;
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

  return (
    <LayoutDefault>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Absen Siswa Tidak Hadir </h1>
        {hasAnyPermission(['users.index']) &&
          <Link to='/formsiswa'>
            <Button className='btn btn-dark' onClick={handleShow} style={{ marginRight: "20px" }}>
              Create Data
            </Button>
          </Link>
        }
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th className="bg-dark text-white">Id</th>
                  <th className="bg-dark text-white">Nama Siswa</th>
                  <th className="bg-dark text-white">Jurusan</th>
                  <th className="bg-dark text-white">Kelas</th>
                  <th className="bg-dark text-white">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {users.reverse().map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.data_students ? user.data_students.name : ''}</td>
                      <td>{user.majors ? user.majors.name :''}</td>
                      <td>{user.classstudents ? user.classstudents.name:''}</td>
                      <td>{user.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}

export default Userlist;
