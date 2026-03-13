import React from 'react'
import { MdAutoDelete } from "react-icons/md";
import { Bs3SquareFill } from "react-icons/bs";

const Harder = () => {
  return (
    <div>        
              <div className='hader'>
      <div className='orange'>
<h1 style={{color:"blue"}}>User Detial</h1>
</div>
     
      <div class="input-group mb-3" style={{width:'300px',display:'flex',justifyContent:'center',alignItems:'center'}}>
  Search:
  <input type="text" class="form-control" placeholder="Username" />
</div>
      <div>
      {/* <button type='text' placeholder="Search here..." style={{backgroundColor:"blue",color:"white"}}>Create New User</button> */}
      <button type="button" class="btn btn-primary" >Create new user</button>

      </div>

</div>
<h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eligendi maiores doloribus ullam perferendis iste odio quae recusandae saepe amet?</h1>
<button type='button'>click me</button>

<footer>
<MdAutoDelete style={{fontSize:'60px'}} />
<Bs3SquareFill  style={{fontSize:'60px'}} />
</footer>

    </div>
  )
}

export default Harder