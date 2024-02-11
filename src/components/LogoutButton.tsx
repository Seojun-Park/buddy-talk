import { Button } from "antd";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const { setCode, setIsLoggedIn, setMe } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    // @ts-expect-error no-type-existed
    Kakao.Auth.logout().then(() => {
      setCode(undefined);
      setIsLoggedIn(false);
      setMe(undefined);
      navigate("/");
    });
    setLoading(false);
  };

  return (
    <Button disabled={loading} onClick={handleLogout}>
      Logout
    </Button>
  );
};
