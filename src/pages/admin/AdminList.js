import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminList = () => {
  const [admins, setAdmin] = useState([]);

  useEffect(() => {
    getAdmins();
  }, []);

  const goBack = () => {
    window.location.href = "/admin-page";
  };

  const getAdmins = async () => {
    const response = await axios.get("http://localhost:5000/admin");
    setAdmin(response.data);
  };

  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/${id}`);
      getAdmins();
    } catch (error) {
      console.log(error);
    }
  };

  const editAdmin = async (id) => {
    window.location.href = `/admin/edit/${id}`;
  };

  return (
    <div className="container-fluid">
      <div className="container bg-light px-5">
        <div className="columns mt-5 is-centered">
          <div className="column is-half table-responsive text-nowrap">
            <div className="mt-5">
              <h1
                className="text-center fw-semibold"
                style={{ color: "#A20404" }}
              >
                List Admin
              </h1>
              <div className="mt-5">
                <Link to={`add`}>
                  <button className="btn btn-primary" style={{ width: 120 }}>
                    Add Admin
                  </button>
                </Link>
                <Link onClick={goBack} className="ms-2">
                  <button className="btn btn-secondary" style={{ width: 120 }}>
                    Back
                  </button>
                </Link>
              </div>
            </div>
            <table className="table table-bordered text-center mb-5 mt-4">
              <thead>
                <tr>
                  <th
                    className="col-1"
                    style={{ backgroundColor: "#A20404", color: "white" }}
                  >
                    No
                  </th>
                  <th
                    className="col-3"
                    style={{ backgroundColor: "#A20404", color: "white" }}
                  >
                    Username
                  </th>
                  <th
                    className="col-3"
                    style={{ backgroundColor: "#A20404", color: "white" }}
                  >
                    Email
                  </th>
                  <th
                    className="col-3"
                    style={{ backgroundColor: "#A20404", color: "white" }}
                  >
                    Password
                  </th>
                  <th
                    className="col-2"
                    style={{ backgroundColor: "#A20404", color: "white" }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              {admins.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="5">Data Admin Kosong</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {admins.map((admin, index) => (
                    <tr key={admin.id}>
                      <td className="align-middle">{index + 1}</td>
                      <td className="align-middle">{admin.username}</td>
                      <td className="align-middle">{admin.email}</td>
                      <td className="align-middle">{admin.password}</td>
                      <td>
                        <button
                          onClick={() => editAdmin(admin.id)}
                          style={{ width: 70 }}
                          className="btn btn-success"
                        >
                          Edit
                        </button>
                        <span> </span>
                        <button
                          onClick={() => deleteAdmin(admin.id)}
                          style={{ width: 70 }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
