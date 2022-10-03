import { Outlet } from "react-router";
import Navbar from "./Navbar";
import '../style.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
