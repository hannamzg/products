import appStyle from "./styles/App.module.scss"
import MainPage from "./pages/mainPage"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={appStyle.App}>
      <Routes>
            <Route path="/" element={<MainPage/>} />
      </Routes>
    </div>
    
  );
}

export default App;
