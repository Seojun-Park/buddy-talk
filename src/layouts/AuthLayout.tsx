import logo from "../assets/kakao_login.png";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";

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
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "3rem",
          borderRadius: "4px",
        }}
      >
        <Stack spacing={3} alignItems={"center"}>
          <Typography variant="h3">Buddy-Talk</Typography>
          <Typography>내가 필요해서 만든 웹 카톡</Typography>
          <Box
            component={"img"}
            srcSet={logo}
            onClick={handleLogin}
            style={{ cursor: "pointer" }}
          />
        </Stack>
      </Paper>
    </Container>
  );
};

export default AuthLayout;
