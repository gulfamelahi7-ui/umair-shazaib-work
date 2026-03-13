import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquarePhone } from "react-icons/fa6";

const Umair = () => {
  return (
    <>

    <div style={{display:'flex', justifyContent:'space-around'}}>
      <h1>User Details</h1>

      <div class="input-group mb-3" style={{width:"200px"}}>
     <input type="text" class="form-control" placeholder="Search"/>
      </div>

      <button type="button" class="btn btn-primary">Primary</button>
    </div>

     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Umair</th>
      <th scope="col">Aslam</th>
      <th scope="col">Done</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
 
    <div style={{display:'flex', justifyContent:'center',}}>

       <h1> <FaFacebookSquare /></h1>
        <h1 style={{marginLeft:'20px'}}><SiGmail /></h1>
        <h1 style={{marginLeft:'20px'}}><FaSquarePhone /></h1>
    </div>

    </>
  )
}

export default Umair
