import { Button } from "@mui/material";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  children: ReactNode;
  link?: string;
}

function Section({ title, children, link }: Props) {
  return (
    <section className="flex flex-col justify-center m-20 bg-orange-100 shadow-xl p-14 rounded-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-balance sm:text-2xl">
          {title}
        </h1>
        {link && (
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/login"
            endIcon="→"
          >
            전체 보기
          </Button>
        )}
      </div>
      <div className="flex flex-wrap mt-7">{children}</div>
    </section>
  );
}

export default Section;
