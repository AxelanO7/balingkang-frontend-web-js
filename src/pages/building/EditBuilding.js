import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBuilding = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBuildingById();
  }, []);

  const updateBuilding = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/building/${id}`, {
        name,
        type,
      });
      navigate("/building");
    } catch (error) {
      console.log(error);
    }
  };

  const getBuildingById = async () => {
    const response = await axios.get(`http://localhost:5000/building/${id}`);
    setName(response.data.name);
    setType(response.data.type);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBuilding}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
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
              Edit Building
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBuilding;
