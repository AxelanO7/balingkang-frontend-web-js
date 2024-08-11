import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BuildingList = () => {
  const [buildings, setBuilding] = useState([]);

  useEffect(() => {
    getBuildings();
  }, []);

  const goBack = () => {
    window.location.href = "/admin-page";
  };

  const getBuildings = async () => {
    const response = await axios.get("http://localhost:5000/building");
    setBuilding(response.data);
  };

  const deleteBuilding = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/building/${id}`);
      getBuildings();
    } catch (error) {
      console.log(error);
    }
  };

  const editBuilding = async (id) => {
    window.location.href = `/building/edit/${id}`;
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
                List Bangunan
              </h1>
              <div className="mt-5">
                <Link to={`add`}>
                  <button className="btn btn-primary" style={{ width: 120 }}>
                    Add Building
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
              {buildings.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="5">Data Bangunan Kosong</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {buildings.map((building, index) => (
                    <tr key={building.id}>
                      <td className="align-middle">{index + 1}</td>
                      <td className="align-middle">{building.username}</td>
                      <td className="align-middle">{building.email}</td>
                      <td className="align-middle">{building.password}</td>
                      <td>
                        <button
                          onClick={() => editBuilding(building.id)}
                          style={{ width: 70 }}
                          className="btn btn-success"
                        >
                          Edit
                        </button>
                        <span> </span>
                        <button
                          onClick={() => deleteBuilding(building.id)}
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

    // <div className="columns mt-5 is-centered">
    //   <div className="column is-half">
    //     <Link to={`add`} className="button is-success">
    //       Add Building
    //     </Link>
    //     <Link onClick={goBack} className="button is-success">
    //       Kembali
    //     </Link>
    //     <table className="table is-striped is-fullwidth">
    //       <thead>
    //         <tr>
    //           <th>No</th>
    //           <th>Nama Bangunan</th>
    //           <th>Tipe Bangunan</th>
    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {buildings.map((building, index) => (
    //           <tr key={building.id}>
    //             <td>{index + 1}</td>
    //             <td>{building.name}</td>
    //             <td>{building.type}</td>
    //             <td>
    //               {/* <Link
    //                 to={`edit/${building.id}`}
    //                 className="button is-small is-info mr-2"
    //               >
    //                 Edit
    //               </Link> */}
    //               <button
    //                 onClick={() => editBuilding(building.id)}
    //                 className="button is-small is-danger"
    //               >
    //                 Edit
    //               </button>
    //               <button
    //                 onClick={() => deleteBuilding(building.id)}
    //                 className="button is-small is-danger"
    //               >
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default BuildingList;
