import * as XLSX from "xlsx";
// import { getFormattedDateTime } from "@/lib/utils";

export function ExportXlsx(
  data: any[],
  columnName: string[],
  sheetName: string,
  fileName: string
) {
  if (data.length === 0) {
    return;
  } else {
    //제이슨 배열의 내용을 엑셀 시트로 변환
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();

    //오늘 일시 추출(파일명에 사용)
    const date = new Date();

    //엑셀 컬럼명 한글화
    columnName.forEach((x: any, idx: number) => {
      const cellAdd = XLSX.utils.encode_cell({ c: idx, r: 0 });
      ws[cellAdd].v = x;
    });

    //시트명
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    //파일명
    XLSX.writeFile(wb, `${fileName}${date}.xlsx`);
  }
}
