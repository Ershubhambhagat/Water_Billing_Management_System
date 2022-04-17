import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Approve = () => {


  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID>>>>>>>>>>>>>>>>", id);

  const [user, setUser] = useState({    Status: "",});


  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    alert("Approve ")
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    debugger;
    await axios.put(`http://localhost:3003/user/${id}`, user);
    navigate("/AdminDashboard/AdminWaterConnApp");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Approve</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <h4 className="">Status</h4>
    
            <input
              type="Text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName "
              name="Status"
              value="Approved"
              onChange={(e) => onChange(e)}
              
            />
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-success btn-block " onChange={onsubmit}>Approve User</button>
        </form>
      </div>
    </div>
  );
};

export default Approve;
