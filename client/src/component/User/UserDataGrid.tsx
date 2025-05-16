import { Stack, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";

interface Props {
  rows: any[];
  columns: GridColDef[];
  rowSelectionModel: GridRowSelectionModel[];
  setRowSelectionModel: (model: GridRowSelectionModel[]) => void;
  onProcessRowUpdate: (newRow: any) => any;
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
  gridRef: React.RefObject<any>;
}

export default function UserDataGrid({
  rows,
  columns,
  rowSelectionModel,
  setRowSelectionModel,
  onProcessRowUpdate,
  onAdd,
  onEdit,
  onDelete,
  gridRef,
}: Props) {
  console.log("rowSelectionModel", rowSelectionModel);
  return (
    <>
      <Stack direction="row" spacing={1} height="600px" flex="1 1 0">
        <DataGrid
          ref={gridRef}
          editMode="row"
          checkboxSelection
          columns={columns}
          rows={rows}
          hideFooter
          onRowSelectionModelChange={(model) => {
            const selectedRows = rows.filter((row) =>
              (model as GridRowSelectionModel).ids.has(row.id as string)
            );
            setRowSelectionModel(selectedRows);
          }}
          processRowUpdate={(newRow) => onProcessRowUpdate(newRow)}
        />
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="flex-end" mt={2}>
        <Button variant="outlined" onClick={onAdd}>
          등록
        </Button>
        <Button size="small" variant="outlined" onClick={onEdit}>
          단건 수정
        </Button>
        <Button variant="outlined" onClick={onDelete}>
          삭제
        </Button>
      </Stack>
    </>
  );
}
