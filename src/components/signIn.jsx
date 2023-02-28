
import singInStyle from "../styles/signIn.module.scss";

function SignIn(prop){
    return(
    <div className={singInStyle.mainDiv} >
          <form className={singInStyle.fromDiv}  > 
            <div className={singInStyle.closedBtn}  onClick={()=>prop.setOpenSignIn(false)}>
              <i className="bi bi-x-circle" id={singInStyle.close}></i>
            </div>
            <div className={singInStyle.inputsDiv}> 
                <div className={singInStyle.titleDiv}>
                    <h2 className={singInStyle.title}>sign in</h2>
                    <i className="bi bi-box-arrow-in-right" id={singInStyle.icon}></i>
                </div>
                <input type="text" name="email" placeholder="email" className={singInStyle.inp}/>
                <input type="password" name="password" placeholder="password" className={singInStyle.inp}/>
            </div>
            <button className={singInStyle.btn}>
              submit
            </button>
          </form>
    </div>
    )
}

export default SignIn