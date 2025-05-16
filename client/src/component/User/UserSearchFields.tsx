import type { ChangeEvent, KeyboardEvent } from "react";
import { TextField, Stack } from "@mui/material";

interface SearchInputValue {
  id: string;
  name: string;
  address: string;
  tel: string;
}

interface UserSearchFieldsProps {
  inputValue: SearchInputValue;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function UserSearchFields({
  inputValue,
  handleOnChange,
  handleKeyDown,
}: UserSearchFieldsProps) {
  return (
    <Stack direction={"row"} flex={"1 1 0"}>
      <TextField
        name="id"
        label="아이디"
        variant="outlined"
        size="small"
        style={{ marginRight: "10px" }}
        value={inputValue.id}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextField
        name="name"
        label="이름"
        variant="outlined"
        size="small"
        style={{ marginRight: "10px" }}
        value={inputValue.name}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextField
        name="address"
        label="주소"
        variant="outlined"
        size="small"
        style={{ marginRight: "10px" }}
        value={inputValue.address}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <TextField
        name="tel"
        label="연락처"
        variant="outlined"
        size="small"
        style={{ marginRight: "10px" }}
        value={inputValue.tel}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </Stack>
  );
}
