import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/header/logo.png";
import notice from "../assets/header/notice.png";
import profile from "../assets/header/profile.png";

function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-10 py-6 bg-white shadow-md">
      <Link to={"/"}>
        <div className="flex items-center">
          <img className="w-[2.5rem] h-[2.5rem]" src={logo} alt="logo" />
          <span className="ml-3 font-bold">옷장을 부탁해</span>
        </div>
      </Link>
      <nav>
        <ul className="flex items-center list-none">
          <li className="flex-shrink-0 ml-3">
            <Link to={"/notice"}>
              <Tooltip title="공지사항">
                <img className="w-[3rem] h-[3rem]" src={notice} alt="notice" />
              </Tooltip>
            </Link>
          </li>
          <li className="flex-shrink-0 ml-3">
            <Link to={"/profile"}>
              <Tooltip title="내 프로필">
                <img
                  className="w-[2.5rem] h-[2.5rem]"
                  src={profile}
                  alt="profile"
                />
              </Tooltip>
            </Link>
          </li>
          <li className="ml-5">
            <Button variant="contained" component={Link} to="/login">
              로그인
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
