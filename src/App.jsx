import appStyle from "./styles/App.module.scss";
import MainPage from "./pages/mainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={appStyle.App}>
      <ToastContainer />
      <MainPage />
    </div>
  );
}

export default App;
