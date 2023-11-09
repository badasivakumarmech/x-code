import React from "react";

const Updatekk = () => {
  return (
    <div class="modal-body">
      <form action="" >
        <div className="col-12 col-md-6 m-2">
          <label className="headingAdd">Institute Name :</label>
          <br />
          <input
            type="text"
            className="etotal"
            style={{ border: "1px solid black" }}
            placeholder="Enter Institute Name"
           
          />
        </div>
        <div className="col-12 col-md-6 m-2">
          <label className="headingAdd">Head Name :</label>
          <br />
          <input
            type="text"
            className="etotal"
            style={{ border: "1px solid black" }}
            placeholder="Enter Head Name"
           
          />
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <label className="headingAdd">Primary Email :</label>
            <br />
            <input
              type="text"
              className="etotal"
              style={{ border: "1px solid black" }}
              placeholder="Enter Primary Email"
              
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="headingAdd">Primary Contact Number :</label>
            <br />
            <input
              type="text"
              className="etotal"
              style={{ border: "1px solid black" }}
              placeholder="Enter Primary Contact Number"
             
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <label className="headingAdd">Secondary Email :</label>
            <br />
            <input
              type="text"
              className="etotal"
              style={{ border: "1px solid black" }}
              placeholder="Enter Secondary Email"
             
            />
          </div>
          <div className="col-12 col-md-6 ">
            <label className="headingAdd">Secondary Contact Number :</label>
            <br />
            <input
              type="text"
              className="etotal"
              style={{ border: "1px solid black" }}
              placeholder="Enter Secondary Contact Number"
             
            />
          </div>
        </div>
        <div className="col-12 col-md-6 m-2">
          <label className="headingAdd">Address :</label>
          <br />
          <input
            type="text"
            className="etotal"
            style={{ border: "1px solid black" }}
            placeholder="Enter Address"
           
          />
        </div>
        <div className="col-12 col-md-6 m-2">
          <label className="headingAdd">City Name :</label>
          <br />
          <input
            type="text"
            className="etotal"
            style={{ border: "1px solid black" }}
            placeholder="Enter City Name"
           
          />
        </div>
        <div className="col-12 col-md-6 m-2">
          <label className="headingAdd">Institute Code :</label>
          <br />
          <input
            type="text"
            className="etotal"
            style={{ border: "1px solid black" }}
            placeholder="Enter Institute Code"
            
          />
        </div>

        <div className=" mt-3">
          <div className="col-12 col-md-6 m-2">
            <label className="headingAdd">Institute Type :</label>
            <br />
            <select
              name=""
              id=""
             
            >
              <option
                value="School"
                
              >
                School
              </option>
              <option
                value="Collage"
              
              >
                Collage
              </option>
              <option
                value="University"
               
              >
                University
              </option>
              <option
                value="Education Society"
             
              >
                Education Society
              </option>
              <option
                value="Training Institute"
               
              >
                Training Institute
              </option>
              <option
                value="NGOs"
                
              >
                NGOs
              </option>
            </select>
          </div>
          <br />

          <div className="col-12 col-md-6 m-2">
            <label className="headingAdd">Axios Plans :</label>
            <br />
            <select
              name=""
              id=""
               
            >
              <option
                value="Exam Practice"
             
              >
                Exam Practice
              </option>
              <option
                value="LMS"
           
              >
                LMS
              </option>
              <option
                value="Mock Interview"
           
              >
                Mock Interview
              </option>
              <option
                value="Previous papers"
                 
              >
                Previous papers
              </option>
            </select>
          </div>
          <div className="col-12 col-md-6 m-2">
            <label className="headingAdd">Password :</label>
            <br />
            <input
              type="text"
              className="etotal"
              style={{ border: "1px solid black" }}
              placeholder="Enter Password"
            
            />
          </div>
        </div>

        <div class="modal-footer mt-3">
          <button type="submit" class="btn btn-success" data-bs-dismiss="modal">
            Add Institute
          </button>
        </div>
      </form>
    </div>
  );
};

export default Updatekk;
