import { IoShirtOutline } from "react-icons/io5";
import { useResponsive } from "../../hooks/useResponsive";
import { Box, Tooltip } from "@mui/material";
import type { ProfileSectionProps } from "../../types/profile";
import PreferStyleField from "../form/PreferStyleField";
import { STYLES, type Style } from "../../types/common";

interface PreferStyleSectionProps extends ProfileSectionProps {
  styles: Style[];
}

function PreferStyleSection({
  isEdit,
  control,
  styles,
}: PreferStyleSectionProps) {
  const { mobile, tablet } = useResponsive();

  return (
    <section className="flex flex-col gap-10 p-10 bg-white shadow-md md:gap-12 rounded-2xl">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <IoShirtOutline
          style={{
            width: mobile || tablet ? "1.5rem" : "2rem",
            height: mobile || tablet ? "1.5rem" : "2rem",
          }}
        />
        <h2 className="text-lg font-bold tracking-tight md:text-xl text-nowrap">
          선호 스타일
        </h2>
      </div>
      {isEdit ? (
        <PreferStyleField control={control} />
      ) : (
        <div className="grid place-items-center grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-5">
          {styles.map((style) => {
            const value = STYLES.find((item) => item.value === style)?.value;

            return (
              <Tooltip key={style} title={value}>
                <Box
                  sx={{
                    display: "flex",
                    width: "10rem",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    borderRadius: "12px",
                    backgroundColor: "#FFD36E",
                    color: "white",
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <div className="w-full line-clamp-1">{value}</div>
                </Box>
              </Tooltip>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default PreferStyleSection;
