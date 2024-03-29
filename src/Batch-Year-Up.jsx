import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import sideimage from "./All Images/Logo133.jpeg";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";

const UpdateYear = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [individualInstitute, setIndividualInstitute] = useState({
    BatchYear: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();

    const UserData = {
      BatchYear: individualInstitute.BatchYear,
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
            navigate("/BatchYear");
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
      <div className="container">
        <div className="row">
          <div className=" col-12 col-md-3 ">
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
                      Institutions <i className="fa-solid fa-chevron-down"></i>
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
                      <a href="#">
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
                    // onClick={handleLogout}
                  ></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5">
          {loading ? (
            <p>Loading...</p>
          ) : individualInstitute ? (
            <div>
              <div className="modal-dialog ">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Batch Years :</h4>
                    <br />
                    <Link to="/BatchYear">
                      <button type="button" className="btn-close"></button>
                    </Link>
                  </div>
                  <div className="modal-body text-start">
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
                      <div className="col-12 col-md-6 m-2">
                        <label className="headingAdd">Batch Year :</label>
                        <br />
                        <input
                          type="text"
                          className="etotal"
                          style={{
                            border: "1px solid black",
                          }}
                          placeholder="Enter Batch Year"
                          value={individualInstitute.BatchYear}
                          onChange={(e) =>
                            setIndividualInstitute({
                              ...individualInstitute,
                              BatchYear: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Add other form fields here */}
                      <div className="modal-footer mt-3">
                        <button type="submit" className="btn btn-danger">
                          Update
                        </button>
                      </div>
                      <p>{error}</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Data not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateYear;
