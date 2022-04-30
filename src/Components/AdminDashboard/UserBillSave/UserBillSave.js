import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router";

const GlobalStyle = createGlobalStyle`
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

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0px 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0px 20px;
`;

const StyledForm = styled.form`
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

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
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

const StyledError = styled.div`
  color: #2dd9fd;
  font-weight: 800;
  margin: 0px 0px 40px 0px;
`;

const initialState = {
  userId: "",
  month: "",
  reading: "",
};

function CalculateUserBill(props) {
  const navigate = useNavigate();
  const [state, setstate] = useState(initialState);
  const [error, setError] = useState("");
  const [data, setdata] = useState({ UserId: "", Month: "", Reading: "" });
  // const apiUrl = "http://localhost:58745/api/Bill/CalculateBill";
  const apiUrl = "http://localhost:3003/user";

  const CalculateBill = e => {
    e.preventDefault();
    debugger;

    const UserId = parseInt(data.UserId);
    const Month = data.Month;
    const Reading = parseInt(data.Reading);

    console.log(UserId, Month, Reading);
    axios
      .post(apiUrl, null, {
        params: {
          UserId,
          Month,
          Reading,
        },
      })
      .then(result => {
        debugger;
        console.log(result.data);
        if (result.data.statusCode === 200) {
          alert(
            "User Bill Amount Saved Successfully for userId:" +
              UserId +
              ", Amount: " +
              result.data.amount
          );
          navigate("/AdminDashboard/AdminDashboard");
        } else alert("Please enter the correct details");
      });
  };
  const onChange = e => {
    e.persist();
    debugger;
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }

    swal({
      title: "Thank You",
      text: "You have Succuessfully submitted the form",
      icon: "success",
      button: "OK",
    });

    setError(``);
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={CalculateBill}>
          <h2>User Bill</h2>

          {/* For Name */}

          <label htmlFor="UserId">User Id</label>
          <StyledInput
            type="number"
            name="UserId"
            value={state.userId}
            value={data.UserId}
            onChange={onChange}
            required
          />
          {/* For Email */}
          <label htmlFor="Month">Month</label>
          <StyledInput
            type="month"
            name="Month"
            value={state.month}
            value={data.Month}
            onChange={onChange}
            required
          />
          {/* For Message */}
          <label htmlFor="Reading">Water Meter Reading</label>
          <StyledInput
            name="Reading"
            type="number"
            value={state.reading}
            value={data.Reading}
            onChange={onChange}
            required
          />

          {/* For Error Message */}

          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}

          <StyledButton type="Submit">Calculate Bill</StyledButton>
          <a
            style={{ color: "red" }}
            href="http://localhost:3000/AdminDashboard/AdminDashboard"
          >
            Back to Dashboard
          </a>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default CalculateUserBill;
