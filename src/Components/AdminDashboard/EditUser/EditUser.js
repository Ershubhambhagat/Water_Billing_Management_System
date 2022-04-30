import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // alert(id);
  console.log("ID>>>>>>>>>>>>>>>>", id);

  const [user, setUser] = useState({
    Name: "",
    MobileNo: "",
    Email: "",
    UserName: "",
  });
  const { Name, MobileNo, Email, UserName } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    debugger;

    await axios.put(`http://localhost:3003/user/${id}`, user);
    navigate("/AdminDashboard/UserList");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <h4>Name</h4>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              lable="Name"
              name="Name"
              value={Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>

          <div className="form-group">
            <h4>Mobile No</h4>

            <input
              type="Number"
              className="form-control form-control-lg"
              placeholder="Enter Mobile No"
              name="MobileNo"
              value={MobileNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <h4>Email</h4>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter  Email Id "
              name="Email"
              value={Email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <h4 className="">UserName</h4>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter UserName "
              name="UserName"
              value={UserName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-warning btn-block ">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
