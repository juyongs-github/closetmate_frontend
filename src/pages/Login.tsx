import logo from "../assets/header/logo.png";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "../components/form/InputField";
import PasswordField from "../components/form/PasswordField";
import google_logo from "../assets/login/google.svg";
import naver_logo from "../assets/login/naver.svg";
import kakao_logo from "../assets/login/kakao.svg";
import OAuthButton from "../components/ui/OAuthButton";
import { Button } from "@mui/material";

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-24 bg-gray-100">
        <div className="flex flex-col items-center justify-center p-12 mt-16 bg-white shadow-md gap-7 md:p-20 rounded-3xl">
          <Link to={"/"}>
            <div className="flex items-center">
              <img
                className="w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem]"
                src={logo}
                alt="logo"
              />
              <span className="ml-3 text-lg font-bold md:text-xl">
                옷장을 부탁해
              </span>
            </div>
          </Link>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center gap-3 md:gap-5"
          >
            <InputField
              name="email"
              control={control}
              rules={{
                required: "이메일 주소를 입력해 주세요.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "이메일 형식이 올바르지 않습니다",
                },
              }}
              label="이메일 주소"
              type="email"
              numberOnly={false}
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
            />
            <PasswordField
              name="password"
              control={control}
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
                height: {
                  md: "3.5rem",
                },
                borderRadius: 50,
              }}
            >
              로그인
            </Button>
          </form>
          <div className="relative flex items-center w-[15rem] md:w-[30rem]">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-400">또는</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-around w-[15rem] md:w-[30rem]">
            <OAuthButton
              title="구글 로그인"
              src={google_logo}
              style={{
                width: "70%",
                height: "70%",
              }}
            />
            <OAuthButton
              title="네이버 로그인"
              src={naver_logo}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <OAuthButton
              title="카카오 로그인"
              src={kakao_logo}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between w-[15rem] md:w-[30rem] gap-5">
            <Button
              variant="contained"
              size="large"
              color="info"
              component={Link}
              to="/register"
              sx={{
                width: {
                  xs: "100%",
                  md: "10rem",
                },
                height: "3rem",
              }}
            >
              회원가입
            </Button>
            <Button
              variant="contained"
              size="large"
              color="info"
              component={Link}
              to="/find-account"
              sx={{
                width: {
                  xs: "100%",
                  md: "15rem",
                },
                height: "3rem",
              }}
            >
              아이디 / 비밀번호 찾기
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
