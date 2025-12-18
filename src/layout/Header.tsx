import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/header/logo.png";
import notice from "../assets/header/notice.png";
import profile from "../assets/header/profile.png";
import login from "../assets/header/login.png";
import logout from "../assets/header/logout.png";

function Header() {
  const isLogin: boolean = false;

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-5 py-5 bg-white shadow-md sm:px-10">
      <Link to={"/"}>
        <div className="flex items-center gap-1 tracking-tight sm:gap-2 md:gap-3">
          <img
            className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem]"
            src={logo}
            alt="logo"
          />
          <span className="text-sm font-bold sm:text-base md:text-lg">
            옷장을 부탁해
          </span>
        </div>
      </Link>
      <nav>
        <ul className="flex items-center gap-2 list-none sm:gap-3 md:gap-5">
          <li className="flex-shrink-0">
            <Link to={"/notice"}>
              <Tooltip title="공지사항">
                <img
                  className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] md:w-[4rem] md:h-[4rem]"
                  src={notice}
                  alt="notice"
                />
              </Tooltip>
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link to={"/profile"}>
              <Tooltip title="내 프로필">
                <img
                  className="w-[2rem] h-[2rem] sm:w-[2.4rem] sm:h-[2.4rem] md:w-[3.2rem] md:h-[3.2rem]"
                  src={profile}
                  alt="profile"
                />
              </Tooltip>
            </Link>
          </li>
          <li className="flex-shrink-0">
            {isLogin ? (
              <div className="flex items-center">
                <p className="hidden text-base font-semibold text-amber-500 md:text-lg sm:block">
                  홍길동<span className="text-black">님</span>
                </p>
                <Link to={"/logout"}>
                  <Tooltip title="로그아웃">
                    <img
                      className="w-[2rem] h-[2rem] sm:w-[2.2rem] sm:h-[2.2rem] md:w-[3rem] md:h-[3rem] mx-1 md:mx-2"
                      src={logout}
                      alt="logout"
                    />
                  </Tooltip>
                </Link>
              </div>
            ) : (
              <Link to={"/login"}>
                <Tooltip title="로그인">
                  <img
                    className="w-[2rem] h-[2rem] sm:w-[2.2rem] sm:h-[2.2rem] md:w-[3rem] md:h-[3rem] mx-1 md:mx-2"
                    src={login}
                    alt="login"
                  />
                </Tooltip>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
