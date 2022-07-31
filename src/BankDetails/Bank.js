import React from "react";

function Bank() {
  return (
    <div className="container">
      <h5>Bank Details</h5>
      <div>
        <div class="bd-example">
          <dl>
            <dt>Account Name</dt>
            <dd><input type="Name" class="form-control" id="inputEmail4" placeholder="acc name"/></dd>
            <dt>Account No</dt>
            <dd><input type="Name" class="form-control" id="inputEmail4" placeholder="acc no"/></dd>

            <dt>Bank Name</dt>
            <dd><input type="Name" class="form-control" id="inputEmail4" placeholder=" bank name"/></dd>

            <dt>Bank Address</dt>
            <dd><input type="Name" class="form-control" id="inputEmail4" placeholder="bank address"/></dd>

            <dt>IFSC</dt>
            <dd><input type="Name" class="form-control" id="inputEmail4" placeholder="ifsc"/></dd>
            <dt>Swift Code</dt>
            <dd><input type="Name" class="form-control" id="inputEmail4" placeholder=" swift code"/></dd>

          </dl>
        </div>
      </div>
      <button type="submit" class="submit btn btn-primary">Submit</button>
    </div>
  );
}

export default Bank;
