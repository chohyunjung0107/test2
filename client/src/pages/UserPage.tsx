import { useState } from "react";
import type { ChangeEvent } from "react";

import { Button, TextField, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

import { useGetUserList } from "../hook/useGetUser";
import { deleteUser } from "../api/Service";
import { ExportXlsx } from "../assets/excelExport";

export default function UserPage() {
  const [rowSelectionModel, setRowSelectionModel] = useState<
    GridRowSelectionModel[]
  >([]);
  const [inputValue, setInputValue] = useState({
    id: "",
    name: "",
    address: "",
    tel: "",
  });
  const { userList, setUserList, refresh } = useGetUserList(inputValue);

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      refresh(inputValue);
    }
  };

  const columns: GridColDef[] = [
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
  ];

  // 이 함수는 팝업이 닫힐 때 호출됨
  (window as any).refreshList = () => {
    alert("등록 성공했습니다");
    refresh({
      id: "",
      name: "",
      address: "",
      tel: "",
    }); // 리스트 재조회 함수
  };

  const handlePopupUser = (create: boolean) => {
    if (!create && rowSelectionModel.length === 0)
      return alert("수정할 대상을 선택해주세요");
    if (!create && rowSelectionModel.length > 1) {
      return alert("수정할 대상을 단건만 선택해주세요");
    }

    const width = 800;
    const height = 600;

    const params = new URLSearchParams(rowSelectionModel[0] as any);

    const url = create ? `/user/add` : `/user/update?${params.toString()}`;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(
      url,
      "_blank",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  const handleDeleteUser = async () => {
    if (rowSelectionModel.length === 0)
      return alert("삭제 할 대상을 선택해주세요");
    if (rowSelectionModel.length > 1) {
      return alert("삭제 할 대상을 단건만 선택해주세요");
    }
    const selectedIds = rowSelectionModel.map((row: any) => row.id);

    await deleteUser(selectedIds[0])
      .then((res) => {
        if (res.status === 204) {
          alert("삭제 성공하였습니다");
          refresh(inputValue);
        }
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  return (
    <div>
      <div
        style={{
          margin: "2% 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* ========검색조건 ======== */}
        <div>
          <TextField
            name="id"
            id="outlined-basic"
            label="아이디"
            variant="outlined"
            size="small"
            style={{ marginRight: "10px" }}
            value={inputValue.id}
            onChange={handleOnchange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            name="name"
            id="outlined-basic"
            label="이름"
            variant="outlined"
            size="small"
            style={{ marginRight: "10px" }}
            value={inputValue.name}
            onChange={handleOnchange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            name="address"
            id="outlined-basic"
            label="주소"
            variant="outlined"
            size="small"
            style={{ marginRight: "10px" }}
            value={inputValue.address}
            onChange={handleOnchange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            name="tel"
            id="outlined-basic"
            label="연락처"
            variant="outlined"
            size="small"
            style={{ marginRight: "10px" }}
            value={inputValue.tel}
            onChange={handleOnchange}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* ========Btn======== */}
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            onClick={() => {
              refresh(inputValue);
            }}
          >
            조회
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              ExportXlsx(
                userList,
                [
                  "id",
                  "name",
                  "FaceImage",
                  "Address",
                  "Tel",
                  "Mobile",
                  "Email",
                  "Birthday",
                ],
                "유저리스트",
                "유저리스트_"
              );
            }}
          >
            내보내기(엑셀)
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              handlePopupUser(true);
            }}
          >
            등록
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              handlePopupUser(false);
            }}
          >
            단건 수정
          </Button>
          <Button variant="outlined" onClick={handleDeleteUser}>
            삭제
          </Button>
        </Stack>
      </div>

      <Stack direction={"row"} spacing={1} height={"600px"}>
        {/* ========Grid======== */}
        <DataGrid
          editMode="row"
          checkboxSelection
          columns={columns}
          rows={userList}
          hideFooter
          onRowSelectionModelChange={(newSelectionModel) => {
            const selectedRows = userList.filter((row) =>
              newSelectionModel.ids.has(row.id as string)
            );

            setRowSelectionModel(selectedRows as GridRowSelectionModel[]);
          }}
          processRowUpdate={(newRow) => {
            const updatedRows = userList.map((row) =>
              row.id === newRow.id ? newRow : row
            );
            console.log("updatedRows", updatedRows);
            setUserList(updatedRows);
            return newRow;
          }}
        />
      </Stack>
    </div>
  );
}
