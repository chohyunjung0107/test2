import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, TextField, Stack } from "@mui/material";

//내부 import
import { createUser, updateUser } from "../../api/Service";
import type { TUser } from "../../type/TUser";

const user = {
  id: "",
  password: "",
  name: "",
  faceImage: "",
  age: 0,
  sex: "",
  address: "",
  tel: "",
  mobile: "",
  email: "",
  birthday: "",
};

export default function UserPopup() {
  const [searchParams] = useSearchParams();
  const paramsObj = Object.fromEntries(searchParams.entries()) as TUser;
  console.log("paramsObj", paramsObj);
  const [NewUser, setNewUser] = useState(
    paramsObj.id ? (paramsObj as TUser) : (user as TUser)
  );
  const userFields: (keyof TUser)[] = [
    "id",
    "password",
    "name",
    "faceImage",
    "age",
    "sex",
    "address",
    "tel",
    "mobile",
    "email",
    "birthday",
  ];

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev: TUser) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateUser = async () => {
    //TODO : 유효성 검사 추가

    paramsObj.id
      ? await updateUser(paramsObj?.id, NewUser).then((res) => {
          if (res.status === 200) {
            // 부모 창에 메시지 전송
            if (window.opener && !window.opener.closed) {
              window.opener.refreshList?.();
            }
            //팝업창 닫기
            window.close();
          }
        })
      : await createUser(NewUser as TUser)
          .then((res) => {
            if (res.status === 201) {
              // 부모 창에 메시지 전송
              if (window.opener && !window.opener.closed) {
                window.opener.refreshList?.();
              }
              //팝업창 닫기
              window.close();
            }
          })
          .catch((err) => {
            console.log(err);
          });
  };

  useEffect(() => {
    return () => {
      setNewUser(user as TUser);
    };
  }, []);

  return (
    <div>
      <h3>유저 {paramsObj.id ? "수정" : "등록"} 팝업창</h3>
      <hr />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          width: "100%",
          height: "450px",
          alignItems: "center",
          gap: 10,
          justifyItems: "flex-start",
        }}
      >
        {userFields.map((item) => (
          <Stack
            flexDirection={"row"}
            gap={1}
            key={item}
            justifyContent={"flex-start"}
          >
            <label htmlFor={"item"} style={{ width: "100px" }}>
              {item}
            </label>
            <TextField
              name={item}
              label={item}
              value={NewUser[item]}
              onChange={handleOnchange}
              type={item === "password" ? "password" : "text"}
              onKeyDown={(e) => {
                if (item === "birthday" && e.key === "Enter") {
                  handleCreateUser();
                }
              }}
            />
          </Stack>
        ))}
      </div>

      <Stack flexDirection={"row"} gap={1} justifyContent={"flex-end"}>
        <Button variant="contained" onClick={handleCreateUser}>
          {paramsObj.id ? "수정" : "등록"}
        </Button>
        <Button variant="outlined" onClick={() => window.close()}>
          닫기
        </Button>
      </Stack>
    </div>
  );
}
