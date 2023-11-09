import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import sideimage from "./All Images/Logo133.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";

const SearchOption = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [addblogslist, setAddblogslist] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [isNavVisible, setIsNavVisible] = useState(false);

  const [isFiltered, setIsFiltered] = useState(false);

  const [error, setError] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  useEffect(() => {
    fetchblogs();
    // InstituteDetails();
    if (token == undefined) {
      navigate("/");
    }
  }, []);

  // const fetchblogs = async () => {
  //   const api = "http://localhost:4010/allUsersData";
  //   const authToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2vyIjoiNjRkZGFiYjYwYmUzZWI4NzI9MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";

  //   try {
  //     const response = await axios.get(api, {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //       params: {
  //         search: searchTerm,
  //       },
  //     });
  //     setAddblogslist(response.data);
  //   } catch (error) {
  //     console.error("Error fetching blogs:", error);
  //   }
  // };
  const fetchblogs = async () => {
    const api = "http://localhost:4010/allUsersData";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2vyIjoiNjRkZGFiYjYwYmUzZWI4NzI9MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";

    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        params: {
          search: searchTerm,
        },
      });
      setAddblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  // const handleSearch = () => {
  //   setIsFiltered(!isFiltered);
  // };
  const handleSearch = async () => {
    setIsFiltered(!isFiltered);
    try {
      await fetchblogs();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const filteredData = addblogslist.filter((item) =>
    item.FirstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
              <div className=" col-12 col-md-2 ">
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
                          <a href="/Batches">
                            <i className="fa-solid fa-building-columns"></i>
                            <span className="link_name">Batches</span>
                          </a>
                          <span className="tooltip">Batches</span>
                        </li>
                        <li>
                          <a href="/UsersDetails">
                            <i className="fa-solid fa-user"></i>
                            <span className="link_name">Users</span>
                          </a>
                          <span className="tooltip">Users</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-searchengin"></i>
                            <span
                              className="link_name"
                              style={{ color: "#06f9f9" }}
                            >
                              Search Users
                            </span>
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
              <div className="col-12 col-md-10">
                <div class="">
                  <div className="card section-31 shadow">
                    <div className="row">
                      <div className="p-2 m-3">
                        <h4 className="">Download Users</h4>
                        <button
                          className="col-12 col-md-2 m-2 bg-primary p-1 text-white"
                          style={{ borderRadius: "10px" }}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card section-31 shadow">
                    <h4 className="p-2 mt-2">Search Users : </h4>
                    <div className="d-flex flex-row">
                      <div className="col-12 col-md-6 w-75 m-3">
                        <input
                          type="text"
                          className="search w-50 shadow"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          style={{border : "1px solid black"}}
                        />
                        <button
                          className="m-2 bg-primary searchcontent text-white"
                          onClick={handleSearch}
                        >
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <div></div>
                      </div>
                    </div>
                  </div>

                  <br />
                  {isFiltered ? (
                    <div className="card section-31 shadow">
                      <div className="row">
                        <div className="">
                          <div className="col-12 col-md-12">
                            <div className="table-responsive">
                              <table className="table table-striped text-center">
                                <thead>
                                  <tr className="table-dark">
                                    <th className="size321">S.NO</th>
                                    <th className="size321">FIRST NAME</th>
                                    <th className="size321">LAST NAME</th>
                                    <th className="size321">EMAIL</th>
                                    <th className="size321">MOBILE</th>
                                    <th className="size321">REGO</th>

                                    <th className="size321">BATCH YEAR</th>
                                    <th className="size321">BATCH</th>
                                    <th className="size321">INSTITUTE NAME</th>
                                    <th className="size321">VIEW DETAILS</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  {filteredData.map((blog) => (
                                    <tr key={blog.id}>
                                      <td>{blog.Sno}</td>
                                      <td>{blog.FirstName}</td>
                                      <td>{blog.LastName}</td>
                                      <td>{blog.userEmail}</td>
                                      <td>{blog.userNumber}</td>
                                      <td>{blog.Regdid}</td>
                                      <td>{blog.BatchYear}</td>
                                      <td>{blog.SelectBatch}</td>
                                      <td>{blog.InstituteType}</td>

                                      <td className="text-center">
                                        <ToastContainer
                                          position="top-right"
                                          autoClose={1000}
                                          hideProgressBar={false}
                                          newestOnTop={false}
                                          closeOnClick
                                          rtl={false}
                                          pauseOnFocusLoss
                                          draggable
                                          pauseOnHover
                                          theme="colored"
                                        />
                                        <a
                                          href="./ShowData"
                                          style={{ color: "black" }}
                                        >
                                          <Link to={`/ShowData/${blog._id}`}>
                                            <span
                                              className="material-symbols-outlined w-75"
                                              style={{
                                                color: "black",
                                                backgroundColor: "#f3ab05",
                                              }}
                                            >
                                              visibility
                                            </span>
                                          </Link>
                                        </a>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* Display a "No Data" message when no data is found */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOption;
