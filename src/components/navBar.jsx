import navStyle from '../styles/nav.module.scss';


function NavBar() {
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
            <div className={navStyle.signInUpDiv}>
                 <p className={navStyle.signIn}>sign in</p>
                <p className={navStyle.signUp}>sign Up</p>
            </div>
      </div>
    );
  }
  
  export default NavBar;