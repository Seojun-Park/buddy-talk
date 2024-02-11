import { Stack } from "@mui/material";
import { LogoutButton } from ".";
import { theme } from "../theme";

export const Footer = () => {
  return (
    <Stack
      sx={{
        padding: "20px 0px",
        borderTop: `1px solid ${theme.dark}`,
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <LogoutButton />
    </Stack>
  );
};
