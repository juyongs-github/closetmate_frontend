import Swal from "sweetalert2";
import type { ClosetItemForm } from "../types/closet";
import ClosetItemFormBase from "../components/closet/ClosetItemFormBase";

function ClosetItemEdit() {
  const dummyDefaultValues: ClosetItemForm = {
    image: null,
    category: "상의",
    title: "무지 후드티",
    color: "#abcdef",
    size: "XL",
    season: "가을",
    detail: "수정 테스트",
  };

  const onSubmit = (data: ClosetItemForm) => {
    console.log(data);
    Swal.fire({
      icon: "question",
      html: "<b>수정 하시겠어요?</b>",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          html: "<b>수정 되었습니다.</b>",
        });
      }
    });
  };

  return (
    <ClosetItemFormBase
      defaultValues={dummyDefaultValues}
      onSubmit={onSubmit}
      title="옷장 아이템 수정"
      submitText="수정"
    />
  );
}

export default ClosetItemEdit;
