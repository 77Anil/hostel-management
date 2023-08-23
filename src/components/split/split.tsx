import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import { ReactElement } from "react";

interface SplitProps {
  children?: ReactElement | ReactElement[];
}

export default function Split({ children }: SplitProps): ReactElement {
  children = children as ReactElement[];
  const [left, right] = children;

  // getting breakpoints
  const theme: Theme = useTheme();
  const mobileView: boolean = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container>
      <Grid item md={6}>
        {left}
      </Grid>
      {mobileView ? null : (
        <Grid item md={6}>
          {right}
        </Grid>
      )}
    </Grid>
  );
}
