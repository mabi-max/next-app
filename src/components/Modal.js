import React from "react";

 const Modal = ()=> {
return(
<div className="container demo">
    
<div class="modal fade" id="myModaapplicantl4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
          <span class="log close fas text-success ml-5 form-cloer-btn"  data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" ><i class="fas fa-times"></i> </span></span>
           </div>
        <div class="modal-body">
        <div class="login-form-all align-center">
    <form action="" class='login-form-all border p-5  w-100 '>
        <h1 class=' author-or-bup'>Author/Publisher login form</h1>
        <input  type="email" placeholder="enter your email" class="box mt-3 w-40% p-2 border-bottom" id='for-input-field'/>
        <input type="password" placeholder="enter your password"  class="box mt-3 p-2 border-bottom" id='for-input-field'/>
        <input type="submit" value="create now" class="btn btn-danger mt-1 to-login p-3"/>
        
    </form>
</div>
            </div>
            </div>
            </div>
            </div>

</div>
)
}

export default Modal;