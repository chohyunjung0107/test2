import { Stack, Button } from "@mui/material";

interface Props {
  onSearch: () => void;
  onExport: () => void;
}

export default function UserActionButtons({ onSearch, onExport }: Props) {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={onSearch}>
        조회
      </Button>
      <Button variant="outlined" onClick={onExport}>
        내보내기(엑셀)
      </Button>
    </Stack>
  );
}
