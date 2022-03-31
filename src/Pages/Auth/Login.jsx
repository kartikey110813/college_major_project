import React, { useState } from "react";
import "./Login.css";
import Image from "../../Assets/curr_used.jpg";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        swal("Congratulation!", "You LoggedIn In Successfully", "success");
        var user = userCredential.user;
        console.log(user);
        navigate(`/dashboard/${user.uid}`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal("Oops!", errorMessage, "error");
      });
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
              <h4>Sign into your account</h4>
              <form onSubmit={handleChange}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email-Address"
                      className="loginInput form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="password"
                      className=" loginInput form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="submit" className="authBtn mt-3 mb-5">
                      Login
                    </button>
                  </div>
                </div>
                <a href="#">Forgot Password ?</a>
                <p>
                  Don't have an account?{" "}
                  <Link to="/register">Register here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
