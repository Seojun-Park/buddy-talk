import { useAuthContext } from "./contexts/AuthContext";
import loadable from "@loadable/component";

const AppLayout = loadable(() => import("./layouts/AppLayout"));
const AuthLayout = loadable(() => import("./layouts/AuthLayout"));

const App = () => {
  const { isLoggedIn } = useAuthContext();
  if (isLoggedIn) {
    return <AppLayout />;
  }
  return <AuthLayout />;
};

export default App;
