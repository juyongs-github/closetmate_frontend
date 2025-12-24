import { FiActivity } from "react-icons/fi";
import { useResponsive } from "../../hooks/useResponsive";

function MyActivitySection() {
  const { mobile, tablet } = useResponsive();

  return (
    <section className="flex flex-col gap-12 p-10 bg-white shadow-md md:gap-16 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <FiActivity
          style={{
            width: mobile || tablet ? "1.5rem" : "2rem",
            height: mobile || tablet ? "1.5rem" : "2rem",
          }}
        />
        <h2 className="text-lg font-bold tracking-tight md:text-xl">
          나의 활동
        </h2>
      </div>
      <div className="grid items-center min-w-0 grid-cols-2 text-sm gap-y-7 md:gap-y-10 text-nowrap md:text-base">
        <p className="font-bold">옷장 아이템</p>
        <p className="min-w-0 tracking-wide text-right truncate">
          1,000<span className="ml-1 font-semibold">개</span>
        </p>
        <p className="font-bold">AI 추천</p>
        <p className="min-w-0 tracking-wide text-right truncate">
          3,000<span className="ml-1 font-semibold">회</span>
        </p>
        <p className="font-bold">저장 코디</p>
        <p className="min-w-0 tracking-wide text-right truncate ">
          2,000<span className="ml-1 font-semibold">개</span>
        </p>
      </div>
    </section>
  );
}

export default MyActivitySection;
