import { Stack, Typography } from "@mui/material";
import { theme } from "../theme";

export const Header = () => {
  return (
    <Stack
      sx={{
        height: "60px",
        padding: "0 30px",
        borderBottom: `1px solid ${theme.medium}`,
      }}
      direction={"row"}
      alignItems={"center"}
    >
      <Typography variant="h4" color={theme.dark}>
        Buddy-talk
      </Typography>
    </Stack>
  );
};
