import { TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

export const TextBox = () => {
  const [value, setValue] = useState<string>("");

  const handleChange: TextFieldProps["onChange"] = (e) => {
    if (e.target.value === "") {
      return;
    }
    setValue(e.target.value);
  };

  return <TextField value={value} onChange={handleChange} fullWidth />;
};
