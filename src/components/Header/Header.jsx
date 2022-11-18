import React from "react";
import cyber from "./../../img/cyber.svg";
//import styles from "./_header.module.scss";
//className={styles.header}
let interval;

const Header = () => {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="header">
      <img src={cyber} alt="" />
      <div className="date">{date.toString()}</div>
    </header>
  );
};

export default Header;
