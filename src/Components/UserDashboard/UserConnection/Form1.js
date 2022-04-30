// import style from "./Form1.module.css";
// import Form1Input from "./Form1Input";
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Form1 = () => {
//   const navigate = useNavigate();

//   const [data, setdata] = useState({
//     UserName: "",
//     UserId: 0,
//     PhoneNumber: "",
//     ConnectionType: "",
//     HouseNUmber: "",
//     Area: "",
//     Status: "",
//   });
//   // const apiUrl = "http://localhost:18972/api/NewConnectionRegistration/Register";
//   const apiUrl = "http://localhost:3003/user";

//   const token = localStorage.getItem("token");
//   const authAxios = axios.create({
//     baseURL: apiUrl,
//     headers: {
//       Authorization: `Bearer ${token} `,
//       //Authorization:'Bearer'+token
//     },
//   });

//   const userId = parseInt(localStorage.getItem("userId"));

//   const Registration = e => {
//     e.preventDefault();
//     debugger;
//     const data1 = {
//       UserName: data.UserName,
//       UserId: userId,
//       PhoneNumber: data.PhoneNumber,
//       ConnectionType: data.ConnectionType,
//       HouseNUmber: parseInt(data.HouseNUmber),
//       Area: data.Area,
//       Status: "Pending",
//     };
//     authAxios.post(apiUrl, data1).then(result => {
//       debugger;
//       console.log(result.data);
//       if (result.data.Status === "Invalid") alert("Invalid User");
//       else {
//         alert("New Connection Application Registered Successfully!!!");
//         navigate("/UserDashboard/UserDashboard");
//       }
//       navigate("/UserDashboard/UserDashboard");
//     });
//   };

//   const onChange = e => {
//     e.persist();
//     debugger;
//     setdata({ ...data, [e.target.name]: e.target.value });
//   };

//   const inputs = [
//     {
//       id: 1,
//       name: "UserName",
//       type: "text",
//       placeholder: "Enter your  Name",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "UserName",
//       pattern: `^[A-Za-z0-9]{3,16}$`,
//       required: true,
//     },

//     {
//       id: 2,
//       type: "tel",
//       maxlength: "10",
//       minlength: "9",
//       name: "PhoneNumber",
//       placeholder: "Enter your Mobile no.",
//       errorMessage: "It should be a valid Mobile No Only{10} !",
//       label: "MobileNumber",
//       required: true,
//       pattern: "[1-9]{1}[0-9]{9}",
//     },
//     {
//       id: 3,
//       name: "ConnectionType",
//       type: "text",
//       placeholder: "Connnection Type (Domestic/Commercial)",
//       errorMessage: "It should be a either domestic or commerrcial type!",
//       label: "Connection Type",
//       required: true,
//     },
//     {
//       id: 4,
//       name: "ConnectionType",
//       type: "text",
//       placeholder: "Enter your house no.",
//       errorMessage: "House no. is required!",
//       label: "HouseNumber",
//       required: true,
//     },
//     {
//       id: 5,
//       name: "Area",
//       type: "text",
//       placeholder: "Enter area name",
//       errorMessage: "Area is required!",
//       label: "Area",
//       required: true,
//     },
//   ];

//   return (
//     <form className={style.form} onSubmit={Registration}>
//       <h2 className={style.heading}>New Water Connection Registration</h2>
//       <div className={style.form_grid}>
//         {inputs.map(input => (
//           <Form1Input
//             key={input.id}
//             {...input}
//             value={data.name}
//             onChange={onChange}
//           />
//         ))}
//       </div>
//       <div className={style.btn_container}>
//         <button type="submit" className="btn btn-success">
//           Request Connection
//         </button>
//         <a href="http://localhost:3000/UserDashboard/UserDashboard">
//           Back to Dashboard
//         </a>
//       </div>
//     </form>
//   );
// };

// export default Form1;

import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Select from "react-select";

// import React, { Component } from "react";

const Form1 = () => {
const navigate = useNavigate();
const [isError] = useState(null)
const [data, setdata] = useState({
UserName: "",
UserId: 0,
PhoneNumber: "",
ConnectionType: "",
HouseNUmber: "",
Area: "",
Status: "",
});
const apiUrl = "http://localhost:3003/user";

//const userId=parseInt(localStorage.getItem('userId'));

//const {UserName,UserId,PhoneNumber,ConnectionType,HouseNUmber,Area,Status}=data;

const onInputChange = (e) => {
e.persist();
debugger;
setdata({ ...data, [e.target.name]: e.target.value });
};

//const apiUrl = "http://localhost:18972/api/NewConnectionRegistration/Register";

const token = localStorage.getItem("token");
const authAxios = axios.create({
baseURL: apiUrl,
headers: {
"Authorization": `Bearer ${token} `
// Authorization: "Bearer" + token,
},
});

console.log(data);

const Registration = (e) => {
e.preventDefault();
debugger;
const data1 = {UserName:data.UserName, UserId:parseInt(localStorage.getItem('userId')), PhoneNumber:data.PhoneNumber, ConnectionType:data.ConnectionType, HouseNUmber:data.HouseNUmber, Area:data.Area,Status:'Pending' };
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

return (
<div className="container">
<div className="w-75 mx-auto shadow p-5">
<h2 className="text-center mb-4">New Water Connection Registration</h2>
<form onSubmit={e => Registration(e)}>
<h5>UserName</h5>
<div className="form-group">
<input
type="text"
maxlength="16"
minlength= "3"
label="UserName"
className="form-control form-control-lg"
placeholder="Enter Your User Name"
name="UserName"
//value={UserName}
required = "true"
onChange={e => onInputChange(e)}

/>
</div>
<br></br>

{/* <h5>UserId</h5>
<div className="form-group">
<input
type="number"
label="UserID"
className="form-control form-control-lg"
placeholder="Enter Your User Name"
name="UserId"
value={UserId}
required = "true"
onChange={e => onInputChange(e)}

/>
</div>
<br></br> */}

<h5>PhoneNumber</h5>
<div className="form-group">
<input
type="tel"
className="form-control form-control-lg"
placeholder="Enter Your PhoneNumber"
name="PhoneNumber"
maxlength= "10"
minlength= "2"
//value={PhoneNumber}
//pattern= "[0-9]{3}-[0-9]{2}-[0-9]{3}"
required= "true"
onChange={e => onInputChange(e)}
validate
/>
</div>
<br></br>
<h5>ConnectionType</h5>
<div className="form-group">

<select name="ConnectionType" required onChange={e => onInputChange(e)}
>

<option value="" >Select Connection Type </option>
<option value="Commercial">Commercial</option>
<option value="Domestic">Domestic</option>
</select>

</div>
<br></br>
<h5>House Number</h5>
<div className="form-group">
<input
type="tel"
className="form-control form-control-lg"
placeholder="Enter Your House Number"
name="HouseNUmber"
//value={HouseNUmber}
required= "true"
onChange={e => onInputChange(e)}
/>
</div>
<br></br>

<h5>Area</h5>
<div className="form-group">
<input
type="text"
className="form-control form-control-lg"
placeholder="Enter Your Area Name"
name="Area"
//value={Area}
required= "true"
onChange={e => onInputChange(e)}
/>

</div>
<br></br>

{/* <button className="btn btn-primary btn-block" disabled={Boolean(isError) || UserName.length < 1}>Request Connection</button><a href="http://localhost:3000/UserDashboard/UserDashboard">Back to Dashboard</a> */}
<button className="btn btn-primary btn-block" > Request Connection</button>
</form>
</div>
</div>
);

};
export default Form1;
