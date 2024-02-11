import { Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { TextBox } from "../components";

export const Content: FC<PropsWithChildren> = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      sx={{
        width: "100%",
      }}
    >
      <Stack
        sx={{
          padding: "10px 20px",
        }}
      >
        Content
      </Stack>
      <TextBox />
    </Stack>
  );
};
