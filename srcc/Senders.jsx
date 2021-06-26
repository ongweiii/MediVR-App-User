import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {FaUser} from "react-icons/fa"; 
import back_img from "./assets/back_img.png";
import vr_pic from "./assets/VR_pic.png";
import logo from "./assets/MediVRLogo.png";
import { getSenders } from "./Api";
export default function Senders() {
  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getSenders().then((data) => {
      setList(data);
      setLoaded(true);
    });
  }, []);

  function login() {
    var username = (document.getElementById("usernam").value).toLowerCase(),
    webstring = window.location.href + 'sessions/' + username;
    if (username === "" || username == null) {
      alert("Please enter a username");
    } else if (list.some((obj) => obj.sender_id === username)) {
      window.open(webstring, "_self");
    } else {
      alert("Username is invalid");
    }
  }

  return (
    <div className='senders'>
      {loaded ? (
        <div>
          <body background={back_img}>
            <div className="container-login">
              <div className="img">
                <img src={vr_pic} className="vr_pic" alt="" />
              </div>
              <div className="login-content">
                <div id="login" name="login">
                  <img src={logo} className="logo" alt="" />
                  <div className="input-div">
                    <div className= "i">
                      <FaUser />
                    </div>
                    <div className="div">
                      <input
                        type="text"
                        id="usernam"
                        name="username"
                        placeholder="Username"
                      />
                      <br></br>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="login"
                    id="login"
                    title="login"
                    className="btn"
                    onClick={() => login()}
                  ></input>
                </div>
              </div>
            </div>
            </body>
        </div>
      ) : (
        <h6>Loading...</h6>
      )}
    </div>
  );
}