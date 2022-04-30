import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function UserList(props) {
  const [data, setData] = useState([]);
  //const baseUrl = "http://localhost:22523/api/AdminUserOperations/GetUsers";
  const baseUrl = "http://localhost:3003/user";

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const authAxios = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  // const logout = () => {
  //     localStorage.removeItem('token');
  //     navigate('/');
  // }

  useEffect(() => {
    const GetData = async () => {
      const result = await authAxios.get(baseUrl);
      setData(result.data);
      console.log(result.data);
    };
    GetData();
  }, []);

  //   const DeleteUser = async id => {
  //     await axios
  //       .delete("http://localhost:3003/user", {
  //         params: {
  //           //await axios.delete("http://localhost:22523/api/AdminUserOperations/DeleteUser",{params:{
  //           id,
  //         },
  //       })

  const DeleteUser = async id => {
    alert("Deleted Successfully");

    await axios.delete(`http://localhost:3003/user/${id}`);
    const GetData = async () => {
      const result = await authAxios.get(baseUrl);
      setData(result.data);
      // console.log(result.data);
    };
    GetData();
  };

  //       .then(response => {
  //         if (response.data.statusCode === 200) {
  //           alert("Deleted Successfully");
  //           const GetData = async () => {
  //             const result = await authAxios.get(baseUrl);
  //             setData(result.data);
  //             // console.log(result.data);
  //           };
  //           GetData();
  //         } else alert("Delete failed");
  //       });
  //   };

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

                      <div>
                        {/*<button className="btn btn-primary" align="Left">Update</button>
                                            <button className="btn btn-danger" align="Right">Delete</button>
                        <button className="btn btn-primary" align="Right">Add User</button>*/}
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            navigate(
                              `/AdminDashboard/EditUser/EditUser/${item.id}`
                            );
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            DeleteUser(item.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {/* <button onClick={logout}></button> */}
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
const SectionContainer = styled.div`
  background-color: #f0fff0;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
  p {
    margin-left: 10px;
    color: palevioletred;
  }
  &:hover {
    background-color: #ffff00;
  }
`;
const SliderContainer = styled.div`
  margin-top: 50px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 20px 20px;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;
const PartnersTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
  font-family: Goudy Bookletter 1911, sans-serif;
  padding-top: 50px;
`;
const Partners = styled.div`
  display: grid;
  place-items: center;
  margin: 0 6rem;
  img {
    width: 250px;
  }
`;
const PartnersContainer = styled.div`
  margin: 2rem 0;
`;
const TwitterCardContent = styled.div`
  .links {
    display: flex;
    align-items: center;
    marging: 2rem;
    gap: 1rem;
    line-height: 45px;
  }
  .icon {
    margin-left: 10px;
    color: yellow;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const About = styled.div`
  height: 10px;
  justify-content: space-between;
  line-height: 35px;
`;
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
const Logo = styled.div`
  img {
    height: auto;
    width: 50px;
  }
`;
const routes = [
  {
    route: "/",
    name: "Home",
    icon: <FaHome className="icon" />,
    exact: true,
  },
];
