import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut();
    dispatch(logout());
  };
  return (
    <div className="header">
      {/* Header left */}
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png"
          alt=""
        />
      </div>
      {/* Header middle */}
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      {/* Header right */}
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar onClick={signOut} src={user?.photoURL} />
        {/* {console.log(user)} */}
      </div>
    </div>
  );
}

export default Header;
