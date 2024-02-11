import {
  Button,
  ButtonProps,
  FormControl,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { useState } from "react";
import { theme } from "../theme";
import { useSearchParams } from "react-router-dom";

export const TextBox = () => {
  const [value, setValue] = useState<string>("");
  const [searchParams] = useSearchParams();

  const sendMessageAction = () => {
    const id = searchParams.get("id");
    Kakao.API.request({
      url: "/v1/api/talk/friends/message/default/send",
      data: {
        receiver_uuids: [id],
        template_object: {
          object_type: "text",
          text: value,
          link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobile_web_url: import.meta.env.VITE_REDIRECT_URL,
            web_url: import.meta.env.VITE_REDIRECT_URL,
          },
        },
      },
    });
  };

  const handleChange: OutlinedInputProps["onChange"] = (e) => {
    if (e.target.value === "") {
      return;
    }
    if (e.target.value.length > 200) {
      setValue(e.target.value.slice(0, 200));
    }
    setValue(e.target.value);
  };

  const handleOnKeyDown: OutlinedInputProps["onKeyDown"] = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessageAction();
      setValue("");
    }
  };

  const handleClick: ButtonProps["onClick"] = (e) => {
    e.preventDefault();
    sendMessageAction();
    setValue("");
  };

  return (
    <FormControl fullWidth variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        value={value}
        multiline
        minRows={3}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        endAdornment={
          <InputAdornment position="end">
            <Button
              sx={{
                backgroundColor: theme.dark,
                color: "white",
              }}
              onClick={handleClick}
            >
              Send
            </Button>
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "weight",
        }}
      />
    </FormControl>
  );
};
