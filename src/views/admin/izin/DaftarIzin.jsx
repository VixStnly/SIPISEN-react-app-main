import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutDefault from '../../../layouts/Default.jsx';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Api from '../../../api/index.jsx';
import Button from 'react-bootstrap/Button';
import hasAnyPermission from '../../../utils/Permissions.jsx';

function DaftarIzin() {
    document.title = "Users";
    const [users, setUsers] = useState([]);
    const token = Cookies.get('token');

    const fetchData = async () => {
        try {
            const response = await Api.get(`http://localhost:8000/api/admin/izins`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const usersData = response.data.data.data;
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm("Are you sure you want to delete the teacher?");

            if (confirmDelete) {
                const response = await Api.delete(`http://localhost:8000/api/admin/izins/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                console.log(response.data.message);
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleAccept = async (id) => {
      try {
          const response = await Api.patch(`http://localhost:8000/api/admin/accept_izin/{id}`, {}, {
              headers: {
                  Authorization: `Bearer ${token}`,
              }
          });
  
          console.log(response.data.message);
          fetchData();
      } catch (error) {
          console.error('Error accepting izin:', error);
      }
  };
  

    return (
        <LayoutDefault>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
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
                                    <th className="bg-dark text-white">Status</th>
                                    <th className="bg-dark text-white">Keterangan</th>
                                    <th className="bg-dark text-white">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.reverse().map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.data_students ? user.data_students.name : ''}</td>
                                        <td>{user.classstudents ? user.classstudents.name : ''}</td>
                                        <td>{user.tanggal}</td>
                                        <td>{user.status}</td>
                                        <td>{user.description}</td>
                                        <td>
                                            <Link to={`/print/${user.id}`}>
                                                <Button variant="danger">Print</Button>
                                            </Link>
                                            <Button variant="warning" onClick={() => handleDelete(user.id)}>Delete</Button>
                                            <Button variant="success" onClick={() => handleAccept(user.id)}>Accept</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}

export default DaftarIzin;
