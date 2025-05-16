import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";

import type { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

// 내부 import
import { useGetUserList } from "../hook/useGetUser";
import { deleteUser } from "../api/Service";
import { ExportXlsx } from "../assets/excelExport";

import UserSearchFields from "../component/User/UserSearchFields";
import UserActionButtons from "../component/User/UserActionButtons";
import UserDataGrid from "../component/User/UserDataGrid";

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

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", headerName: "ID", flex: 0.5, type: "string" },
      {
        field: "name",
        headerName: "Name",
        flex: 0.5,
        editable: true,
      },
      {
        field: "faceImage",
        headerName: "FaceImage",
        type: "string",
        flex: 1,
        editable: true,
      },
      {
        field: "address",
        headerName: "Address",
        type: "string",
        flex: 1,
        editable: true,
      },
      {
        field: "tel",
        headerName: "Tel",
        type: "string",
        flex: 1,
        editable: true,
      },
      {
        field: "mobile",
        headerName: "Mobile",
        type: "string",
        flex: 1,
        editable: true,
      },
      {
        field: "email",
        headerName: "Email",
        type: "string",
        flex: 1,
        editable: true,
      },
      {
        field: "birthday",
        headerName: "Birthday",
        type: "string",
        flex: 0.5,
        editable: true,
      },
      {
        field: "sex",
        headerName: "Sex",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        flex: 0.5,
      },
    ],
    []
  );

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
        <UserSearchFields
          inputValue={inputValue}
          handleOnChange={handleOnchange}
          handleKeyDown={handleKeyDown}
        />
        <UserActionButtons
          onSearch={() => refresh(inputValue)}
          onExport={() =>
            ExportXlsx(
              userList,
              columns.map((col) => col.field),
              "유저리스트",
              "유저리스트_"
            )
          }
        />
      </div>

      <UserDataGrid
        rows={userList}
        columns={columns}
        rowSelectionModel={rowSelectionModel}
        setRowSelectionModel={setRowSelectionModel}
        onProcessRowUpdate={(newRow) => {
          const updatedRows = userList.map((row) =>
            row.id === newRow.id ? newRow : row
          );
          setUserList(updatedRows);
          return newRow;
        }}
        onAdd={() => handlePopupUser(true)}
        onEdit={() => handlePopupUser(false)}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}
