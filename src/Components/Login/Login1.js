import './Login1.css'
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login1() {
    const [data, setdata] = useState({UserName: '', Password: '' })  
    //const apiUrl = "http://localhost:18972/api/User/Login";  
    const apiUrl = "http://localhost:3003/user";  

    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();  
        debugger;  
        const data1 = {UserName: data.UserName, Password: data.Password };  
    //     axios.post(apiUrl, data1)  
    //     .then((result) => {
    //         debugger;  
    //         console.log(result.data);  
    //         const token = localStorage.setItem('token',result.data);
    //         navigate('/UserDashboard/UserDashboard');
    //     })
    //     .catch((res)=>{
    //     alert("username or password is wrong");
    //   })

        axios.post(apiUrl,data1).then((result)=>{
            //debugger

                if(result.data.statusCode===200)
                {
                    console.log(result.data.token);  
                    console.log(result.data.userId);
                   // const token = localStorage.setItem('token',result.data.token);
                   // const userId=localStorage.setItem('userId',result.data.userId);
                   // const UserName=localStorage.setItem('userName',result.data.UserName);
                    navigate('/UserDashboard/UserDashboard');
                }
                else 
                    alert('Username or Password is incorrect');
            console.log(result.status);

        })
  }
  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }


  return (
    <div>
        
        <section className="h-100 gradient-form" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                    <div className="row g-0">
                        <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">

                            <div className="text-center">
                             
                            <h4 className="mt-1 mb-5 pb-1">Welcome to User Login</h4>
                            </div>

                            <form onSubmit={login}>
                            <p>Please login to your account</p>

                            <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example11">Username</label>
                                <input type="text" id="form2Example11" className="form-control" onChange={onChange} name='UserName' value={data.UserName} placeholder="UserName"/>
                                
                            </div>

                            <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example22">Password</label>
                                <input type="Password" id="form2Example22" className="form-control" onChange={onChange} name='Password' placeholder='Password' value={data.Password} />
                               
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                                
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <p className="mb-0 me-2">Don't have an account?</p>
                                <button type="button" className="btn btn-outline-danger" onClick={()=>{
                                        navigate("/Signup/Form");
                                    }}>Create new</button>
                            </div>

                            </form>

                        </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h3>We supply water billing service</h3><br></br>
                        < h5>1.4 billion people live without clean drinking water use water wisely</h5>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
        
        
    </div>
  )
}
export default Login1
