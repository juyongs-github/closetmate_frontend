import Swal from "sweetalert2";
import type { ClosetItemForm } from "../types/closet";
import ClosetItemFormBase from "../components/closet/ClosetItemFormBase";

function ClosetItemAdd() {
  const defaultValues = {
    image: null,
    category: null,
    title: "",
    color: "",
    size: null,
    season: null,
    detail: "",
  };

  const onSubmit = (data: ClosetItemForm) => {
    console.log(data);
    Swal.fire({
      icon: "question",
      html: "<b>등록 하시겠어요?</b>",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          html: "<b>등록 되었습니다.</b>",
        });
      }
    });
  };

  return (
    <ClosetItemFormBase
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      title="옷장 아이템 등록"
      submitText="등록"
    />
  );
}

export default ClosetItemAdd;
