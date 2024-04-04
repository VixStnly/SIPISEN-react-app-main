import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutDefault from '../../../layouts/Default.jsx';
import Api from '../../../api/index.jsx';
import { toast } from 'react-toastify'; // Assuming you have react-toastify installed
import Cookies from 'js-cookie';

function DaftarKelas() {
  document.title = "Daftar Kelas";
  const [classes, setClasses] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    perPage: 0,
    total: 0
  });
  const token = Cookies.get('token');

  const fetchData = async () => {
    try {
      const response = await Api.get(`http://localhost:8000/api/admin/classstudents`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const filteredData = response.data.data.data.filter(cls => [1, 2].includes(cls.id));

      setClasses(filteredData);
      setPagination({
        currentPage: response.data.data.current_page,
        perPage: response.data.data.per_page,
        total: response.data.data.total
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the class?");

      if (confirmDelete) {
        const response = await Api.delete(`http://localhost:8000/api/admin/classstudents/${id}`, {
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
      console.error('Error deleting class:', error);
      toast.error('Error deleting class');
    }
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
                  <th className="bg-dark text-white" style={{ textAlign: "center" }}>Daftar Kelas</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls) => (
                  <tr key={cls.id} style={{ textAlign: "center" }}>
                    <td>
                      <Link to={`/class-details/${cls.id}`}>{cls.name}</Link>
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

export default DaftarKelas;