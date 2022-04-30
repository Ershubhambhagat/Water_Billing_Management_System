import style from "./Form1.module.css";
import Form1Input from "./Form1Input";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User1 = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState({});
  const [data, setdata] = useState({ UserId: "", Month: "" });
  // const apiUrl = "http://localhost:18972/api/UserBill/GetBill";
  const apiUrl = "http://localhost:3003/user";

  const token = localStorage.getItem("token");
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${token} `,
      //Authorization:'Bearer'+token
    },
  });

  const Registration = e => {
    e.preventDefault();
    debugger;

    const UserId = parseInt(localStorage.getItem("userId"));
    const Month = data.Month;

    authAxios
      .get(apiUrl, {
        params: {
          UserId,
          Month,
        },
      })
      .then(result => {
        debugger;
        console.log(result.data);
        if (result.data.statusCode === 200) {
          //alert('Bill Amount: Rs.'+result.data.data.amount);
          setAmount(result.data.data.amount);
          //navigate('/UserDashboard/UserDashboard')
        } else {
          setAmount("");
          alert("Not Found");
        }
      });
  };

  const onChange = e => {
    e.persist();
    debugger;
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "Month",
      type: "Month",
      placeholder: "Enter your Month",
      errorMessage: "Month is required!",
      label: "Please select a month",
      required: true,
    },
  ];

  return (
    <form className={style.form} onSubmit={Registration}>
      <h2 className={style.heading}>View My Bill</h2>
      <div className={style.form_grid}>
        {inputs.map(input => (
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
          Show Bill
        </button>{" "}
        <a href="http://localhost:3000/UserDashboard/UserDashboard">
          Back to Dashboard
        </a>
      </div>

      <div className={style.grid_item}>
        <div className="form-group">
          <h4>Bill Amount</h4>
          <input
            type="number"
            className="form-control form-control-lg"
            //placeholder=""
            label="Amount"
            // name="Amount"
            value={amount}
            disabled
          />
        </div>
      </div>
    </form>
  );
};

export default User1;
