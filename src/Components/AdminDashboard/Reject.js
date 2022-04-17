import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Reject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // alert(id);
  console.log("ID>>>>>>>>>>>>>>>>", id);
  const [user, setUser] = useState({
    Status: "",
  });
  const { Status } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  function status() {
    return "approve";
  }
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
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <h4 className="">UserName</h4>
            <input
              type="Text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName "
              name="Status"
              //   value={status}
              value={Status}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-danger btn-block ">Reject User</button>
        </form>
      </div>
    </div>
  );
};

export default Reject;
