import React from "react";
import styles from "./../_Dialogs.module.scss";

const Msg = (props) => {
  return <div className={styles.message}>{props.msg}</div>;
};

export default Msg;
