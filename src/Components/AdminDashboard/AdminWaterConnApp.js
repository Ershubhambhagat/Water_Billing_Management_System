import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UserList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  //const baseUrl = "http://localhost:22523/api/NewConnectionApproval/GetRequests";
  const baseUrl = "http://localhost:3003/user";

  const token = localStorage.getItem("token");
  const authAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const result = await authAxios.get(baseUrl);
    setData(result.data);
  };

  // const updateStatus=async(obj,Status)=>{
  //     const id=obj.id;
  //     obj.Status=Status

  //    //await authAxios.put("http://localhost:22523/api/NewConnectionApproval/UpdateStatus",obj,{params:{
  //    await authAxios.put("http://localhost:3003/user",obj,{params:{

  //     id
  //   }})
  //   .then((response)=>{
  //     if(response.data.statusCode===200)
  //     {
  //        alert('Status Updated');
  //        navigate("/AdminDashboard/AdminWaterConnApp");
  //     }
  //     else
  //        alert('Update failed');
  //   })

  //     GetData();
  // }

  const updateStatus = async (obj, status) => {
    obj.Status = status;
    // await axios.put(`http://localhost:3003/user/`+obj.id, obj);
    await axios.put(`http://localhost:3003/user/` + obj.id, obj);
    alert("Status Updated");

    GetData();
  };
  return (
    <>
      <div>
        <Header>
          <Nav>
            <ul>
              {routes.map(link => (
                <NavLink
                  exact={link.exact}
                  activeClassName="active"
                  to={link.route}
                  key={link.name}
                >
                  <li>
                    {link.icon}
                    <p className="link_name">{link.name}</p>
                  </li>
                </NavLink>
              ))}
            </ul>
            <ul>
              <a href="http://localhost:3000/AdminDashboard/AdminDashboard">
                Back to Dashboard
              </a>
            </ul>
          </Nav>
        </Header>
        <></>
        <div className="container bg-primary">
          <div className="card mt-5  ">
            {data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <div className="form-group row ">
                    <div className="card my-1 col-6 shadow mx-auto border-success px-3 py-3">
                      <div className="form-group row">
                        <div className="col-6">
                          <label>User Name: </label>
                        </div>
                        <div className="col-6">{item.UserName}</div>
                      </div>
                      <div className="form-group row">
                        <div className="col-6">
                          <label>Phone No: </label>
                        </div>
                        <div className="col-6">{item.PhoneNumber}</div>
                      </div>

                      <div className="form-group row">
                        <div className="col-6">
                          <label>Connection Type: </label>
                        </div>
                        <div className="col-6">{item.ConnectionType}</div>
                      </div>
                      <div className="form-group row">
                        <div className="col-6">
                          <label>House No: </label>
                        </div>
                        <div className="col-6">{item.ConnectionType}</div>
                      </div>
                      <div className="form-group row">
                        <div className="col-6">
                          <label>Area: </label>
                        </div>
                        <div className="col-6">{item.Area}</div>
                      </div>
                      <div className="form-group row">
                        <div className="col-6">
                          <label>Status: </label>
                        </div>
                        <div className="col-6">{item.Status}</div>
                      </div>

                      <div>
                        <button
                          className="btn btn-success"
                          align="Left"
                          onClick={() => {
                            updateStatus(item, "Approved");
                          }}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-danger"
                          align="Right"
                          onClick={() => {
                            updateStatus(item, "Rejected");
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </tr>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default UserList;
const Header = styled.header`
  background-color: #1f5156;
  position: sticky;
  top: 0;
  z-index: 100;
`;
const Nav = styled.nav`
color: white;
max-width: 1300px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

ul {
display: flex;
align-items: center;
gap: 20px;
a {
border-bottom: 3px solid transparent;
&:hover {
transition: 0.2s ease-in;
}
}
}
.active {
border-bottom: 3px solid #f3dc11;
}
li {
font-size: 1.6rem;
display: flex;
gap: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0;
transition: 0.2s ease-in;

.icon {
font-size: 2rem;
}
}
}
`;

const routes = [
  {
    route: "/admindashboard/admindashboard",
    name: "Home",
    icon: <FaHome className="icon" />,
    exact: true,
  },
];
