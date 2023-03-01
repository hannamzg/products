import navStyle from '../styles/nav.module.scss';


function NavBar(prop) {
    return (
      <div className={navStyle.nav}>
        <div className={navStyle.rightDiv}>
            <h2 className={navStyle.rightIcons}>product</h2>
            <i className="bi bi-amd" id={navStyle.icon}></i>
        </div>
            <div>
                <div className={navStyle.divSearchInput}>
                    <input type="text" className={navStyle.searchInput} placeholder='search'/>
                    <i className="bi bi-search"  id={navStyle.searchIcon}></i>
                </div>
            </div>
           {prop.currentUser ?<div className={navStyle.UserInfoDiv}>
                <i className="bi bi-arrow-down"></i>
                <img src={"http://localhost:5000/"+prop.currentUser.photo} alt="" className={navStyle.UserImage} />
                <h4 className={navStyle.userName}>{prop.currentUser.name}</h4>
                <ul className={navStyle.divDown}>
                    <li className={navStyle.liItem} onClick={()=>{
                               
                    }}>sign out</li>                            
                </ul>
            </div>:
             <div className={navStyle.signInUpDiv}>
                 <p className={navStyle.signIn} onClick={()=>prop.setOpenSignIn(true)}>Sign in</p>
                <p className={navStyle.signUp} onClick={()=>prop.setOpenSignUp(true)}>Sign Up</p>
            </div> }
      </div>
    );
  }
  
  export default NavBar;