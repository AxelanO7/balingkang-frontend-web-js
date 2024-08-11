import React from "react";
import FooterComponent from "../../layouts/FooterComponent";
import NavbarComponent from "../../layouts/NavbarComponent";
import illust_admin from "../../assets/illust_admin.png";

const AdminPage = () => {
  const tapAdmin = () => {
    window.location.href = `/admin`;
  };
  const tapBuilding = () => {
    window.location.href = `/building`;
  };

  return (
    <div className="admin_page" id="admin_page">
      <NavbarComponent />
      <div className="cotainer-fluid" style={{ backgroundColor: "#A20404" }}>
        <div className="container vh-100">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-6">
              <img src={illust_admin} alt="welcome_admin" className="mt-4" />
            </div>
            <div
              className="col-6"
            >
              <div className="section-title text-center">
                <h1 className="text-light">Welcome Admin</h1>
                <p className="text-light fw-semibold">
                  Silahkan pilih data yang ingin dikelola
                </p>
                <button onClick={tapAdmin} className="btn btn-light px-4 me-2">
                  Admin
                </button>
                <button
                  onClick={tapBuilding}
                  className="btn btn-light px-4 ms-2"
                >
                  Building
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default AdminPage;
