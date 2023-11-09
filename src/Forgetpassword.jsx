import React from "react";

function ForgotPassword() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="bg-container122 mt-3">
            <div className="card card-container121">
              <div className="text-center">
                <h6 className="forgotheading">Forgotten Password?</h6>
                <span className="forgotspan">
                  It only takes a couple of minutes to get started!
                </span>
                <div className="text-start mx-5 mt-4">
                  <h6>Mobile Number</h6>
                  <div className="row">
                    <div>
                      <select name="" id="" className="numberinput1 p-2">
                        <option value="" className="mx-5">
                          {" "}
                          +91
                        </option>
                        <option value="" className="mx-5">
                          {" "}
                          +75
                        </option>
                        <option value="" className="mx-5">
                          {" "}
                          +80
                        </option>
                        <option value="" className="mx-5">
                          {" "}
                          +93
                        </option>
                      </select>
                      <input
                        type="text"
                        style={{ border: "1px solid black" }}
                        className="numberinput112"
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                    <p className="forgotpass12 mt-1">
                      You will receive an Password on this number
                    </p>

                    <button className="forgotsubmit1 mb-2">Submit</button>
                    <button className="forgotsubmit">Login Via Email </button>

                    <span className=" forgetor">(or)</span>
                    <span class="logingoogle ">
                      <button class=" forgotsubmit12 shadow  ">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                          alt=""
                          class="googleimg"
                        />
                        Sign in with Google
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
