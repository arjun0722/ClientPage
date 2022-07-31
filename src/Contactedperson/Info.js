import React from 'react'
import "./Info.css"
function Info() {
  return (
    <div className='detailsform'>
    
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label className='Label' for="inputEmail4"> Name</label>
      <input type="Name" class="form-control" id="inputEmail4" placeholder="Name"/>
    </div>
    <div class="form-group col-md-6">
      <label className='Label' for="inputPassword4"> Email</label>
      <input type="email" class="form-control" id="inputPassword4" placeholder="Email"/>
    </div>
    
  </div>
 
  
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label className='Label' for="inputCity">City</label>
      <select id="inputState" class="form-control">
    
   
    </select>
    </div>
    <div class="form-group col-md-4">
      <label className='Label' for="inputState">State</label>
      <select id="inputState" class="form-control">
    
     
      </select>
    </div>
    <div class="form-group col-md-2">
      <label className='Label' for="inputZip">Number</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
 <br></br>

</form>
<div>
    <h5>Client Logo</h5>
<img src="https://imgs.search.brave.com/rEwv3UEQ2OLLqm6TGy6nyy_vhas7EtHMfR2Mv1S2rAk/rs:fit:860:900:1/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS83OC03/ODYyOTNfMTI0MC14/LTEyNDAtMC1hdmF0/YXItcHJvZmlsZS1p/Y29uLXBuZy5wbmc" class="rounded-circle" alt="Cinque Terre" width="150" height="120"/> 
<div>

<button type="submit" class=" button btn btn-primary">Browse</button>
</div>
</div>
<button type="submit" class="submit btn btn-primary">Submit</button>
   </div>
  )
}

export default Info