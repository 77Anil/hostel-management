import { TextField, Typography } from "@mui/material";
import React from "react";
import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  helperText?: string;
  fullWidth?: boolean;
  error?: { isError: FieldError | undefined; message: string | undefined };
}

function RInput(props: Props, ref: React.Ref<any> | undefined) {
  const { label, helperText, fullWidth, error, ...rest } = props;

  return (
    <>
      <TextField
        id="outlined-basic"
        inputRef={ref}
        helperText={helperText}
        label={label}
        fullWidth={fullWidth}
        variant="outlined"
        {...rest}
      />

      {error?.isError ? (
        <Typography color="red">{error?.message}</Typography>
      ) : null}
    </>
  );
}

export default React.forwardRef<HTMLInputElement, Props>(RInput);
