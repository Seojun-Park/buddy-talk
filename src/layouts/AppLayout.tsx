import { useAuthContext } from "../contexts/AuthContext";
import { Footer, Header, LogoutButton } from "../components";
import { Sider } from "../pages";
import { Container, Stack } from "@mui/material";

const AppLayout = () => {
  const { me } = useAuthContext();

  if (!me) {
    return <div>Loading...</div>;
  }

  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <Stack direction={"row"}>
        <Sider />
        <Container
          style={{
            backgroundColor: "red",
          }}
        >
          Content
        </Container>
      </Stack>
      <Footer />
      <LogoutButton />
    </Stack>
  );
};
export default AppLayout;
