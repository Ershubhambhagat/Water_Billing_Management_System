import React from 'react';
import Table from 'react-bootstrap/Table'
import styledComponents from 'styled-components';


class ShoppingList extends React.Component {
    render() {
      return (
        <div className={styledComponents.grid}>
        <center>
          <h1> WATER RELEASE SCHEDULE </h1>
          <Table striped bordered hover variant="dark" >
  <thead>
    <tr>
     
    <th><center>DAY</center></th>
    <th><center>HOURS</center></th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center>SUNDAY</center></td>
      <td><center>09:00 AM TO 12:00 PM</center></td>
      </tr>
      <tr>
        <td><center>MONDAY</center></td>
        <td><center>07:00 AM TO 11:00 PM</center></td>
        </tr>
      <tr>
        <td><center>TUESDAY</center></td>
        <td><center>01:00 PM TO 03:00 PM</center></td>
        </tr>
      <tr>
        <td><center>WEDNESDAY</center></td>
        <td><center>06:00 AM TO 08:00 AM</center></td>
        </tr>
      <tr>
        <td><center>THURSDAY</center></td>
        <td><center>04:00 PM TO 06:30 PM</center></td>
        </tr>
      <tr>
        <td><center>FRIDAY</center></td>
        <td><center>12:45 PM TO 02:00 PM</center></td>
        </tr>
      <tr>
        <td><center>SATURDAY</center></td>
        <td><center>08:00 AM TO 12:30 PM</center></td>
        </tr>
        
        </tbody>
</Table>
        </center>
        <center>
        <button><a style={{"color":"red"}} href="http://localhost:3000/UserDashboard/UserDashboard">Back to Dashboard</a></button>
        </center>

</div>
       
      );
    }
  }
  export default ShoppingList;



