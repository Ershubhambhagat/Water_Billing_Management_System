import style from "./Form1.module.css";
import Form1Input from "./Form1Input";
import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
// import React, { Component } from "react";

const Form1 = () => {
  const navigate = useNavigate();
  const conn = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [data, setdata] = useState({
    UserName: "",
    UserId: 0,
    PhoneNumber: "",
    ConnectionType: "",
    HouseNUmber: "",
    Area: "",
    Status: "",
  });
  //const apiUrl = "http://localhost:18972/api/NewConnectionRegistration/Register";
  const apiUrl = "http://localhost:3003/user";

  const token = localStorage.getItem("token");
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      //Authorization: `Bearer ${token} `
      Authorization: "Bearer" + token,
    },
  });

  const userId = parseInt(localStorage.getItem("userId"));

  // useEffect(() => {
  //     const GetData = async () => {
  //         const result = await authAxios.get(baseUrl);
  //         setData(result.data);
  //     }
  //     GetData();

  // }
  //     , [])

  //console.log(token);

  const Registration = (e) => {
    e.preventDefault();
    debugger;
    const data1 = {
      UserName: data.UserName,
      UserId: userId,
      PhoneNumber: data.PhoneNumber,
      ConnectionType: data.ConnectionType,
      HouseNUmber: parseInt(data.HouseNUmber),
      Area: data.Area,
      Status: "Pending",
    };
    authAxios.post(apiUrl, data1).then((result) => {
      debugger;
      console.log(result.data);
      if (result.data.Status === "Invalid") alert("Invalid User");
      else {
        alert("New Connection Application Registered Successfully!!!");
        navigate("/UserDashboard/UserDashboard");
      }
      navigate("/UserDashboard/UserDashboard");
    });
  };

  const onChange = (e) => {
    e.persist();
    debugger;
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "UserName",
      type: "text",
      placeholder: "Enter your  Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "UserName",
      required: true,
    },

    {
      id: 2,
      type: "tel",
      maxlength: "10",
      minlength: "9",
      name: "PhoneNumber",
      placeholder: "Enter your Mobile no.",
      errorMessage: "It should be a valid Mobile No Only{10} !",
      label: "MobileNumber",
      required: true,
      pattern: "[1-9]{1}[0-9]{9}",
    },
    {
      id: 3,
      name: "ConnectionType",

      type: "Text",

      placeholder: "Connnection Type (Domestic/Commercial)",

      // placeholder: <Select options={conn} />,
      errorMessage: "It should be a either domestic or commerrcial type!",
      label: "Connection Type",
      required: true,
    },
    {
      id: 4,
      name: "HouseNUmber",
      type: "text",
      placeholder: "Enter your house no.",
      errorMessage: "House no. is required!",
      label: "HouseNumber",
      required: true,
    },
    {
      id: 5,
      name: "Area",
      type: "text",
      placeholder: "Enter area name",
      errorMessage: "Area is required!",
      label: "Area",
      required: true,
    },
  ];

  return (
    <form className={style.form} onSubmit={Registration}>
      <h2 className={style.heading}>New Water Connection Registration</h2>

      <div className={style.form_grid}>
        {/* <Select options={conn} />

        <Select
        // id="3"
        // name="ConnectionType"
        // label="Connection Type"
        // onSelect={onChange}
        // options={conn}
        /> */}

        {inputs.map((input) => (
          <Form1Input
            key={input.id}
            {...input}
            value={data.name}
            onChange={onChange}
          />
        ))}
      </div>
      <div className={style.btn_container}>
        <button type="submit" className="btn btn-success">
          Request Connection
        </button>
      </div>
    </form>
  );
};

export default Form1;
