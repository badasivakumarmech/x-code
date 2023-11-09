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

const AdminDashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [addblogslist, setAddblogslist] = useState([]);
  const [addblogslist1, setAddblogslist1] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);
  const [institutetypeCounts, setInstitutetypeCounts] = useState({});

  const [error, setError] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // const [formData, setFormData] = useState({
  //   InstituteName: "",
  //   PrimaryEmail: "",
  //   HeadName: "",
  //   PrimaryContactNumber: "",
  //   SecondaryEmail: "",
  //   SecondaryContactNumber: "",
  //   Address: "",
  //   City: "",
  //   InstituteCode: "",
  //   InstituteType: "",
  //   AxiosPlans: "",
  //   Password: "",

  //   // Add other form fields here
  // });

  // const openEditForm = (item) => {
  //   setEditingItem(item);
  //   setFormData({
  //     Sno: item.Sno,
  //     InstituteName: item.InstituteName,
  //     PrimaryEmail: item.PrimaryEmail,
  //     HeadName: item.HeadName,
  //     PrimaryContactNumber: item.PrimaryContactNumber,
  //     SecondaryEmail: item.SecondaryEmail,
  //     SecondaryContactNumber: item.SecondaryContactNumber,
  //     Address: item.Address,
  //     City: item.City,
  //     InstituteCode: item.InstituteCode,
  //     InstituteType: item.InstituteType,
  //     AxiosPlans: item.AxiosPlans,
  //     Password: item.Password,

  //     // Populate other form fields as well
  //   });
  // };

  // const updateItem = () => {
  //   const updatedList = addblogslist.map((item) => {
  //     if (item._id === editingItem._id) {
  //       return {
  //         ...item,
  //         Sno: formData.Sno,
  //         InstituteName: formData.InstituteName,
  //         PrimaryEmail: formData.PrimaryEmail,
  //         HeadName: formData.HeadName,
  //         InstituteCode: formData.InstituteCode,
  //         // Update other fields as well
  //       };
  //     }
  //     return item;
  //   });

  //   setAddblogslist(updatedList);
  //   setEditingItem(null);
  // };
  // const onUpdate = (e) => {
  //   e.preventDefault();
  //   updateItem();
  // };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  useEffect(() => {
    fetchblogs();
    fetchblogs1();
    if (token == undefined) {
      navigate("/");
    }
  }, []);

  // const fetchblogs1 = async () => {
  //   const api = "http://localhost:4010/allUsersData";
  //   const authToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
  //   try {
  //     const response = await axios.get(api, {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     });
  //     setAddblogslist1(response.data);
  //   } catch (error) {
  //     console.error("Error fetching blogs:", error);
  //   }
  // };
  const fetchblogs1 = async () => {
    const api = "http://localhost:4010/allUsersData";
    const authToken = "YOUR_AUTH_TOKEN_HERE"; // Replace with your actual authentication token

    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = response.data;
      setAddblogslist1(data);

      // Calculate the user counts for each institutetype
      const institutetypeCounts = {};
      data.forEach((item) => {
        const institutetype = item.InstituteType;
        if (institutetypeCounts[institutetype]) {
          institutetypeCounts[institutetype] += 1;
        } else {
          institutetypeCounts[institutetype] = 1;
        }
      });

      setInstitutetypeCounts(institutetypeCounts);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  console.log(institutetypeCounts);
  const fetchblogs = async () => {
    const api = "http://localhost:4010/allAddInstitutes";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAddblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  //Add Institute

  const [InstituteName, setInstituteName] = useState("");
  const [HeadName, setHeadName] = useState("");
  const [PrimaryEmail, setPrimaryEmail] = useState("");
  const [PrimaryContactNumber, setPrimaryContactNumber] = useState("");
  const [SecondaryEmail, setSecondaryEmail] = useState("");
  const [SecondaryContactNumber, setSecondaryContactNumber] = useState("");
  const [BatchYear, setBatchYear] = useState("");
  const [SelectBatch, setSelectBatch] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [InstituteCode, setInstituteCode] = useState("");
  const [InstituteType, setInstituteType] = useState("");
  const [AxiosPlans, setAxiosPlans] = useState("");
  const [Password, setPassword] = useState("");

  const [data1, setdata1] = useState([]);
  console.log(InstituteName);
  const AddInstitute = {
    InstituteName: InstituteName,
    HeadName: HeadName,
    PrimaryEmail: PrimaryEmail,
    PrimaryContactNumber: PrimaryContactNumber,
    SecondaryEmail: SecondaryEmail,
    SecondaryContactNumber: SecondaryContactNumber,
    BatchYear: BatchYear,
    SelectBatch: SelectBatch,
    Address: Address,
    City: City,
    InstituteCode: InstituteCode,
    InstituteType: InstituteType,
    AxiosPlans: AxiosPlans,
    Password: Password,
  };
  console.log(InstituteName);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      InstituteName &&
      HeadName &&
      PrimaryEmail &&
      PrimaryContactNumber &&
      SecondaryEmail &&
      SecondaryContactNumber &&
      BatchYear &&
      SelectBatch &&
      Address &&
      City &&
      InstituteCode &&
      InstituteType &&
      AxiosPlans &&
      Password !== ""
    ) {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4010/AddInstitute", AddInstitute, {
          headers,
        })
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Save Data Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {}, 3000);
            fetchblogs();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  console.log(data1);

  const handleDelete = async (id) => {
    try {
      if (!id) {
        setError("Invalid ID provided for deletion.");
        return;
      }
      console.log("Deleting institute with ID:", id);
      const response = await axios.delete(
        "http://localhost:4010/deleteInstitute/" + id
      );
      if (response.status === 200) {
        toast.success("Success: Institute deleted", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        fetchblogs();

        // Update your state or fetch updated data as needed
        // For example, if addblogslist is updated from the server, you can update it here.

        const updatedListLength = addblogslist.length - 1;
        console.log("Updated list length:", updatedListLength);
      } else {
        console.log(response.data);
        alert("Error: " + response.data);
        setError("An error occurred while deleting the institute.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the institute.");
    }
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

  // Corporate Office
  return (
    <div>
      <div className="container1">
        <div className="row">
          <div className=" mt-1">
            <div className="row">
              <div className=" col-12 col-md-2 sectioncard121">
                <div className={`sidebar ${isOpen ? "open" : ""}`}>
                  <div class="logo_details">
                    <div class="logo_name">
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

              <div className="col-12 col-md-10">
                <div class="">
                  <div className="card section-31 shadow">
                    <div className="d-flex flex-row">
                      <div>
                        <h2 className="mt-2 mx-4 mt-3">institutions</h2>
                      </div>
                      <div className="col-12 col-md-7"></div>

                      <div style={{ marginLeft: "auto" }} class="m-2">
                        {/* <b class="resumeh7 ">+ Add Employment</b> */}
                        <div>
                          {/* <i class="fa-solid fa-pen-to-square iconedit"></i> */}
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            className=""
                          >
                            <i
                              type="button"
                              class="material-symbols-outlined mx-3 mt-4"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal23"
                            >
                              edit_square
                            </i>
                            <b class="resumeh7 row mx-3">+Add</b>
                          </button>
                          {/* <ToastContainer
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
                          /> */}

                          <div class="modal" id="myModal23">
                            <div class="modal-dialog ">
                              <div class="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                  <h4 class="modal-title">Add Institute</h4>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                  <form action="" onSubmit={onSubmitForm}>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Institute Name :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Institute Name"
                                        onChange={(e) =>
                                          setInstituteName(e.target.value)
                                        }
                                        value={InstituteName}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Head Name :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Head Name"
                                        onChange={(e) =>
                                          setHeadName(e.target.value)
                                        }
                                        value={HeadName}
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-md-6">
                                        <label className="headingAdd">
                                          Primary Email :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Primary Email"
                                          onChange={(e) =>
                                            setPrimaryEmail(e.target.value)
                                          }
                                          value={PrimaryEmail}
                                        />
                                      </div>
                                      <div className="col-12 col-md-6">
                                        <label className="headingAdd">
                                          Primary Contact Number :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Primary Contact Number"
                                          onChange={(e) =>
                                            setPrimaryContactNumber(
                                              e.target.value
                                            )
                                          }
                                          value={PrimaryContactNumber}
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-md-6">
                                        <label className="headingAdd">
                                          Secondary Email :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Secondary Email"
                                          onChange={(e) =>
                                            setSecondaryEmail(e.target.value)
                                          }
                                          value={SecondaryEmail}
                                        />
                                      </div>
                                      <div className="col-12 col-md-6 ">
                                        <label className="headingAdd">
                                          Secondary Contact Number :
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          className="etotal"
                                          style={{ border: "1px solid black" }}
                                          placeholder="Enter Secondary Contact Number"
                                          onChange={(e) =>
                                            setSecondaryContactNumber(
                                              e.target.value
                                            )
                                          }
                                          value={SecondaryContactNumber}
                                        />
                                      </div>
                                    </div>

                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Batch Year :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Branch Year"
                                        onChange={(e) =>
                                          setBatchYear(e.target.value)
                                        }
                                        value={BatchYear}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Enter Batch :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Branch"
                                        onChange={(e) =>
                                          setSelectBatch(e.target.value)
                                        }
                                        value={SelectBatch}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Address :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Address"
                                        onChange={(e) =>
                                          setAddress(e.target.value)
                                        }
                                        value={Address}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        City Name :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter City Name"
                                        onChange={(e) =>
                                          setCity(e.target.value)
                                        }
                                        value={City}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 m-2">
                                      <label className="headingAdd">
                                        Institute Code :
                                      </label>
                                      <br />
                                      <input
                                        type="text"
                                        className="etotal"
                                        style={{ border: "1px solid black" }}
                                        placeholder="Enter Institute Code"
                                        onChange={(e) =>
                                          setInstituteCode(e.target.value)
                                        }
                                        value={InstituteCode}
                                      />
                                    </div>

                                    <div className=" mt-3">
                                      <div className="col-12 col-md-6 m-2">
                                        <label className="headingAdd">
                                          Institute Type :
                                        </label>
                                        <br />
                                        <select
                                          name=""
                                          id=""
                                          onChange={(e) =>
                                            setInstituteType(e.target.value)
                                          }
                                          value={InstituteType}
                                          className="w-100 Typesection p-2"
                                        >
                                          <option
                                            value="School"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            School
                                          </option>
                                          <option
                                            value="Collage"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            Collage
                                          </option>
                                          <option
                                            value="University"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            University
                                          </option>
                                          <option
                                            value="Education Society"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            Education Society
                                          </option>
                                          <option
                                            value="Training Institute"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            Training Institute
                                          </option>
                                          <option
                                            value="NGOs"
                                            onChange={(e) =>
                                              setInstituteType(e.target.value)
                                            }
                                          >
                                            NGOs
                                          </option>
                                        </select>
                                      </div>

                                      <div className="col-12 col-md-6 m-2">
                                        <label className="headingAdd">
                                          Access Plans :
                                        </label>

                                        <select
                                          name=""
                                          id=""
                                          onChange={(e) =>
                                            setAxiosPlans(e.target.value)
                                          }
                                          value={AxiosPlans}
                                          className="w-100 Typesection p-2"
                                        >
                                          <option
                                            value="Exam Practice"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            Exam Practice
                                          </option>
                                          <option
                                            value="LMS"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            LMS
                                          </option>
                                          <option
                                            value="Mock Interview"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            Mock Interview
                                          </option>
                                          <option
                                            value="Previous papers"
                                            onChange={(e) =>
                                              setAxiosPlans(e.target.value)
                                            }
                                          >
                                            Previous papers
                                          </option>
                                        </select>
                                      </div>
                                      <div className="d-flex flex-row">
                                        <div className="col-12 col-md-6 m-2">
                                          <label className="headingAdd">
                                            Password :
                                          </label>
                                          <br />
                                          <input
                                            type="text"
                                            className="etotal"
                                            style={{
                                              border: "1px solid black",
                                            }}
                                            placeholder="Enter Password"
                                            onChange={(e) =>
                                              setPassword(e.target.value)
                                            }
                                            value={Password}
                                          />
                                        </div>
                                        <div className="col-12 col-md-6 m-2">
                                          <label className="headingAdd">
                                            Password Should have a :
                                          </label>
                                          <br />
                                          <ul>
                                            <li className="listitams123">
                                              Minumum 8 Characters
                                            </li>
                                            <li> 1 Small Letter</li>
                                            <li>1 Capital Letter</li>
                                            <li>1 Number</li>
                                            <li>1 Space Character</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="modal-footer mt-3">
                                      <button
                                        type="submit"
                                        class="btn btn-success"
                                        data-bs-dismiss="modal"
                                      >
                                        Add Institute
                                      </button>
                                    </div>
                                  </form>
                                </div>

                                {/* <!-- Modal footer --> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
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
                      <div className=" col-12 col-lg-12">
                        <div className="table-responsive">
                          <table className="table table-striped text-center">
                            <thead>
                              <tr className="table-dark">
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Head</th>
                                <th>User Count</th>
                                <th>code</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {addblogslist.map((blog) => (
                                <tr key={blog.id}>
                                  <td>{blog.Sno}</td>
                                  <td>{blog.InstituteName}</td>
                                  <td>{blog.PrimaryEmail}</td>
                                  <td>{blog.HeadName}</td>
                                  <td>
                                    {/* {Object.entries(institutetypeCounts).map(
                                      ([institutetype, count]) => (
                                        <div key={institutetype}>{count}</div>
                                      )
                                    )} */}
                                    16
                                  </td>

                                  <td
                                    style={{
                                      color: "#0320fc",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {blog.InstituteCode}
                                  </td>
                                  <td className="text-center">
                                    <a
                                      href="./ShowData"
                                      style={{ color: "black" }}
                                    >
                                      <Link to={`/ShowData1/${blog._id}`}>
                                        <span
                                          className="material-symbols-outlined mx-1 p-1"
                                          style={{
                                            color: "black",
                                            backgroundColor: "orange",
                                            borderRadius: "5px",
                                          }}
                                        >
                                          visibility
                                        </span>
                                      </Link>
                                    </a>

                                    <button
                                      style={{
                                        border: "none",
                                        backgroundColor: "white",
                                      }}
                                    >
                                      <Link to={`/UpdatePage/${blog._id}`}>
                                        <span
                                          type="button"
                                          className="material-symbols-outlined mx-1 p-1"
                                          style={{
                                            color: "black",
                                            backgroundColor: "pink",
                                            borderRadius: "5px",
                                          }}
                                        >
                                          edit_square
                                        </span>
                                      </Link>
                                    </button>

                                    <button
                                      className="material-symbols-outlined mx-1 p-1"
                                      type="submit"
                                      style={{
                                        backgroundColor: "red",
                                        border: "none",
                                        borderRadius: "5px",
                                      }}
                                      onClick={() => handleDelete(blog._id)}
                                    >
                                      delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
