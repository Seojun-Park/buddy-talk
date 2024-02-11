import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { theme } from "../theme";

export const Sider = () => {
  const { isLoggedIn } = useAuthContext();
  const [friends, setFriends] = useState<Kakao.API.ApiResponse[]>();

  useEffect(() => {
    if (isLoggedIn) {
      Kakao.API.request({
        url: "/v1/api/talk/friends",
      })
        .then((res) => {
          setFriends(res.elements as Kakao.API.ApiResponse[]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLoggedIn]);

  return (
    <Box
      sx={{
        width: "25%",
        borderRight: `1px solid ${theme.dark}`,
      }}
    >
      {typeof friends === "undefined" ? (
        <Typography>No friends</Typography>
      ) : (
        <List
          sx={{
            overflow: "scroll",
          }}
        >
          {friends.map((f, i) => {
            console.log(f);
            return (
              <ListItem key={i}>
                <ListItemButton>
                  <Avatar
                    src={f.profile_thumbnail_image}
                    sx={{
                      width: 24,
                      height: 24,
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ marginLeft: "10px" }}>
                    {f.profile_nickname}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};
