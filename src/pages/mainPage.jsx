import NavBar from "../components/navBar";
import Filter from "../components/filter";
import Products from "../components/products";
import SelectProducts from "../components/selectProducts";
import { useEffect, useState } from "react";
import { getAllProducts } from "../serves/getAllProducts";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";
import ProductPage from "./productPage";

import { Route, Routes } from "react-router-dom";

function MainPage() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [selectedProduct,setSelectedProduct]=useState();
  const [currentUser, setCurrentUser] = useState();
  
  useEffect(() => {
    try {
      getAllProducts()
        .then((data) => {
          setData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("UsersProduct"));
    console.log(user);
    if (currentUser) {
      localStorage.setItem("UsersProduct", JSON.stringify(currentUser));
    } else {
      setCurrentUser(user);
    }
  }, [currentUser]);

  function confirmSignIn(user) {
    setCurrentUser(user);
    setOpenSignIn(false);
  }

  return (
    <div onClick={() => openSettings && setOpenSettings(false)}>
      <NavBar
        setOpenSignIn={setOpenSignIn}
        setOpenSignUp={setOpenSignUp}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setOpenSettings={setOpenSettings}
        openSettings={openSettings}
      />

      {openSignIn && (
        <SignIn confirmSignIn={confirmSignIn} setOpenSignIn={setOpenSignIn} />
      )}
      {openSignUp && (
        <SignUp setOpenSignUp={setOpenSignUp} setOpenSignIn={setOpenSignIn} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                data={data}
                setSelectedData={setSelectedData}
                selectedData={selectedData}
              />
              {selectedData ? (
                <SelectProducts selectedData={selectedData} />
              ) : (
                <Products data={data} setSelectedProduct={setSelectedProduct}/>
              )}
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
             {selectedProduct&& <ProductPage selectedProduct={selectedProduct}/>}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default MainPage;
