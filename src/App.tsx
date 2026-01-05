import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindAccount from "./pages/FindAccount";
import Profile from "./pages/Profile";
import Withdraw from "./pages/Withdraw";
import MyCloset from "./pages/MyCloset";
import ClosetItemAdd from "./pages/ClosetItemAdd";
import ClosetItemEdit from "./pages/ClosetItemEdit";

function App() {
  return (
    <Router>
      <div className="flex justify-center min-w-[360px]">
        <div className="w-full max-w-[960px] min-w-[360px] transform origin-top-left scale-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/find-account" element={<FindAccount />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/mycloset" element={<MyCloset />} />
            <Route path="/closetitem-add" element={<ClosetItemAdd />} />
            <Route path="/closetitem-edit" element={<ClosetItemEdit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
