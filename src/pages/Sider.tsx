import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import { Link } from "react-router-dom";

export const Sider = () => {
  const { isLoggedIn } = useAuthContext();
  const [friends, setFriends] = useState<Kakao.API.ApiResponse[]>();
  const themehook = useTheme();
  const mobile = useMediaQuery(themehook.breakpoints.down("sm"));

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
        minWidth: "100px",
        width: mobile ? "10%" : "25%",
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
            return (
              <ListItem key={i}>
                <Link to={`/?id=${f.uuid}`}>
                  <ListItemButton>
                    {!mobile && (
                      <Avatar
                        src={f.profile_thumbnail_image}
                        sx={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    )}
                    <Typography
                      variant={mobile ? "caption" : "subtitle2"}
                      sx={{ marginLeft: mobile ? "0px" : "10px" }}
                    >
                      {f.profile_nickname}
                    </Typography>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};
