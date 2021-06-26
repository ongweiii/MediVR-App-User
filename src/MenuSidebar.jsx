import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./_sidebar.scss";
import { NavItem } from "./common/index";
import {
  BsReverseLayoutTextSidebarReverse as Summary,
  BsFillBarChartFill as BarChart,
  BsCardChecklist as Checklist,
} from "react-icons/bs";
import { IoIosArrowDropleft as BackBtn } from "react-icons/io";


const MenuSidebar = () => {
  const [showActive, setActive] = useState("chart");
  const [id, setId] = useState("");
  const [ts, setTs] = useState("");

  // NOTE(@clarence): Temporary solution
  const location = useLocation();

  useEffect(() => {
    const urlParams = location.pathname.split("/").filter(Boolean);
    setActive(urlParams[3]);
    

    if (Object.values(urlParams).includes("session")) {
      const id = urlParams[1] ?? "";
      const ts = urlParams[2] ?? "";
      setId(id);
      setTs(ts);
    }
  }, [location.pathname]);

  return (
    <div className="menuSideBarContainer">
      <NavItem
        icon={<Summary />}
        name="Summary"
        to={id && ts ? `/session/${id}/${ts}/summary` : "/"}
        isActive={() => {
          return showActive === "summary";
        }}
      ></NavItem>
      <NavItem
        icon={<Checklist />}
        name="Checklist"
        to={id && ts ? `/session/${id}/${ts}/checklist` : "/"}
        isActive={() => {
          return showActive === "checklist";
        }}
      ></NavItem>
      <NavItem
        icon={<BarChart />}
        name="Organisation Flow"
        to={id && ts ? `/session/${id}/${ts}/orgflow` : "/"}
        isActive={() => {
          return showActive === "orgflow";
        }}
      ></NavItem>
      <NavItem
        icon={<BackBtn />}
        name="Back"
        to={id && ts ? `/sessions/${id}` : "/"}
        isActive={() => {
          return showActive === "";
        }}
      ></NavItem>
    </div>
  );
};

export default MenuSidebar;
