// import useState and useEffect
import { useState, useEffect } from "react";

// import Link from react router dom
import { Link } from "react-router-dom";

// import api
import Api from "../../api";

// import js cookie
import Cookies from "js-cookie";

// import layout
import LayoutDefault from "../../layouts/Default";

// import permissions
import hasAnyPermission from "../../utils/Permissions.jsx";

// import pagination component
import Pagination from "../../components/Pagination";

export default function RolesIndex() {
  // title page
  document.title = "Roles - NewsApp Administartor";

  // define state "roles"
  const [roles, setRoles] = useState([]);

  // define state "pagination"
  const [pagination, setPagination] = useState({
    currentPage: 0,
    perPage: 0,
    total: 0,
  });

  // define state "keywords"
  const [keywords, setKeywords] = useState("");

  // token from cookies
  const token = Cookies.get("token");

  // function fetchData
  const fetchData = async (pageNumber = 1, keywords = "") => {
    // define variable "page"
    const page = pageNumber ? pageNumber : pagination.currentPage;

    await Api.get(`/api/admin/roles?search=${keywords}&page=${page}`, {
      // header
      headers: {
        // header Bearer + Token
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // set data response to state "setRoles"
      setRoles(response.data.data.data);

      // set data pagination to state "pagination"
      setPagination(() => ({
        currentPage: response.data.data.current_page,
        perPage: response.data.data.per_page,
        total: response.data.data.total,
      }));
    });
  };

  // useEffect
  useEffect(() => {
    // call function "fetchData"
    fetchData();
  }, []);

  // function "searchData"
  const searchData = async (e) => {
    // set value to state "keywords"
    setKeywords(e.target.value);

    // call function "fetchData"
    fetchData(1, e.target.value);
  };

  // function handleDelete untuk menangani penghapusan role
  const handleDelete = async (roleId) => {
    try {
      // Kirim request untuk menghapus role
      const response = await Api.delete(`/api/admin/roles/${roleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Tampilkan pesan sukses
      console.log(response.data.message);

      // Perbarui data roles setelah penghapusan berhasil
      fetchData();
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  return (
    <LayoutDefault>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {hasAnyPermission(["roles.create"]) && (
                <div className="col-md-3 col-12 mb-2"></div>
              )}
              <div className="col-md-9 col-12 mb-2">
                <div className="input-group">
                  <span className="input-group-text border-0 shadow">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-12">
            <div className="card border-0 shadow">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-centered mb-0 rounded">
                    <thead
                      className="thead-dark"
                      style={{ backgroundColor: "black" }}
                    >
                      <tr className="border-0 bg-darky">
                        <th className="border-0" style={{ width: "5%" }}>
                          No.
                        </th>
                        <th className="border-0">Role Name</th>
                        <th className="border-0" style={{ width: "60%" }}>
                          Permissions
                        </th>
                        <th className="border-0" style={{ width: "15%" }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        //cek apakah data ada
                        roles.length > 0 ? (
                          //looping data "roles" dengan "map"
                          roles.map((role, index) => (
                            <tr key={index}>
                              <td className="fw-bold text-center">
                                {++index +
                                  (pagination.currentPage - 1) *
                                    pagination.perPage}
                              </td>
                              <td>{role.name}</td>
                              <td>
                                {role.permissions.map((permission, index) => (
                                  <span
                                    className="btn btn-warning btn-sm shadow-sm border-0 ms-2 mb-2 fw-normal"
                                    key={index}
                                  >
                                    {permission.name}
                                  </span>
                                ))}
                              </td>
                              <td className="text-center">
                                {hasAnyPermission(["roles.edit"]) && (
                                  <Link
                                    to={`/roles-edit/:id`}
                                    className="btn btn-primary btn-sm me-2 "
                                  >
                                    Edit
                                  </Link>
                                )}

                                {hasAnyPermission(["roles.delete"]) && (
                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(role.id)}
                                  >
                                    Delete
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))
                        ) : (
                          //tampilkan pesan data belum tersedia
                          <tr>
                            <td colSpan={4}>
                              <div
                                className="alert alert-danger border-0 rounded shadow-sm w-100"
                                role="alert"
                              >
                                Data Belum Tersedia!.
                              </div>
                            </td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                </div>
                <Pagination
                  currentPage={pagination.currentPage}
                  perPage={pagination.perPage}
                  total={pagination.total}
                  onChange={(pageNumber) => fetchData(pageNumber, keywords)}
                  position="end"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
