import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutDefault from '../../layouts/Default.jsx';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Userlist() {
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
        console.log('welcome');
    }, []);

    const getUsers = async () => {
        try {
            const token = await getToken();
            const response =  await Api.get(`/api/admin/datateacher`, {
                //header
                headers: {
                  //header Bearer + Token
                  Authorization: `Bearer ${token}`,
                },
            });
            setUserList(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getToken = async () => {
        try {
            // Ganti dengan endpoint yang sesuai untuk mendapatkan token di Laravel Anda
            const response = await axios.post('http://localhost:8000/api/login', {
                email: 'your-email',
                password: 'your-password',
            });

            return response.data.access_token;
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const token = await getToken();
            const confirmDelete = window.confirm('Are you sure do you want to delete the data?');
            if (confirmDelete) {
                await axios.delete(`http://localhost:8000/api/admin/datateachers/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                getUsers();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
      <LayoutDefault>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Daftar-Guru</h1>
          <Link to="/create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
              Create User
          </Link>
      </div>
      <div className="card shadow mb-4">
          <div className="card-body">
              {isLoading ? (
                  <p>loading..</p>
              ) : (
                  <div className="table-responsive">
                      <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                          <thead>
                              <tr>
                                  <th className="bg-dark text-white">Id</th>
                                  <th className="bg-dark text-white">Nama Guru</th>
                                  <th className="bg-dark text-white">E-Mail</th>
                                  <th className="bg-dark text-white">Jenis Kelamin</th>
                                  <th className="bg-dark text-white">Mata Pelajaran</th>
                                  
                                  <th className="bg-dark text-white">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {userList.map((user) => {
                                  return (
                                      <tr key={user.id}>
                                          <td>{user.id}</td>
                                          <td>{user.name}</td>
                                          <td>{user.email}</td>
                                          <td>{user.gender}</td>
                                          <td>{user.subject}</td>
                                          
                                          <th>
                                              <Link to={`/edit/${user.id}`} className="btn btn-info btn-sm mr-1">
                                                  Edit
                                              </Link>
                                              <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm mr-1">
                                                  Delete
                                              </button>
                                          </th>
                                      </tr>
                                  );
                              })}
                          </tbody>
                      </table>
                  </div>
              )}
          </div>
      </div>
  </LayoutDefault>
    );
}

export default Userlist;
