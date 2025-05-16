import { Stack, Button } from "@mui/material";

interface TProps {
  onSearch: () => void;
  onExport: () => void;
  onPrint: () => void;
}

export default function UserActionButtons({
  onSearch,
  onExport,
  onPrint,
}: TProps) {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={onSearch}>
        조회
      </Button>
      <Button variant="contained" onClick={onExport}>
        내보내기(엑셀)
      </Button>
      <Button variant="contained" onClick={onPrint}>
        인쇄
      </Button>
    </Stack>
  );
}
