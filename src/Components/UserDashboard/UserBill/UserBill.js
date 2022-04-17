// import React from "react";

// const Bill = () => {
//   return (
//     <div>
//       <h1>Shubham</h1>
//     </div>
//   );
// };
// export default Bill;

import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { ReactDOM } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import CalcBill from "./CalcBill";
const GlobalStyle = createGlobalStyle `
html
  {
    height:100%;
  }
 body
  {
     font-faimly : Arial,Helvetica,sans-serif;
     background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
     height:100%;
     margin:0; 
     color:#;
     font-weight:bold;

  }

`;

const sharedStyles = css `
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0px 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0px 20px;
`;

const StyledForm = styled.form `
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background: linear-gradient(
    90deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h2 {
    text-align: center;
    color: yellow;
    font-weight: bold;
  }
`;

const StyledInput = styled.input `
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button `
  display: block;
  background-color: #0d0d94;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  padding: 0px 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const initialState = {
    UserId: "",
    Month: "",
};

function Bill() {
    const navigate = useNavigate();

    const [state, setstate] = useState(initialState);
    // const [error, setError] = useState("");
    const [data, setdata] = useState({
        UserId: "",
        Month: "",
    });
    // const apiUrl = "http://localhost:62018/api/Query/UserQuery";
    const apiUrl = "http://localhost:3003/user/";
    const QueryPost = (e) => {
        e.preventDefault();
        debugger;

        // navigate("/AdminDashboard/AdminDashboard");

        const data1 = {
            UserId: data.UserId,
            Month: data.Month,
        };

        axios.post(apiUrl, data1).then((result) => {
            debugger;
            console.log(result.data);
            //const token = localStorage.setItem('token',result.data);
            // if (result.data.Status === "Invalid") alert("Invalid User");
            // else props.history.push("/UserDashboard/UserDashboard");
        });
        // const id = e.target.getAttribute("data-id");

        const id = e.target.Attributes.getNamedItem("data-id").value;
    };
    const onChange = (e) => {
        e.persist();
        debugger;
        setdata({...data, [e.target.name]: e.target.value });
    };

    return ( <
        >
        <
        GlobalStyle / >
        <
        StyledFormWrapper >
        <
        StyledForm onSubmit = { QueryPost } >
        <
        h2 > My Bill < /h2> { /* For Name */ } <
        label htmlFor = "name" > User Id < /label> <
        StyledInput type = "number"
        name = "UserId"
        value = { state.UserId }
        value = { data.UserId }
        onChange = { onChange }
        required /
        > { /* For Email */ } <
        label htmlFor = "name" > Month < /label> <
        StyledInput type = "Month"
        name = "Month"
        // value={state.Month}
        value = { data.Month }
        onChange = { onChange }
        required /
        >

        <
        StyledButton type = "Submit"
        onClick = { "" } >
        View Bill <
        /StyledButton> { /* For Email */ } <
        label htmlFor = "name" > Amout is < /label> <
        StyledInput type = "Numbar"
        name = "Amout"
        // value={state.Month}
        value = { data.Amout }
        onChange = { onChange }
        /> <
        /StyledForm> <
        /StyledFormWrapper> <
        />
    );
}

export default Bill;