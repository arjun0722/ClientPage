import React from 'react'
import "./Details.css"
function Details() {
  return (
   <div className='detailsform'>
    
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label className='Label' for="inputEmail4">Client Name</label>
      <input type="Name" class="form-control" id="inputEmail4" placeholder="Name"/>
    </div>
    <div class="form-group col-md-6">
      <label className='Label' for="inputPassword4">Client Email</label>
      <input type="email" class="form-control" id="inputPassword4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label className='Label' for="inputEmail4">Nature of Business</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Business"/>
    </div>
  </div>
  <div class="form-group">
    <label className='Label' for="inputAddress">Address 1</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label className='Label' for="inputAddress2"> Landmark</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label className='Label' for="inputEmail4">website Url</label>
      <input type="url" class="form-control" id="inputEmail4" placeholder="website url"/>
    </div>
  
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label className='Label' for="inputCity">City</label>
      <select id="inputState" class="form-control">
    
    <option>...</option>
    </select>
    </div>
    <div class="form-group col-md-4">
      <label className='Label' for="inputState">State</label>
      <select id="inputState" class="form-control">
    
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label className='Label' for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label className='Label'class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
</form>
   </div>
  )
}

export default Details