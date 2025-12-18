import {
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../layout/Footer";
import InputField from "../components/form/InputField";
import { useNavigate } from "react-router-dom";
import { useForm, type Control } from "react-hook-form";
import React from "react";
import TabContent from "../components/ui/TabContent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

interface FindAccountForm {
  name: string;
  email: string;
  phoneNumber?: string;
}

interface AuthDivProps {
  alignment: string | null;
  control: Control<FindAccountForm>;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AuthDiv({ alignment, control }: AuthDivProps) {
  return (
    <>
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
        label="이메일"
        type="email"
        numberOnly={false}
        sx={{
          width: {
            xs: "15rem",
            md: "25rem",
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
            md: "25rem",
          },
        }}
      />
      {alignment === "mobile" && (
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
              md: "25rem",
            },
          }}
        />
      )}
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
        sx={{
          width: {
            xs: "15rem",
            md: "25rem",
          },
          height: {
            md: "3.5rem",
          },
          marginTop: "1rem",
          borderRadius: 50,
        }}
      >
        인증번호 받기
      </Button>
    </>
  );
}

function FindAccount() {
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [alignment, setAlignment] = React.useState<string | null>("email");
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const { control, handleSubmit } = useForm<FindAccountForm>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: FindAccountForm) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-16 bg-gray-100 ">
        <div className="relative flex flex-col items-center justify-center p-10 bg-white shadow-md md:p-20 rounded-3xl gap-7">
          <div className="flex w-[15rem] md:w-[30rem]">
            <IconButton onClick={goPrevPage}>
              <ArrowBackIcon />
            </IconButton>
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-base font-bold tracking-tighter md:tracking-normal md:text-2xl">
                아이디 / 비밀번호 찾기
              </h1>
            </div>
          </div>
          <div>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                sx={{
                  width: {
                    xs: "15rem",
                    md: "30rem",
                  },
                }}
              >
                <Tab
                  label="아이디 찾기"
                  {...a11yProps(0)}
                  sx={{
                    fontSize: {
                      md: "1.125rem",
                    },
                  }}
                />
                <Tab
                  label="비밀번호 찾기"
                  {...a11yProps(1)}
                  sx={{
                    fontSize: {
                      md: "1.125rem",
                    },
                  }}
                />
              </Tabs>
            </Box>
            <TabContent value={value} index={0}>
              <div className="hidden md:block">
                <h1 className="text-base font-semibold text-gray-900 md:text-xl text-balance">
                  아이디를 찾으시겠어요?
                </h1>
                <p className="mt-1 text-xs font-semibold text-gray-500 md:text-sm">
                  가입 시 등록한 정보로 아이디를 찾을 수 있습니다.
                </p>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold tracking-tight md:text-lg">
                  인증 방법 선택
                </h5>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  sx={{
                    gap: 2,
                    "& .MuiToggleButton-root": {
                      borderRadius: "12px",
                      border: "1px solid",
                    },
                  }}
                >
                  <ToggleButton
                    value="email"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: {
                        xs: "7rem",
                        md: "10rem",
                      },
                      height: {
                        xs: "6rem",
                        md: "7rem",
                      },
                    }}
                  >
                    <EmailIcon />
                    <span className="text-xs md:text-base">이메일 인증</span>
                  </ToggleButton>
                  <ToggleButton
                    value="mobile"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: {
                        xs: "7rem",
                        md: "10rem",
                      },
                      height: {
                        xs: "6rem",
                        md: "7rem",
                      },
                    }}
                  >
                    <PhoneAndroidIcon />
                    <span className="text-xs md:text-base">휴대폰 인증</span>
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center gap-3 md:gap-5"
                noValidate
              >
                <AuthDiv alignment={alignment} control={control} />
              </form>
            </TabContent>
            <TabContent value={value} index={1}>
              <div className="hidden md:block">
                <h1 className="text-base font-semibold text-gray-900 md:text-xl text-balance">
                  비밀번호를 재설정 하시겠어요?
                </h1>
                <p className="mt-1 text-xs font-semibold text-gray-500 md:text-sm">
                  본인 인증을 통해 비밀번호를 재설정할 수 있습니다.
                </p>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold tracking-tight md:text-lg">
                  인증 방법 선택
                </h5>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  sx={{
                    gap: 2,
                    "& .MuiToggleButton-root": {
                      borderRadius: "12px",
                      border: "1px solid",
                    },
                  }}
                >
                  <ToggleButton
                    value="email"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: {
                        xs: "7rem",
                        md: "10rem",
                      },
                      height: {
                        xs: "6rem",
                        md: "7rem",
                      },
                    }}
                  >
                    <EmailIcon />
                    <span className="text-xs md:text-base">이메일 인증</span>
                  </ToggleButton>
                  <ToggleButton
                    value="mobile"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: {
                        xs: "7rem",
                        md: "10rem",
                      },
                      height: {
                        xs: "6rem",
                        md: "7rem",
                      },
                    }}
                  >
                    <PhoneAndroidIcon />
                    <span className="text-xs md:text-base">휴대폰 인증</span>
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center gap-3 md:gap-5"
                noValidate
              >
                <AuthDiv alignment={alignment} control={control} />
              </form>
            </TabContent>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FindAccount;
