import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../components";
import { profileSidebarData } from "../../utils/ProfileSidebarData";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 border-end"
      style={{ width: "280px", height: "calc(100vh - 6rem)" }}
    >
      <Link
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <div>
          <Icon icon="avatar" size={"3rem"} disableFill />
        </div>
        <span className="fs-2 fw-bold h3">Profile</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {/* <li className="nav-item">
          <Link to={"#"} className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home" />
            </svg>
            Home
          </Link>
        </li> */}
        {profileSidebarData.map((item, index) => (
          <li key={index}>
            <Link
              to={`/profile/${item.path}`}
              className="nav-link link-dark d-flex align-items-center"
            >
              <div className="bi pe-none me-3">{item.icon}</div>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link to={"#"} className="d-flex align-items-center link-dark">
        <div>
          <Icon icon="avatar" size={"3rem"} disableFill />
        </div>
        <strong>Sign out</strong>
      </Link>
    </div>
  );
};

export default Sidebar;
