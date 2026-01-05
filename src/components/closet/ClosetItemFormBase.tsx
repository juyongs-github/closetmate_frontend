import { Button, IconButton, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch, type FieldErrors } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";
import type {
  ClosetItemForm,
  ClosetItemFormBaseProps,
} from "../../types/closet";
import Header from "../../layout/Header";
import UploadImageSection from "./UploadImageSection";
import CategorySection from "./CategorySection";
import ItemInputSection from "./ItemInputSection";
import Footer from "../../layout/Footer";

function ClosetItemFormBase({
  defaultValues,
  onSubmit,
  title,
  submitText,
}: ClosetItemFormBaseProps) {
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };

  const { control, handleSubmit, setValue } = useForm<ClosetItemForm>({
    defaultValues,
  });

  const onError = (errors: FieldErrors<ClosetItemForm>) => {
    if (errors.image) {
      Swal.fire({
        icon: "warning",
        title: "이미지 선택",
        html: <b>${errors.image.message}</b>,
        confirmButtonText: "확인",
      });
    } else if (errors.category) {
      Swal.fire({
        icon: "warning",
        title: "카테고리",
        html: <b>${errors.category.message}</b>,
        confirmButtonText: "확인",
      });
    } else if (errors.size) {
      Swal.fire({
        icon: "warning",
        title: "아이템 정보",
        html: <b>${errors.size.message}</b>,
        confirmButtonText: "확인",
      });
    } else if (errors.season) {
      Swal.fire({
        icon: "warning",
        title: "아이템 정보",
        html: <b>${errors.season.message}</b>,
        confirmButtonText: "확인",
      });
    }
  };

  const category = useWatch({ control, name: "category" });
  const sizeRef = useRef<boolean | null>(null);

  useEffect(() => {
    const isShoeCategory = category === "신발";
    if (sizeRef.current === null) {
      sizeRef.current = isShoeCategory;
      return;
    }

    if (sizeRef.current !== isShoeCategory) {
      setValue("size", null);
    }

    sizeRef.current = isShoeCategory;
  }, [category, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Header />
      <div className="flex flex-col items-center justify-center p-5 bg-gray-100 md:p-10">
        <div className="flex flex-col w-full mt-24 bg-white shadow-md gap-7 p-7 md:p-12 rounded-3xl">
          <div className="flex w-full">
            <Tooltip title="뒤로가기">
              <IconButton onClick={goPrevPage}>
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-lg font-bold tracking-tighter md:tracking-normal md:text-xl">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-7 md:flex-row">
            <UploadImageSection control={control} />
            <CategorySection control={control} />
          </div>
          <div className="flex flex-col gap-7">
            <ItemInputSection control={control} />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                width: "100%",
                height: {
                  md: "3.5rem",
                },
                borderRadius: 50,
              }}
            >
              {submitText}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </form>
  );
}

export default ClosetItemFormBase;
