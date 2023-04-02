import React from 'react'
import EmployeeAPI from "../../../../src/Servicers/EmployeeRouters";



export default function AddUser() {

  const onChangeInput = (e) => {
    setPostPayload({
      ...postPayload,
      [e.target.id]: e.target.value,

    });
  };

  const [error, setError] = React.useState({ field: "", message: "" });
  const [postPayload, setPostPayload] = React.useState({

    fullName : "",
    initialsName : "",
    displayName : "",
    gender : "",
    dataOfBirth : "",
    email : "",
    mobileNumber : "",
    designation : "",
    employeeType : "",
    joinDate : "",
    experience : "",
    salary : "",
  });

  console.log(postPayload);

  const onClickShare = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const response = await EmployeeAPI.create(postPayload);
      if (response.status === 200) {
        console.log("~ onClickShare ~ response", response);
      } else {
        console.log("Successful");
      }
    }
  };
  const isValid = () => {
    if (postPayload.fullName === "") {
      setError({ field: "description", message: "Please fill me" });
      return false;
    }
    if (postPayload.email === "") {
      setError({ field: "title", message: "Please fill me" });
      return false;
    }
    return true;
  };

  return (
    <div>

      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>

                    <div class="form-outline">
                      <label class="form-label" for="firstName">Full Name</label>
                      <input type="text"  id='fullName' class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>
                    </div>
                    <br />
                    <div class="row ">

                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="firstName">Name With Initials</label>
                          <input type="text" id="initialsName" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="lastName">Preferred / Display Name/</label>
                          <input type="text" id="displayName" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>

                        </div>
                      </div>
                    </div>

                    <div class="row">

                      <div class="col-md-6 mb-4">
                        <label class="form-label select-label">Gender</label>
                        <br />
                        <select class="select form-control-lg" onChange={(e) => onChangeInput(e)}>
                          <option value="1" disabled>Choose option</option>
                          <option value="2">Male</option>
                          <option value="3">Female</option>
                          <option value="4">Other</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <label class="form-label" for="emailAddress">Date of birthday</label>
                          <input type="text" id="dataOfBirth" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>

                        </div>

                      </div>



                    </div>

                    <div class="row">

                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress">Email</label>
                          <input type="email" id="email" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress">Mobile Number</label>
                          <input type="tel" id="mobileNumber" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>
                        </div>
                      </div>

                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <label class="form-label" for="designation">Designation</label>
                          <input type="text" id="designation" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>

                        </div>

                      </div>

                      <div class="col-md-6 mb-4 pb-2">
                        <label class="form-label select-label">Employee Type</label>
                        <br />
                        <select class="select form-control-lg" onChange={(e) => onChangeInput(e)}>
                          <option value="1" disabled>Choose option</option>
                          <option value="2">Subject 1</option>
                          <option value="3">Subject 2</option>
                          <option value="4">Subject 3</option>
                        </select>


                      </div>
                    </div>



                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <label class="form-label" for="designation">Joined Date</label>
                          <input type="tel" id="joinDate" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>

                        </div>

                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <label class="form-label select-label">Choose option</label>
                        <br />
                        <select class="select form-control-lg" onChange={(e) => onChangeInput(e)}>
                          <option value="1" disabled>Choose option</option>
                          <option value="2">Subject 1</option>
                          <option value="3">Subject 2</option>
                          <option value="4">Subject 3</option>
                        </select>


                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <label class="form-label" for="designation">Salary</label>
                          <input type="tel" id="salary" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>

                        </div>

                      </div>

                    </div>


                    <div class="form-outline">
                      <label class="form-label" for="designation">Personal Notates </label>
                      <input type="tel" id="designation" class="form-control form-control-lg" onChange={(e) => onChangeInput(e)}/>

                    </div>
                    <br/>
                    <div class="row">

                      <div class="col-md-3 mb-4 pb-2">
                     
                      </div>
                      <div class="col-md-3 mb-4 pb-2">
                       
                      </div>

                    <div class="col-md-3 mb-4 pb-2">
                      <input class="btn btn-light" type="submit" value="cancel" />
                    </div>

                    <div class="col-md-3 mb-4 pb-2">
                      <input class="btn btn-primary btn-lg" type="submit" value="Submit" onClick={(e) => onClickShare(e)}/>
                    </div>

                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
