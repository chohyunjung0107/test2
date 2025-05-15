import { useEffect, useState } from "react";

import { getUserList } from "../api/Service";
import type { TUser, TSearchParams } from "../type/TUser";

export function useGetUserList(inputValue: TSearchParams) {
  //   const [todoList, setTodoList] = useState<ToDo[]>([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   const fetchTodoList = async () => {
  //     try {
  //       const response = await getTodoList();
  //       response.data.data && setTodoList([...response.data.data]);
  //     } catch (err: any) {
  //       setError(err);
  //       console.error("Error fetching todo list:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchTodoList();
  //   }, []);

  //   return { todoList, loading, error, refetch: fetchTodoList };

  const [userList, setUserList] = useState<TUser[]>([]);

  const getPageUserList = async (inputValue: TSearchParams) => {
    await getUserList({
      id: inputValue.id,
      name: inputValue.name,
      address: inputValue.address,
      tel: inputValue.tel,
    })
      .then((res) => {
        res.status === 200 && setUserList(res.data);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  useEffect(() => {
    getPageUserList(inputValue as TSearchParams);
  }, []);

  return { userList, setUserList, refresh: getPageUserList };
}
