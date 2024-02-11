import { useAuthContext } from "../contexts/AuthContext";
import { Footer, Header, LogoutButton } from "../components";
import { Sider } from "../pages";
import { Container } from "@mui/material";

const AppLayout = () => {
  const { me } = useAuthContext();

  if (!me) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header />
      <Container>
        <Sider />
        <Container
          style={{
            backgroundColor: "red",
          }}
        >
          Content
        </Container>
      </Container>
      <Footer />
      <LogoutButton />
    </Container>
  );
};
export default AppLayout;
