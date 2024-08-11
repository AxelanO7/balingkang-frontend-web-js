import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditAdmin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAdminById();
  }, []);

  const updateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/admin/${id}`, {
        username,
        email,
        password,
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const getAdminById = async () => {
    const response = await axios.get(`http://localhost:5000/admin/${id}`);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateAdmin}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Edit Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdmin;
