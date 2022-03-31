import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../Assets/curr_used.jpg";
import { auth } from "../../Firebase";
import swal from "sweetalert";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(branch,year);
    if (password !== cnfPassword ) {
      swal("Oops!", "Your Passwords are not matching", "error");
    }
    else if (!email.includes("@kiet.edu")) {
      swal("Oops!", "You can only use college email id", "error");
    }
    else{
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        swal("Congratulations!","You registered Successfully","success");
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    }
    
  };

  return (
    <div>
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src={Image} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
              <h1 className="font-weight-bold py-3">Grow With Grades</h1>
              <h4>Register Now!</h4>
              <form onSubmit={SubmitHandler}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email-Address"
                      className=" loginInput form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className=" loginInput form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      required
                      value={cnfPassword}
                      onChange={(e) => setCnfPassword(e.target.value)}
                      type="password"
                      placeholder="confirm Password"
                      className=" loginInput form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="loginInput  form-select my-3 p-3"
                    >
                      <option value="">--Select--</option>
                      <option value="IT">IT</option>
                      <option value="ME">ME</option>
                      <option value="ECE">ECE</option>
                      <option value="CE">CE</option>
                      <option value="CSE">CSE</option>
                      <option value="CSIT">CSIT</option>
                      <option value="CO">CO</option>
                      <option value="EN">EN</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <select value={year} onChange={(e) => setYear(e.target.value)} className="loginInput form-select my-3 p-3">
                      <option value="1">First year</option>
                      <option value="2">Second year</option>
                      <option value="3">Third year</option>
                      <option value="4">Fourth year</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="submit" className="authBtn mt-3 mb-5">
                      Register
                    </button>
                  </div>
                </div>
                <a href="#">Forgot Password ?</a>
                <p>
                  Don't have an account? <Link to="/login">Login here</Link>
                </p>
              </form>
            </div>
          </div> 
        </div>
      </section>
    </div>
  );
};

export default Register;
