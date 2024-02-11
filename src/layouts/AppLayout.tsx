import { useAuthContext } from "../contexts/AuthContext";
import { Footer, Header } from "../components";
import { Content, Sider } from "../pages";
import { Stack } from "@mui/material";
import { theme } from "../theme";

const AppLayout = () => {
  const { me } = useAuthContext();

  if (!me) {
    return <div>Loading...</div>;
  }

  return (
    <Stack
      sx={{
        height: "100dvh",
        width: "100vw",
        backgroundColor: theme.light,
      }}
    >
      <Header />
      <Stack
        direction={"row"}
        sx={{
          height: "80%",
        }}
      >
        <Sider />
        <Content />
      </Stack>
      <Footer />
    </Stack>
  );
};
export default AppLayout;
