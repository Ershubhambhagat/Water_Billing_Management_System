import {useNavigate, NavLink} from "react-router-dom";
import style from './EntryPoint.module.css';

function EntryPoint() {
    const navigate=useNavigate();
  return (
    <>
    <div>
    <div className={style.body1}>
      
       
      <div className={style.pages1}>
      
     
        <nav className={style.navbar1}>
    <div className={style.nav_container1}>
        <NavLink exact to="/" className={style.nav_logo1}>
        Water Billing Management System
        </NavLink>

        <div className={style.nav_menu1}>
        <div className={style.nav_item1}>
                <NavLink exact to="userdashboard/UserDashboard/" className={style.nav_links1}>
                    User Home 
                </NavLink>
        </div>


        {/* <div className={style.nav_item1}>
                <NavLink exact to="AdminDashboard/AdminDashboard" className={style.nav_links1}>
                    AdminDashboard
                </NavLink>
        </div>




        
        <div className={style.nav_item1}>
                <NavLink exact to="/UserDashboard/UserDashboard" className={style.nav_links1}>
                    UserDashboard
                </NavLink>
        </div> */}
      




       
              <div className={style.nav_item1}>
                <NavLink exact to="/AdminDashboard/AdminDashboard" className={style.nav_links1}>
                    Admin 
                </NavLink>
                </div>
            </div>
         </div>
      </nav>
  </div>
 
      <center>
{/*<h2> Water Billing Management System</h2>
 *<cite title="Source Title">Indias's Largest Water Billing Portal</cite>*/}
</center>

<center>

<div className={style.center_card_container}>
<div className={style.center_card}>
    <img src="https://cdn-icons-png.flaticon.com/512/1973/1973256.png" width="260" height="190"/>
       
    <h5 className="card-title">I am a Admin</h5>
    <p className="card-text">Login as Admin </p>
    <button onClick={()=>{
     navigate("/Login/Login2");
     }
     }>Login Now</button>
    </div>


    <div className={style.center_card}>
    <img src="https://cdn-icons-png.flaticon.com/512/921/921347.png" width="250" height="190"/>
       
    <h5 className="card-title" >I am User </h5>
      <p className="card-text">Login as User</p>
      <button onClick={()=>{
           navigate("/Login/Login1");
           }
        }>Login Now</button>
    </div>
   
    </div>
   
    

</center>




  </div>
    </div>
    
     
    </>
     
  );
 
 
}
export default EntryPoint;