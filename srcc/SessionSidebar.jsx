import React from "react";
import "./_sidebar.scss";
import { NavItem } from "./common/index";
import { RiTeamLine as SessionIcon } from "react-icons/ri";
import { IoIosArrowDropleft as BackBtn } from "react-icons/io";

const SessionSidebar = () => {
  return (
    <>
      <NavItem
        icon={<SessionIcon />}
        name="Sessions"
        to="#"
        isActive={() => {
          // we can work this into other functions in future when we
          // have more menu items
          return true;
        }}
      ></NavItem>
      <NavItem
        icon={<BackBtn />}
        name="Back"
        to={``}
        isActive={() => {
          return false;
        }}
      ></NavItem>
    </>
  );
};

export default SessionSidebar;
