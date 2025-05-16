import { useMemo } from "react";
import type { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = useMemo(
  () => [
    { field: "id", headerName: "ID", width: 90, type: "string" },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "faceImage",
      headerName: "FaceImage",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "tel",
      headerName: "Tel",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "birthday",
      headerName: "Birthday",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "sex",
      headerName: "Sex",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ],
  []
);
