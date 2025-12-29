import { Button, IconButton } from "@mui/material";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SelectField from "../components/form/SelectField";
import { useForm, type FieldErrors } from "react-hook-form";
import { WITHDRAW_REASONS } from "../types/common";
import InputField from "../components/form/InputField";
import CheckboxField from "../components/form/CheckboxField";
import WarningIcon from "@mui/icons-material/Warning";
import Swal from "sweetalert2";

interface WithdrawForm {
  agree: boolean;
  withdrawReason: string;
  etcReason?: string;
}

function Withdraw() {
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };

  const { control, handleSubmit, watch } = useForm<WithdrawForm>({
    defaultValues: {
      withdrawReason: "DEFAULT",
    },
  });

  const onSubmit = (data: WithdrawForm) => {
    console.log(data);
    Swal.fire({
      icon: "question",
      html: "<b>정말 회원탈퇴 하시겠어요?</b>",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          html: "<b>회원탈퇴 되었습니다.</b>",
        });
      }
    });
  };

  const onError = (errors: FieldErrors<WithdrawForm>) => {
    if (errors.agree) {
      Swal.fire({
        icon: "warning",
        html: `<b>${errors.agree.message}</b>`,
        confirmButtonText: "확인",
      });
    }
  };

  const selectedReason = watch("withdrawReason"); // Select 선택 값

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Header />
      <div className="flex flex-col items-center justify-center p-10 bg-gray-100 md:p-24">
        <div className="flex flex-col gap-12 p-10 mt-20 bg-white shadow-md md:mt-24 md:gap-16 md:p-20 rounded-3xl">
          <div className="flex w-full">
            <IconButton onClick={goPrevPage}>
              <ArrowBackIcon />
            </IconButton>
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-lg font-bold tracking-tighter md:tracking-normal md:text-xl">
                탈퇴하기
              </h1>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
            홍길동님, <br />
            정말 탈퇴하시겠어요?
          </h2>
          <div className="flex flex-col gap-2">
            <div className="p-6 border border-red-200 rounded-lg bg-red-50">
              <p className="flex flex-col items-center gap-2 text-sm font-semibold tracking-tight text-center text-red-800 mb-7 md:mb-7 md:text-base">
                <WarningIcon />
                탈퇴 시 아래의 정보가 삭제되며,
                <br />
                다시 복구하기 어려워요.
              </p>
              <ul className="space-y-3 text-xs text-red-700 list-disc list-inside md:text-sm">
                <li>내 옷장에 등록한 아이템들이 모두 사라져요.</li>
                <li>저장한 나만의 AI 추천 코디들이 모두 사라져요.</li>
                <li>
                  동일한 이메일로 재가입은 가능하지만, 기존 데이터는 복원되지
                  않아요.
                </li>
              </ul>
            </div>
            <CheckboxField
              name="agree"
              control={control}
              rules={{
                required: "동의란에 체크해 주세요.",
              }}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: {
                    xs: "0.875rem",
                    md: "1rem",
                  },
                },
              }}
              label="유의사항을 모두 확인하였으며, 이에 동의합니다."
            />
          </div>
          <div className="flex flex-col w-full gap-3 md:gap-5">
            <SelectField
              name="withdrawReason"
              control={control}
              label="탈퇴 사유"
              sx={{
                width: "100%",
              }}
              options={[...WITHDRAW_REASONS]}
            />
            {selectedReason === "ETC" && (
              <InputField
                name="etcReason"
                control={control}
                rules={{
                  required: "기타 사유를 입력해 주세요.",
                }}
                label="기타 사유"
                type="text"
                numberOnly={false}
                sx={{
                  width: "100%",
                }}
              />
            )}
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="error"
              sx={{
                width: "100%",
                height: {
                  md: "3.5rem",
                },
                marginTop: "1rem",
                borderRadius: 50,
              }}
            >
              회원탈퇴
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </form>
  );
}

export default Withdraw;
