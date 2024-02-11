import { Stack } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

export const Sider = () => {
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (isLoggedIn) {
      Kakao.API.request({
        url: "/v1/api/talk/friends",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLoggedIn]);

  return (
    <Stack
      sx={{
        width: "25%",
      }}
    >
      Sider
    </Stack>
  );
};
