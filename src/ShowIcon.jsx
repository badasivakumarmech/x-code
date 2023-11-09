import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";
import sideimage from "./All Images/Logo133.jpeg";

const ShowData = () => {
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
          "http://localhost:4010/individualUser/" + id
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

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

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
                      <span class="tooltip">
                        {" "}
                        <img src={sideimage} alt="logo" width="80px" />
                      </span>
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
                        <li>
                          <a href="/AdminDashboard">
                            <i className="fa-solid fa-building-columns"></i>{" "}
                            <span className="link_name">institutions</span>
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
                            <span
                              className="link_name"
                              style={{ color: "#06f9f9" }}
                            >
                              Users
                            </span>
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
                  <div className="d-flex flex-row">
                    <div className=" col-12 col-md-8 m-2">
                      <div className="row">
                        <div className="card mb-3 mt-2 p-2 backgroundcolor">
                          <div className="d-flex flex-row text-white">
                            <div>
                              <h4 className="mt-3">Demo User</h4>
                              <div className="d-flex flex-row">
                                <span class="material-symbols-outlined">
                                  mail
                                </span>
                                <p className="mx-2">
                                  {individualInstitute.userEmail}
                                </p>
                              </div>
                              <button className="m-2 p-1 bg-secondary text-white">
                                <i class="fa-solid fa-pencil"></i>Edit
                              </button>
                              <button className="m-2 p-1 bg-warning text-white">
                                Change Password
                              </button>
                              <br />
                              <button className="m-2 p-1 bg-dark text-white">
                                Extend Access
                              </button>
                            </div>
                            <div className="col-12 col-md-1"></div>
                            <div className=" mx-1 p-3 ">
                              <h6>
                                Institution:
                                <span className="mx-2  ">
                                  {individualInstitute.InstituteType}
                                </span>
                              </h6>
                              <h6>
                                Batch:
                                <span className="mx-2  ">
                                  {individualInstitute.SelectBatch}
                                </span>
                              </h6>
                              <h6>
                                Hallticket No:
                                <span className="mx-2  ">
                                  {individualInstitute.Regdid}
                                </span>
                              </h6>
                              <h6>
                                Status:
                                <span className="mx-2 ">
                                   Active
                                </span>
                              </h6>
                              <h6>
                                Expiration Date:{" "}
                                <span className="mx-2  ">
                                  {individualInstitute.ExpiryDate}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card col-12 col-md-3 mx-3 p-3 m-3 secondcard text-white">
                      <h6>Your Overall Accuracy</h6>

                      <label for="customRange" class="form-label percentage12">
                        50%
                      </label>

                      <input type="range" id="customRange"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-3">
                      <div
                        className="card p-3 cardassessment"
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                        }}
                      >
                        <h6>Assessment Activity</h6>
                        <h6>Completed: 0/14</h6>
                        <h6>Yet to Start: 14/14</h6>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div
                        className="card p-3 "
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                        }}
                      >
                        <h6>Course Activity</h6>
                        <h6>InProgress: 2/6</h6>
                        <h6>Yet to Start: 4/6</h6>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div
                        className="card p-3 "
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                        }}
                      >
                        <h6>Practice Activity</h6>
                        <h6>Completed: 1/44</h6>
                        <h6>Yot to Start: 41/44</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 col-md-6">
                      <div
                        className="card cardassessment1   "
                        style={{
                          border: "1px solid black",
                          borderRadius: "2px",
                        }}
                      >
                        <h6 className=" bg-white p-3">
                          MCQ: Subject Level Accuracy
                        </h6>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div
                        className="card cardassessment12   "
                        style={{
                          border: "1px solid black",
                          borderRadius: "2px",
                        }}
                      >
                        <h6 className=" bg-white p-3">
                          Coding: Programming Wise Accuracy
                        </h6>
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

export default ShowData;
