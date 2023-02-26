import appStyle from "./styles/App.module.scss"
import MainPage from "./pages/mainPage"

function App() {
  return (
    <div className={appStyle.App}>
      <MainPage/>
    </div>
  );
}

export default App;
