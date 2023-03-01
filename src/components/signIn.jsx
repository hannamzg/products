
import singInStyle from "../styles/signIn.module.scss";
import {login} from "../serves/login.js";
import { useFormik } from "formik";
import { useState,useEffect } from "react";

function SignIn(prop){

  function onSubmit(){
    try{
      login(values).then((data)=>{
        prop.setCurrentUser(data.data)
        console.log(data); 
      }).catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    }   
  }

  useEffect(() => {
    console.log(prop.currentUser);
    localStorage.setItem("UsersProduct", JSON.stringify(prop.currentUser));
  }, [prop.currentUser]);  
 
  
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:{
      email:"",
      password:""
    },
   // validationSchema:basicSchema,
    onSubmit
  })
  console.log(values);
  
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
                <input type="text" name="email" placeholder="email"  value={values.email} onChange={handleChange} className={singInStyle.inp}/>
                <input type="password" name="password" placeholder="password"   value={values.password} onChange={handleChange} className={singInStyle.inp}/>
            </div>
            <button type="submit" className={singInStyle.btn} onClick={handleSubmit}>
              submit
            </button>
          </form>
    </div>
    )
}

export default SignIn