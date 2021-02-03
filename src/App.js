import "./App.css";
import "./components/Profile/FullName.js";
import "./components/Profile/Address.js";
import ProfilPhoto from "./components/Profile/ProfilPhoto.js";
import FullName from "./components/Profile/FullName.js";
import Address from "./components/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="Card">
        <ProfilPhoto />

        <FullName />

        <Address />
      </div>
    </div>
  );
}

export default App;
