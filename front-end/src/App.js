import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import FourOhFour from "./Pages/FourOhFour";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

function App() {
  return (
    <div style={{ backgroundColor: "#DBDBDB" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Show />} />
          <Route path="/:id/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
