import * as React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadcrumbsComp({ menuName }: { menuName: string[] }) {
  return (
    <div role="presentation" onClick={handleClick} style={{ display: "flex" }}>
      {menuName.map((item, idx) => {
        return (
          <Breadcrumbs aria-label="breadcrumb" key={idx}>
            <Link underline="hover" color="inherit" href="/">
              {item} {"  "} {idx === 2 ? null : <span>/</span>}
            </Link>
          </Breadcrumbs>
        );
      })}
    </div>
  );
}
