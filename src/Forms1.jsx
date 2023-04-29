import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineRight } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CgDollar } from "react-icons/cg";
import { MdOutlineThumbUp } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import "./mobile.css";

import "./App.css";

const Forms1 = () => {
  const buttonStyle = {
    borderRadius: "5px",
    width: "6rem",
    height: "2.8rem",
    lineHeight: "1.2",
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const pad1 = {
    padding: "2rem",
  };

  const pad2 = {
    padding: "1rem",
  };

  const icon = darkMode ? <FaCheck color="white" /> : <BiLockAlt />;
  const icon2 = darkMode ? <RiNumber2 color="#A5ACBA" /> : <IoPersonOutline />;
  const icon3 = darkMode ? <RiNumber3 color="#A5ACBA" /> : <CgDollar />;
  const icon4 = darkMode ? <RiNumber4 color="#A5ACBA" /> : <MdOutlineThumbUp />;

  const change = {
    backgroundColor: "blue",
  };

  const change1 = {
    backgroundColor: "white",
  };

  const change2 = {
    backgroundColor: "#252D3C",
  };

  const back = darkMode ? change : change1;

  const back2 = darkMode ? change2 : change1;

  const changeText1 = {
    color: "blue",
  };

  const changeText2 = {
    color: "black",
  };

  const changeText3 = {
    color: "#A5ACBA",
  };

  const changeForm = {
    color: "white !important",
    backgroundColor: "#252D3C",
    "::placeholder": {
      color: "white !important",
    },
  };

  const changeForm1 = {
    color: "black",
    backgroundColor: "white",
  };

  const Text1 = darkMode ? changeText1 : changeText2;

  const Text2 = darkMode ? changeText3 : changeText2;

  const colorForm = darkMode ? changeForm : changeForm1;

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <div className="container-fluid d-flex justify-content-evenly align-items-center min-vh-100 rounded">
        <div className="row pt-5 position-relative  ">
          <p className="h1 text-center">Lookscout</p>

          <div
            className="col-md-5 bg-white flex-fill px-0  shadow mt-3"
            style={{ width: "25em" }}
          >
            <div
              className="bg-white w-100 ml-5 "
              class={`${darkMode ? "dark1" : "light"}`}
            >
              <div className="p-4">
                <div className="d-flex flex-row justify-content-between mb-4  ">
                  <div
                    className="d-inline-block rounded-circle border border-dark border-1 "
                    style={{ width: "30px", height: "30px", ...back }}
                  >
                    <div class="d-flex justify-content-center ">
                      <div class="align-self-center">{icon}</div>
                    </div>
                    <div className="text-left mt-2  move-text">
                      <span style={Text1}>Account</span>
                    </div>
                  </div>

                  <div
                    className="d-inline-block rounded-circle border border-dark border-1"
                    style={{ width: "30px", height: "30px", ...back2 }}
                  >
                    <div class="d-flex justify-content-center">
                      <div class="align-self-center">{icon2}</div>
                    </div>
                    <div className="text-left mt-2  move-text">
                      <span style={Text1}>Personal</span>
                    </div>
                  </div>
                  <div
                    className="d-inline-block rounded-circle border border-dark border-1"
                    style={{ width: "30px", height: "30px", ...back2 }}
                  >
                    <div class="d-flex justify-content-center">
                      <div class="align-self-center">{icon3}</div>
                    </div>
                    <div className="text-left mt-2  move-text">
                      <span style={Text2}>Billing</span>
                    </div>
                  </div>
                  <div
                    className="d-inline-block rounded-circle border border-dark border-1"
                    style={{ width: "30px", height: "30px", ...back2 }}
                  >
                    <div class="d-flex justify-content-center">
                      <div class="align-self-center">{icon4}</div>
                    </div>
                    <div className="text-left mt-2  move-text">
                      <span style={Text2}>Done</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white w-100 "
              class={`${darkMode ? "dark" : "light"}`}
              style={pad1}
            >
              <form>
                <div className="form-group mb-3">
                  <label className="mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Bryan Koelpin"
                    className="form-control border-0"
                    id="name"
                    style={colorForm}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2">Email*</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control border-0"
                    id="email"
                    style={colorForm}
                  />
                  <p class="text-secondary pt-1">
                    Please input a real Email Address
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between mobile">
                  <div className="form-group mb-3">
                    <label className="mb-2">Password*</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control border-0"
                      id="password"
                      style={colorForm}
                    />
                    <p class="text-secondary pt-1">
                      Please enter your password
                    </p>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-2">Confirm Password*</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control border-0"
                      id="password"
                      style={colorForm}
                    />
                    <p class="text-secondary pt-1">Passwords need to match</p>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkbox"
                  />
                  <label className="form-check-label">
                    I accept the Terms and Privacy Policy
                  </label>
                </div>
                <div className="d-flex flex-row justify-content-end"></div>
              </form>
            </div>

            <div
              className="bg-white w-100"
              class={`${darkMode ? "dark1" : "light"}`}
              style={pad2}
            >
              <div className="d-flex flex-row justify-content-end mobile-button">
                <button
                  type="submit"
                  className="btn btn-primary mobile-inside"
                  style={buttonStyle}
                >
                  Next
                  <span style={{ paddingLeft: "10px" }}>
                    <AiOutlineRight className="align-middle" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms1;
