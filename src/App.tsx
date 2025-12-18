import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindAccount from "./pages/FindAccount";

function App() {
  return (
    <Router>
      <div className="flex justify-center min-w-[360px]">
        <div className="w-full min-w-[360px] transform origin-top-left scale-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/find-account" element={<FindAccount />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
