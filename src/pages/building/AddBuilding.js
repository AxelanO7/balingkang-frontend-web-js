import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBuilding = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const saveBuilding = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/building", {
        name,
        type,
      });
      navigate("/building");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveBuilding}>
          <div className="field">
            <label className="label">Nama Bangunan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Bangunan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tipe Bangunan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Tipe Bangunan"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Tambah Building
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBuilding;
