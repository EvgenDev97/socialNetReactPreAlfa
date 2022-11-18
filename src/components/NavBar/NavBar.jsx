import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./_NavBar.module.scss";

//console.log(styles);
const NavBar = (props) => {
  const navLinkClassName = (navData) =>
    navData.isActive ? `${styles.navItem} ${styles.active}` : styles.navItem; // if true return {styles.active} else {styles.navItem}
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <NavLink to="/profile" className={navLinkClassName}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" className={navLinkClassName}>
              Message
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClassName} to="">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClassName} to="">
              Music
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClassName} to="">
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
