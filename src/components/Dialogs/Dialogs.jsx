import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./_Dialogs.module.scss";
import Msg from "./Message/Message";

const dialogClassName = (navData) =>
  navData.isActive ? `${styles.dialog} ${styles.active}` : styles.dialog;

const DialogItem = (props) => {
  let way = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={way} className={dialogClassName}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />;
  });

  let msgElements = props.state.messages.map((m) => {
    return <Msg msg={m.msg} key={m.id} />;
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogList}>{dialogElements}</div>
      <div>{msgElements}</div>
    </div>
  );
};

export default Dialogs;
