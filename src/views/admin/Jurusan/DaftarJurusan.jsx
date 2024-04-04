import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutDefault from '../../../layouts/Default.jsx';
import Api from '../../../api/index.jsx';
import { toast } from 'react-toastify'; // Assuming you have react-toastify installed
import Cookies from 'js-cookie';

function Userlist() {
  document.title = "Users";
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

    await Api.get(`http://localhost:8000/api/admin/majors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        setUsers(response.data.data.data);
        setPagination({
          currentPage: response.data.data.current_page,
          perPage: response.data.data.per_page,
          total: response.data.data.total
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the teacher?");

      if (confirmDelete) {
        const response = await Api.delete(`http://localhost:8000/api/admin/majors/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        toast.success(response.data.message, {
          position: "top-right",
          duration: 4000,
        });

        fetchData();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };

  const searchData = async (e) => {
    setKeywords(e.target.value);
    fetchData(1, e.target.value);
  };

    return (
      <LayoutDefault>
      <div className="d-sm-flex align-items-center justify-content-center mb-4">
      </div>
      <div className="card shadow mb-4 justify-content-center">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th className="bg-dark text-white" style={{ textAlign: "center" }}>Daftar Jurusan</th>
                </tr>
              </thead>
              <tbody>
                {users.reverse().map((user) => (
                  <tr key={user.id} style={{ textAlign: "center" }}>
                    <td>
                      {/* Use Link to navigate to a separate page (replace '/user-details' with your desired route) */}
                      <Link to={`/user-details/${user.id}`}>{user.name}</Link>
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
export default Userlist;
