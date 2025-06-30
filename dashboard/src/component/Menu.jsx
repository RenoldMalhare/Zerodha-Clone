import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [profileDropdownMenu, setProfileDropdownMenu] = useState(false);
  let handleMenuClick = (index) => {
    setSelectMenu(index);
  };
  let handleProfileDropClick = () => {
    setProfileDropdownMenu(!profileDropdownMenu);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="kite-logo.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                Holding
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileDropClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
