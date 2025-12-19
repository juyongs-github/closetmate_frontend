import { FiActivity } from "react-icons/fi";
import { useResponsive } from "../../hooks/useResponsive";

function MyActivitySection() {
  const { mobile, tablet } = useResponsive();

  return (
    <section className="flex flex-col gap-12 p-10 bg-white md:gap-16 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <FiActivity
          style={{
            width: mobile || tablet ? "2rem" : "2.5rem",
            height: mobile || tablet ? "2rem" : "2.5rem",
          }}
        />
        <h2 className="text-xl font-bold tracking-tight md:text-2xl">
          나의 활동
        </h2>
      </div>
      <div className="grid items-center min-w-0 grid-cols-2 gap-x-20 gap-y-7 md:gap-y-10 text-nowrap">
        <p className="text-lg font-bold md:text-xl">옷장 아이템</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          10<span className="ml-1">개</span>
        </p>
        <p className="text-lg font-bold md:text-xl">AI 추천</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          30<span className="ml-1">회</span>
        </p>
        <p className="text-lg font-bold md:text-xl">저장 코디</p>
        <p className="min-w-0 text-lg tracking-wide text-right truncate md:text-xl">
          20<span className="ml-1">개</span>
        </p>
      </div>
    </section>
  );
}

export default MyActivitySection;
