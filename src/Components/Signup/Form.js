import style from './Form.module.css'
import FormInput from "./FormInput";
import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {

const navigate = useNavigate();
  
  const [data, setdata] = useState({Name: '', Email: '',MobileNo: '', UserName: '', Password: '', ConfirmPassword: '' })  
  // const apiUrl = "http://localhost:18972/api/User/Register";
  const apiUrl = "http://localhost:3003/user";

  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = {Name:data.Name, Email:data.Email, MobileNo:data.MobileNo, UserName:data.UserName, Password:data.Password, ConfirmPassword:data.ConfirmPassword };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
        {
          alert('New User Signup Successful! Login to Proceed');
          navigate('/Login/Login1') 
        }
          
      })  
  } 


  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
    
  }
  



  
  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Enter your  Name",
      // errorMessage:
      // "Name should be 3-16 characters and shouldn't include any special character or numbers!",
      label: "Name",
      // pattern: `^[A-Za-z]{3,16}$`,
      required:true
     
      },
    
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Enter your Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      type:"tel",
      maxlength:"10",
      minlength:"9",
      name:"MobileNo",      
      placeholder: "Enter your Mobile no.",
      errorMessage: "It should be a valid Mobile No Only{10} !",
      label: "MobileNo",
      required: true,
      pattern:"[1-9]{1}[0-9]{9}"
    },
    {
      id: 4,
      name: "UserName",
      type: "text",
      placeholder: "UserName",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "UserName",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 5,
      name: "Password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "ConfirmPassword",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];


  

  return (

     
      <form className={style.form} onSubmit={Registration}>
        <h2 className={style.heading}>Create an Account</h2>
         <div className={style.form_grid}>

     
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            
            value={data.name}
            onChange={onChange}
          />
        ))}
         </div>
               <div className={style.btn_container}>
          <button type="submit" className='btn btn-success'>Register</button>  Already have an account? <a href="http://localhost:3000/Login/Login1">Login Now</a>  
          </div>
      </form>

     
     
  );
};

export default Form;