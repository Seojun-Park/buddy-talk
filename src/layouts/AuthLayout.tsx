import logo from "../assets/kakao_login.png";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Box, Stack, Typography } from "@mui/material";

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
    <Stack>
      <Typography>Buddy-Talk</Typography>
      <Typography>내가 필요해서 만든 웹 카톡</Typography>
      <Box
        component={"img"}
        srcSet={logo}
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
      />
    </Stack>
  );
};

export default AuthLayout;
