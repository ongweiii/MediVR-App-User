import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import MenuSidebar from "./MenuSidebar";
import SessionSidebar from "./SessionSidebar";
import logo from "./assets/medivr.png";
import "./_sidebar.scss";

const Sidebar = ({ className }) => {
  const [timestamp, setTimestamp] = useState("");
  const history = useHistory();
  const location = useLocation();
  const onClick = () => {
    history.push("/");
  };

  // NOTE(@clarence): This is a temporary way for doing this
  // We should set up a redux store to track the routing
  useEffect(() => {
    const urlParams = location.pathname.split("/").filter(Boolean);
    const convertToMilliSeconds = urlParams[2] * 1000;
    let timestamp = "";
    if (convertToMilliSeconds) {
      const datetimeStr = new Date(convertToMilliSeconds) ?? null;
      if (datetimeStr instanceof Date) {
        timestamp = datetimeStr;
      }
    }
    setTimestamp(timestamp);
  }, [location]);
  
  return (
    <div className={cn(className, "main")}>
      <button onClick={onClick} className="logo-btn">
        <img src={logo} className="logo" alt="MediVR Logo" />
      </button>
      {timestamp ? <MenuSidebar /> : <SessionSidebar />}
    </div>
  );
};

export default Sidebar;
