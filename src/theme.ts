import { createTheme } from "@mui/material";

export const theme = {
  background: "#F2AA52",
  subBackground: "##F2B544",
  dark: "#021373",
  medium: "#202D73",
  light: "#B4CED9",
};

export const themeOverrides = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.dark,
        },
      },
    },
  },
});
