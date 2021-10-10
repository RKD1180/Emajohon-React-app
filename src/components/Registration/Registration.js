import React from "react";
import { Link } from "react-router-dom";
import googleImg from "../../images/google.png";
import gitImg from "../../images/github.png";

const Registration = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="w-50 mx-auto rounded shadow p-5 mt-4 mb-4">
            <h2 className="mb-3">Registration </h2>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Confirme Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>

              <p>
                Already Have an Account? <Link to="/login">Login</Link>
              </p>
              <h2 className="text-center mb-3">or</h2>
            </form>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-light shadow ronded">
                    <img src={googleImg} height="150px" width="150px" alt="" />
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-light shadow ronded">
                    <img src={gitImg} height="150px" width="150px" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
