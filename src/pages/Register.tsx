import logo from "../assets/header/logo.png";
import { useForm } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton } from "@mui/material";
import Footer from "../layout/Footer";
import InputField from "../components/form/InputField";
import PasswordField from "../components/form/PasswordField";
import BirthdayField from "../components/form/BirthdayField";
import dayjs from "dayjs";
import SelectField from "../components/form/SelectField";
import ColorPickerField from "../components/form/ColorPickerField";
import { Link, useNavigate } from "react-router-dom";
import { GENDERS, STYLES, type Gender, type Style } from "../types/common";

interface RegisterForm {
  email: string;
  password: string;
  phoneNumber: string;
  name: string;
  birthday: string;
  gender: Gender;
  style: Style;
  color: string;
}

function Register() {
  const navigate = useNavigate();

  const goPrevPage = () => {
    navigate(-1);
  };

  const { control, handleSubmit } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
      name: "",
      birthday: dayjs().format("YYYYMMDD"),
      gender: "MEN",
      style: "CASUAL",
      color: "",
    },
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-16 bg-gray-100 ">
        <div className="relative flex flex-col items-center justify-center p-12 bg-white shadow-md md:p-20 rounded-3xl gap-7">
          <div className="flex items-center w-full">
            <div className="flex-shrink-0">
              <IconButton onClick={goPrevPage}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className="flex items-center justify-center flex-1">
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
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-3 md:gap-5"
            noValidate
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
              rules={{
                required: "비밀번호를 입력해 주세요.",
              }}
              label="비밀번호"
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
            />
            <InputField
              name="phoneNumber"
              control={control}
              rules={{
                required: "휴대폰번호를 입력해 주세요.",
                minLength: {
                  value: 10,
                  message: "최소 10자리 이상이어야 합니다.",
                },
              }}
              label="휴대폰번호"
              type="tel"
              numberOnly={true}
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
            />
            <InputField
              name="name"
              control={control}
              rules={{
                required: "이름 또는 닉네임을 입력해 주세요.",
              }}
              label="이름 / 닉네임"
              type="text"
              numberOnly={false}
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
            />
            <BirthdayField
              name="birthday"
              control={control}
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
            />
            <SelectField
              name="gender"
              control={control}
              label="성별"
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
              options={[...GENDERS]}
            />
            <SelectField
              name="style"
              control={control}
              label="선호 스타일"
              sx={{
                width: {
                  xs: "15rem",
                  md: "30rem",
                },
              }}
              options={[...STYLES]}
            />
            <ColorPickerField
              name="color"
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
                marginTop: "1rem",
                borderRadius: 50,
              }}
            >
              가입
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
