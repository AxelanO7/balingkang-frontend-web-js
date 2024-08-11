import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_pura.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const tapLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/admin/login", {
        username,
        password,
      });
      navigate("/admin-page");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="gradient-form bg-light" style={{ overflowY: "hidden" }}>
      <div class="container py-5 ">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img src={logo} width={185} alt="logo" />
                      <h4 class="mt-1 mb-5 pb-1 fw-semibold">Login Admin</h4>
                    </div>

                    <form onSubmit={tapLogin}>
                      <p>Silahkan masuk ke akun anda</p>
                      <label class="form-label">Username</label>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <label class="form-label">Password</label>
                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 form-control text-white fw-semibold"
                          type="submit"
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4 fw-semibold">
                      Digitalisasi Sejarah Pura Dalem
                    </h4>
                    <p class="fw-normal mb-0 text-center">
                      Website tentang pengenalan sejarah pura dalem balingkang
                      dengan di sisipi virtual tour 360 pada sekeliling area
                      pura
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
