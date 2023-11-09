import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import sideimage from "./All Images/Logo133.jpeg";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";

const ShowData1 = () => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const { id } = useParams();
  // const [individualInstitute, setIndividualInstitute] = useState([]);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [individualInstitute, setIndividualInstitute] = useState({
    Password: "",
  });

  const onChangeInstituteName = (e) => {
    const newValue = e.target.value;
    setIndividualInstitute((prevData) => ({
      ...prevData,
      Password: newValue,
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const UserData = {
      Password: individualInstitute.Password,
    };

    axios
      .put("http://localhost:4010/UpdateInstitute/" + id, UserData)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          toast.success("Update Successful", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(function () {
            navigate("/AdminDashboard");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the institute.");
        console.log(error.message);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      try {
        const response = await axios.get(
          "http://localhost:4010/individualInstitute/" + id
        ); // Replace with your API endpoint
        setIndividualInstitute(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    if (token == undefined) {
      navigate("/");
    }
  }, [id]);

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    menuBtnChange();
  };

  const menuBtnChange = () => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };
  const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(true);

  const toggleInstitutions = () => {
    setIsInstitutionsOpen(!isInstitutionsOpen);
  };
  return (
    <div>
      <div className="container1">
        <div className="row">
          <div className=" mt-1">
            <div className="row">
              <div className=" col-12 col-md-3 sectioncard121">
                <div className={`sidebar ${isOpen ? "open" : ""}`}>
                  <div class="logo_details">
                    <div class="logo_name">
                      {" "}
                      <img src={sideimage} alt="logo" width="80px" />
                    </div>
                    <i
                      id="btn"
                      onClick={toggleSidebar}
                      className={`bx bx-menu ${
                        isOpen ? "bx-menu-alt-right" : "bx-menu"
                      }`}
                    ></i>
                  </div>
                  <ul class="nav-list">
                    <li>
                      <span class="tooltip">Dashboard</span>
                    </li>
                    <li>
                      <a href="/PerfexHome">
                        <i class="bx bx-grid-alt"></i>
                        <span class="link_name">Dashboard</span>
                      </a>
                      <span class="tooltip">Dashboard</span>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-house "></i>

                        <span class="link_name">HomePage</span>
                      </a>
                      <span class="tooltip">HomePage</span>
                    </li>
                    <li onClick={toggleInstitutions}>
                      <a href="#">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        <span className="link_name ">
                          Institutions{" "}
                          <i className="fa-solid fa-chevron-down"></i>
                        </span>
                      </a>
                      <span className="tooltip">Institutions</span>
                    </li>
                    {isInstitutionsOpen && (
                      <div>
                        <li className="">
                          <a href="/AdminDashboard">
                            <i className="fa-solid fa-building-columns"></i>{" "}
                            <span
                              className="link_name"
                              style={{ color: "#06f9f9" }}
                            >
                              institutions
                            </span>
                          </a>
                          <span className="tooltip">institutions</span>
                        </li>
                        <li>
                          <a href="/BatchYear">
                          <i class="fa-solid fa-calendar-days"></i>
                            <span className="link_name">Batch Years</span>
                          </a>
                          <span className="tooltip">Batch Years</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-building-columns"></i>
                            <span className="link_name">Batches</span>
                          </a>
                          <span className="tooltip">Batches</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-user"></i>
                            <span className="link_name">Users</span>
                          </a>
                          <span className="tooltip">Users</span>
                        </li>
                        <li>
                          <a href="/SearchOption">
                            <i className="fa-brands fa-searchengin"></i>
                            <span className="link_name">Search Users</span>
                          </a>
                          <span className="tooltip">Search Users</span>
                        </li>
                      </div>
                    )}
                    <li class="profile">
                      <div class="profile_details">
                        <img src={siva} alt="profile image" />
                        <div class="profile_content">
                          <div class="name">Siva</div>
                          <div class="designation">Admin</div>
                        </div>
                      </div>
                      <i
                        class="bx bx-log-out"
                        id="log_out"
                        onClick={handleLogout}
                      ></i>
                    </li>
                  </ul>
                </div>
              </div>

              {loading ? (
                <p>Loading...</p>
              ) : individualInstitute ? (
                <div className="col-12 col-md-9">
                  <div className="row">
                    <div className=" card col-12 col-md-6 vh-100 viewcardone">
                      <div className="card mb-3 mt-2 p-1">
                        <h4 className="mt-3"> Management</h4>
                        <p>{individualInstitute.InstituteName}</p>
                        <hr />
                        <div className="d-flex flex-row">
                          <span class="material-symbols-outlined">mail</span>
                          <p className="mx-2">
                            {individualInstitute.PrimaryEmail}
                          </p>
                        </div>
                        <div className="d-flex flex-row mb-5">
                          <span class="material-symbols-outlined">call</span>
                          <p className="mx-2">
                            {individualInstitute.PrimaryContactNumber}
                          </p>
                        </div>
                      </div>

                      <div className="card p-1">
                        <h4
                          style={{ textDecorationLine: "underline" }}
                          className=" "
                        >
                          Change Password
                        </h4>

                        <div>
                          <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                          />
                          {/* Same as */}
                          <ToastContainer />
                          <form action="" onSubmit={onSubmitForm}>
                            <h6 className="">Password</h6>
                            <input
                              type="text"
                              style={{ border: "2px solid black" }}
                              className=""
                              placeholder="Password"
                              value={individualInstitute.Password}
                              onChange={onChangeInstituteName}
                            />{" "}
                            <br />
                            <button
                              className="mt-2 p-1"
                              style={{
                                fontSize: "20px",
                                backgroundColor: "green",
                                borderRadius: "10px",
                              }}
                            >
                              Reset
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="mx-1 col-12 col-md-5 viewcardone">
                      <h4 style={{ textDecorationLine: "underline" }}>
                        Profile Information
                      </h4>
                      <div className="d-flex flex-row">
                        <span class="viewsection123">Institute Name : </span>
                        <p className="mx-2">
                          {individualInstitute.InstituteName}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123">Head Name : </span>
                        <p className="mx-2">{individualInstitute.HeadName}</p>
                      </div>{" "}
                      <div className="d-flex flex-row">
                        <span class=" viewsection123">Primary Email : </span>
                        <p className="mx-2">
                          {individualInstitute.PrimaryEmail}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 ">
                          {" "}
                          Primary Contact Number :{" "}
                        </span>
                        <p className="mx-2">
                          {individualInstitute.PrimaryContactNumber}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 "> Secondary Email :</span>
                        <p className="mx-2">
                          {individualInstitute.SecondaryEmail}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class=" viewsection123">
                          {" "}
                          Secondary Contact Number :
                        </span>
                        <p className="mx-2">
                          {individualInstitute.SecondaryContactNumber}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 ">Batch Year :</span>
                        <p className="mx-2">{individualInstitute.BatchYear}</p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 ">Batch :</span>
                        <p className="mx-2">
                          {individualInstitute.SelectBatch}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 "> Address :</span>
                        <p className="mx-2">{individualInstitute.Address}</p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 "> City Name :</span>
                        <p className="mx-2">{individualInstitute.City}</p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class=" viewsection123"> Institute Code :</span>
                        <p className="mx-2">
                          {individualInstitute.InstituteCode}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 ">Institute Type :</span>
                        <p className="mx-2">
                          {individualInstitute.InstituteType}
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <span class="viewsection123 "> Access Plans :</span>
                        <p className="mx-2">{individualInstitute.AxiosPlans}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Data not found</p>
              )}
              {/* {individualInstitute.map((code) => (
               
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData1;
