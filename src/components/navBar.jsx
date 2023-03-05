import navStyle from "../styles/nav.module.scss";
import { useEffect, useState } from "react";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";
import {AuthContext} from '../context/authContext';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function NavBar(prop) {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const {currentUser} =useContext(AuthContext);
  const {logOut } =useContext(AuthContext);
  const navigate = useNavigate();

  
  useEffect(()=>{
},[currentUser])


  return (
    <div className={navStyle.nav}>
      <div className={navStyle.rightDiv}>
        <h2 className={navStyle.rightIcons}>product</h2>
        <i className="bi bi-amd" id={navStyle.icon}></i>
      </div>
      <div>
        <div className={navStyle.divSearchInput}>
          <input
            type="text"
            className={navStyle.searchInput}
            placeholder="search"
          />
          <i className="bi bi-search" id={navStyle.searchIcon}></i>
        </div>
      </div>
      {currentUser ? (
        <div className={navStyle.UserInfoDiv}>
          <i className="bi bi-arrow-down" style={{ marginRight: "10px" }}></i>
          <img
            src={"http://localhost:5000/" + currentUser.photo}
            alt=""
            className={navStyle.UserImage}
            onClick={() => prop.setOpenSettings(true)}
          />
          <div className={navStyle.cartIconDiv} onClick={()=> navigate("/cart")}>
              <i className="bi bi-cart3" id={navStyle.cartIcon}></i>
              <div className={navStyle.ribbon}><span id={navStyle.countNumbers}>8</span></div>
          </div>
        
          {prop.openSettings && (
            <ul className={navStyle.divDown}>
              <li
                className={navStyle.liItem}
                onClick={() => {
                  logOut();
                }}
              >
                sign out
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div className={navStyle.signInUpDiv}>
          <p
            className={navStyle.signIn}
            onClick={() => setOpenSignIn(true)}
          >
            Sign in
          </p>
          <p
            className={navStyle.signUp}
            onClick={() => setOpenSignUp(true)}
          >
            Sign Up
          </p>
        </div>
      )}
      
      {openSignIn&& <SignIn  setOpenSignIn={setOpenSignIn}/>}
      {openSignUp&&<SignUp setOpenSignUp={setOpenSignUp} setOpenSignIn={setOpenSignIn}/>}


    </div>
  );
}

export default NavBar;
