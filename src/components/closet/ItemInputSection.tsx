import type { ClosetSectionProps } from "../../types/closet";
import ColorPickerField from "../form/ColorPickerField";
import InputField from "../form/InputField";
import SeasonField from "../form/SeasonField";
import SizeField from "../form/SizeField";

function ItemInputSection({ control }: ClosetSectionProps) {
  return (
    <section className="flex flex-col bg-orange-100 shadow-xl p-7 md:p-10 rounded-2xl">
      <h1 className="mb-3 text-lg font-semibold tracking-tight text-center text-gray-900 text-balance md:text-xl">
        아이템 정보
      </h1>
      <InputField
        name="title"
        control={control}
        rules={{
          required: "제품명을 입력해 주세요.",
        }}
        label="제품명"
        type="text"
        numberOnly={false}
        sx={{
          width: "100%",
          marginTop: 4,
          marginBottom: 4,
        }}
      />
      <ColorPickerField
        name="color"
        control={control}
        label="색상"
        sx={{
          width: "100%",
          marginBottom: 2,
        }}
      />
      <div className="flex flex-col gap-3">
        <SizeField control={control} />
        <SeasonField control={control} />
      </div>
      <InputField
        name="detail"
        control={control}
        rules={{
          required: "상세 설명을 입력해 주세요.",
        }}
        label="상세 설명"
        type="text"
        numberOnly={false}
        sx={{
          width: "100%",
          marginTop: 4,
        }}
        multiline={true}
      />
    </section>
  );
}

export default ItemInputSection;
