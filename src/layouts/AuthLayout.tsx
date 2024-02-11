import { Flex, Image } from "antd";
import logo from "../assets/kakao_login.png";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const AuthLayout = () => {
  const [searchParams] = useSearchParams();
  const { setCode } = useAuthContext();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      setCode(code);
    }
  }, [searchParams]);

  const handleLogin = async () => {
    try {
      Promise.all([
        Kakao.Auth.authorize({
          redirectUri: import.meta.env.VITE_REDIRECT_URL,
          scope:
            "profile_nickname, profile_image, friends, account_email, talk_message",
        }),
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex
      style={{
        padding: "10rem",
      }}
      justify="center"
      align="center"
    >
      <Image
        src={logo}
        preview={false}
        style={{ cursor: "pointer" }}
        onClick={handleLogin}
      />
    </Flex>
  );
};

export default AuthLayout;
