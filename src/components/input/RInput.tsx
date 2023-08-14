import { TextField } from "@mui/material";

interface Props {
  label: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export default function RInput(props: Props) {
  const { label, helperText, required, fullWidth } = props;
  return (
    <TextField
      id="outlined-basic"
      helperText={helperText}
      label={label}
      fullWidth={fullWidth}
      required={required}
      variant="outlined"
    />
  );
}
