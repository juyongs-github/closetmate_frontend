import { Button, useMediaQuery } from "@mui/material";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  children: ReactNode;
  link?: string;
}

function Section({ title, children, link }: Props) {
  const mobile = useMediaQuery("(max-width:640px)");
  const tablet = useMediaQuery("(max-width:768px)");

  return (
    <section className="flex flex-col justify-center m-10 bg-orange-100 shadow-xl md:mx-20 p-7 sm:p-10 md:p-14 rounded-2xl gap-7 sm:gap-10 md:gap-14">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-tight text-gray-900 text-balance sm:text-xl md:text-2xl">
          {title}
        </h1>
        {link && (
          <Button
            variant="contained"
            size={mobile || tablet ? "small" : "large"}
            component={Link}
            to="/login"
            endIcon="→"
          >
            전체 보기
          </Button>
        )}
      </div>
      {children}
    </section>
  );
}

export default Section;
