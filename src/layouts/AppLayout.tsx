import { Layout } from "antd";
import { useAuthContext } from "../contexts/AuthContext";
import { LogoutButton } from "../components";
import { Sider } from "../pages";

const AppLayout = () => {
  const { me } = useAuthContext();

  if (!me) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: "green",
        }}
      >
        Header
      </Layout.Header>
      <Layout>
        <Sider />
        <Layout.Content
          style={{
            backgroundColor: "red",
          }}
        >
          Content
        </Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
      <LogoutButton />
    </Layout>
  );
};
export default AppLayout;
