import NavBar from "../components/navBar";
import Filter from "../components/filter";
import Products from "../components/products";
import SelectProducts from "../components/selectProducts"
import { useEffect,useState } from "react"
import {getAllProducts} from '../serves/getAllProducts';
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";

function MainPage() {
  const [data,setData]=useState([]);
  const [selectedData,setSelectedData]=useState("")
  const [openSignIn,setOpenSignIn]=useState(false)
  const [openSignUp,setOpenSignUp]=useState(false)


  useEffect(()=>{
    
    try{
        getAllProducts().then((data)=>{
          setData(data.data)   
                  
        }).catch((err)=>{
          console.log(err);
        }) 
        }
        catch (err){
            console.log(err);
        }
  },[])
  
  return (
    <div >
      <NavBar setOpenSignIn={setOpenSignIn} setOpenSignUp={setOpenSignUp}/>
      <Filter data={data} setSelectedData={setSelectedData} selectedData={selectedData}/>
      {selectedData ? <SelectProducts selectedData={selectedData} />: <Products data={data}/>}
      {openSignIn&&<SignIn setOpenSignIn={setOpenSignIn}/>}
      {openSignUp&& <SignUp setOpenSignUp={setOpenSignUp} setOpenSignIn={setOpenSignIn}/>}
    </div>
  );
}

export default MainPage;