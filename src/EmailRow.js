import { IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { selectMail } from "./features/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const opeMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    navigate("/mail");
  };
  return (
    <div onClick={opeMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
