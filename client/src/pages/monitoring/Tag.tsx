import { useState, useEffect } from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

import CustomToolbar from '@/assets/CustomToolbar';

export default function TagMonitoring() {
  const columns: GridColDef[] = [
    {
      field: 'mac',
      headerName: '맥주소',
    },
    {
      field: 'deviceName',
      headerName: '장비명',
    },
    { field: 'age', headerName: '나이' },
  ];
  const [rowData, setRowData] = useState<any[]>([
    { id: 1, mac: 122233, deviceName: '태그1', age: 11 },
    { id: 2, mac: 222233, deviceName: '태그2', age: 12 },
  ]);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: true,
    mac: true,
    deviceName: true,
    age: true,
  });

  const handleColumnVisibilityChange = (newModel: any) => {
    console.log('newModel', newModel);
    setColumnVisibilityModel(newModel);
  };

  return (
    <>
      <h2>태그 모니터링</h2>
      <div
        style={{
          height: '75vh',
        }}
      >
        <DataGrid
          rows={rowData}
          columns={columns}
          showToolbar
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={handleColumnVisibilityChange}
          slots={{ toolbar: CustomToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: false,
            },
          }}
        />
      </div>
    </>
  );
}
