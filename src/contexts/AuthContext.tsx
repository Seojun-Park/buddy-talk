import axios from "axios";
import {
  FC,
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
} from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  me: Kakao.API.ApiResponse | undefined;
  token: string | undefined;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setCode: Dispatch<SetStateAction<string | undefined>>;
  setMe: Dispatch<SetStateAction<Kakao.API.ApiResponse | undefined>>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [code, setCode] = useState<string>();
  const [token, setToken] = useState<string>();
  const [me, setMe] = useState<Kakao.API.ApiResponse>();

  useEffect(() => {
    if (Kakao.Auth.getAccessToken()) {
      setToken(Kakao.Auth.getAccessToken());
      setIsLoggedIn(true);
    }
    if (code && !Kakao.Auth.getAccessToken()) {
      const bodyData = {
        grant_type: "authorization_code",
        client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
        code,
        client_secret: import.meta.env.VITE_KAKAO_CLIENT_SECRET,
      };
      const queryStringBody = Object.keys(bodyData)
        // @ts-expect-error no-typed
        .map((k) => encodeURIComponent(k) + "=" + encodeURI(bodyData[k]))
        .join("&");
      axios({
        url: "https://kauth.kakao.com/oauth/token",
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: queryStringBody,
      }).then(({ data }) => {
        const { access_token } = data;
        Kakao.Auth.setAccessToken(access_token);
        setToken(access_token);
        setIsLoggedIn(true);
      });
    }
  }, [code, isLoggedIn]);

  useEffect(() => {
    if (token) {
      Kakao.API.request({
        url: "/v2/user/me",
      }).then((res) => {
        setMe(res);
      });
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      me,
      token,
      setIsLoggedIn,
      setCode,
      setMe,
    }),
    [isLoggedIn, setIsLoggedIn, me, token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextProps => {
  const appContext = useContext(AuthContext);
  if (!appContext) {
    throw new Error("AuthContext is not initialized");
  }
  return appContext;
};

export default null;
