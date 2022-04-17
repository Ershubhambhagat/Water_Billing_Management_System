import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import { BiBorderRadius } from "react-icons/bi";

function UserList(props) {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:3003/user";

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const authAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const GetData = async () => {
      const result = await authAxios.get(baseUrl);
      setData(result.data);
      // console.log(result.data);
      
    };
    GetData();
  }, []);


    const DeleteUser = async (id) => {
        
        await axios.delete(`http://localhost:3003/user/${id}`)
        const GetData = async () => {
            const result = await authAxios.get(baseUrl);
            setData(result.data);
            // console.log(result.data);

        };
        GetData();
        
        
      
  };

  return (
    <>
      <div>
        <Header>
          <Nav>
            
            <ul>
              {routes.map((link) => (
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
                        {/*  */}
                        <div className="col-6">
                          <label>Id: </label>
                        </div>
                        <div className="col-6">{item.id}</div>
                      </div>
                      <div className="form-group row">
                        {/*  */}
                        <div className="col-6">
                          <label>Name: </label>
                        </div>
                        <div className="col-6">{item.Name}</div>
                      </div>
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
                        <div className="col-6">{item.MobileNo}</div>
                      </div>
                      <div className="form-group row">
                        <div className="col-6">
                          <label>Email Id: </label>
                        </div>
                        <div className="col-6">{item.Email}</div>
                              </div>
                              <br></br>

                      <div>
                                  <button style={mystyle} onClick={() => {navigate(`/AdminDashboard/EditUser/EditUser/${item.id}`);}}>
                          Edit User
                                  </button >

                                  <button style={mystyle2} align="Right"
                                      onClick={() => { DeleteUser(item.id) }}
                        >
                          DeleteUser
                        </button>
                      </div>
                          </div>
                          <br></br>
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
const button2 = styled.button`
color:red;
`;
const mystyle = {
    color: "Black",


    backgroundColor: "#FFC107",


    padding: "10px",
    mr: "20",
    border:"23"



   
};
const mystyle2 = {
    color: "Black",


    backgroundColor: "#D91E18",
    


    padding: "10px",
    mr: "10",
    border: "23",



     



};





    


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
        route: "/AdminDashboard/AdminDashboard",
    name: "Home",
    icon: <FaHome className="icon" />,
    exact: true,
  },
];
